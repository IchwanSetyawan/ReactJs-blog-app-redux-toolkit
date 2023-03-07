import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-blue-900 text-white font-semibold p-8'>
        <Link to={'/'}><h1 className='text-2xl'><span className='text-orange-600'>M</span>y Blog</h1></Link>
        <div className='flex justify-between gap-8'>
            <Link to={'/'}>Home</Link>
            <Link to={'add-post'}>Post</Link>
        </div>
    </div>
  )
}

export default Navbar