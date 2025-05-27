import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center  pt-8 border-t'> 
       <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto omnis, quae soluta fuga vitae, dolorem pariatur voluptatibus odio cum blanditiis fugit temporibus? Ut odio perspiciatis, alias pariatur sapiente doloremque!</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores et porro inventore blanditiis, sapiente aperiam mollitia veniam est temporibus. Distinctio iste similique aliquam delectus recusandae perferendis cumque tempora voluptatem aliquid.</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt, sint non commodi, dolor consequatur vitae ea eveniet ipsa, accusamus distinctio optio animi cupiditate at tempore in veritatis mollitia perspiciatis.</p>

         </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-[15px]  hover:bg-slate-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel non repellendus laboriosam cumque ad quibusdam quasi molestiae, nulla voluptatem eum doloremque dolore dolores delectus mollitia illo minima odio magni ipsum.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-[15px] hover:bg-slate-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, officia. Sunt voluptatibus beatae ea. At voluptates a rem autem voluptas minus, quas, nihil aliquid, modi incidunt consequatur ad dolore unde.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-[15px] hover:bg-slate-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, officia. Sunt voluptatibus beatae ea. At voluptates a rem autem voluptas minus, quas, nihil aliquid, modi incidunt consequatur ad dolore unde.</p>
         </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
