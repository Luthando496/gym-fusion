import React,{useState} from 'react'
import {FaFacebook, FaLinkedinIn, FaPlus, FaTimes, FaTwitter} from 'react-icons/fa'
import {BiLocationPlus} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {IoMdCall} from 'react-icons/io'
import {RxHamburgerMenu,RxAvatar} from 'react-icons/rx'
import {RxLayers} from 'react-icons/rx'
import { Link } from 'react-router-dom'



const Header = () => {
    const [navbar,setNavbar] = useState(false)
    const [layer,setLayer] = useState(false)
    const [sidebar,setSide] = useState(false)


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
    <>

    <header className={`header-2 h-[75vh] relative `}>
        <nav className={`${navbar ? 'bg-black fixed top-0' : 'bg-transparent'} duration-300 w-full z-50 px-6 flex justify-between items-center`}>

        <Link to='/'>
            <img src="/gym-fusion-high-resolution-logo-white-on-black-background.png" alt="logo" className=" logo" />
        </Link>

        <ul className="hidden lg:flex gap-6 items-center">
            <li className="">
            <Link to='/' className="text-white hover:text-amber-300 duration-300 text-sm cursor-pointer">
            Home
            </Link>
            </li>
            <li className="">
            <Link to='/about' className="text-white hover:text-amber-300 duration-300 text-sm cursor-pointer">
            About
            </Link>
            </li>
            <li className="">
            <Link to='/gallery/page-1' className="text-white hover:text-amber-300 duration-300 text-sm cursor-pointer">
            Gallery
            </Link>
            </li>
            <li className="">
            <Link to='/blog' className="text-white hover:text-amber-300 duration-300 text-sm cursor-pointer">
            Blog
            </Link>
            </li>
            <li className="">
            <Link to='/schedule' className="text-white hover:text-amber-300 duration-300 text-sm cursor-pointer">
            Schedule
            </Link>
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
            <Link to='/contact' className="text-white hover:text-amber-300 duration-300 text-sm cursor-pointer">
            Contact
            </Link>
            </li>
        </ul>

        <div className="flex items-center gap-6">
        <RxHamburgerMenu onClick={()=> setSide(!sidebar)} className='text-white text-2xl lg:hidden' />
        <RxAvatar className='text-white text-2xl' />
        <RxLayers onClick={()=> setLayer(!layer)} className='text-white text-2xl' />

        <Link to="/contact" className="border group hidden md:flex border-gary-300 uppercase font-bold text-sm text-white items-center gap-2 py-4 px-2">
        <FaPlus className='text-white hidden md:block group-hover:animate-pulse duration-300 text-md lg:text-2xl bg-amber-400 p-2'/>
        Join Class now

        </Link>
        </div>

        </nav>
    </header>


    <div className={`${layer ? '' : '-translate-x-[100%]'} fixed duration-500 w-[97%] md:w-[40rem] z-50 bg-white px-10 top-0 left-0  h-full overflow-x-hidden`}>
            <div className="flex justify-between items-center my-7">
                <div className="img h-[5rem]">
                    <img src="/assets/gym-fusion-high-resolution-color-logo.png" alt="logo" className="w-full h-full object-cover" />
                </div>

                <button className="">
                    <FaTimes onClick={()=> setLayer(!layer)} className='text-5xl text-amber-400' />
                </button>
            </div>

            <div className="mt-6">

            <h2 className="font-bold text-black text-[1.4rem]">About Us</h2>

            <p className="my-4 font-semibold text-slate-600">Find out who we are and what makes us unique. We are a community-driven gym committed to providing personalized fitness experiences for all levels of fitness enthusiasts in a welcoming and supportive environment.</p>

            </div>

            <div className="mt-6">
            <h2 className="font-bold text-black text-[1.4rem]">Gallery</h2>

            <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="img h-[7rem] w-full">
                    <img src="https://images.pexels.com/photos/13106633/pexels-photo-13106633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className="w-full h-full object-cover" />
                </div>
                <div className="img h-[7rem] w-full">
                    <img src="https://images.pexels.com/photos/13106633/pexels-photo-13106633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className="w-full h-full object-cover" />
                </div>
                <div className="img h-[7rem] w-full">
                    <img src="https://images.pexels.com/photos/13106633/pexels-photo-13106633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className="w-full h-full object-cover" />
                </div>
                <div className="img h-[7rem] w-full">
                    <img src="https://images.pexels.com/photos/13106633/pexels-photo-13106633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className="w-full h-full object-cover" />
                </div>
                <div className="img h-[7rem] w-full">
                    <img src="https://images.pexels.com/photos/13106633/pexels-photo-13106633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className="w-full h-full object-cover" />
                </div>
                <div className="img h-[7rem] w-full">
                    <img src="https://images.pexels.com/photos/13106633/pexels-photo-13106633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className="w-full h-full object-cover" />
                </div>
            </div>

            </div>

            <div className="mt-6">
            <h2 className="font-bold text-black text-[1.4rem]">Gallery</h2>

            <div className="mt-4 flex gap-3 items-center">
                <BiLocationPlus className='text-yellow-700 text-xl' />
                <p className="text-xl">Perm Gardens, Cape Town</p>
            </div>
            <div className="mt-4 flex gap-3 items-center">
                <IoMdCall className='text-yellow-700 text-xl' />
                <p className="text-xl">+27767057533</p>
            </div>
            <div className="mt-4 flex gap-3 items-center">
                <AiOutlineMail className='text-yellow-700 text-xl' />
                <p className="text-xl">luthandodidiza197@gmail.com</p>
            </div>
            </div>
            <div className="mt-10">
            <h2 className="font-bold text-black text-[1.4rem]">Follow Us</h2>

            <div className="mt-4 mb-16 flex gap-4 items-center">
                <span className="p-4 bg-gray-300 rounded-full">
                    <FaFacebook className='text-xl text-blue-600'/>
                </span>
                <span className="p-4 bg-gray-300 rounded-full">
                    <FaTwitter className='text-xl text-blue-600'/>
                </span>
                <span className="p-4 bg-gray-300 rounded-full">
                    <FaLinkedinIn className='text-xl text-blue-600'/>
                </span>
            </div>
            </div>

    </div>

    <div className={`${sidebar ? '' :'-translate-y-[300%]'} z-[200] fixed duration-500 top-0 w-full h-full bg-sky-300`}>
        <div className="mt-8 px-8 w-full">
            <div className="flex w-full">
                <button className='self-end'>
                    <FaTimes onClick={()=> setSide(!sidebar)} className='text-5xl text-amber-400' />
                </button>
            </div>
            <ul className="mt-9 flex flex-col gap-8 items-center">
            <li className="">
            <Link onClick={()=> setSide(!sidebar)} to='/' className="text-white hover:text-amber-300 duration-300 text-xl tracking-[5px] font-semibold cursor-pointer">
            Home
            </Link>
            </li>
            <li className="">
            <Link onClick={()=> setSide(!sidebar)} to='/about' className="text-white hover:text-amber-300 duration-300 text-xl tracking-[5px] font-semibold cursor-pointer">
            About
            </Link>
            </li>
            <li className="">
            <Link onClick={()=> setSide(!sidebar)} to='/schedule' className="text-white hover:text-amber-300 duration-300 text-xl tracking-[5px] font-semibold cursor-pointer">
            Schedule
            </Link>
            </li>
            <li className="">
            <Link onClick={()=> setSide(!sidebar)} to='/gallery/page-1' className="text-white hover:text-amber-300 duration-300 text-xl tracking-[5px] font-semibold cursor-pointer">
            Gallery
            </Link>
            </li>
            <li className="">
            <Link onClick={()=> setSide(!sidebar)} to='/blog' className="text-white hover:text-amber-300 duration-300 text-xl tracking-[5px] font-semibold cursor-pointer">
            Blog
            </Link>
            </li>
            <li className="">
            <Link onClick={()=> setSide(!sidebar)} to='/contact' className="text-white hover:text-amber-300 duration-300 text-xl tracking-[5px] font-semibold cursor-pointer">
            Contact
            </Link>
            </li>
            <li className="">
            <Link onClick={()=> setSide(!sidebar)} to='/pricing' className="text-white hover:text-amber-300 duration-300 text-xl tracking-[5px] font-semibold cursor-pointer">
            Pricing
            </Link>
            </li>
            <li className="">
            <Link onClick={()=> setSide(!sidebar)} to='/classes' className="text-white hover:text-amber-300 duration-300 text-xl tracking-[5px] font-semibold cursor-pointer">
            Classes
            </Link>
            </li>


            </ul>
        </div>
    </div>

    
    </>
  )
}

export default Header