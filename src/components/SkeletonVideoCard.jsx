import React from 'react'
import { useSelector } from "react-redux"


const SkeletonVideoCard = () => {
    const isSidebarOpen = useSelector(store=> store.sidebar.isMenuOpen)
    return (
        Array.from(Array(8).keys()).map((ele, i) => (
            <div className="flex" key={i}>
                <div className={(isSidebarOpen) ? 'md:w-96' : 'md:w-[28rem]'}>
                  <div className="flex-shrink-0">
                        <span className="max-sm:w-[320px] h-[240px] m-5 rounded-md block bg-gray-200 dark:bg-gray-300"></span>
                    </div>
                </div>
            </div>
        ))
    )
}

export default SkeletonVideoCard
