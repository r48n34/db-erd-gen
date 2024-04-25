import { ActionIcon, Grid, NavLink, Tooltip, Text } from "@mantine/core";
import { modals } from '@mantine/modals';

import { IconListDetails, IconCloudDownload, IconTrashOff } from "@tabler/icons";

import useTemplateStoreStore from "../../store/templateStore";
import useTableStore from "../../store/zustandStore";
import { commonSuccessActions } from "../../utilis/notificationUtilis";

interface SavedSchemeListProps{
    closeModal?: Function
}

function SavedSchemeList({ closeModal }:SavedSchemeListProps){

    const templateArray = useTemplateStoreStore((state) => state.templateArray);
    const deleteOneTemplate = useTemplateStoreStore((state) => state.deleteOneTemplate);

    const importTableObj = useTableStore((state) => state.importTableObj);

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
        { templateArray.length === 0 && (
            <NavLink
                label="No saved scheme"
                leftSection={<IconListDetails size={16} stroke={1.5} />}
            />
        )}

        { templateArray.map( v => (
            <Grid>
                <Grid.Col span={10}>
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
