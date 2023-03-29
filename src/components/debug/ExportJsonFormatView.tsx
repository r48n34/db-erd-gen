import { Modal, NavLink } from "@mantine/core";
import { IconFileExport } from '@tabler/icons';

import useTableStore from "../../store/zustandStore";

import { Prism } from '@mantine/prism';
import { useState } from "react";

function ExportJsonFormatView(){

    const [ opened, setOpened ] = useState<boolean>(false);
    const [ jsonContent, setJsonContent ] = useState<string>("");
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Modal
            size="85%"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Json Code"
        >
            <Prism language="json">
                {jsonContent}
            </Prism>
        </Modal>


        <NavLink
            label="Export json (View)"
            icon={<IconFileExport size={16} stroke={1.5} />}
            onClick={ () => {
                setJsonContent(JSON.stringify(tableArray, null, "\t"));
                setOpened(true);
            }}
        />
        </>
    )
}
    
export default ExportJsonFormatView
