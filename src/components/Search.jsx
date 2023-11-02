import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchVideoSuggestion } from '../Context/searchAuthCompletionSlice'
import { useSelector } from 'react-redux'
import { fetchVideoResult } from '../Context/searchVideoResult'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [focusSearch, setFocusSearch] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Subscribe store 
    const autoComplete = useSelector(store=>store.searchautoComplete.results)
   
    useEffect(() => {
        const timeout = setTimeout(() => dispatch(fetchVideoSuggestion(searchQuery)) , 300)
        return () => {
            clearInterval(timeout)
        }
    }, [searchQuery])


    const handleOnChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearch=(query)=>{
        setSearchQuery(query)
        setFocusSearch(false)
        dispatch(fetchVideoResult(query))
        navigate('/result?search_query='+query)
    }

    const handleOnClick=()=>{
        if(searchQuery.length < 0 ) return false
        console.log('search call..')
        dispatch(fetchVideoResult(searchQuery))
        navigate('/result?search_query='+searchQuery)
    } 

    return (
        <>
        <div className="flex justify-center col-span-5 p-2 max-sm:hidden">
            <input 
              className="rounded-l-full bg-slate-100 w-1/2 border border-gray-400 pl-5 dark:bg-zinc-400" 
              name="search" type="text" 
              onChange={handleOnChange} 
              autoComplete='off'
              value={searchQuery}
              onFocus={()=>{setFocusSearch(true)}}
              onBlur={()=>{ setTimeout(()=> setFocusSearch(false), 200)}}
            />
            <div className="flex rounded-r-full bg-slate-100 px-5 border border-gray-400 dark:bg-zinc-400">
                <button onClick={handleOnClick}><AiOutlineSearch size={25}/></button>
            </div>
           {
          
          focusSearch && autoComplete.length > 0 ? (
                <div className="fixed top-16 w-[470px] bg-slate-100 border border-gray-400 mt-1 rounded-md">
                <ul>
                  {autoComplete.map((d,i)=>(
                    <div key={i} className='text-sm py-2 px-4 hover:bg-gray-300' onClick={()=>handleSearch(d)}>{d}</div>
                  ))}
               </ul>
             </div>
            ) : null
           }
        </div>
        </>
    )
}

export default Search
