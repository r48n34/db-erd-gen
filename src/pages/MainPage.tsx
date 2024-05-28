import { useEffect } from 'react';
// import Splitter from '@devbookhq/splitter'
import Split from '@uiw/react-split';

import useTableStore from '../store/zustandStore';

import ERTableComp from '../components/ERTableComp';
import NavBar from '../components/common/NavBar';
import LeftNavBar from '../components/leftBar/components/LeftNavBar';

import 'reactflow/dist/style.css';
import { useHotkeys } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/core';
 
function MainPage(){

    const tableArray = useTableStore((state) => state.tableArray);
    const updateTablePositions = useTableStore((state) => state.updateTablePositions);
    const update = useTableStore((state) => state.update);

    const { toggleColorScheme } = useMantineColorScheme();

    useHotkeys([
        ['mod+J', () => toggleColorScheme()],
    ]);
    
    useEffect(() => {
        console.log("Updated tableArray");
    }, [update]);

    return (
        <>
        <NavBar/>
        <Split>

            <div style={{ width: '20%' }}>
                <LeftNavBar/>
            </div>

            <div style={{ width: '80%', height: "93vh" }}>
                <ERTableComp
                    tableArray={tableArray}
                    updateTablePositions={updateTablePositions}                
                />
            </div>
            
        </Split>
        </>
    )
}
    
export default MainPage
