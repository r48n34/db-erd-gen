import { NavLink } from "@mantine/core";
import { IconListDetails } from "@tabler/icons";

import { importString } from "../../data/testInputData";
import { commonSuccessActions } from "../../utilis/notificationUtilis";
import { importJsonFormat } from "../../utilis/dataBase/jsonFormat";

import useTableStore from "../../store/zustandStore";

function ImportTemplateBtn(){
    const importTableObj = useTableStore((state) => state.importTableObj);

    return (
        <>
        <NavLink
            label="Import simple template"
            icon={<IconListDetails size={16} stroke={1.5} />}
            onClick={ () => {
                const result = importJsonFormat(importString);
                importTableObj(result);
                commonSuccessActions();
            }}
        />
        </>
    )
}
    
export default ImportTemplateBtn
