import { FileButton, Tooltip, ActionIcon } from "@mantine/core";
import { IconFileUpload } from "@tabler/icons";
import { readJsonFromFile } from "../../utilis/fileUtils";
import { commonSuccessActions, failedDeleteMessage } from "../../utilis/notificationUtilis";
import { importJsonFormat } from "../../utilis/dataBase/jsonFormat";
import useTableStore from "../../store/zustandStore";
import { jsonImportScheme } from "../../interface/inputData";

type ImportJsonFromatFileProps = {
    setLoading?: Function;
    setCloseModal?: Function;
}
    
function ImportJsonFromatFile({ setLoading, setCloseModal }: ImportJsonFromatFileProps){
    const importTableObj = useTableStore((state) => state.importTableObj);
    
    async function importStringToStoreFromFile(file: File){
        !!setLoading && setLoading(true);

        try {
            const fileContent = await readJsonFromFile(file);
            if(fileContent === ""){ 
                throw new Error("Invalid format")
            }
    
            const result = importJsonFormat(fileContent);
            if(!Array.isArray(result) || result.length <= 0){
                throw new Error("Invalid format")
            }

            jsonImportScheme.parse(result);
    
            importTableObj(result);
            commonSuccessActions();
            !!setCloseModal && setCloseModal(false);
        }
        catch (error) {
            failedDeleteMessage("Fail to import, please check you file format.");
        }

        !!setLoading && setLoading(false);
    }

    return (
        <>
        <FileButton onChange={importStringToStoreFromFile} accept="application/JSON">
            {(props) => (
                <Tooltip label="Upload JSON">
                <ActionIcon {...props}>
                    <IconFileUpload size={18} />
                </ActionIcon>
                </Tooltip>
            )}
        </FileButton>
        </>
    )
}
    
export default ImportJsonFromatFile
