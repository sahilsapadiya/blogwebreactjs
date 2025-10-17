// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//       <div className=' flex justify-between p-2 bg-background/50 backdrop:blur fixed   rounded-[300px] mt-[20px] h-[70px] items-center top-0 left-0 w-full text-white border  border-red-300 backdrop-blur-[20px]  '>
//         <div className='hover:text-black text-[25px] pl-[2px]'>OUR BLOG</div>
//         <div className='flex  bg-background/50 backdrop:blur gap-[70px] items-center mr-[20px]'>
//           <NavLink to={'/home'}>Home</NavLink>
//           <NavLink to={'/blog'}>Blogs</NavLink>
//           <NavLink to={'/privacy'}>Privacy</NavLink>
//           <NavLink to={'/about'}>About</NavLink>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='flex justify-between items-center p-2 bg-background/50 backdrop-blur fixed rounded-[300px] mt-[20px] h-[70px] top-0 left-0 w-full text-white border border-red-300 '>
        {/* Logo */}
        <div className='hover:text-black text-[25px] pl-[2px] '>OUR BLOG</div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-[70px] bg-background/50 backdrop-blur items-center mr-[20px]'>
          <NavLink to={'/home'}>Home</NavLink>
          <NavLink to={'/blog'}>Blogs</NavLink>
          <NavLink to={'/privacy'}>Privacy</NavLink>
          <NavLink to={'/about'}>About</NavLink>
        </div>

        {/* Hamburger */}
        <div className='md:hidden mr-5' onClick={() => setIsOpen(!isOpen)}>
          <div className='w-6 h-1 bg-white mb-1'> </div>
          <div className='w-6 h-1 bg-white mb-1' > </div>
          <div className='w-6 h-1 bg-white '> </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='flex flex-col items-center bg-background/80 backdrop-blur text-white mt-[70px] py-5 gap-5 md:hidden fixed w-full top-0 left-0 z-50'>
          <NavLink to={'/home'} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to={'/blog'} onClick={() => setIsOpen(false)}>Blogs</NavLink>
          <NavLink to={'/privacy'} onClick={() => setIsOpen(false)}>Privacy</NavLink>
          <NavLink to={'/about'} onClick={() => setIsOpen(false)}>About</NavLink>
        </div>
      )}
    </>
  )
}

export default Navbar
