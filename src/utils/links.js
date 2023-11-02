import { SiYoutubegaming } from "react-icons/si"
import { MdOutlineMusicNote } from "react-icons/md"
import { BiMoviePlay, BiNews, BiLaptop } from "react-icons/bi"
import { GoHomeFill } from "react-icons/go"

export const sidebarlinks = [
    {
        slug: 'home',
        category: '17',
        title: 'Home',
        icon: GoHomeFill
    },
    {
        slug: 'music',
        category: '10',
        title: 'Music',
        icon: MdOutlineMusicNote 
    },
    {
        slug: 'gaming',
        category: '20',
        title: 'Gaming',
        icon: SiYoutubegaming
    },
    {
        slug: 'entertainment',
        category: '24',
        title: 'Entertainment',
        icon: BiMoviePlay
    },
    {
        slug: 'news',
        category: '25',
        title: 'News',
        icon: BiNews
    },
    {
        slug: 'gadgets',
        category: '28',
        title: 'Gadgets',
        icon: BiLaptop
    },
]