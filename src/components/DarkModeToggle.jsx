import React,{useState} from 'react'
import { DARK_MODE_CODE } from '../utils/constant';
import {BiSolidMoon} from 'react-icons/bi'
import {BsSunFill} from 'react-icons/bs'

const DarkModeToggle = () => {
    const [toggle, setToggle] = useState(true);
    const toggleClass = "transform translate-x-6";
    const [darkmode, setDarkMode] = useState(true);

    document.documentElement.classList.toggle("dark",darkmode)    
    document.body.style.backgroundColor = !darkmode ? null : DARK_MODE_CODE
    
    const toggleDarkMode = ()=>{
        
        setDarkMode(!darkmode)
        setToggle(!toggle);
    }
    return (
        <>
        <div
            className="
              md:w-14 
              md:h-7 
              w-12 h-6 
              flex 
              items-center 
              bg-gray-400 
              rounded-full 
              p-1 
              cursor-pointer"
                onClick={toggleDarkMode}
            >
                {/* Switch */}
                <div
                    className={
                        "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                        (toggle ? null : toggleClass)
                    }
                >{ darkmode ? <BiSolidMoon className='md:w-[20px] md:m-1 max-sm:w-5'/> : <BsSunFill className='md:w-[20px] md:m-1 max-sm:w-5'/>}</div>
            </div>     
        </>
    );
}

export default DarkModeToggle
