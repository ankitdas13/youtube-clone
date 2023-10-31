import { GoHomeFill } from "react-icons/go"
import { BsCollectionPlay } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate} from "react-router-dom"
import { SiYoutubegaming } from "react-icons/si"
import { MdOutlineMusicNote } from "react-icons/md"
import { BiMoviePlay, BiNews, BiLaptop } from "react-icons/bi"
import { useState } from "react"
import { switchCategory } from "../Context/SidebarCategory"

const SidebarMenu = () => {
    const isSidebarOpen = useSelector(store => store.sidebar.isMenuOpen)
    const [active, setActive] = useState("home")
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const sidebarlinks = [
        {
            slug: 'home',
            title: 'Home',
            icon: <GoHomeFill size={25} />
        },
        {
            slug: 'music',
            category: '10',
            title: 'Music',
            icon: <MdOutlineMusicNote size={25}/>
        },
        {
            slug: 'gaming',
            category: '20',
            title: 'Gaming',
            icon: <SiYoutubegaming size={25}/>
        },
        {
            slug: 'entertainment',
            category: '24',
            title: 'Entertainment',
            icon: <BiMoviePlay size={25}/>
        },
        {
            slug: 'news',
            category: '25',
            title: 'News',
            icon: <BiNews size={25}/>
        },
        {
            slug: 'gadgets',
            category: '28',
            title: 'Gadgets',
            icon: <BiLaptop size={25}/>
        },
    ]

    const handleSidebarMenu=(category)=>{
        if(location.pathname==='/'){
            dispatch(switchCategory(category))
        }else{
            dispatch(switchCategory(category))
            navigate('/')
        }
    }

    if (!isSidebarOpen) return null

    return (
        <>
            <div className="max-sm:hidden w-64 mt-3 pr-4">
                {sidebarlinks.map((links, index) => {
                    if (links.slug === 'home') {
                        return (
                            <Link to={'/'} key={index}>
                               <div className={`flex p-3 m-1 rounded-md ${links.slug===active ? 'bg-gray-100' : ''} hover:bg-gray-200 transition`}>
                                
                                    <div className="flex">
                                        {links.icon}
                                        <p className="text-l px-5 font-medium">{links.title}</p>
                                    </div>
                               </div>
                            </Link>
                        )
                    }
                    return (
                        <div key={index} className={`flex p-3 m-1 rounded-md ${links.slug===active ? 'bg-gray-100' : ''} hover:bg-gray-200 transition cursor-pointer`}>
                            <div className="flex" onClick={()=>handleSidebarMenu(links.category)}>
                                {links.icon}
                                <p className="text-l px-5 font-medium">{links.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SidebarMenu