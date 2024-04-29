// import React from 'react';
import { useReactFlow, getRectOfNodes, getTransformForBounds } from 'reactflow';
import { toPng } from 'html-to-image';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconCamera } from '@tabler/icons';

function downloadImage(dataUrl: string) {
    const a = document.createElement('a');

    a.setAttribute('download', 'reactflow.png');
    a.setAttribute('href', dataUrl);
    a.click();
}

function DownloadButton() {
    const { getNodes } = useReactFlow();

    const onClick = () => {

        const imageWidth = 1024;
        const imageHeight = 768;

        const nodesBounds = getRectOfNodes(getNodes());
        const transform = getTransformForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2);

        if(document.querySelector('.react-flow__viewport')){
            toPng(document.querySelector('.react-flow__viewport') as any, {
                backgroundColor: '#1a365d',
                width: imageWidth,
                height: imageHeight,
                style: {
                    width: imageWidth + "",
                    height: imageHeight + "",
                    transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
                },
            }).then(downloadImage);
        }

    };

    return (
        <>
        <Tooltip label="Download Image">
        <ActionIcon
            size={"md"}
            radius={"lg"}
            variant="light"
            onClick={onClick}
            title="Download Image"
        >
            <IconCamera size={16} />
        </ActionIcon>
        </Tooltip>
        </>
    );
}

export default DownloadButton
