import { ActionIcon, Tooltip } from '@mantine/core';
import { IconRefresh } from '@tabler/icons';
import useTableStore from '../../../store/zustandStore';
function ReloadButton() {
    const forceUpdateToggle = useTableStore((state) => state.forceUpdateToggle);

    return (
        <>
        <Tooltip label="Reload Table View">
        <ActionIcon
            size={"md"}
            radius={"lg"}
            variant="light"
            onClick={() => forceUpdateToggle()}
            title="Reload Table View"
        >
            <IconRefresh size={16} />
        </ActionIcon>
        </Tooltip>
        </>
    );
}

export default ReloadButton
