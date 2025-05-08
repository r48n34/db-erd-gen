import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useMantineColorScheme, useMantineTheme, rem, Switch } from '@mantine/core';

function ThemeToggleSwitch({ ...props }) {

    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const sunIcon = (
        <IconSun
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.yellow[4]}
        />
    );

    const moonIcon = (
        <IconMoonStars
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.blue[6]}
        />
    );

    return (
        <Switch
            size="sm"
            color="dark.4"
            onLabel={sunIcon}
            offLabel={moonIcon}
            checked={!dark}
            onChange={toggleColorScheme}
            {...props}
        />
    );
}

export default ThemeToggleSwitch
