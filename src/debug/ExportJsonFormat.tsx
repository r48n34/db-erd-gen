import { NavLink } from "@mantine/core";
import { IconChevronRight, IconFileExport } from '@tabler/icons';

import useTableStore from "../store/zustandStore";

import { exportJsonFormat } from "../utilis/dataBase/jsonFormat";
import { commonSuccessActions } from "../utilis/notificationUtilis";

function ExportJsonFormat(){

    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <NavLink
            label="Export json"
            icon={<IconFileExport size={16} stroke={1.5} />}
            rightSection={<IconChevronRight size={12} stroke={1.5} />}
            onClick={ () => {
                exportJsonFormat(tableArray);
                commonSuccessActions();
            }}
        />
        </>
    )
}
    
export default ExportJsonFormat
