import Splitter from '@devbookhq/splitter'

import ERTableComp from '../components/ERTableComp';
import NavBar from '../components/common/NavBar';
import LeftNavBar from '../components/leftBar/components/LeftNavBar';

import 'reactflow/dist/style.css';
 
function MainPage(){
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
        </>
    )
}
    
export default MainPage
