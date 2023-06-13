import React from 'react'
import HeaderSecond from '../components/Header-2'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import { CgFacebook } from 'react-icons/cg'
import { FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
        <HeaderSecond title={'Contact Us'}/>

        <section className="mt-20 px-8 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT CONTAINER */}
        <div className="w-full">
            <h1 className="text-2xl lg:text-4xl text-black font-bold">We are here for help you! To Shape Your Body.</h1>

            <p className="text-lg text-gray-400 my-6">At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[5rem]">
            {/* start */}
                <div className="w-full">
                    <h2 className="text-base lg:text-2xl text-gray-400 font-bold ">Cape Town, RSA</h2>
                    <div className="w-[5rem] h-[3px] bg-amber-600 my-4"></div>
                    <p className="text-gray-400">85 Briston Mint Street,<br/>
                    London, E1 8LG, USA</p>
                </div>
                {/* end */}
            {/* start */}
                <div className="w-full">
                    <h2 className="text-base lg:text-2xl text-gray-400 font-bold ">Opening Hours</h2>
                    <div className="w-[5rem] h-[3px] bg-amber-600 my-4"></div>
                    <p className="text-gray-400">Mon to Fri: 7:30 am — 4:00 pm</p>
                    <p className="text-gray-400">Sut to Sun: 7:30 am — 11:00 am</p>
                </div>
                {/* end */}
            {/* start */}
                <div className="w-full">
                    <h2 className="text-base lg:text-2xl text-gray-400 font-bold ">Information</h2>
                    <div className="w-[5rem] h-[3px] bg-amber-600 my-4"></div>
                    <p className="text-gray-400">+800-123-4567</p>
                    <p className="text-gray-400">gymfusion@gymail.com</p>
                    
                </div>
                {/* end */}
            {/* start */}
                <div className="w-full">
                    <h2 className="text-base lg:text-2xl text-gray-400 font-bold ">Follow Us On</h2>
                    <div className="w-[5rem] h-[3px] bg-amber-600 my-4"></div>
                    <div className=" flex items-center gap-2">
                        <span className="bg-gray-400 rounded-full flex justify-center group hover:bg-pink-400 duration-300 p-4">
                            <BsLinkedin className='group-hover:text-white duration-300 text-sm lg:text-lg' />
                        </span>
                        <span className="bg-gray-400 rounded-full flex justify-center group hover:bg-pink-400 duration-300 p-4">
                            <CgFacebook className='group-hover:text-white duration-300 text-sm lg:text-lg' />
                        </span>
                        <span className="bg-gray-400 rounded-full flex justify-center group hover:bg-pink-400 duration-300 p-4">
                            <FaTwitter className='group-hover:text-white duration-300 text-sm lg:text-lg' />
                        </span>
                        <span className="bg-gray-400 rounded-full flex justify-center group hover:bg-pink-400 duration-300 p-4">
                            <BsWhatsapp className='group-hover:text-white duration-300 text-sm lg:text-lg' />
                        </span>
                    </div>
                    
                </div>
                {/* end */}
            </div>
        </div>
        {/* LEFT ENDING */}
        {/* RIGHT CONTAINER */}
        <div className="w-full bg-gray-200/20 rounded-sm py-6 px-8 lg:px-10">
            <h2 className="text-3xl font-bold">Leave Us Your Info</h2>
            <div className="w-[6rem] h-[3px] bg-pink-500 my-5"></div>

            <div className="flex flex-col gap-8">
                <input type="text" className="w-full border px-8 py-4 focus:outline-none" placeholder='Full Name *' />
                <input type="text" className="w-full border px-8 py-4 focus:outline-none" placeholder='Email Address *' />
                <select name="" id="" className='py-4 px-7' >
                    <option default value="">Select Class</option>
                    <option default value="">Body building</option>
                    <option default value="">Running</option>
                    <option default value="">Yoga</option>
                </select>
                <textarea type="text" className="w-full border px-8 py-4 focus:outline-none" placeholder='Email Address *' />
            </div>

            <div className="flex w-full justify-center my-5">
                <button type="button" className="bg-red-500 hover:bg-pink-600 text-white font-bold py-4 text-xl px-10 uppercase rounded">Submit Now</button>
            </div>

        </div>

        {/* RIGHT ENDING */}
        </section>
    </>
  )
}

export default Contact