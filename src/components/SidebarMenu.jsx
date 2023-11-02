import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate} from "react-router-dom"
import { useState } from "react"
import { switchCategory } from "../Context/SidebarCategory"
import { sidebarlinks } from "../utils/links"

const SidebarMenu = () => {

    const [active, setActive] = useState("home")
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const handleSidebarMenu=(link)=>{
        const {category, slug} = link
        if(location.pathname==='/'){
            setActive(slug)
            dispatch(switchCategory(category))
        }else{
            setActive(slug)
            dispatch(switchCategory(category))
            navigate('/')
        }
    }

    return (
        <>
            <div className="max-sm:hidden w-64 mt-3 pr-4">
                {sidebarlinks.map((links, index) => {                    
                    return (
                        <div key={index} className={`flex p-3 m-1 rounded-md ${links.slug===active ? 'bg-gray-100' : ''} hover:bg-gray-200 dark:hover:bg-zinc-800 transition cursor-pointer`}>
                            <div className="flex" onClick={()=>handleSidebarMenu(links)}>
                                {<links.icon size={25} className={`${links.slug!==active ? 'dark:text-white' : ''}`}/>}
                                <p className={`text-l px-5 font-medium ${links.slug!==active ? 'dark:text-white' : ''} `}>{links.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SidebarMenu