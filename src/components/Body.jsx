import MainContainer from "./MainContainer"
import SideBar from "./SideBar"
import {Outlet} from "react-router-dom"

const Body=()=>{
    return (
        <div className="flex px-5 absolute z-[-1]">
            <SideBar/>
            <Outlet/>
        </div>
    )
}

export default Body