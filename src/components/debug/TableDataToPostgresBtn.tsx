import { NavLink } from "@mantine/core";
import useTableStore from "../../store/zustandStore";

import { IconDatabaseImport } from '@tabler/icons';

import { toDownloadFile } from "../../utilis/dataBase/downloadFile";
import { tableDataToPostgresScheme } from "../../utilis/dataBase/tableDataToPostgres";

function TableDataToPostgresBtn(){
    
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <NavLink 
            label="Generate Postgres (Download)" 
            onClick={ () => {
                const str = tableDataToPostgresScheme(tableArray)
                const textString = `data:text/json;chatset=utf-8,${encodeURIComponent(str)}`;

                toDownloadFile(textString, "tables.sql")
            }}
            icon={<IconDatabaseImport size={16} stroke={1.5} />}
            // rightSection={<IconChevronRight size={12} stroke={1.5} />}
        />  
        </>
    )
}
    
export default TableDataToPostgresBtn
