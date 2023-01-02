import { Tooltip, ActionIcon } from "@mantine/core";
import { IconSquarePlus } from '@tabler/icons';

type AddTableBtnProps = {
    data?: string;
}
    
function AddTableBtn({ data }: AddTableBtnProps){
    return (
        <>
        <Tooltip label="Add table">
        <ActionIcon>
            <IconSquarePlus size={36} />
        </ActionIcon>
        </Tooltip>
        </>
    )
}
    
export default AddTableBtn
