import { useState } from "react";
import { IconFileImport, IconFileUpload } from '@tabler/icons';
import { FileButton, Modal, Button, JsonInput, Space, Group, NavLink, Tooltip, ActionIcon, LoadingOverlay } from "@mantine/core";

import useTableStore from "../../store/zustandStore";

import { importJsonFormat } from "../../utilis/dataBase/jsonFormat";
import { commonSuccessActions, failedDeleteMessage } from "../../utilis/notificationUtilis";
import { importString } from "../../data/testInputData";

function ImportJsonFormat(){

    const [ jsonValue, setJsonValue ] = useState<string>(importString);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ opened, setOpened ] = useState<boolean>(false);
    const importTableObj = useTableStore((state) => state.importTableObj);

    function importToStore(inputValue: any){
        setIsLoading(true);

        try {
            const result = importJsonFormat(inputValue);
            if(!Array.isArray(result) || result.length <= 0){
                throw new Error("Invalid format")
            }

            importTableObj(result);
    
            commonSuccessActions();
            setOpened(false);
        } catch (error) {
            failedDeleteMessage("Fail to import, please check you file format.");
        }

        setIsLoading(false);
    }

    function importStringToStore(){
        !!jsonValue && importToStore(jsonValue);
    }

    function importStringToStoreFromFile(file: File){
        setIsLoading(true);

        try { 
            let reader = new FileReader();
            
            reader.onload = function() {
                importToStore(reader.result as string)    
            }
            
            reader.readAsText(file); 
        } 
        catch (error) {
            setIsLoading(false);
            failedDeleteMessage("Fail to import, please check you file format.");
        }
        
    }

    return (
        <>
        <Modal
            size="85%"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Import json"
        >
            <LoadingOverlay visible={isLoading} overlayBlur={2} />

            <Group position="right" mb={14}>
                <FileButton onChange={importStringToStoreFromFile} accept="application/JSON">
                {(props) => (
                    <Tooltip label="Upload JSON">
                    <ActionIcon {...props}>
                        <IconFileUpload size={18} />
                    </ActionIcon>
                    </Tooltip>
                )}
                </FileButton>
            </Group>

            <JsonInput 
                value={jsonValue}
                validationError="Invalid json"
                onChange={setJsonValue}
                minRows={18}
            />
            <Space h="lg"/>

            <Group position="right">
                <Button onClick={ () => importStringToStore() }>
                    Import
                </Button>
            </Group>
        </Modal>

        <NavLink 
            label="Import json"
            icon={<IconFileImport size={16} stroke={1.5} />}
            onClick={ () => setOpened(true) }
        />
        </>
    )
}
    
export default ImportJsonFormat
