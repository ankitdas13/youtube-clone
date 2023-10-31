import React,{useEffect, useState} from 'react'
import ResultVideos from './ResultVideos'
import { useDispatch, useSelector } from 'react-redux'
import SkeletonList from './SkeletonList'
import { fetchVideoResult } from '../Context/searchVideoResult'
import useFetchVideoResult from '../hook/useFetchVideoResult'


const Result = () => {
    const videoSearch = useSelector(store => store.searchVideoResult.results)
    const [resultList, setresultList] = useState([])

    useFetchVideoResult()
    
    useEffect(()=>{
      setresultList(videoSearch)
       return ()=>{
        setresultList([])
       }
    },[videoSearch])
    
    
    return (
    <div className="w-full mt-3 px-2 bg-gray-50 rounded-md">
        <div className='w-[70%]'>
          {resultList.length > 0 ? resultList.map((result,i)=>(
            <ResultVideos key={i} data={result}/>
          )): <SkeletonList/>  }  
        </div>
    </div>
  )
}

export default Result
