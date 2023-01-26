import Splitter from '@devbookhq/splitter'

import ERTableComp from '../components/ERTableComp';
import NavBar from '../components/common/NavBar';
import LeftNavBar from '../components/leftBar/components/LeftNavBar';

import 'reactflow/dist/style.css';

import { useEffect } from 'react';
import useTableStore from '../store/zustandStore';
import DebugModal from '../debug/DebugModal';
 
function MainPage(){
    
    const update = useTableStore((state) => state.update);
    
    useEffect(() => {
        console.log("Updated tableArray");
    }, [update]);

    return (
        <>
        <NavBar/>
        <Splitter initialSizes={[18, 82]}>

            <div>
                <LeftNavBar/>
            </div>

            <div style={{ height: "95vh" }}>
                <ERTableComp/>
            </div>
            
        </Splitter>
        <DebugModal/>
        </>
    )
}
    
export default MainPage
