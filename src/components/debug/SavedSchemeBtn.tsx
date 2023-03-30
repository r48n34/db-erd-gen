import { ActionIcon, Tooltip } from "@mantine/core";
import { IconCloudDownload } from "@tabler/icons";

import { commonSuccessActions } from "../../utilis/notificationUtilis";

import useTableStore from "../../store/zustandStore";
import useTemplateStoreStore from "../../store/templateStore";
    
function SavedSchemeBtn(){

    const addTemplate = useTemplateStoreStore((state) => state.addTemplate);
    const importTableObj = useTableStore((state) => state.tableArray);

    function addCurrentSchemeToTemplateList(){
        addTemplate(importTableObj);
        commonSuccessActions();
    }
    
    return (
        <>
        <Tooltip label="Save Current Scheme">
        <ActionIcon onClick={ () => addCurrentSchemeToTemplateList()}>
            <IconCloudDownload size={16}/>
        </ActionIcon>
        </Tooltip>
        </>
    )
}
    
export default SavedSchemeBtn
