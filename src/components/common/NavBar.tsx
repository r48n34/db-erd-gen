import { Header, Group } from '@mantine/core';
import ThemeToggleBtn from './ThemeToggleBtn';
import DebugModal from '../debug/DebugModal';
import ImportJsonFromatFile from '../debug/ImportJsonFromatFile';
import SavedScheme from '../debug/SavedSchemeBtn';
import { IconBrandGithub } from '@tabler/icons';
import GoUrlBtn from './GoUrlBtn';

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
                    <GoUrlBtn title={'Github'} url={'https://github.com/r48n34/db-erd-gen'} icon={<IconBrandGithub/>}/>
                </Group>

            </Group>
        </Header>
    </>
   )
}