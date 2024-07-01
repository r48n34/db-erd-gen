import { useDisclosure } from '@mantine/hooks';
import { Modal, ActionIcon, Tooltip } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import RawMenu from './RawMenu';

function GrandMenu() {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="" size="75%">
                <RawMenu />
            </Modal>

            <Tooltip label="Menu">
                <ActionIcon
                    variant="light"
                    onClick={open}
                    title="Menu"
                >
                    <IconMenu2 size={18} />
                </ActionIcon>
            </Tooltip>
        </>
    );
}

export default GrandMenu
