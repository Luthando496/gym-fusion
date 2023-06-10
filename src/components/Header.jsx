import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {GiHammerDrop} from 'react-icons/gi'
import {RxHamburgerMenu,RxAvatar} from 'react-icons/rx'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header className='header'>
    <nav className="px-6 flex justify-between items-center">

        <Link to='/'>
            <img src="/gym-fusion-high-resolution-logo-white-on-black-background.png" alt="logo" className=" logo" />
        </Link>

        <ul className="hidden lg:flex gap-6 items-center">
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-sm cursor-pointer'>Home</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-sm cursor-pointer'>About</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-sm cursor-pointer'>Gallery</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-sm cursor-pointer'>Blog</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-sm cursor-pointer'>Schedule</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-sm cursor-pointer'>Pricing</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-sm cursor-pointer'>Classes</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-sm cursor-pointer'>Contact</h3>
            </li>

        </ul>

        <div className="flex items-center gap-6">
        <RxHamburgerMenu className='text-white text-2xl' />
        <RxAvatar className='text-white text-2xl' />
        <GiHammerDrop className='text-white text-2xl' />
        <Link to="/contact" className="border hidden lg:flex border-gary-300 uppercase font-bold text-sm text-white items-center gap-2 py-4 px-2">
        <FaPlus className='text-white hidden lg:block  text-md lg:text-2xl bg-amber-400 p-2'/>
        Join Class now

        </Link>
        </div>

    </nav>
    <div className="w-full h-screen">

    </div>


    </header>
  )
}

export default Header