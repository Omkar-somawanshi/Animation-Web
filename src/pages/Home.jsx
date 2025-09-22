import React from 'react'
import HomeHero from '../components/home/HomeHero'
import HomeBottom from '../components/home/HomeBottom'

function Home() {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        {/* Use the correct HTML tag for a video */}
        <video 
          src="../../public/69496b2d.mp4" 
          autoPlay 
          loop 
          muted 
          className="h-full w-full object-cover"
        />
      </div>
      <div className='h-screen w-screen overflow-hidden relative flex flex-col justify-between'>
        <HomeHero/>
        <HomeBottom/>
      </div>
    </div>
  )
}

export default Home