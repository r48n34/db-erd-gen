import { ActionIcon, Tooltip } from "@mantine/core";
import useTableStore from "../../store/zustandStore";

import { IconDownload } from '@tabler/icons';

import { toDownloadFile } from "../../utilis/dataBase/downloadFile";
import { tableDataToPostgresScheme } from "../../utilis/dataBase/tableDataToPostgres";

function TableDataToPostgresBtn(){
    
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Tooltip label="Download SQL">
        <ActionIcon
            onClick={ () => {
                const str = tableDataToPostgresScheme(tableArray)
                const textString = `data:text/json;chatset=utf-8,${encodeURIComponent(str)}`;

                toDownloadFile(textString, "tables.sql")
            }}
        >
            <IconDownload size={18} />
        </ActionIcon>
        </Tooltip>
        </>
    )
}
    
export default TableDataToPostgresBtn
