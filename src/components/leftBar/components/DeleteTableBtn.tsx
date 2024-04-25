import { IconTrash } from '@tabler/icons';
import { openConfirmModal } from '@mantine/modals';
import { ActionIcon, Tooltip, Text } from "@mantine/core";

import useTableStore from "../../../store/zustandStore";

type DeleteTableBtnProps = {
    tableName: string;
}
    
function DeleteTableBtn({ tableName }: DeleteTableBtnProps){
    
    const deleteOneTableStore = useTableStore((state) => state.deleteOneTable);

    const openModal = () => openConfirmModal({
        title: 'Please confirm your action',
        children: (
          <Text size="sm">
            This action is so important that you are required to confirm it with a modal. Please click
            one of these buttons to proceed.
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => deleteOneTableStore(tableName),
    });

    return (
        <>
        <Tooltip label={ "Delete " + tableName }>
            <ActionIcon onClick={ () => openModal() } variant="light">
                <IconTrash size={14}/>
            </ActionIcon>
        </Tooltip>
        </>
    )
}
    
export default DeleteTableBtn
