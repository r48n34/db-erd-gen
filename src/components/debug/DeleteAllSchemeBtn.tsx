import { Menu, NavLink, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconFile, IconTableOff } from '@tabler/icons-react';;

import useTemplateStoreStore from "../../store/templateStore";
import { commonSuccessActions } from "../../utilis/notificationUtilis";

interface DeleteAllSchemeBtnProps {
    showsFormat: "Menu" | "NavLink"
}

function DeleteAllSchemeBtn({ showsFormat = "NavLink" }: DeleteAllSchemeBtnProps) {

    const deleteAllTemplate = useTemplateStoreStore((state) => state.deleteAllTemplate);

    const openDeleteModal = () => openConfirmModal({
        title: 'New projects',
        children: (
            <Text size="sm">
                All Scheme will be deleted. Are you sure to do this?
            </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => {},
        onConfirm: () => {
            deleteAllTemplate()
            commonSuccessActions();
        },
    });

    return (
        <>
            {
                showsFormat === "NavLink" && (
                    <NavLink
                        label="Delete all schemes"
                        variant="light"
                        color="red"
                        active
                        leftSection={<IconTableOff size={16} stroke={1.5} />}
                        onClick={() => openDeleteModal()}
                    />
                )
            }

            {
                showsFormat === "Menu" && (
                    <Menu.Item
                        leftSection={<IconFile size={16} stroke={1.5} />}
                        onClick={() => openDeleteModal()}
                    >
                        Delete all scheme
                    </Menu.Item>
                )
            }
        </>
    )
}

export default DeleteAllSchemeBtn
