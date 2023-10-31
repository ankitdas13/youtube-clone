import React from 'react'
import SkeletonList from './SkeletonList'

const Live = () => {
  return (
    <div className="w-full mt-3 px-2 bg-gray-50 rounded-md">
      <div className='w-[70%]'>
         <SkeletonList/>  
      </div>
    </div>
  )
}

export default Live
