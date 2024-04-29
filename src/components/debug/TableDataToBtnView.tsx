import { Fragment } from 'react';

import { ActionIcon, Group, Modal, NavLink, Tooltip, Menu } from "@mantine/core";
import useTableStore from "../../store/zustandStore";
import { IconDownload } from '@tabler/icons';

import { IconDatabaseImport } from '@tabler/icons';
import { CodeHighlightTabs, CodeHighlightTabsCode } from '@mantine/code-highlight';

import { Table } from "../../interface/inputData";
import { toDownloadFile } from "../../utilis/dataBase/downloadFile";
import { modals } from '@mantine/modals';

type DBFunc = (tables: Table[], types?: "postgresql" | "mySQL" | "sqlite" | "") => string

type GeneratedData = {
    title: string
    types?: "postgresql" | "mySQL" | "sqlite" | ""
    downloadFileName: string
    schemeFunc: DBFunc
    codeLanguages: string
    icon?: JSX.Element
}

interface TableDataToBtnViewProps {
    showsFormat: "Menu" | "NavLink"
    title: string
    generatedDataList: GeneratedData[]
}

function TableDataToBtnView({
    showsFormat = "NavLink",
    title,
    generatedDataList = [],
}: TableDataToBtnViewProps) {

    const tableArray = useTableStore((state) => state.tableArray);

    const openGenerateModal = (data: GeneratedData[]) => modals.open({
        title: title + " Code",
        size: "85%",
        children: (
            <>
                <Group justify="flex-end" mb={14}>
                    <Tooltip label="Download SQL">
                        <ActionIcon
                            variant="light"
                            onClick={() => {
                                data.forEach(v => {
                                    const str = v.schemeFunc(tableArray)
                                    const textString = `data:text/json;chatset=utf-8,${encodeURIComponent(str)}`;

                                    toDownloadFile(textString, v.downloadFileName)
                                })
                            }}
                        >
                            <IconDownload size={18} />
                        </ActionIcon>
                    </Tooltip>
                </Group>

                <CodeHighlightTabs
                    withExpandButton
                    defaultExpanded
                    code={data.map(v =>
                        ({
                            fileName: v.title,
                            code: v.schemeFunc(tableArray, v.types),
                            language: v.codeLanguages,
                            icon: v.icon
                        }))
                    }
                />
            </>
        ),
    });

    return (
        <Fragment>
            {showsFormat === "NavLink"
                ? (<NavLink
                    label={"Generate " + title}
                    onClick={() => {
                        openGenerateModal(generatedDataList);
                    }}
                    leftSection={<IconDatabaseImport size={16} stroke={1.5} />}
                />)
                : (
                    <Menu.Item
                        onClick={() => {
                            openGenerateModal(generatedDataList);
                        }}
                        leftSection={<IconDatabaseImport size={16} stroke={1.5} />}
                    >
                        { title }
                    </Menu.Item>
                )

            }


        </Fragment>
    )
}

export default TableDataToBtnView
