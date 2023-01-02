import LeftTopBar from "../LeftTopBar";

type LeftNavBarProps = {
    data?: string;
}
    
function LeftNavBar({ data }: LeftNavBarProps){
    return (
        <>
        <LeftTopBar/>
        </>
    )
}
    
export default LeftNavBar
