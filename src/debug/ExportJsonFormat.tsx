import { Button } from "@mantine/core";
import useTableStore from "../store/zustandStore";
import { exportJsonFormat } from "../utilis/dataBase/jsonFormat";
    
function ExportJsonFormat(){

    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Button onClick={ () => exportJsonFormat(tableArray) }>
            Export json string
        </Button>
        </>
    )
}
    
export default ExportJsonFormat
