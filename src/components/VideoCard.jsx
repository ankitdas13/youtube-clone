import { Link } from "react-router-dom"
import {formatNumber} from "../utils/helper"
import { useSelector } from "react-redux"
import React from "react"
import { DARK_MODE_CODE } from "../utils/constant"

const VideoCard = React.forwardRef(({ data }, ref) => {
    const isSidebarOpen = useSelector(store => store.sidebar.isMenuOpen)

    const cardBody = (
        <div key={data?.id} className="flex">
            <Link to={`/watch?v=${data?.id}`}>
                <div className={`${(isSidebarOpen) ? 'md:w-96' : 'md:w-[28rem]'} dark:bg-[${DARK_MODE_CODE}]`}>
                    <img alt="thumbnail"
                        className="p-2 rounded-2xl max-sm:w-[640px] w-full"
                        src={data?.snippet.thumbnails.medium.url} />
                    <p className="text-l px-2 font-semibold dark:text-white">{data?.snippet.title}</p>
                    <p className="text-sm pt-1 px-2 font-sans dark:text-white">{data?.snippet.channelTitle}</p>
                    <p className="text-sm pt-1 px-2 font-sans dark:text-white">{formatNumber(data?.statistics.viewCount, 1)} views</p>
                </div>
            </Link>
        </div>
    )

    const content = ref ? <div ref={ref}>{cardBody}</div> : <div>{cardBody}</div>

    return (
        <>
          {content}
        </>
    )
})

export default VideoCard