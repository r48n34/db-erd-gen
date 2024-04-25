import { Badge, Group } from "@mantine/core";
import useTableStore from "../../store/zustandStore";
import TableForm from "./components/TableForm";

function LeftTopBar(){

    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Group justify="space-between" mt={12} mr={6}>
            <Badge ml={12} color="green">
                Table List
            </Badge>
            <TableForm mode={"create"} allTableData={tableArray}/>
        </Group>
        </>
    )
}
    
export default LeftTopBar
