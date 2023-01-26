import { Button } from "@mantine/core";
import useTableStore from "../store/zustandStore";
import { importJsonFormat } from "../utilis/dataBase/jsonFormat";

const importString = `[{"name":"users","columns":[{"name":"id","dataType":"serial","isPrimaryKey":true},{"name":"name","dataType":"varchar","isPrimaryKey":false}]},{"name":"yolo","columns":[{"name":"id","dataType":"serial","isPrimaryKey":true},{"name":"name","dataType":"integer","isPrimaryKey":false,"foreignTo":{"name":"users","column":"id"}}]}]`

function ImportJsonFormat(){

    const importTableObj = useTableStore((state) => state.importTableObj);

    function importStringToStore(){
        const result = importJsonFormat(importString);
        importTableObj(result);
    }

    return (
        <>
        <Button onClick={ () => importStringToStore() }>
            Import json string
        </Button>
        </>
    )
}
    
export default ImportJsonFormat
