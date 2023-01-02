import { Group } from "@mantine/core";

import AddTableBtn from "./AddTableBtn";

type LeftTopBarProps = {
    data?: string;
}
    
function LeftTopBar({ data }: LeftTopBarProps){
    return (
        <>
        <Group position="right" mt={8} mr={6}>

           <AddTableBtn/>

        </Group>
        </>
    )
}
    
export default LeftTopBar
