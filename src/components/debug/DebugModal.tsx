import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { Drawer, Burger, NavLink } from '@mantine/core';

import DeleteAllData from './DeleteAllData';
import ExportJsonFormat from './ExportJsonFormat';
import ImportJsonFormat from './ImportJsonFormat';
import TableDataToPostgresBtn from './TableDataToPostgresBtn';
import TableDataToKnexBtn from './TableDataToKnexBtn';
import ImportTemplateBtn from './ImportTemplateBtn';

import { IconArchive, IconFileArrowRight, IconAlertTriangle, IconClipboardData } from '@tabler/icons';

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
            <NavLink label="Generate" icon={<IconArchive size={16} stroke={1.5} />} childrenOffset={28}>
                <TableDataToPostgresBtn/>
                <TableDataToKnexBtn/>
            </NavLink>

            <NavLink label="Import / Export" icon={<IconFileArrowRight size={16} stroke={1.5} />} childrenOffset={28}>
                <ExportJsonFormat/>
                <ImportJsonFormat/>
            </NavLink>

            <NavLink label="Template" icon={<IconClipboardData size={16} stroke={1.5} />} childrenOffset={28}>
                <ImportTemplateBtn/>
            </NavLink>

            <NavLink 
                label="Dangerous zone"
                icon={<IconAlertTriangle size={16} stroke={1.5} />}
                childrenOffset={28}
            >
                <DeleteAllData/>
            </NavLink>
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
