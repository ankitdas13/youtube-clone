import React from 'react'
import { Link } from "react-router-dom"

const ResultVideos = ({ data }) => {
    
    return (
        <div>
            <Link to={`/watch?v=${data?.id?.videoId}`}>
                <div className='flex py-5'>
                    <img className="rounded-md" src={data.snippet.thumbnails.medium.url} />
                    <div>
                        <p className='px-3 text-xl font-semibold dark:text-white'>{data.snippet?.title}</p>
                        <p className='px-3 text-sm font-thin mt-3 dark:text-white'>{data.snippet.channelTitle}</p>
                        <p className='px-3 text-sm font-sans mt-3 dark:text-white'>{data.snippet.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ResultVideos
