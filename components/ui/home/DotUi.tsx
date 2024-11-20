import { Dot } from 'lucide-react'
import React from 'react'

const DotUi = () => {
  return (
    <div>
       <div className='flex items-center justify-center mt-14'>
        <Dot className='text-purple-400 h-10 w-10'></Dot>
        <Dot className='text-purple-400 h-10 w-10'></Dot>
        <Dot className='text-purple-400 h-10 w-10'></Dot>
      </div>
    </div>
  )
}

export default DotUi
