import { ActionIcon, Group, Modal, NavLink, Tooltip } from "@mantine/core";
import useTableStore from "../../store/zustandStore";
import { IconDownload } from '@tabler/icons';

import { IconDatabaseImport } from '@tabler/icons';
import { useState } from "react";
import { Prism } from '@mantine/prism';

// import { tableDataToPostgresScheme } from "../../utilis/dataBase/tableDataToPostgres";
// import TableDataToPostgresBtn from "./TableDataToPostgresBtn";
import { Table } from "../../interface/inputData";
import { toDownloadFile } from "../../utilis/dataBase/downloadFile";

interface TableDataToBtnViewProps {
    types: string // "Postgres"
    downloadFileName: string
    schemeFunc: (tables: Table[]) => string
}

function TableDataToBtnView({ types, schemeFunc }:TableDataToBtnViewProps){
    
    const [ opened, setOpened ] = useState<boolean>(false);
    const [ sqlContent, setSqlContent ] = useState<string>("");
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Modal
            size="85%"
            opened={opened}
            onClose={() => setOpened(false)}
            title={types + " Code"}
        >
            <Group position="right" mb={14}>
                <Tooltip label="Download SQL">
                <ActionIcon
                    onClick={ () => {
                        const str = schemeFunc(tableArray)
                        const textString = `data:text/json;chatset=utf-8,${encodeURIComponent(str)}`;

                        toDownloadFile(textString, "tables.sql")
                    }}
                >
                    <IconDownload size={18} />
                </ActionIcon>
                </Tooltip>
            </Group>

            <Prism language="sql">
                {sqlContent}
            </Prism>
        </Modal>

        <NavLink 
            label={"Generate " + types}
            onClick={ () => {
                const str = schemeFunc(tableArray);
                setSqlContent(str);
                setOpened(true);
            }}
            icon={<IconDatabaseImport size={16} stroke={1.5} />}
     
        />  
        </>
    )
}
    
export default TableDataToBtnView