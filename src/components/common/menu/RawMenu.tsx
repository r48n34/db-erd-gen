
import { Blockquote, Container, Tabs, Text, rem } from '@mantine/core';
import { IconColorPicker, IconInfoCircle, IconMessageCircle, IconSettings, } from '@tabler/icons';
import ThemeToggleSwitch from '../ThemeToggleSwitch';

function RawMenu() {

    const iconStyle = { width: rem(12), height: rem(12) };

    return (
        <>
            <Tabs orientation="vertical" defaultValue="general">
                <Tabs.List>
                    <Tabs.Tab value="general" leftSection={<IconSettings style={iconStyle} />}>
                        General
                    </Tabs.Tab>
                    <Tabs.Tab value="theme" leftSection={<IconColorPicker style={iconStyle} />}>
                        Theme
                    </Tabs.Tab>
                    <Tabs.Tab value="misc" leftSection={<IconMessageCircle style={iconStyle} />}>
                        Misc
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="general">
                    <Container fluid>
                        <Text fz={32} fw={600}>
                            General settings
                        </Text>
                    </Container>
                </Tabs.Panel>

                <Tabs.Panel value="theme">
                    <Container fluid>
                        <Text fz={32} fw={600}>
                            Theme settings
                        </Text>

                        <Text fz={14} fw={400} c="dimmed" mt={12} mb={12}>
                            Toggle dark / light theme
                        </Text>

                        <ThemeToggleSwitch />
                    </Container>
                </Tabs.Panel>

                <Tabs.Panel value="misc">
                    <Container fluid>
                        <Text fz={32} fw={600}>
                            Misc
                        </Text>

                        <Blockquote color="blue" cite="– Forrest Gump" icon={<IconInfoCircle />} mt="xl">
                            Life is like an npm install – you never know what you are going to get.
                        </Blockquote>
                    </Container>
                </Tabs.Panel>

            </Tabs>
        </>
    )
}

export default RawMenu
