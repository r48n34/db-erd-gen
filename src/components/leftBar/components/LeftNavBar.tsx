import { grandData } from "../../../data/testInputData";
import LeftTopBar from "../LeftTopBar";
import DisplayTableComp from "./DisplayTableComp";

type LeftNavBarProps = {
    data?: string;
}
    
function LeftNavBar({ data }: LeftNavBarProps){
    return (
        <>
        <LeftTopBar/>
        <DisplayTableComp data={grandData} />
        </>
    )
}
    
export default LeftNavBar
