import { RxHamburgerMenu } from "react-icons/rx"
import { FaCircleUser } from "react-icons/fa6"
import Logo from "../assets/logo.png"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../Context/SidebarSlice"
import Search from "./Search"
import { Link } from "react-router-dom"
import DarkModeToggle from "./DarkModeToggle"
import { DARK_MODE_CODE } from "../utils/constant"

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className={`pt-5 px-5 grid grid-flow-col dark:bg-[${DARK_MODE_CODE}]`}>
            <div className="flex col-span-3 item-center gap-6 items-center">
                <RxHamburgerMenu size={25} className="flex cursor-pointer max-sm:hidden dark:text-white" onClick={()=>dispatch(toggleMenu())}/>
                <Link to="/"><img alt="logo" src={Logo} className="w-[150px] dark:invert dark:grayscale" /></Link>
            </div>
            <Search/>
            <div className="col-span-2 flex flex-row-reverse items-center">
               <DarkModeToggle/>
            </div>
            <div className="col-span-1 flex flex-row-reverse items-center">
                <FaCircleUser size={25} />
            </div>
        </div>
    )
}

export default Header