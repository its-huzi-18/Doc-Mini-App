// eslint-disable-next-line no-unused-vars
import React from 'react'

function Background() {
  return (
    <div className='w-full fixed h-screen z-[2]'>
      <div className='absolute top-[5%] w-full flex justify-center py-10 text-zinc-600 text-center text-xl font-semibold'>Document</div>
      <h1 className='text-zinc-900 font-semibold text-[13vw]  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>Docs.</h1>
    </div>
  )
}

export default Background