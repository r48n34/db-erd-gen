import { Button } from "@mantine/core";
import useTableStore from "../store/zustandStore";
import { tableDataToPostgresScheme } from "../utilis/dataBase/tableDataToPostgres";
 
function TableDataToPostgresBtn(){
    
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Button onClick={ () => tableDataToPostgresScheme(tableArray) }>GEN</Button>
        </>
    )
}
    
export default TableDataToPostgresBtn
