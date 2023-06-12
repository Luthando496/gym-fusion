import React from 'react'
import {BsArrowRight} from 'react-icons/bs'



const PricingChart = () => {
  return (
    <section className='mt-[9rem] bg-white mb-5'>
         <div className="flex flex-col text-center items-center relative">
    <h2 className="font-semibold text-white text-xl  w-[100%] lg:w-[70%] relative uppercase z-10 ">Pricing Chart
        <img src="https://gymate-iota.vercel.app/static/media/title-bg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="img" className='w-[17rem] absolute top-[-12px] z-[-8] left-[16%] sm:left-[30%] lg:left-[35%]' />
    </h2>
    </div>
    <h3 className="text-center text-2xl capitalize mt-12 font-semibold">Exclusive Pricing Plan</h3>
    <p className="text-center text-md tracking-[1.8] leading-[1.8] text-gray-500 my-8">Gym an unknown printer took a galley of type and scrambled <br className='hidden md:block'/> make a type specimen book.</p>

    <div className="my-14 grid grid-cols-1 lg:grid-cols-3 gap-5 px-16">

    {/* card */}
    <div className="card group w-full shadow-2xl ">
        <div className="img w-full h-[380px] relative">
            <img src="https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="h-full w-full object-cover" />
            <div className='absolute bg-white text-[20px] font-bold w-[18rem] text-center py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto'>Beginner</div>
        </div>
        
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
        <p className="text-center text-[55px] font-bold relative py-[10px] ">
        <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-4 -left-[1rem]">$</span>19
        <span className="text-[30px] text-[#6d6d6d] absolute font-normal bottom-4 -right-[4rem]">p/m</span>
        </p>
        <div className="flex flex-col gap-4">
        <p className="text-center font-light text-xl text-gray-400">Free hand</p>
        <p className="text-center font-light text-xl text-gray-400">Gym Fitness</p>
        <p className="text-center font-light text-xl text-gray-400">Weight Loss</p>
        <p className="text-center font-light text-xl text-gray-400">Personal Trainer</p>
        <p className="text-center font-light text-xl text-gray-400">Cycling</p>
        </div>

        <div className="mt-8 flex justify-center">

        <button className="px-6 uppercase tracking-[2px] text-xl font-bold py-4 text-white bg-yellow-400 btn-card hover:bg-pink-400 items-center hover:rounded-md shadow-xl hover:translate-y-2 duration-500 flex gap-3">Purchase Now <BsArrowRight size={20} /></button>

        </div>

        </div>
    </div>
    {/* card end */}
     {/* card */}
     <div className="card group w-full shadow-2xl ">
        <div className="img w-full h-[380px] relative">
            <img src="https://images.pexels.com/photos/13018347/pexels-photo-13018347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="h-full w-full object-cover" />
            <div className='absolute bg-white text-[20px] font-bold w-[18rem] text-center py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto'>Beginner</div>
        </div>
        
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
        <p className="text-center text-[55px] font-bold relative py-[10px] ">
        <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-4 -left-[1rem]">$</span>79
        <span className="text-[30px] text-[#6d6d6d] absolute font-normal bottom-4 -right-[4rem]">p/m</span>
        </p>
        <div className="flex flex-col gap-4">
        <p className="text-center font-light text-xl text-gray-400">Free hand</p>
        <p className="text-center font-light text-xl text-gray-400">Gym Fitness</p>
        <p className="text-center font-light text-xl text-gray-400">Weight Loss</p>
        <p className="text-center font-light text-xl text-gray-400">Personal Trainer</p>
        <p className="text-center font-light text-xl text-gray-400">Cycling</p>
        </div>

        <div className="mt-8 flex justify-center">

        <button className="px-6 uppercase tracking-[2px] text-xl font-bold py-4 text-white bg-yellow-400 btn-card hover:bg-pink-400 hover:rounded-md shadow-xl hover:translate-y-2 duration-500">Purchase Now</button>

        </div>

        </div>
    </div>
    {/* card end */}
     {/* card */}
     <div className="card group w-full shadow-2xl ">
        <div className="img w-full h-[380px] relative">
            <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="h-full w-full object-cover" />
            <div className='absolute bg-white text-[20px] font-bold w-[18rem] text-center py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto'>Beginner</div>
        </div>
        
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
        <p className="text-center text-[55px] font-bold relative py-[10px] ">
        <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-4 -left-[1rem]">$</span>190
        <span className="text-[30px] text-[#6d6d6d] absolute font-normal bottom-4 -right-[4rem]">p/m</span>
        </p>
        <div className="flex flex-col gap-4">
        <p className="text-center font-light text-xl text-gray-400">Free hand</p>
        <p className="text-center font-light text-xl text-gray-400">Gym Fitness</p>
        <p className="text-center font-light text-xl text-gray-400">Weight Loss</p>
        <p className="text-center font-light text-xl text-gray-400">Personal Trainer</p>
        <p className="text-center font-light text-xl text-gray-400">Cycling</p>
        </div>

        <div className="mt-8 flex justify-center">

        <button className="px-6 uppercase tracking-[2px] text-xl font-bold py-4 text-white bg-yellow-400 btn-card hover:bg-pink-400 hover:rounded-md shadow-xl hover:translate-y-2 duration-500">Purchase Now</button>

        </div>

        </div>
    </div>
    {/* card end */}

    </div>
    </section>
  )
}

export default PricingChart