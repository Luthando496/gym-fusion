import React from 'react'
import {BsFacebook,BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className='w-full py-20'>
        <div className="grid grid-cols-2 gap-8 px-2 lg:px-16">
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
        </div>
    </footer>
  )
}

export default Footer