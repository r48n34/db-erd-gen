import Splitter from '@devbookhq/splitter'
import { Text } from '@mantine/core';

// import ThemeToggleBtn from '../components/common/ThemeToggleBtn';
import ERTableComp from '../components/ERTableComp';
import NavBar from '../components/common/NavBar';

import 'reactflow/dist/style.css';

type MainPageProps = {
    data?: string;
}
    
function MainPage({ data }: MainPageProps){
    return (
        <>
        <NavBar/>
        <Splitter initialSizes={[18, 82]}>

            <div>
                <Text>Hello</Text>
                Tile 1
            </div>

            <div style={{ height: "95vh", }}>
                <ERTableComp/>
            </div>
            
        </Splitter>
        </>
    )
}
    
export default MainPage
