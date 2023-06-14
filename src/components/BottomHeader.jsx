import React from 'react'
import {FaClock} from 'react-icons/fa'

const BottomHeader = () => {
  return (
    <section className='w-full px-9 lg:px-24 mt-20'>
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* card */}
        <div className="w-full bg-amber-300 cursor-pointer rounded-tl-xl rounded-br-xl group hover:bg-black duration-500 px-4 py-6">
        <div className="flex w-full justify-center mb-4">
            <FaClock className='text-6xl text-red-600/70'/>
        </div>
            <h2 className="text-3xl font semibold text-center group-hover:text-white uppercase">PRogression</h2>

            <p className="text-md text-center mt-6 group-hover:text-white">
            Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.
            </p>

        </div>
        {/*  */}
        {/* card */}
        <div className="w-full bg-amber-300 cursor-pointer rounded-tl-xl rounded-br-xl group hover:bg-black duration-500 px-4 py-6">
        <div className="flex w-full justify-center mb-4">
            <FaClock className='text-6xl text-emerald-300'/>
        </div>
            <h2 className="text-3xl font semibold text-center group-hover:text-white uppercase">Workout</h2>

            <p className="text-md text-center mt-6 group-hover:text-white">
            With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.
            </p>

        </div>
        {/*  */}
        <div className="w-full bg-amber-300 cursor-pointer rounded-tr-xl rounded-bl-xl group hover:bg-black duration-500 px-4 py-6">
        <div className="flex w-full justify-center mb-4">
            <FaClock className='text-6xl text-orange-300'/>
        </div>
            <h2 className="text-3xl font semibold text-center group-hover:text-white uppercase">Nutritions</h2>

            <p className="text-md text-center mt-6 group-hover:text-white">
            Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.
            </p>

        </div>
        {/*  */}

    </div>

    </section>
  )
}

export default BottomHeader