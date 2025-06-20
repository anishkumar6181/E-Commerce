import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { ThemeContext } from '../context/ThemeContext'

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext)
  
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className={`${isDarkMode ? 'text-white' : 'text-[#414141]'}`}>
            <div className='flex items-center gap-2'>
                <p className={`w-8 md:w-11 h-[2px] ${isDarkMode ? 'bg-white' : 'bg-[#414141]'}`}></p>
                <p className='font-medium text-sm md:text-base'> OUR BESTSELLERS</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm:text-base'>SHOP NOW</p>
                <p className={`w-8 md:w-11 h-[1px] ${isDarkMode ? 'bg-white' : 'bg-[#414141]'}`}></p>
            </div>
        </div>
        </div>
        {/* Hero right side */}
        <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default Hero
