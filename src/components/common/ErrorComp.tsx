import { Text, Box } from '@mantine/core';

function ErrorComp(){
    return (
        <>
        <Box style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
            <Box>
            <Text fw={700} ta={"center"}>
                Opps, something went wrong
            </Text>
            <Text ta={"center"} size="sm" c="dimmed">
                Please refresh the page
            </Text>
            </Box>
        </Box>
        </>
    )
}
    
export default ErrorComp
