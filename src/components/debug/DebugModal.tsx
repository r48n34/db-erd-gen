import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { Drawer, Burger, Space } from '@mantine/core';

import DeleteAllData from './DeleteAllData';
import ExportJsonFormat from './ExportJsonFormat';
import ImportJsonFormat from './ImportJsonFormat';
import TableDataToPostgresBtn from './TableDataToPostgresBtn';
import TableDataToKnexBtn from './TableDataToKnexBtn';

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
            <TableDataToKnexBtn/>
            
            <Space h="md"/>
            <ExportJsonFormat/>

            <Space h="md"/>
            <ImportJsonFormat/>
            
            <Space h="md"/>
            <DeleteAllData/>

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
