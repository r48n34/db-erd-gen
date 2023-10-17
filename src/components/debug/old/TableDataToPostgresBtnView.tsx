import { Group, Modal, NavLink } from "@mantine/core";
import useTableStore from "../../../store/zustandStore";

import { IconDatabaseImport } from '@tabler/icons';
import { tableDataToPostgresScheme } from "../../../utilis/dataBase/tableDataToPostgres";
import { useState } from "react";
import { Prism } from '@mantine/prism';
import TableDataToPostgresBtn from "./TableDataToPostgresBtn";

function TableDataToPostgresBtnView(){
    
    const [ opened, setOpened ] = useState<boolean>(false);
    const [ sqlContent, setSqlContent ] = useState<string>("");
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Modal
            size="85%"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Postgres Code"
        >
            <Group position="right" mb={14}>
                <TableDataToPostgresBtn/>
            </Group>

            <Prism language="sql">
                {sqlContent}
            </Prism>
        </Modal>

        <NavLink 
            label="Generate Postgres" 
            onClick={ () => {
                const str = tableDataToPostgresScheme(tableArray);
                setSqlContent(str);
                setOpened(true);
            }}
            icon={<IconDatabaseImport size={16} stroke={1.5} />}
     
        />  
        </>
    )
}
    
export default TableDataToPostgresBtnView
