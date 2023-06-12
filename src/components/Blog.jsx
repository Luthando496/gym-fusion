import React from 'react'
import {BsArrowRight} from 'react-icons/bs'


const Blog = () => {
  return (
    <>

    <section className='mt-[9rem] bg-white mb-5'>
         <div className="flex flex-col text-center items-center relative">
    <h2 className="font-semibold text-white text-xl  w-[100%] lg:w-[70%] relative uppercase z-10 ">latest blog
        <img src="https://gymate-iota.vercel.app/static/media/title-bg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="img" className='w-[17rem] absolute top-[-12px] z-[-8] left-[16%] sm:left-[30%] lg:left-[35%]' />
    </h2>
    </div>
    <h3 className="text-center text-2xl capitalize mt-12 font-semibold">Our Recent News</h3>
    <p className="text-center text-md tracking-[1.8] leading-[1.8] text-gray-500 my-8">Gym an unknown printer took a galley of type and scrambled <br className='hidden md:block'/> make a type specimen book.</p>


    <div className="mt-12 px-4 md:px-16">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/*card start  */}
        <div className="w-full shadow-lg py-10 px-10">
            <span className="font-semibold  ml-4 text-gray-600 border border-gray-300 mb-6 rounded-lg px-3 py-2">
            22.03.2022
            </span>

            <h2 className="text-black pb-6 pt-10 font-bold text-2xl">Yoga For Everyone in 2023</h2>
            <p className=" text-gray-400">This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds. </p>

            <button className="py-2 px-6 mt-8 bg-amber-400 text-white gap-2 uppercase text-xl flex items-center">
                Read More <BsArrowRight className='text-white' />
            </button>
        </div>
        {/* card end */}
         {/*card start  */}
         <div className="w-full shadow-lg py-10 px-10">
            <span className="font-semibold  ml-4 text-gray-600 border border-gray-300 mb-6 rounded-lg px-3 py-2">
            13.09.2022
            </span>

            <h2 className="text-black pb-6 pt-10 font-bold text-2xl">Getting Back Into CrossFit After Vacation</h2>
            <p className=" text-gray-400">Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.</p>

            <button className="py-2 px-6 mt-8 bg-amber-400 text-white gap-2 uppercase text-xl flex items-center">
                Read More <BsArrowRight className='text-white' />
            </button>
        </div>
        {/* card end */}
         {/*card start  */}
         <div className="w-full shadow-lg py-10 px-10">
            <span className="font-semibold  ml-4 text-gray-600 border border-gray-300 mb-6 rounded-lg px-3 py-2">
            28.06.2022
            </span>

            <h2 className="text-black pb-6 pt-10 font-bold text-2xl">Meet Fitness Ambassador Grace</h2>
            <p className=" text-gray-400">Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.</p>

            <button className="py-2 px-6 mt-8 bg-amber-400 text-white gap-2 uppercase text-xl flex items-center">
                Read More <BsArrowRight className='text-white' />
            </button>
        </div>
        {/* card end */}
    </div>

    </div>

    </section>


    <section className="blog-img py-14 lg:py-24 px-4 lg:px-16 bg-black">

    <h2 className="text-2xl lg:text-4xl text-white font-bold py-4">Need a Fitness Trainer?</h2>
    <h2 className="text-2xl lg:text-4xl text-white font-bold "><span className="text-red-800">Call:</span> +123-456789</h2>

    <button className="px-4 py-2 uppercase mt-8 bg-amber-400 text-white text-xl font-semibold">Purchase now</button>


    </section>
    </>

  )
}

export default Blog