import { ActionIcon, Grid, NavLink, Tooltip, Text, Box } from "@mantine/core";
import { modals } from '@mantine/modals';

import { IconListDetails, IconCloudDownload, IconTrashOff, IconInfoCircle } from "@tabler/icons";

import useTemplateStoreStore, { TemplateStoreData } from "../../store/templateStore";
import useTableStore from "../../store/zustandStore";
import { commonSuccessActions } from "../../utilis/notificationUtilis";
import ERTableComp from "../ERTableComp";
import { Table } from "../../interface/inputData";

interface SavedSchemeListProps {
    closeModal?: Function
}

function SavedSchemeList({ closeModal }: SavedSchemeListProps) {

    const templateArray = useTemplateStoreStore((state) => state.templateArray);
    const deleteOneTemplate = useTemplateStoreStore((state) => state.deleteOneTemplate);

    const importTableObj = useTableStore((state) => state.importTableObj);

    // const [opened, { open, close }] = useDisclosure(false);

    const openDeleteSchemeConfirmModal = (schemeName: string) => modals.openConfirmModal({
        title: 'Please confirm your action',
        children: (
            <Text size="sm">
                Are you sure to delete this scheme?
            </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => { },
        onConfirm: () => {
            deleteOneTemplate(schemeName);
            commonSuccessActions();
        },
    });

    const contentDBViewModal = (contentData: TemplateStoreData) => modals.open({
        title: 'Table view',
        size: "85%",
        children: (
            <>
                <Text c="dimmed" fz={14} ta="right">
                    Saved date: {contentData.addedDate ?? "N/A"}
                </Text>
                <Box style={{ height: "80vh", width: "100%" }}>
                    <ERTableComp tableArray={contentData.data} />
                </Box>
            </>
        ),
    });

    return (
        <>

            {/* <Modal opened={opened} onClose={close} title="Info Table">
            <ERTableComp tableArray={[]} />
        </Modal> */}

            {templateArray.length === 0 && (
                <NavLink
                    label="No saved scheme"
                    leftSection={<IconListDetails size={16} stroke={1.5} />}
                />
            )}

            {templateArray.map(v => (
                <Grid key={v.name}>
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
                                onClick={() => {
                                    openDeleteSchemeConfirmModal(v.name);
                                }}
                            >
                                <IconTrashOff size={16} />
                            </ActionIcon>
                        </Tooltip>
                    </Grid.Col>

                    <Grid.Col span={1}>
                        <Tooltip label={`Info`}>
                            <ActionIcon
                                variant="light"
                                onClick={() => contentDBViewModal(v)}
                            >
                                <IconInfoCircle size={16} />
                            </ActionIcon>
                        </Tooltip>
                    </Grid.Col>

                    <Grid.Col span={1}>
                        <Tooltip label={`Load ${v.name}`}>
                            <ActionIcon
                                variant="light"
                                onClick={() => {
                                    importTableObj(v.data);
                                    !!closeModal && closeModal()
                                    commonSuccessActions();
                                }}
                            >
                                <IconCloudDownload size={16} />
                            </ActionIcon>
                        </Tooltip>
                    </Grid.Col>

                </Grid>
            ))}
        </>
    )
}

export default SavedSchemeList
