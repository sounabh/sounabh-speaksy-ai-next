import React from 'react'

const UploadPost = () => {

  //red warning box if user status in inactive
  return (
    <div className='flex flex-col gap-6 items-center justify-center text-center'>

      <p className='mt-2 leading-8 text-lg text-gray-600 max-w-2xl text-center border-2 border-red-200 bg-red-100  p-4 rounded-lg border-dashed '>
        You need to upgrade to any of basic or pro plan to use our blog post services
      </p>

    </div>
  )
}

export default UploadPost
