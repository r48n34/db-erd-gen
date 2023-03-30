import { ActionIcon, Grid, NavLink, Tooltip } from "@mantine/core";
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

    return (
        <>
        { templateArray.length === 0 && (
            <NavLink
                label="No saved scheme"
                icon={<IconListDetails size={16} stroke={1.5} />}
            />
        )}

        { templateArray.map( v => (
            <Grid>
                <Grid.Col span={10}>
                    <NavLink
                        label={v.name}
                        icon={<IconListDetails size={16} stroke={1.5} />}
                    />
                </Grid.Col>

                <Grid.Col span={1}>
                    <Tooltip label={`Delete ${v.name}`}>
                    <ActionIcon 
                        onClick={ () => {
                            deleteOneTemplate(v.name);
                            commonSuccessActions();
                        }}
                    >
                        <IconTrashOff size={16}/>
                    </ActionIcon>
                    </Tooltip>
                </Grid.Col>

                <Grid.Col span={1}>
                    <Tooltip label={`Load ${v.name}`}>
                    <ActionIcon 
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
