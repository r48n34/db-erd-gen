import { Group, Modal, NavLink } from "@mantine/core";
import { IconDatabaseExport, IconFileExport } from '@tabler/icons';

import useTableStore from "../../store/zustandStore";

import { CodeHighlightTabs } from '@mantine/code-highlight';
import { useState } from "react";
import ExportJsonFormat from "./ExportJsonFormat";

function ExportJsonFormatView(){

    const [ opened, setOpened ] = useState<boolean>(false);
    const [ jsonContent, setJsonContent ] = useState<string>("");
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Modal
            size="85%"
            opened={opened}
            onClose={() => setOpened(false)}
            title="JSON Code"
        >
            <Group justify="flex-end" mb={14}>
                <ExportJsonFormat/>
            </Group>

            <CodeHighlightTabs 
                withExpandButton
                defaultExpanded={false}
                code={[
                    { fileName: 'databaseScheme.json', code: jsonContent, language: 'json', icon: <IconDatabaseExport size={16}/> },
                ]}
            />
        </Modal>


        <NavLink
            label="Export json"
            leftSection={<IconFileExport size={16} stroke={1.5} />}
            onClick={ () => {
                setJsonContent(JSON.stringify(tableArray, null, "\t"));
                setOpened(true);
            }}
        />
        </>
    )
}
    
export default ExportJsonFormatView
