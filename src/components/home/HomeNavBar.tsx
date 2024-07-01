import { AppShell, Button, Group } from '@mantine/core';
import { IconDatabase } from '@tabler/icons';
import { useNavigate } from "react-router-dom";

function HomeNavBar(){
    const navigate = useNavigate();

    return (
        <>
        <AppShell>
        <AppShell.Header h={55} p="xs">
            <Group justify="flex-end">

                <Button variant='light' onClick={() => navigate("/")} leftSection={<IconDatabase size={16}/>}>
                    Get started!
                </Button>

            </Group>
        </AppShell.Header>
        </AppShell>
        </>
    )
}
    
export default HomeNavBar
