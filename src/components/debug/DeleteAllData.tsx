import { Menu, NavLink, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';

import { IconFile, IconTableExport } from '@tabler/icons-react';
import { commonSuccessActions } from '../../utilis/notificationUtilis';

import useTableStore from "../../store/zustandStore";

interface DeleteAllDataProps {
    showsFormat: "Menu" | "NavLink"
}

function DeleteAllData({ showsFormat = "NavLink" }: DeleteAllDataProps) {

    const deleteAllRecord = useTableStore((state) => state.deleteAllRecord);

    const openDeleteAllDataModal = () => openConfirmModal({
        title: 'Please confirm your action',
        children: (
            <Text size="sm">
                All current tables will be deleted. Are you sure to do this?
            </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => console.log(),
        onConfirm: () => {
            deleteAllRecord()
            commonSuccessActions();
        },
    });

    return (
        <>


            {
                showsFormat === "NavLink" && (
                    <NavLink
                        label="Delete all tables"
                        variant="light"
                        color="red"
                        active
                        leftSection={<IconTableExport size={16} stroke={1.5} />}
                        onClick={() => openDeleteAllDataModal()}
                    />
                )
            }

            {
                showsFormat === "Menu" && (
                    <Menu.Item
                        leftSection={<IconFile size={16} stroke={1.5} />}
                        onClick={() => openDeleteAllDataModal()}
                    >
                        New File
                    </Menu.Item>
                )
            }
        </>
    )
}

export default DeleteAllData
