import { useState } from "react";
import { IconChevronRight, IconFileImport } from '@tabler/icons';
import { Modal, Button, JsonInput, Space, Group, NavLink  } from "@mantine/core";

import useTableStore from "../../store/zustandStore";

import { importJsonFormat } from "../../utilis/dataBase/jsonFormat";
import { commonSuccessActions } from "../../utilis/notificationUtilis";
import { importString } from "../../data/testInputData";

function ImportJsonFormat(){

    const [ jsonValue, setJsonValue ] = useState<string>(importString);
    const [ opened, setOpened ] = useState<boolean>(false);

    const importTableObj = useTableStore((state) => state.importTableObj);

    function importStringToStore(){
        if(!jsonValue){
            return;
        }

        const result = importJsonFormat(jsonValue);
        importTableObj(result);

        commonSuccessActions();
        setOpened(false);
    }

    return (
        <>
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Import json"
        >
            <JsonInput 
                label="Your data.json" 
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
            rightSection={<IconChevronRight size={12} stroke={1.5} />}
            onClick={ () => setOpened(true) }
        />
        </>
    )
}
    
export default ImportJsonFormat
