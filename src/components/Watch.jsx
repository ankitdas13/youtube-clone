import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { YOUTUBE_CHANNELS, YOUTUBE_PARENT_COMMENTS, YOUTUBE_VIDEO_DETAILS } from '../utils/constant'
import { BsFillCheckCircleFill } from "react-icons/bs"
import { BiLike, BiDislike } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { watchMode } from '../Context/SidebarSlice'
import { formatNumber } from '../utils/helper'

const Watch = () => {

  const [commentList, setcommentList] = useState(null)
  const [videoDetail, setvideoDetails] = useState(null)
  const [channelDetails, setchannelDetails] = useState(null)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const url = new URLSearchParams(document.location.search)
  const query = (url.size > 0) ? url.get("v") : ""

  useEffect(() => {
    fetchVideosComments()
    fetchVideoDetails()
    dispatch(watchMode(false))

    return()=>{
      dispatch(watchMode(true))
    }
  }, [])

  const fetchVideosComments = async () => {
    const data = await fetch(YOUTUBE_PARENT_COMMENTS + query)
    const json = await data.json()
    setcommentList(json)
  }

  const fetchVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_DETAILS + query)
    const json = await data.json()
    if(json?.items.length === 0){
      setError(true)
      return
    }

    if (json.hasOwnProperty("items")) {
      const data = await fetch(YOUTUBE_CHANNELS + json?.items["0"].snippet?.channelId, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0520fb6ea1msh347b8e851e21aabp1021edjsnec0ba11b7f89',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      })
      const j = await data.json()
      setchannelDetails(j)
      setvideoDetails(json.items[0])
    }
  }

  const textToHtml = (htmlString) => {
    return htmlString?.split("\n").map((i, key) => {
      return <p className='font-semibold' key={key}>{i}</p>
    })
  }

  if(error){
    return <div className='flex justify-center w-screen h-[80vh]'>
       <div className='flex items-center text-3xl font-bold'>This video isn't available anymore</div>
    </div>
  }

  return (
    <div className='flex'>
      <div className='
           sm:w-[100%]
           sm:h-[0%]
           md:w-[768px] 
           md:h-[480px] 
           xl:w-[1280px]
           xl:h-[720px]
           md:px-10
           md:mt-10
           '>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${query}`}
          playing={true}
          controls={true}
          loop={true}
          playbackRate={1}
          width='100%'
          height='100%'
        />
        <div className="pb-10">
          <p className='font-bold text-2xl mt-3 pl-1 pb-3'>{videoDetail?.snippet?.localized?.title}</p>
          <div className='flex justify-between'>
            <div className='flex'>
              <div>
                <div><img className="rounded-full w-12" src={channelDetails?.avatar?.thumbnails[0]?.url} /></div>
              </div>
              <div>
                <div className='flex'>
                  <div className='text-xl font-medium px-2'>{videoDetail?.snippet?.channelTitle}</div>
                  <div className='flex items-center'>{channelDetails?.verified ? <BsFillCheckCircleFill /> : null}</div>
                </div>
                <div className='text-sm font-light px-2'>{channelDetails?.subscriberCountText}</div>
              </div>
            </div>
            <div className='flex'>
              <div className='flex px-4 py-2 rounded-l-full bg-slate-100 border border-stone-400 h-10'>
                <BiLike size={25}/>
                <div>{formatNumber(videoDetail?.statistics?.likeCount,0)}</div>
              </div>
              <div className='flex px-4 py-2 rounded-r-full bg-slate-100 border border-stone-400 h-10'>
                <BiDislike size={25}/>
              </div>
            </div>
          </div>


          <div className='w-full bg-gray-200 h-1/2 mt-5 rounded-md'>
            <p className='p-5'>{textToHtml(videoDetail?.snippet?.localized?.description)}</p>
          </div>
        </div>
        {/* <div>Comments</div> */}
      </div>
      <div className='flex'>
        <div className='bg-gray-200 max-sm:hidden w-[480px] md:mt-10 overflow-scroll h-[70%] rounded-lg'>
          <ul>
            {commentList && commentList?.items.map((comments, i) => (
              <li key={i}>
                <div className='flex'>
                  <div className='px-2 pt-4'>
                    <div className='w-10'><img className="rounded-full" src={comments?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} /></div>
                  </div>
                  <div className='m-2'>
                    <div className='flex items-center'><div dangerouslySetInnerHTML={{ __html: comments?.snippet?.topLevelComment?.snippet?.textDisplay }} /></div>
                    {comments?.snippet?.topLevelComment?.totalReplyCount > 0 ? <div className='text-blue-600 '>{comments?.snippet?.topLevelComment?.totalReplyCount} replies</div> : null}
                  </div>
                </div>
              </li>//
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Watch
