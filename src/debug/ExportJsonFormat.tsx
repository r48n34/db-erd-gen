import { NavLink } from "@mantine/core";
import useTableStore from "../store/zustandStore";
import { exportJsonFormat } from "../utilis/dataBase/jsonFormat";
import { commonSuccessActions } from "../utilis/notificationUtilis";
import { IconHome2 } from '@tabler/icons';

function ExportJsonFormat(){

    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <NavLink
            label="Export current json string"
            icon={<IconHome2 size={16} stroke={1.5} />}
            onClick={ () => {
                exportJsonFormat(tableArray);
                commonSuccessActions();
            }}
        />
        </>
    )
}
    
export default ExportJsonFormat
