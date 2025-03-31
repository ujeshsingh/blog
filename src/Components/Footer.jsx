import React from 'react'
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Send } from 'lucide-react';
import { SquareM } from 'lucide-react';

export default function Footer() {
  return (
   <div  className='w-10/12 mx-auto space-y-4'>
   <div >
      {/* Footer */}
      {/* first */}
      <div className='flex justify-between space-y-6'>
        <div className=''>1
        <p className='text-3xl font-bold'>Syron</p>
        <p className='text-gray-700'>This is a great space to write text <bold>about your</bold><br></br>
           company and your services. You can use this <br></br> space to go into a little more details about <br></br>your company. </p>
        </div>
        



        <div  className='text-gray-700'>2
          <p className='font-bold'>Links</p>
          <p>About Us</p>
          <p>Our Story</p>
          <p>Projects</p>
        </div>


        <div  className='text-gray-700'>3
          <p className='font-bold'>Categories</p>
          <p><span className='text-purple-800'>#</span>Entertainment <span className='text-orange-500'>#</span>Gadget <span className='text-blue-700'>#</span>Ideas</p>
          <p><span className='text-blue-600'>#</span>Inspiration <span className='text-yellow-500'>#</span>Lifestyle <span className='text-red-600'>#</span>Music</p>
          <p><span className='text-blue-500'>#</span>Travel <span className='text-purple-700'>#</span>Trending</p>
        </div>




        <div  className='text-gray-700'>4
          <p className='font-bold'>Newsletter</p>
          <p>subscribe newsletter to get latest articles</p>
          <p>
            <form>
            <input type="email"></input>
            </form>
          </p>
          <input type="email" placeholder="Email Address*" name="email" id="email" required=""></input>
          <button>Join</button>
        </div>
        </div>


{/* Second  */}
<div className='flex space-y-2'>
        <div className=' space-y-4'>
          <p className='text-gray-500'>This website may collect data about you, use cookies, embed additional third-party tracking, and <br></br>monitor your interaction with that embedded content</p>

          <p>Privacy Policy  Terms and Conditions</p>
          
        </div>

        <div className='flex justify-right'>
          <p>Follow Us On Socials</p>
          
          <div className='flex gap-4'>
              <SquareM />
              <Twitter />
              <Instagram />
              <Send />
              
              </div>

          <p>Copyright & Design By @Rivaxstudio - 2025</p>
          </div>
        </div>

        </div>




      




    </div>
  )
}
