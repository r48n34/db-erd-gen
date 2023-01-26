import useTableStore from "../../../store/zustandStore";
import LeftTopBar from "../LeftTopBar";
import DisplayTableComp from "./DisplayTableComp";

function LeftNavBar(){
    // const tableArray = useTableStore((state) => state.tableArray);
    
    return (
        <>
        <LeftTopBar/>
        <DisplayTableComp/> 
        </>
    )
}
    
export default LeftNavBar
