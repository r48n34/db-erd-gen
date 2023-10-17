import { Group, Modal, NavLink } from "@mantine/core";
import useTableStore from "../../../store/zustandStore";

import { IconFileDatabase } from '@tabler/icons';
import { Prism } from '@mantine/prism';

// import { toDownloadFile } from "../../utilis/dataBase/downloadFile";
import { tableDataToKnexScheme } from "../../../utilis/dataBase/tableDataToKnex";
import { useState } from "react";
import TableDataToKnexBtn from "./TableDataToKnexBtn";

function TableDataToKnexBtnView(){

    const tableArray = useTableStore((state) => state.tableArray);

    const [ opened, setOpened ] = useState<boolean>(false);
    const [ knexContent, setKnexContent ] = useState<string>("");

    return (
        <>
        <Modal
            size="85%"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Postgres Code"
        >
            <Group position="right" mb={14}>
                <TableDataToKnexBtn/>
            </Group>

            <Prism language="typescript">
                {knexContent}
            </Prism>
        </Modal>

        <NavLink 
            label="Generate Knex" 
            onClick={ () => {
                const str = tableDataToKnexScheme(tableArray)
                setKnexContent(str);
                setOpened(true);
            }}
            icon={<IconFileDatabase size={16} stroke={1.5} />}
        />  
        </>
    )
}
    
export default TableDataToKnexBtnView
