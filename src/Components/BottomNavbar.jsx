import React from 'react'
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Send } from 'lucide-react';
import { NavLink } from "react-router";

export default function BottomNavbar() {
  return (
    <div className='bg-gray-700 shadow-xl h-16 flex items-center'>
    <div className='w-11/12 md:w-8/12 mx-auto flex justify-between py-3 text-white'>
      {/* BottomNavbar */}
      <div className='text-2xl  font-semibold'>Syron</div>
      
      <div className='hidden lg:block'>
      <div className='flex items-center gap-4 text-gray-100 hover:border-s-zinc-800 '>
        
        <NavLink to="/" className='hover:text-neutral-300 duration-300 hover:bg-gray-900 hover:cursor-pointer'>Home</NavLink>
        <NavLink to="/about" className='hover:text-neutral-300 duration-300 hover:bg-gray-900 hover:cursor-pointer'>About</NavLink>
        <NavLink to="/dashboard" className='hover:text-neutral-300 duration-300 hover:bg-gray-900 hover:cursor-pointer'>Dashboard</NavLink>
        <NavLink to="/login" className='hover:text-neutral-300 duration-300 hover:bg-gray-900 hover:cursor-pointer'>login</NavLink>
        <NavLink to="/Register" className='hover:text-neutral-300 duration-300 hover:bg-gray-900 hover:cursor-pointer'>Register</NavLink>
        <NavLink to="/contact" className='hover:text-neutral-300 duration-300 hover:bg-gray-900 hover:cursor-pointer'>Contact</NavLink>
        <div className="bg-pink-800 hidden md:block  hover:bg-black hover:text-white px-2 py-1 duration-500 cursor-pointer border-l border-r border-none rounded-md">
       <NavLink  to="/join us">
        <button className='flex items-center gap-2'><span><Send size={16} /></span>Join us</button>
        </NavLink>
        </div>
        <p><Search /></p>
        <p><Moon />

        
        </p>
        <p><Menu /></p>
        


      </div>
      </div>
      
      
      </div>
      </div>
  )
}
