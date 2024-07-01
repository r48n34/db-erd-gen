import { Box, Group, Loader, Text } from "@mantine/core"

function LoadingPage() {
    return (
        <>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Box>
                <Group justify="center">
                    <Loader color="indigo" type="dots" />
                </Group>
                
                <Text ta="center" mt={18} c="dimmed" fz={14} fw={400}>
                    Loading...
                </Text>
                </Box>
            </Box>
        </>
    )
}

export default LoadingPage
