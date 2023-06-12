import React,{useState}from 'react'
import {IoMdPerson} from 'react-icons/io'
import {RxHamburgerMenu,RxAvatar } from 'react-icons/rx'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {GiHammerDrop } from 'react-icons/gi'
import {FaPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Classes = () => {
    const [navbar,setNavbar] = useState(false)


    const changeNav =()=>{
        if(window.scrollY >= 10){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }

    }

    window.addEventListener('scroll',changeNav)

  return (
    <>
    <header className={`header-2 h-[45vh] relative`}>
        <nav className={`${navbar ? 'bg-black fixed top-0' : 'bg-transparent'} duration-500 w-full z-50 px-6 flex justify-between items-center`}>

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
        <div className="w-full absolute bottom-4 py-4">
        <h2 className="text-center text-white text-2xl lg:text-4xl font-bold">Classes</h2>
        </div>
    </header>

    
    < className='w-full py-14'>
        <div className="px-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* card start */}
        <div className="w-full relative overflow-hidden h-[26rem] shadow-2xl rounded-3xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="/assets/anastase-maragos-7kEpUPB8vNk-unsplash.jpg" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Cycling</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Dorian Yate</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Wed: 9:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Meditation</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Maria Mich</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Fri: 11:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Boxing</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">John Flex</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Tue: 4:00 pm</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/1544774/pexels-photo-1544774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Karate</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">David Rich</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Sat: 9:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Power Lifting</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Dorian Yate</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Wed: 9:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Workout</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Shawn Ray</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Sun: 10:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Crossfit</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Jenifer Alex</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Wed: 9:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/1109078/pexels-photo-1109078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Running</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Dorian Yate</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Wed: 9:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
        {/* card end */}
        </div>

    </>
    </>
  )
}

export default Classes;