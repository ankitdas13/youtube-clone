import { useDispatch } from 'react-redux'
import { fetchVideoResult } from '../Context/searchVideoResult'
import { useEffect } from 'react'

const useFetchVideoResult = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const url = new URLSearchParams(document.location.search)
        const query = (url.size > 0) ? url.get("search_query") : ""
        dispatch(fetchVideoResult(query))
        return()=>{
          
        }
      },[])
}

export default useFetchVideoResult
