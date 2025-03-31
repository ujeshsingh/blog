import React from 'react'

export default function RegisterPage() {
  return (
    <div>
      {/* RegisterPage */}
      <div className='flex items-center justify-center h-[90vh]'>
      <form className='w-4/12 border border-gray-300 p-8 space-y-4'>

      <p className='text-3xl font-semibold text-center'>Register</p>
        
        <div className='flex flex-col'>
            <label htmlFor="email-address">Email Address</label>
            <input id="email-address"type="email" placeholder='Enter your Email Address' className='border border-gray-500 px-2 py-1 outline-none' />

        </div>

        <div className='flex flex-col'>
          <label htmlFor="User-password">Password</label>
          <input  id="user-password" type="password" placeholder='********' className='border border-gray-500 px-2 py-1 outline-none'/> 
        </div>


        <div className='flex flex-col'>
          <label htmlFor="User-password">Conform Password</label>
          <input  id="user-password" type="Conform password" placeholder='********' className='border border-gray-500 px-2 py-1 outline-none'/> 
        </div>

        <button className='bg-blue-700 px-8 py-1.5 text-white hover:bg-pink-500 duration-500 cursor-pointer '>Register</button>



      </form>


      </div>
      
      
      
      </div>
  )
}
