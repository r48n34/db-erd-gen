import { AppShell, Group } from '@mantine/core';
import ThemeToggleBtn from './ThemeToggleBtn';
import DebugModal from '../debug/DebugModal';
import ImportJsonFromatFile from '../debug/ImportJsonFromatFile';
import SavedScheme from '../debug/SavedSchemeBtn';
import { IconBrandGithub } from '@tabler/icons';
import GoUrlBtn from './GoUrlBtn';
import DownloadButton from '../leftBar/components/DownloadButton';

export default function NavBar() {
   return (
    <AppShell>
        <AppShell.Header h={50} p="xs">
            <Group justify="space-between">
                
                <DebugModal/>

                <Group>
                    <SavedScheme types='btn'/>
                    {/* <ImportJsonFromatFile/> */}
                    <ThemeToggleBtn/>
                    {/* <GoUrlBtn title={'Github'} url={'https://github.com/r48n34/db-erd-gen'} icon={<IconBrandGithub size={18}/>}/> */}
                    {/* <DownloadButton /> */}
                </Group>

            </Group>
        </AppShell.Header>
    </AppShell>
   )
}