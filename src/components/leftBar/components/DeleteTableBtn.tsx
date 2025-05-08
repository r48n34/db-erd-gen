import { IconTrash } from '@tabler/icons-react';
import { openConfirmModal } from '@mantine/modals';
import { ActionIcon, Tooltip, Text } from "@mantine/core";

import useTableStore from "../../../store/zustandStore";
import { commonSuccessActions } from '../../../utilis/notificationUtilis';

type DeleteTableBtnProps = {
    tableName: string;
}
    
function DeleteTableBtn({ tableName }: DeleteTableBtnProps){
    
    const deleteOneTableStore = useTableStore((state) => state.deleteOneTable);

    const openModal = () => openConfirmModal({
        title: 'Please confirm your action',
        children: (
          <Text size="sm">
            This action can not be reversed. Are you sure to delete this table?
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => {
            deleteOneTableStore(tableName);
            commonSuccessActions();
        },
    });

    return (
        <>
        <Tooltip label={ "Delete " + tableName + " table" }>
            <ActionIcon onClick={ () => openModal() } variant="light" color="red" size="md">
                <IconTrash size={14}/>
            </ActionIcon>
        </Tooltip>
        </>
    )
}
    
export default DeleteTableBtn
