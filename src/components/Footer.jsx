import React from 'react'
import {BsFacebook,BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className='w-full py-20'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16">
            {/* LEFT */}
            <div className="w-full">
                <div className="img w-[10rem]">
                    <img src="/assets/gym-fusion-high-resolution-color-logo.png" alt="logo w-full h-full" />
                </div>
                <p className="py-10 text-md text-gray-500">Take your health and body to the next level with our <br/>comprehensive program designed to help you<br/> reach your fitness goals.</p>
                <div className="my-4 flex items-center gap-4">
                    <span className="p-3 bg-gray-400 rounded-full group duration-500 hover:bg-amber-400">
                        <BsFacebook size={20} className='group-hover:text-white duration-500' />
                    </span>
                    <span className="p-3 bg-gray-400 rounded-full group duration-500 hover:bg-amber-400">
                        <BsGithub size={20} className='group-hover:text-white duration-500' />
                    </span>
                    <span className="p-3 bg-gray-400 rounded-full group duration-500 hover:bg-amber-400">
                        <BsLinkedin size={20} className='group-hover:text-white duration-500' />
                    </span>
                    <span className="p-3 bg-gray-400 rounded-full group duration-500 hover:bg-amber-400">
                        <BsTwitter size={20} className='group-hover:text-white duration-500' />
                    </span>
                </div>
                <p className="text-gray-400">Privacy Policy | © 2023 Gym Fusion</p>
            </div>
            {/* LEFT END */}
            {/* Right start */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                {/* left */}
                <div className="w-full">
                <p className="text-2xl font-bold text-black capitalize">Our Classes</p>
                <div className="under bg-amber-400 w-[8rem] mt-2 h-[3px]"></div>

                <ul className="flex flex-col mt-12 gap-8">
                        <li className="">
                        <span className="text-gray-400 font-semibold hover:font-bold cursor-pointer hover:text-pink-500 duration-500 text-base hover:text-lg">Fitness Classes</span>
                        </li>
                        <li className="">
                        <span className="text-gray-400 font-semibold hover:font-bold cursor-pointer hover:text-pink-500 duration-500 text-base hover:text-lg">Aerobics Classes</span>
                        </li>
                        <li className="">
                        <span className="text-gray-400 font-semibold hover:font-bold cursor-pointer hover:text-pink-500 duration-500 text-base hover:text-lg">Power Yoga</span>
                        </li>
                        <li className="">
                        <span className="text-gray-400 font-semibold hover:font-bold cursor-pointer hover:text-pink-500 duration-500 text-base hover:text-lg">Learn Machines</span>
                        </li>
                        <li className="">
                        <span className="text-gray-400 font-semibold hover:font-bold cursor-pointer hover:text-pink-500 duration-500 text-base hover:text-lg">Full-body Strength</span>
                        </li>
                </ul>

                </div>
                {/* left end */}
                {/* right start */}
                <div className="w-full">
                <p className="text-2xl font-bold text-black capitalize">Our Classes</p>
                <div className="under bg-amber-400 w-[8rem] mt-2 h-[3px]"></div>

                <ul className="flex flex-col mt-12 gap-8">
                        <li className="">
                        <span className="text-gray-500 font-bold  text-lg">Monday - Friday:</span>
                        </li>
                        <li className="">
                        <span className="text-gray-400 font-semibold  text-base hover:text-lg">7:00am - 21:00pm</span>
                        </li>
                        <li className="">
                        <span className="text-gray-500 font-bold  text-lg">Saturday:</span>
                        </li>
                        <li className="">
                        <span className="text-gray-400 font-semibold  text-base hover:text-lg">7:00am - 19:00pm</span>
                        </li>
                        <li className="">
                        <span className="text-gray-500 font-bold  text-lg">Sunday - Closed</span>
                        </li>
                </ul>

                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer