import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {

    const [visible,setVisible] = useState(false)

    return (
        <div className='flex items-center justify-between py-2 font-medium'>
            <img src={assets.logo} className='w-56 mylogo' alt="Soriya Pearl" />
            
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1 '>
                    <p className='hover:scale-[1.15]  duration-500 ease-in-out'>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px]  bg-gray-700 hidden' />

                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p className='hover:scale-[1.15]  duration-500 ease-in-out'>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px]  bg-gray-700 hidden' />

                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p className='hover:scale-[1.15]  duration-500 ease-in-out'>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px]  bg-gray-700 hidden' />

                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p className='hover:scale-[1.15]  duration-500 ease-in-out'>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px]  bg-gray-700 hidden' />

                </NavLink>

            </ul>
            <div className='flex items-center gap-6'>

                <img src={assets.search_icon} className='w-6 cursor-pointer' />
            
                <div className="group relative">
                    
                    <img className='w-5 cursor-pointer' src={assets.profile_icon}  />
                
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">

                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded" >
                            <p className='cursor-pointer hover:to-black'>My Profile</p>
                            <p className='cursor-pointer hover:to-black'>Orders</p>
                            <p className='cursor-pointer hover:to-black'>Logout</p>
                        </div>
                    </div>
                </div>
        
                <Link to='/cart' className='relative' >
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-4px] w-4 text-center leading-4 bg-black  text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>

                <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'/>
            </div>

            {/*sidebar menu for small screen*/}

            <div className={ `absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'} `}></div>
                
        </div>
    )
}

export default Navbar
