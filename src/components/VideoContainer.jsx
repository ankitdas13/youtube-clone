import VideoCard from "./VideoCard"
import { useState, useRef, useCallback } from "react"
import useAllVideos from "../hook/useAllVideos"
import SkeletonVideoCard from "./SkeletonVideoCard"

const VideoContainer = () => {
    const [pageNum, setPageNum] = useState("")
    const {
        result,
        isLoading,
        isError,
        error,
        hasNextPageToken,
        hasNextPage
    } = useAllVideos(pageNum)
    
    const intObersver = useRef()

    const lastRefObserver = useCallback(video=>{
      if(isLoading) return

      if(intObersver.current) intObersver.current.disconnect()

      intObersver.current = new IntersectionObserver(videos=>{
        if(videos[0].isIntersecting && hasNextPage){
           console.log('oberserving',hasNextPageToken)
           console.log(hasNextPageToken)
           setPageNum(hasNextPageToken)
        }
      })

      if(video) intObersver.current.observe(video)

    },[isLoading,hasNextPage])

    
    const content = result.map((video,i)=>{
        if(result.length === i + 1){
           return <VideoCard key={i} data={video} ref={lastRefObserver}/>
        }
        return <VideoCard key={i} data={video}/>
    })
    return (
       <>
         {content}
         {isLoading && <SkeletonVideoCard/>}
       </>
    )
}

export default VideoContainer