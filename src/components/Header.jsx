import { RxHamburgerMenu } from "react-icons/rx"
import { FaCircleUser } from "react-icons/fa6"
import Logo from "../assets/logo.png"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../Context/SidebarSlice"
import Search from "./Search"
import { Link } from "react-router-dom"

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className="mt-5 px-5 grid grid-flow-col">
            <div className="flex col-span-3 item-center gap-6 items-center ">
                <RxHamburgerMenu size={25} className="flex cursor-pointer max-sm:hidden" onClick={()=>dispatch(toggleMenu())}/>
                <Link to="/"><img alt="logo" src={Logo} className="w-[150px]" /></Link>
            </div>
            <Search/>
            <div className="col-span-4 flex flex-row-reverse">
                <FaCircleUser size={25} />
            </div>
        </div>
    )
}

export default Header