import { ActionIcon, Tooltip } from "@mantine/core";
import useTableStore from "../../store/zustandStore";

import { IconDownload } from '@tabler/icons';

import { toDownloadFile } from "../../utilis/dataBase/downloadFile";
import { tableDataToKnexScheme } from "../../utilis/dataBase/tableDataToKnex";


function TableDataToKnexBtnView(){

    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Tooltip label="Download Knex">
        <ActionIcon
            onClick={ () => {
                const str = tableDataToKnexScheme(tableArray)
                const textString = `data:text/json;chatset=utf-8,${encodeURIComponent(str)}`;
                toDownloadFile(textString, `${new Date().getTime()}_migrations.ts`)
            }}
        >
            <IconDownload size={18} />
        </ActionIcon>
        </Tooltip>
        </>
    )
}
    
export default TableDataToKnexBtnView
