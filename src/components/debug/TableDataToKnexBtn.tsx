import { NavLink } from "@mantine/core";
import useTableStore from "../../store/zustandStore";

import { IconChevronRight, IconFileDatabase } from '@tabler/icons';

import { toDownloadFile } from "../../utilis/dataBase/downloadFile";
import { tableDataToKnexScheme } from "../../utilis/dataBase/tableDataToKnex";

function TableDataToKnexBtn(){
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <NavLink 
            label="Generate Knex" 
            onClick={ () => {
                const str = tableDataToKnexScheme(tableArray)
                const textString = `data:text/json;chatset=utf-8,${encodeURIComponent(str)}`;

                toDownloadFile(textString, `${new Date().getTime()}_migrations.ts`)
            }}
            icon={<IconFileDatabase size={16} stroke={1.5} />}
            // rightSection={<IconChevronRight size={12} stroke={1.5} />}
        />  
        </>
    )
}
    
export default TableDataToKnexBtn
