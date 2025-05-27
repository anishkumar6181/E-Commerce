import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink ,Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
    const[visible,setVisible]=useState(false);
    const {setShowSearch,getCartCount,navigate,token,setToken,setCartItems} =useContext(ShopContext)
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const admindUrl = import.meta.env.VITE_ADMIN_URL

    const logout = ()=>{
      navigate('/login')
       localStorage.removeItem('token')
       setToken('')
       setCartItems({})
       
   }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
       <Link to='/'> <img src={assets.logo} className='w-36' alt="" /> </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
             <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
             </NavLink>
             <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
             </NavLink>
             <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
             </NavLink>
             <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
             </NavLink>
             <a target="_blank" href={admindUrl} className="border px-5 text-xs py-1.5 rounded-full">Admin Panel</a>

        </ul>
        <div className='flex items-center gap-6'>
             <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer ' alt="" />
            <div className='group relative'>
          
            <img onClick={()=>token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer ' alt="" />
            {/* .....dropdown menu...... */}
                {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>}

            </div>
            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
        </div>
      {/* {sidebar menu for small screens} */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full': 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
            <div  onClick={()=>setVisible(false)}className='flex items-center gap-4 p-3 cursor-pointer'>
                <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                
                <p>
                    Back
                </p>

            </div>
             <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
             <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/collection'>COLLECTION</NavLink>
             <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/about'>ABOUT</NavLink>
             <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
