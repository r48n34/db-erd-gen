import { Menu, Button } from '@mantine/core';
// import {
//     IconSettings,
//     IconSearch,
//     IconPhoto,
//     IconMessageCircle,
//     IconTrash,
//     IconArrowsLeftRight,
//     IconFile,
// } from '@tabler/icons';

import ExportJsonFormatView from '../debug/ExportJsonFormatView';
import ImportJsonFormat from '../debug/ImportJsonFormat';
import DeleteAllData from '../debug/DeleteAllData';
// import DeleteAllSchemeBtn from '../debug/DeleteAllSchemeBtn';

function FileMenu() {
    return (
        <Menu
            shadow="md" width={250}
            position="bottom-start"
            trigger="hover"
            loop={false}
            withinPortal={false}
            trapFocus={false}
            menuItemTabIndex={0}
        >
            <Menu.Target>
                <Button variant="subtle" size="xs">
                    File 
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>
                    Files
                </Menu.Label>

                <DeleteAllData showsFormat="Menu"/>

                <Menu.Divider />
                <Menu.Label>
                    Import / Export
                </Menu.Label>

                <ExportJsonFormatView showsFormat="Menu" /> 
                <ImportJsonFormat showsFormat="Menu"/>

            </Menu.Dropdown>
        </Menu>
    );
}

export default FileMenu
