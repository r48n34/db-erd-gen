import { useEffect } from 'react';
import Splitter from '@devbookhq/splitter'

import useTableStore from '../store/zustandStore';

import ERTableComp from '../components/ERTableComp';
import NavBar from '../components/common/NavBar';
import LeftNavBar from '../components/leftBar/components/LeftNavBar';

import 'reactflow/dist/style.css';
 
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

            <div style={{ height: "93vh" }}>
                <ERTableComp/>
            </div>
            
        </Splitter>
        </>
    )
}
    
export default MainPage
