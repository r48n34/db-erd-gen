import { ActionIcon, Group, Modal, NavLink, Tooltip } from "@mantine/core";
import useTableStore from "../../store/zustandStore";
import { IconDownload } from '@tabler/icons';

import { IconDatabaseImport } from '@tabler/icons';
import { useState } from "react";
import { CodeHighlightTabs, CodeHighlightTabsCode } from '@mantine/code-highlight';

import { Table } from "../../interface/inputData";
import { toDownloadFile } from "../../utilis/dataBase/downloadFile";

type DBFunc = (tables: Table[], types?: "postgresql" | "mySQL" | "sqlite" | "") => string

interface TableDataToBtnViewProps {
    title: string
    generatedDataList: {
        title: string
        types?: "postgresql" | "mySQL" | "sqlite" | ""
        downloadFileName: string
        schemeFunc: DBFunc
        codeLanguages: string
        icon?: JSX.Element
    }[]
}

function TableDataToBtnView({ 
    title,
    generatedDataList = [],
}:TableDataToBtnViewProps){
    
    const [ opened, setOpened ] = useState<boolean>(false);
    const [ contentList, setContentList ] = useState<CodeHighlightTabsCode[]>([]);
    const tableArray = useTableStore((state) => state.tableArray);
    
    return (
        <>
        <Modal
            size="85%"
            opened={opened}
            onClose={() => setOpened(false)}
            title={title + " Code"}
        >
            <Group justify="flex-end" mb={14}>
                <Tooltip label="Download SQL">
                <ActionIcon
                    variant="light"
                    onClick={ () => {
                        generatedDataList.forEach( v => {
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
                code={contentList} 
            />
        </Modal>

        <NavLink 
            label={"Generate " + title}
            onClick={ () => {
                setContentList(generatedDataList.map( v => 
                    ({
                        fileName: v.title,
                        code: v.schemeFunc(tableArray, v.types),
                        language: v.codeLanguages,
                        icon: v.icon
                    }))
                )
                setOpened(true);
            }}
            leftSection={<IconDatabaseImport size={16} stroke={1.5} />}
        />  
        </>
    )
}
    
export default TableDataToBtnView
