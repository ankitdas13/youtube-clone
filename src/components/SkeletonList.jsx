import React from 'react'

const SkeletonList = () => {
    return (
        Array.from(Array(5).keys()).map((ele, index) =>  (
            <div>
                <div className="flex animate-pulse py-5">
                    <div className="flex-shrink-0">
                        <span className="w-[320px] h-[200px] rounded-md block bg-gray-200 dark:bg-gray-300"></span>
                    </div>

                    <div className="ml-4 mt-2 w-full">
                        <h3 className="h-3 bg-gray-200 rounded-md  dark:bg-gray-300 w-[40%]"></h3>

                        <ul className="mt-5 space-y-3">
                            <li className="w-1/4 h-3 bg-gray-200 rounded-md  dark:bg-gray-300"></li>
                            <li className="w-52 h-3 bg-gray-200 rounded-md  dark:bg-gray-300"></li>
                            <li className="w-1/3 h-3 bg-gray-200 rounded-md  dark:bg-gray-300"></li>
                            <li className="w-1/2 h-3 bg-gray-200 rounded-md  dark:bg-gray-300"></li>
                        </ul>
                    </div>
                </div>
            </div>
        ))
    )
}

export default SkeletonList
