import { ActionIcon, Grid, NavLink } from "@mantine/core";
import { IconListDetails, IconCloudDownload, IconTrashOff } from "@tabler/icons";
import useTemplateStoreStore from "../../store/templateStore";

type SavedSchemeListProps = {
    data?: any;
}
    
function SavedSchemeList({ data }: SavedSchemeListProps){

    const templateArray = useTemplateStoreStore((state) => state.templateArray);
    
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
                        label={`Template`}
                        icon={<IconListDetails size={16} stroke={1.5} />}
                        onClick={ () => {
                        }}
                    />
                </Grid.Col>

                <Grid.Col span={1}>
                    <ActionIcon>
                        <IconTrashOff size={16}/>
                    </ActionIcon>
                </Grid.Col>

                <Grid.Col span={1}>
                    <ActionIcon>
                        <IconCloudDownload size={16}/>
                    </ActionIcon>
                </Grid.Col>

            </Grid>
        ))}
        </>
    )
}
    
export default SavedSchemeList
