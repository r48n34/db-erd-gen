import Split from '@uiw/react-split';
import useTableStore from '../store/zustandStore';

import ERTableComp from '../components/ERTableComp';
import NavBar from '../components/common/NavBar';
import LeftNavBar from '../components/leftBar/components/LeftNavBar';


import { useHotkeys } from '@mantine/hooks';
import { LoadingOverlay, useMantineColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';

function MainPage() {

    const forceUpdate = useTableStore((state) => state.forceUpdate);
    const tableArray = useTableStore((state) => state.tableArray);
    const updateTablePositions = useTableStore((state) => state.updateTablePositions);
    const update = useTableStore((state) => state.update);

    const { toggleColorScheme } = useMantineColorScheme();

    useHotkeys([
        ['mod+J', () => toggleColorScheme()],
    ]);

    useEffect(() => {
        console.log("Updated tableArray");
    }, [update, tableArray]);

    return (
        <>
            <LoadingOverlay
                visible={forceUpdate}
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2 }}
            />

            <NavBar />
            <Split>

                <div style={{ width: '20%' }}>
                    <LeftNavBar />
                </div>

                {!forceUpdate && (
                    <div style={{ width: '80%', height: "93vh" }}>
                        <ERTableComp
                            tableArray={tableArray}
                            updateTablePositions={updateTablePositions}
                        />
                    </div>
                )}

            </Split>
        </>
    )
}

export default MainPage
