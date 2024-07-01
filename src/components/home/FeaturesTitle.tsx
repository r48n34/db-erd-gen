import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons';
import classes from '../../styles/FeaturesTitle.module.css';

const features = [
    {
        icon: IconReceiptOff,
        title: 'Free and open source',
        description: 'All packages are published under MIT license, you can host and modify by yourself.',
    },
    {
        icon: IconFileCode,
        title: 'PostgreSQL based',
        description: 'By default of PostgreSQL, but you can export over than +12 format.',
    },
    {
        icon: IconCircleDotted,
        title: 'Low learning curve UI',
        description: 'Easy to use, do not need to learn about the new syntax again.',
    },
    {
        icon: IconFlame,
        title: 'For Node.js developers',
        description: 'Export with typescript, knex, kysely, zod, prisma and more...',
    },
];

export function FeaturesTitle() {
    const items = features.map((feature) => (
        <div key={feature.title}>
            <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            >
                <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
            </ThemeIcon>
            <Text fz="lg" mt="sm" fw={500}>
                {feature.title}
            </Text>
            <Text c="dimmed" fz="sm">
                {feature.description}
            </Text>
        </div>
    ));

    return (
        <div className={classes.wrapper}>
            <Grid gutter={80}>
                <Grid.Col span={{ base: 12, md: 5 }}>
                    <Title className={classes.title} order={2}>
                        Open source entity relationship diagrams design tool
                    </Title>
                    <Text c="dimmed">
                        Free to used, no limitations, easy to use. Create and export is just in a few clicks!
                    </Text>

                    {/* <Button
                        variant="gradient"
                        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                        size="lg"
                        radius="md"
                        mt="xl"
                    >
                        Get started
                    </Button> */}
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 7 }}>
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
                        {items}
                    </SimpleGrid>
                </Grid.Col>
            </Grid>
        </div>
    );
}