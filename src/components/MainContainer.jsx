import { DARK_MODE_CODE } from "../utils/constant"
import VideoContainer from "./VideoContainer"

const MainContainer=()=>{
    
    return (
        <div className={`w-full mt-3 px-2 dark:bg-[${DARK_MODE_CODE}] rounded-md flex flex-wrap`}>
           <VideoContainer/>
        </div>
    )
}

export default MainContainer