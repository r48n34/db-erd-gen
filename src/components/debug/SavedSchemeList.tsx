import { ActionIcon, Grid, NavLink, Tooltip, Text, Modal } from "@mantine/core";
import { modals } from '@mantine/modals';

import { IconListDetails, IconCloudDownload, IconTrashOff, IconInfoCircle } from "@tabler/icons";

import useTemplateStoreStore from "../../store/templateStore";
import useTableStore from "../../store/zustandStore";
import { commonSuccessActions } from "../../utilis/notificationUtilis";
import { useDisclosure } from "@mantine/hooks";

interface SavedSchemeListProps{
    closeModal?: Function
}

function SavedSchemeList({ closeModal }:SavedSchemeListProps){

    const templateArray = useTemplateStoreStore((state) => state.templateArray);
    const deleteOneTemplate = useTemplateStoreStore((state) => state.deleteOneTemplate);

    const importTableObj = useTableStore((state) => state.importTableObj);

    const [opened, { open, close }] = useDisclosure(false);

    const openDeleteSchemeConfirmModal = (schemeName: string) => modals.openConfirmModal({
        title: 'Please confirm your action',
        children: (
          <Text size="sm">
            Are you sure to delete this scheme?
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => {},
        onConfirm: () => {
            deleteOneTemplate(schemeName);
            commonSuccessActions();
        },
    });

    return (
        <>

        <Modal opened={opened} onClose={close} title="Info Table">
            {/* Modal content */}
        </Modal>

        { templateArray.length === 0 && (
            <NavLink
                label="No saved scheme"
                leftSection={<IconListDetails size={16} stroke={1.5} />}
            />
        )}

        { templateArray.map( v => (
            <Grid>
                <Grid.Col span={9}>
                    <NavLink
                        label={v.name}
                        leftSection={<IconListDetails size={16} stroke={1.5} />}
                    />
                </Grid.Col>

                <Grid.Col span={1}>
                    <Tooltip label={`Delete ${v.name}`}>
                    <ActionIcon
                        variant="light"
                        color="red"
                        onClick={ () => {
                            openDeleteSchemeConfirmModal(v.name);
                        }}
                    >
                        <IconTrashOff size={16}/>
                    </ActionIcon>
                    </Tooltip>
                </Grid.Col>

                <Grid.Col span={1}>
                    <Tooltip label={`Info`}>
                    <ActionIcon
                        variant="light"
                        onClick={open}
                    >
                        <IconInfoCircle size={16}/>
                    </ActionIcon>
                    </Tooltip>
                </Grid.Col>

                <Grid.Col span={1}>
                    <Tooltip label={`Load ${v.name}`}>
                    <ActionIcon
                        variant="light"
                        onClick={ () => { 
                            importTableObj(v.data);
                            !!closeModal && closeModal()
                            commonSuccessActions();
                        }}
                    >
                        <IconCloudDownload size={16}/>
                    </ActionIcon>
                    </Tooltip>
                </Grid.Col>

            </Grid>
        ))}
        </>
    )
}
    
export default SavedSchemeList
