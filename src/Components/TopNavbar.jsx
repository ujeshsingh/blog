import React from 'react'
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Send } from 'lucide-react';
import { SquareM } from 'lucide-react';
import { NavLink } from 'react-router';

export default function TopNavbar() {
  return (
    <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600'>
    <div className='w-11/12 md:w-8/12  mx-auto flex justify-between py-2 text-white'>
        {/* TopNavbar */}
    <div className='hidden md:block'> 
      <div className='flex gap-4'>
    <SquareM />
    <Twitter />
    <Instagram />
    <Send />  
    </div>
    </div>
   

    <div className='flex items-center gap-4'>
        <NavLink to="/about">About-us</NavLink>
        <p>-</p>
        <NavLink to="/login">Login</NavLink>
        <p>-</p>
        <NavLink to="/contact">Contact</NavLink>
    </div>
    
    
    
    
    
    
    
    
    </div>
    </div>
  )
}
