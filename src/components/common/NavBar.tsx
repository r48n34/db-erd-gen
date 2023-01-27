import { Header, Group } from '@mantine/core';
import ThemeToggleBtn from './ThemeToggleBtn';
import DebugModal from '../../debug/DebugModal';


export default function NavBar() {
   return (
    <>
        <Header height={50} p="xs">
            <Group position="apart">
                <DebugModal/>
                <div></div>
                <ThemeToggleBtn/>
            </Group>
        </Header>
    </>
   )
}