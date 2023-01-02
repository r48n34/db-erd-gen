import Splitter from '@devbookhq/splitter'
import ERTableComp from '../components/ERTableComp';
// import NavBar from '../components/common/NavBar';
import 'reactflow/dist/style.css';
import ThemeToggleBtn from '../components/common/ThemeToggleBtn';

type MainPageProps = {
    data?: string;
}
    
function MainPage({ data }: MainPageProps){
    return (
        <>
        <Splitter initialSizes={[18, 82]}>

            <div>
                Tile 1
                <ThemeToggleBtn/>
            </div>

            <div style={{ height: "100vh", }}>
                <ERTableComp/>
            </div>
            
        </Splitter>
        </>
    )
}
    
export default MainPage
