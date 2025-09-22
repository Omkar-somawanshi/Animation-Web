// 
import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-3 mb-3'>
      {/* Apply styles directly to the Link component */}
      <Link 
        className='text-[5vw] h-30 px-10 border-3 border-white text-white rounded-full uppercase flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50]' 
        to='/projects'
      >
        Projects
      </Link>
      <Link 
        className='text-[5vw] h-30 px-10 border-3 text-white border-white rounded-full uppercase flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50]' 
        to='/agence'
      >
        Agence
      </Link>
    </div>
  )
}
export default HomeBottom