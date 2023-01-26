import { Button } from "@mantine/core";
import useTableStore from "../../store/zustandStore";
import { tableDataToPostgresScheme } from "../../utilis/dataBase/tableDataToPostgres";

type TableDataToPostgresBtnProps = {
    data?: any;
}
    
function TableDataToPostgresBtn({ data }: TableDataToPostgresBtnProps){
    
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Button onClick={ () => tableDataToPostgresScheme(tableArray) }>GEN</Button>
        </>
    )
}
    
export default TableDataToPostgresBtn
