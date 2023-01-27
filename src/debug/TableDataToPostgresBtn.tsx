import { NavLink } from "@mantine/core";
import useTableStore from "../store/zustandStore";
import { tableDataToPostgresScheme } from "../utilis/dataBase/tableDataToPostgres";
import { IconChevronRight, IconDatabaseImport } from '@tabler/icons';

function TableDataToPostgresBtn(){
    
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <NavLink 
            label="Generate Postgres" 
            onClick={ () => tableDataToPostgresScheme(tableArray) }
            icon={<IconDatabaseImport size={16} stroke={1.5} />}
            rightSection={<IconChevronRight size={12} stroke={1.5} />}
        />  
        </>
    )
}
    
export default TableDataToPostgresBtn
