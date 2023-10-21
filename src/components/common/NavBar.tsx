import { Header, Group } from '@mantine/core';
import ThemeToggleBtn from './ThemeToggleBtn';
import DebugModal from '../debug/DebugModal';
import ImportJsonFromatFile from '../debug/ImportJsonFromatFile';
import SavedScheme from '../debug/SavedSchemeBtn';

export default function NavBar() {
   return (
    <>
        <Header height={50} p="xs">
            <Group position="apart">
                
                <DebugModal/>

                <Group>
                    <SavedScheme types='btn'/>
                    <ImportJsonFromatFile/>
                    <ThemeToggleBtn/>
                </Group>

            </Group>
        </Header>
    </>
   )
}