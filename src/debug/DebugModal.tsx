import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { Drawer, Burger, Space } from '@mantine/core';
import TableDataToPostgresBtn from './TableDataToPostgresBtn';
import ExportJsonFormat from './ExportJsonFormat';
import ImportJsonFormat from './ImportJsonFormat';

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
            title="Control menu"
            padding="xl"
            size="xl"
        >
            <TableDataToPostgresBtn/>
            
            <Space h="md"/>
            <ExportJsonFormat/>

            <Space h="md"/>
            <ImportJsonFormat/>
        </Drawer>

        <Burger
            size={16}
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={"Control menu"}
        />
        </>
    );
}

export default DebugModal
