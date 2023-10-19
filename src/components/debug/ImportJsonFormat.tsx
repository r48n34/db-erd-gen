import { useState } from "react";
import { IconFileImport } from '@tabler/icons';
import { Modal, Button, JsonInput, Space, Group, NavLink, LoadingOverlay } from "@mantine/core";

import { importString } from "../../data/testInputData";
import { importJsonFormat } from "../../utilis/dataBase/jsonFormat";
import { commonSuccessActions, failedDeleteMessage } from "../../utilis/notificationUtilis";

import useTableStore from "../../store/zustandStore";
import ImportJsonFromatFile from "./ImportJsonFromatFile";
import { JsonImportScheme } from "../../interface/inputData";

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

            JsonImportScheme.parse(result);
            importTableObj(result);
    
            commonSuccessActions();
            setOpened(false);
        } 
        catch (error) {
            failedDeleteMessage("Fail to import, please check you file format.");
        }

        setIsLoading(false);
    }

    function importStringToStore(){
        !!jsonValue && importToStore(jsonValue);
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
                <ImportJsonFromatFile setLoading={setIsLoading} setCloseModal={setOpened}/>
            </Group>

            <JsonInput 
                value={jsonValue}
                validationError="Invalid json"
                onChange={setJsonValue}
                minRows={18}
            />
            <Space h="lg"/>

            <Group position="right">
                <Button
                    variant="light"
                    leftIcon={<IconFileImport size={16} stroke={1.5} />}
                    onClick={ () => importStringToStore() }
                >
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
