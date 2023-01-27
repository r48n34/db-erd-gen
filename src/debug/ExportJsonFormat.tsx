import { Button } from "@mantine/core";
import useTableStore from "../store/zustandStore";
import { exportJsonFormat } from "../utilis/dataBase/jsonFormat";
import { commonSuccessActions } from "../utilis/notificationUtilis";
    
function ExportJsonFormat(){

    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Button 
            onClick={ () => {
                exportJsonFormat(tableArray);
                commonSuccessActions();
            }}
        >
            Export current json string
        </Button>
        </>
    )
}
    
export default ExportJsonFormat
