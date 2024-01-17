import React from 'react'

const ImageModal = ({setShowModal,image}) => {
  return (
    <div className='absolute w-[100%] h-[100%] pt-10 backdrop-blur-lg bg-opacity-50 px-2'>
       <div className='flex flex-col items-center gap-3'>

       <button  className='px-2 py-2 text-xl bg-green-600 rounded-md text-white font-bold' onClick={()=>setShowModal(false)}>Close</button>
        <img src={image} className='lg:w-[50%] md:w-[50%] sm:w-[70%] w-[70%]  aspect-square object-cover'/>

       </div>
    </div>
  )
}

export default ImageModal