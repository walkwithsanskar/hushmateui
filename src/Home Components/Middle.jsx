import React from 'react'

const Middle = () => {
  return (
   <div className='  w-f bg-black'>
     <div className='w-full bg-black py-16 px-4 '>
        
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img
        src="https://media.giphy.com/media/z3ZzHIN66i7X6KAbxh/giphy.gif"
        alt="Among Us GIF"
        className="mx-auto mb-6 mt-4 " // Adjust margin-bottom as needed
        onError={(e) => {
          console.error("Error loading GIF:", e);
        }}
        />
          <div className='flex flex-col gap-3'>
              <p className=' text-white text-xl mx-auto md:text-2xl  '>Share Your Secrets Right Now</p>
              <h1 className='text-white text-sm text-center font-extrabold'>Let your intrusive thoughts reach out the world</h1>
              <p className='text-white'>Unleash the power of secrecy with Hush Mate, the ultimate platform for anonymously sharing your deepest thoughts. Our MERN stack app ensures a secure and confidential space where you can express yourself freely without any fear. Dive into a world of discreet revelations, confessions, and secrets, all protected by the cloak of anonymity.</p>
              <button className="w-full sm:w-auto md:w-auto mx-auto bg-red-700 hover:bg-red-400 transform hover:scale-105 font-medium rounded-md my-6 px-6 py-4 transition duration-300 ease-in-out">
Drop a Message
</button>

          </div>
        </div>

  </div>
   </div>
  )
}

export default Middle