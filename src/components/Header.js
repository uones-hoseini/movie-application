import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
      <div className="container mx-auto px-2">
      <div><img src={logo} alt="logo" width={120} /></div>
      </div>
      
    </div>
  )
}

export default Header
