import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';
import TableDataToPostgresBtn from './TableDataToPostgresBtn';

function DebugModal() {
    const [opened, setOpened] = useState(false);

    useHotkeys([
        ['mod+D', () => setOpened(true)],
    ]);

    return (
        <>
        <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Debug menu"
            padding="xl"
            size="xl"
        >
            <TableDataToPostgresBtn/>
        </Drawer>
        </>
    );
}

export default DebugModal
