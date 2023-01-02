import { Header, Group } from '@mantine/core';
import ThemeToggleBtn from './ThemeToggleBtn';

export default function NavBar() {
   return (
    <>
        <Header height={50} p="xs">
            <Group position="apart">
                <div></div>
                <ThemeToggleBtn/>
            </Group>
        </Header>
    </>
   )
}