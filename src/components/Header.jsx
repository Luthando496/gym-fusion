import React from 'react'
import {FaPersonBooth,FaPlus} from 'react-icons/fa'
import {GiHammerDrop} from 'react-icons/gi'


const Header = () => {
  return (
    <header className='header'>
    <nav className="px-10 flex justify-between items-center">

        <a href="#">
            <img src="/gym-fusion-high-resolution-logo-white-on-black-background.png" alt="logo" className=" logo" />
        </a>

        <ul className="hidden lg:flex gap-6 items-center">
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-xl cursor-pointer'>Home</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-xl cursor-pointer'>About</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-xl cursor-pointer'>Gallery</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-xl cursor-pointer'>Blog</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-xl cursor-pointer'>Schedule</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-xl cursor-pointer'>Pricing</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-xl cursor-pointer'>Classes</h3>
            </li>
            <li className="">
                <h3 className='text-white hover:text-amber-300 duration-300 text-xl cursor-pointer'>Contact</h3>
            </li>

        </ul>

        <div className="flex items-center gap-6">
        <FaPersonBooth className='text-white text-2xl' />
        <GiHammerDrop className='text-white text-2xl' />
        <a href="#" className="border border-gary-300 uppercase font-bold text-md text-white flex items-center gap-2 py-4 px-2">
        <FaPlus className='text-white text-2xl bg-amber-400 p-2'/>
        Join Class now

        </a>
        </div>

    </nav>
    <div className="w-full h-screen">

    </div>


    </header>
  )
}

export default Header