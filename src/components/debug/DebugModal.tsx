import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { Drawer, Burger, NavLink, Tooltip } from '@mantine/core';

import DeleteAllData from './DeleteAllData';

import ImportJsonFormat from './ImportJsonFormat';
import ImportTemplateBtn from './ImportTemplateBtn';

import ExportJsonFormatView from './ExportJsonFormatView';

import TableDataToKnexBtnView from './TableDataToKnexBtnView';
import TableDataToPostgresBtnView from './TableDataToPostgresBtnView';

import { IconArchive, IconFileArrowRight, IconAlertTriangle, IconClipboardData, IconDeviceFloppy } from '@tabler/icons';
import SavedSchemeList from './SavedSchemeList';
import DeleteAllSchemeBtn from './DeleteAllSchemeBtn';


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
                <TableDataToPostgresBtnView/>
                <TableDataToKnexBtnView/>
            </NavLink>

            <NavLink label="Import / Export" icon={<IconFileArrowRight size={16} stroke={1.5} />} childrenOffset={28}>
                <ExportJsonFormatView/> 
                <ImportJsonFormat/>
            </NavLink>

            <NavLink label="Template" icon={<IconClipboardData size={16} stroke={1.5} />} childrenOffset={28}>
                <ImportTemplateBtn/>
            </NavLink>

            <NavLink 
                label="Scheme"
                icon={<IconDeviceFloppy size={16} stroke={1.5} />}
                childrenOffset={28}
            >
                <SavedSchemeList closeModal={ () => setOpened(false) }/>
            </NavLink>

            <NavLink 
                label="Dangerous zone"
                icon={<IconAlertTriangle size={16} stroke={1.5} />}
                childrenOffset={28}
            >
                <DeleteAllData/>
                <DeleteAllSchemeBtn/>
            </NavLink>
        </Drawer>

        <Tooltip label="Menu">
            <Burger
                size={16}
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title={"Control menu"}
            />
        </Tooltip>
        </>
    );
}

export default DebugModal
