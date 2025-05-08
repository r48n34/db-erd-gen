import { ActionIcon, Button, Group, Modal, NavLink, TextInput, Tooltip } from "@mantine/core";
import { IconCloudDownload, IconDeviceFloppy, IconFileImport } from '@tabler/icons-react';;

import { commonSuccessActions, failedDeleteMessage } from "../../utilis/notificationUtilis";

import useTableStore from "../../store/zustandStore";
import useTemplateStoreStore from "../../store/templateStore";
import { useState } from "react";
import { useHotkeys } from "@mantine/hooks";
    
interface SavedSchemeProps {
    types: "btn" | "list"
}

function SavedScheme({ types }: SavedSchemeProps){

    const [ opened, setOpened ] = useState<boolean>(false);
    const [ schemeName , setSchemeName ] = useState('project');

    const templateArray = useTemplateStoreStore((state) => state.templateArray);
    const addTemplate = useTemplateStoreStore((state) => state.addTemplate);
    const importTableObj = useTableStore((state) => state.tableArray);

    useHotkeys([
        ['ctrl+S', () => setOpened(true)],
    ]);

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
            title="Save Current Scheme"
        >
            <TextInput
                label="Named current project"
                placeholder="my_project"
                value={schemeName}
                onChange={(event) => setSchemeName(event.currentTarget.value)}
            />

            <Group justify="flex-end" mt={16}>
                <Button
                    leftSection={<IconDeviceFloppy size={18}/>}
                    variant="light"
                    onClick={ () => addCurrentSchemeToTemplateList() }
                >
                    Save
                </Button>
            </Group>
        </Modal>

        { types === "btn" 
            ? (
                <Tooltip label="Save Current Scheme">
                <ActionIcon onClick={ () => setOpened(true) } variant="light">
                    <IconCloudDownload size={16}/>
                </ActionIcon>
                </Tooltip>
            )
            : (
                <NavLink 
                    label="Save Current Scheme"
                    leftSection={<IconFileImport size={16} stroke={1.5} />}
                    onClick={ () => setOpened(true) }
                />
            )
        }
       

        </>
    )
}
    
export default SavedScheme
