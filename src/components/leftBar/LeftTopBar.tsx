import { Badge, Group } from "@mantine/core";
import { grandData } from "../../data/testInputData";
import TableForm from "./components/TableForm";

function LeftTopBar(){
    return (
        <>
        <Group position="apart" mt={8} mr={6}>
            <Badge ml={12}  color="green">Table List</Badge>
            <TableForm mode={"create"} allTableData={grandData}/>
        </Group>
        </>
    )
}
    
export default LeftTopBar
