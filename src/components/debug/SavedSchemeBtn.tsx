import { ActionIcon, Button, Group, Modal, NavLink, TextInput, Tooltip } from "@mantine/core";
import { IconCloudDownload, IconFileImport } from "@tabler/icons";

import { commonSuccessActions, failedDeleteMessage } from "../../utilis/notificationUtilis";

import useTableStore from "../../store/zustandStore";
import useTemplateStoreStore from "../../store/templateStore";
import { useState } from "react";
    
interface SavedSchemeProps {
    types: "btn" | "list"
}

function SavedScheme({ types }: SavedSchemeProps){

    const [ opened, setOpened ] = useState<boolean>(false);
    const [ schemeName , setSchemeName ] = useState('project');

    const templateArray = useTemplateStoreStore((state) => state.templateArray);
    const addTemplate = useTemplateStoreStore((state) => state.addTemplate);
    const importTableObj = useTableStore((state) => state.tableArray);

    function addCurrentSchemeToTemplateList(){
        if(!schemeName){
            failedDeleteMessage("Please input a name.");
            return;
        }

        if(templateArray.findIndex( v => v.name === schemeName ) >= 0){
            failedDeleteMessage("Duplicated name, please input another name.");
            return;
        }

        addTemplate(schemeName, importTableObj);
        commonSuccessActions();
        setOpened(false)
    }
    
    return (
        <>
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Name the template"
        >
            <TextInput
                placeholder="my_project"
                value={schemeName}
                onChange={(event) => setSchemeName(event.currentTarget.value)}
            />

            <Group position="right" mt={16}>
                <Button variant="light" onClick={ () => addCurrentSchemeToTemplateList() }>
                    Save
                </Button>
            </Group>
        </Modal>

        { types === "btn" 
            ? (
                <Tooltip label="Save Current Scheme">
                <ActionIcon onClick={ () => setOpened(true) }>
                    <IconCloudDownload size={16}/>
                </ActionIcon>
                </Tooltip>
            )
            : (
                <NavLink 
                label="Save Current Scheme"
                icon={<IconFileImport size={16} stroke={1.5} />}
                onClick={ () => setOpened(true) }
            />
            )
        }
       

        </>
    )
}
    
export default SavedScheme
