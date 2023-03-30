import { Tooltip, ActionIcon } from "@mantine/core";
import { IconDownload } from '@tabler/icons';

import useTableStore from "../../store/zustandStore";

import { exportJsonFormat } from "../../utilis/dataBase/jsonFormat";
import { commonSuccessActions } from "../../utilis/notificationUtilis";

function ExportJsonFormat(){

    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Tooltip label="Download JSON">
        <ActionIcon
            onClick={ () => {
                exportJsonFormat(tableArray);
                commonSuccessActions();
            }}
        >
            <IconDownload size={18} />
        </ActionIcon>
        </Tooltip>
        </>
    )
}
    
export default ExportJsonFormat
