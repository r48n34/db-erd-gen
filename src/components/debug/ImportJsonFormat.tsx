import { useState } from "react";
import { IconFileExport, IconFileImport } from '@tabler/icons';
import { Button, JsonInput, Space, Group, NavLink, LoadingOverlay, Menu } from "@mantine/core";

import { importString } from "../../data/testInputData";
import { importJsonFormat } from "../../utilis/dataBase/jsonFormat";
import { commonSuccessActions, failedDeleteMessage } from "../../utilis/notificationUtilis";

import useTableStore from "../../store/zustandStore";
import ImportJsonFromatFile from "./ImportJsonFromatFile";
import { jsonImportScheme } from "../../interface/inputData";
import { modals } from "@mantine/modals";

interface ImportJsonFormatProps {
    showsFormat: "Menu" | "NavLink"
}

function ImportJsonFormat({ showsFormat = "NavLink" }: ImportJsonFormatProps) {

    const [jsonValue, setJsonValue] = useState<string>(importString);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const importTableObj = useTableStore((state) => state.importTableObj);

    const openImportJsonViewModal = () => modals.open({
        title: "Import JSON Code",
        size: "85%",
        children: (
            <>
                <LoadingOverlay visible={isLoading} />

                <Group justify="space-between">
                    <ImportJsonFromatFile setLoading={setIsLoading} setCloseModal={() => modals.closeAll()} />

                    <Button
                        variant="light"
                        leftSection={<IconFileImport size={16} />}
                        onClick={() => {
                            importStringToStore();
                        }}
                    >
                        Import
                    </Button>
                </Group>

                <Space h="lg" />

                <JsonInput
                    value={jsonValue}
                    validationError="Invalid json"
                    onChange={setJsonValue}
                    autosize
                    minRows={18}
                />
            </>
        ),
    });

    function importToStore(inputValue: string) {
        
        setIsLoading(true);
        
        try {

            const result = importJsonFormat(inputValue);
            if (!Array.isArray(result) || result.length <= 0) {
                throw new Error("Invalid format")
            }

            jsonImportScheme.parse(result);
            importTableObj(result);

            commonSuccessActions();
            modals.closeAll();
        }
        catch (error) {
            console.log(error)
            failedDeleteMessage("Fail to import, please check you file format.");
        }
        finally{
            setIsLoading(false);
        }

    }

    function importStringToStore() {
        !!jsonValue && importToStore(jsonValue);
    }

    return (
        <>
            {showsFormat === "NavLink" && (
                <NavLink
                    label="Import JSON"
                    leftSection={<IconFileImport size={16} stroke={1.5} />}
                    onClick={() => openImportJsonViewModal()}
                />
            )}

            {showsFormat === "Menu" && (
                <Menu.Item
                    leftSection={<IconFileImport size={16} stroke={1.5} />}
                    onClick={() => {
                        openImportJsonViewModal();
                    }}
                >
                    Import JSON
                </Menu.Item>
            )}
        </>
    )
}

export default ImportJsonFormat
