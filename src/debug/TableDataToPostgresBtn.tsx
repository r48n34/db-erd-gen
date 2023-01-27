import { NavLink } from "@mantine/core";
import useTableStore from "../store/zustandStore";
import { tableDataToPostgresScheme } from "../utilis/dataBase/tableDataToPostgres";
import { IconHome2 } from '@tabler/icons';

function TableDataToPostgresBtn(){
    
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <NavLink 
            label="Gen postgres string" 
            onClick={ () => tableDataToPostgresScheme(tableArray) }
            icon={<IconHome2 size={16} stroke={1.5} />}
        />  
        </>
    )
}
    
export default TableDataToPostgresBtn
