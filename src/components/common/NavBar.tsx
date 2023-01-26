import { Header, Group } from '@mantine/core';
import ThemeToggleBtn from './ThemeToggleBtn';
import TableDataToPostgresBtn from '../../debug/TableDataToPostgresBtn';

export default function NavBar() {
   return (
    <>
        <Header height={50} p="xs">
            <Group position="apart">
                <div></div>
                <ThemeToggleBtn/>
                {/* <TableDataToPostgresBtn/> */}
            </Group>
        </Header>
    </>
   )
}