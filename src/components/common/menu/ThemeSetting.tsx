import { Container, Space, Text } from "@mantine/core";
import ThemeToggleSwitch from "../ThemeToggleSwitch";

function ThemeSetting() {
    return (
        <Container fluid>
            <Text fz={32} fw={600}>
                Theme settings
            </Text>

            <Text fz={14} fw={400} c="dimmed" mt={12} mb={12}>
                Toggle dark / light theme
            </Text>

            <ThemeToggleSwitch />

            <Space h="lg" />
        </Container>
    )
}

export default ThemeSetting
