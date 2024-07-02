
import { Blockquote, Container, Tabs, Text, rem } from '@mantine/core';
import { IconColorPicker, IconInfoCircle, IconMessageCircle, IconSettings, } from '@tabler/icons';
import ThemeSetting from './ThemeSetting';
import GeneralSetting from './GeneralSetting';

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
                    <GeneralSetting />
                </Tabs.Panel>

                <Tabs.Panel value="theme">
                    <ThemeSetting />
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
