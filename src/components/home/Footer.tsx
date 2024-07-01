import { Container, Group, Anchor, Box, Text } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '../../styles/FooterSimple.module.css';
import { IconDatabaseExport } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import ThemeToggleSwitch from '../common/ThemeToggleSwitch';

const links = [
    { link: '/home', label: 'Home', format: "internal" },
    { link: '/', label: 'DB graphers', format: "internal" },
    { link: 'https://github.com/r48n34/db-erd-gen', label: 'Github', format: "external" },
];

function Footer() {
    const navigate = useNavigate();
    
    const items = links.map((link) => (
        <Anchor<'a'>
            c="dimmed"
            key={link.label}
            href={link.link}
            onClick={(event) => {
                event.preventDefault();
                if(link.format === "internal"){
                    navigate(link.link)
                }
                else { 
                    !!window && window.open(link.link, '_blank')
                }
            }}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Group>
                    <IconDatabaseExport size={16} />
                    <Text c="dimmed" fz={12}>
                        © {new Date().getFullYear()} Reemo Studio. All Rights Reserved.
                    </Text>
                </Group>

                <Group className={classes.links}>
                    {items}
                    <ThemeToggleSwitch />
                </Group>
            </Container>
        </div>
    );
}

export default Footer
