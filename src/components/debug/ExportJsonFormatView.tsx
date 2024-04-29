import { Group, Menu, NavLink } from "@mantine/core";
import { IconDatabaseExport, IconFileExport } from '@tabler/icons';

import useTableStore from "../../store/zustandStore";

import { CodeHighlightTabs } from '@mantine/code-highlight';
import ExportJsonFormat from "./ExportJsonFormat";
import { modals } from "@mantine/modals";

interface ExportJsonFormatViewProps {
    showsFormat: "Menu" | "NavLink"
}

function ExportJsonFormatView({ showsFormat = "NavLink" }: ExportJsonFormatViewProps){

    const tableArray = useTableStore((state) => state.tableArray);

    const opeJsonFormatViewModal = (jsonData: string) => modals.open({
        title:"JSON Code",
        size: "85%",
        children: (
            <>
                <Group justify="flex-end" mb={14}>
                <ExportJsonFormat/>
            </Group>

            <CodeHighlightTabs 
                withExpandButton
                defaultExpanded={false}
                code={[
                    { fileName: 'databaseScheme.json', code: jsonData, language: 'json', icon: <IconDatabaseExport size={16}/> },
                ]}
            />
            </>
        ),
    });

    return (
        <>
        { showsFormat === "NavLink" && (
            <NavLink
                label="Export json"
                leftSection={<IconFileExport size={16} stroke={1.5} />}
                onClick={ () => {
                    opeJsonFormatViewModal(JSON.stringify(tableArray, null, "\t"));
                }}
            />
        )}

        { showsFormat === "Menu" && (
            <Menu.Item
                leftSection={<IconFileExport size={16} stroke={1.5} />}
                onClick={ () => {
                    opeJsonFormatViewModal(JSON.stringify(tableArray, null, "\t"));
                }}
            >
                Export json
            </Menu.Item>
        )}
        </>
    )
}
    
export default ExportJsonFormatView
