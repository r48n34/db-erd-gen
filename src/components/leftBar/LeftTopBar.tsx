import { Badge, Group } from "@mantine/core";
import useTableStore from "../../store/zustandStore";
import TableForm from "./components/TableForm";

function LeftTopBar(){

    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Group position="apart" mt={8} mr={6}>
            <Badge ml={12}  color="green">Table List</Badge>
            <TableForm mode={"create"} allTableData={tableArray}/>
        </Group>
        </>
    )
}
    
export default LeftTopBar
