import React from 'react'
import { NavLink } from 'react-router-dom';

const navLinkStyle = ({isActive}) => {
    return {
        fontWeight: isActive? 'bold' : 'normal',
        textDecoration: isActive? 'none' : 'underline'
    }
}

export default function NavBar() {
  return (
    <nav className='bg-blue-200 pt-4 pb-4 pl-8 pr-8 '>
        <NavLink to='/' className='mr-4 p-2 m-1' style={navLinkStyle} >Home</NavLink>
        <NavLink to='/about' className='mr-4 p-2 m-1' style={navLinkStyle}>About</NavLink>
        <NavLink to='/products' className='mr-4 p-2 m-1' style={navLinkStyle}>Products</NavLink>
    </nav>
  )
}
