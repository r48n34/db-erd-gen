import { AppShell, Group } from '@mantine/core';
import ThemeToggleBtn from './ThemeToggleBtn';
import DebugModal from '../debug/DebugModal';
import SavedScheme from '../debug/SavedSchemeBtn';
import FileMenu from './FileMenu';
import GenerateMenu from './GenerateMenu';

export default function NavBar() {
   return (
    <AppShell>
        <AppShell.Header h={50} p="xs">
            <Group justify="space-between">

                <Group>
                    <DebugModal/>
                   
                    <Group visibleFrom='sm'>
                        <FileMenu />
                        <GenerateMenu />
                    </Group>
                </Group>
                
                <Group>
                    <SavedScheme types='btn'/>
                    <ThemeToggleBtn/>
                </Group>

            </Group>
        </AppShell.Header>
    </AppShell>
   )
}