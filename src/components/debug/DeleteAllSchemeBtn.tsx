import { NavLink, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconTrashOff } from "@tabler/icons";

import useTemplateStoreStore from "../../store/templateStore";
import { commonSuccessActions } from "../../utilis/notificationUtilis";

function DeleteAllSchemeBtn(){

    const deleteAllTemplate = useTemplateStoreStore((state) => state.deleteAllTemplate);

    const openModal = () => openConfirmModal({
        title: 'Please confirm your action',
        children: (
          <Text size="sm">
            This action is so important that you are required to confirm it with a modal. Please click
            one of these buttons to proceed.
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => console.log(),
        onConfirm: () => {
            deleteAllTemplate()
            commonSuccessActions();
        },
    });

    return (
         <>
        <NavLink 
            label="Delete all scheme"
            variant="light"
            color="red"
            active
            leftSection={<IconTrashOff size={16} stroke={1.5} />}
            onClick={ () => openModal() }
        />
        </>
    )
}
    
export default DeleteAllSchemeBtn
