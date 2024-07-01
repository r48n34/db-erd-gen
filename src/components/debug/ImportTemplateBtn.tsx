import { NavLink, Text } from "@mantine/core";
import { openConfirmModal } from '@mantine/modals';
import { IconListDetails } from "@tabler/icons";

import { importString } from "../../data/testInputData";
import { commonSuccessActions } from "../../utilis/notificationUtilis";
import { importJsonFormat } from "../../utilis/dataBase/jsonFormat";

import useTableStore from "../../store/zustandStore";

function ImportTemplateBtn(){
    const importTableObj = useTableStore((state) => state.importTableObj);

    const openModal = () => openConfirmModal({
        title: 'Confirm the action',
        children: (
          <Text size="sm">
            The current table will be deleted. Are you sure to do this?
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => {},
        onConfirm: () => {
            const result = importJsonFormat(importString);
            importTableObj(result);
            commonSuccessActions();
        },
    });

    return (
        <>
        <NavLink
            label="Import Simple template"
            leftSection={<IconListDetails size={16} stroke={1.5} />}
            onClick={ () => {
                openModal();
            }}
        />
        </>
    )
}
    
export default ImportTemplateBtn
