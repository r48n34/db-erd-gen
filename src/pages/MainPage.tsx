import Splitter from '@devbookhq/splitter'

import ERTableComp from '../components/ERTableComp';
import NavBar from '../components/common/NavBar';

import 'reactflow/dist/style.css';
import LeftNavBar from '../components/leftBar/LeftNavBar';

type MainPageProps = {
    data?: string;
}
    
function MainPage({ data }: MainPageProps){
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
