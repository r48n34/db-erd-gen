import { ActionIcon, Tooltip } from '@mantine/core';

function GoUrlBtn({ title, url, icon }: { title: string, url: string, icon: JSX.Element }) {
    return (
        <Tooltip label={title}>
            <ActionIcon
                size={18}
                variant="light"
                onClick={() => !!window && window.open(url, '_blank')}
            >
                {icon}
            </ActionIcon>
        </Tooltip>
    );
}

export default GoUrlBtn