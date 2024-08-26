import React from 'react'
import Services from './Services'

function Home() {
  return (
<>
<div id='hero' className='w-screen flex justify-center items-center border-2 border bg-gray-200 mt-[64px]' style={
 {backgroundImage: `linear-gradient(transparent,rgba(0,0,0,0.8)),url('./electric-bg.avif')`}

}>

  <h2 className=' p-3 text-white font-bold text-4xl min-w-[200px] max-w-[700px]'>Your trusted source for all your electrical needs. We offer a wide range of services for residential and commercial clients, including
</h2>
</div>
<Services/>
</>
  )
}

export default Home