import React,{useState} from 'react'
import {RxHamburgerMenu,RxAvatar } from 'react-icons/rx'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {GiHammerDrop } from 'react-icons/gi'
import {FaPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const HeaderSecond = ({title}) => {

    const [navbar,setNavbar] = useState(false)


    const changeNav =()=>{
        if(window.scrollY >= 30){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }

    }

    window.addEventListener('scroll',changeNav)


  return (
    <header className={`header-2 h-[45vh] relative`}>
        <nav className={`${navbar ? 'bg-black fixed top-0' : 'bg-transparent'} duration-300 w-full z-50 px-6 flex justify-between items-center`}>

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
            <Link to='/pricing' className="text-white hover:text-amber-300 duration-300 text-sm cursor-pointer">
            Pricing
            </Link>
            </li>
            <li className="">
            <Link to='/classes' className="text-white hover:text-amber-300 duration-300 text-sm cursor-pointer">
            Classes
            </Link>
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
        <div className="w-full absolute bottom-4 py-4">
        <h2 className="text-center text-white text-2xl lg:text-4xl font-bold">{title}</h2>
        </div>
    </header>
  )
}

export default HeaderSecond