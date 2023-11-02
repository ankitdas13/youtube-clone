import MainContainer from "./MainContainer"
import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { DARK_MODE_CODE } from "../utils/constant"

const Body = () => {

    document.documentElement.classList.toggle('dark', true);

    const isSideBarOpen = useSelector(store => store.sidebar.isMenuOpen)

    const content = isSideBarOpen ? <div className="fixed px-3 w-[15%] z-[1] max-sm:hidden"><SideBar /></div> : null
    

    return (
        <div className={`w-full flex absolute z-[-1]`}>
            {content}
            <div className={`px-3 ${isSideBarOpen ? 'md:ml-[15%]': null}`}>
                <Outlet />
            </div>
        </div>
    )
}

export default Body
