import { Container, Group, Anchor } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '../../styles/FooterSimple.module.css';
import { IconDatabaseExport } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

const links = [
    { link: '/home', label: 'Home' },
    { link: '/', label: 'DB graphers' },
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
                navigate(link.link)
            }}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <IconDatabaseExport size={24} />
                <Group className={classes.links}>{items}</Group>
            </Container>
        </div>
    );
}

export default Footer
