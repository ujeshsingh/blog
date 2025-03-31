import React from 'react'
import ball from "../../../blog/src/images/ball.webp"
import { NavLink } from "react-router"


export default function FeedSection() {
  return (
    <div className='w-11/12 md:w8/12 mx-auto space-y-4'> 
        {/* FeedSection */}
        {/* Card */}
        <div className='bg-gray-800 text-white shadow-md border-gray-50 rounded-2xl p-4 group'>
            <div className='md:flex gap-6 space-y-4'>
                <img src={ball} className='h-40 w-full object-cover rounded-2xl group-hover:scale-105 duration-500'
                alt="" />
                <div className='text-white'>
                    <NavLink to="/blog/1" className='flex flex-col text-2xl font-medium mb-4 group-hover:text-pink-500 duration-500 border-b-3 border-white group-hover-border-pink-500'>The Benefits Of Traveling With A Second Language</NavLink>
                    <span className='text-white'>By Jessica Smith  6 Comments</span>
                    <p className='text-lg text-white mt-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by...</p>
                   
                </div>


            </div>

            {/* Bottom */}
            


        </div>
        
        {/* card end */}

      

       

        <div className='bg-gray-800 text-white shadow-md border-gray-50 rounded-2xl p-4 group'>
            <div className='flex gap-6'>
                <img src={ball} className='h-40 w-40 rounded-2xl'
                alt="" />
                <div className='text-white'>
                    <h1 className='text-2xl font-medium mb-4 group-hover:text-pink-500 duration-500 border-b-3 border-white group-hover-border-pink-500'>The Benefits Of Traveling With A Second Language</h1>
                    <span className='text-white'>By Jessica Smith  6 Comments</span>
                    <p className='text-lg text-white mt-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by...</p>
                   
                </div>


            </div>

            {/* Bottom */}
            <div className='flex items-center justify-between border-t border-dashed mt-4 border-gray-300 pt-4'>
                
                <p><span className='text-pink-500'>#</span>Lifestyle<span className='text-pink-500'>#</span>Trending</p>
                <div></div>
                <div> 299 Views  3 Min Read</div>




                </div>





        </div>
        
        





        </div>
  )
}
