import React from 'react'
import {GiGymBag,GiWeightLiftingUp} from 'react-icons/gi'
import {CgGym} from 'react-icons/cg'
import {BsArrowRight} from 'react-icons/bs'


const AboutWho = () => {
  return (
    <section className='py-28 w-full'>
        <div className="px-10 grid lg:grid-cols-3">
            {/* left */}
            <div className="w-full col-span-2">
                <h1 className="text-xl uppercase font-semibold">Who We Are</h1>
            <h1 className="text-5xl bold px-4 black text-center lg:text-left capitalize mt-14">Take Your Health And Body To Next Level</h1>
            <p className="text-gray-400 my-4 text-center lg:text-left">Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>

            <div className="w-full space-y-9 md:space-y-0 mt-14 grid grid-cols-1 md:grid-cols-3">
                {/*  */}
                <div className="w-full md:border-r md:border-black px-8">
                    <div className="flex justify-center mb-8">
                        <GiGymBag className='text-8xl text-amber-400' />
                    </div>
                    <h1 className="text-[1.5rem] text-black text-center uppercase">
                    professional<br/> trainers
                    </h1>
                </div>
                {/*  */}
                {/*  */}
                <div className="w-full md:border-r md:border-black px-8">
                    <div className="flex justify-center mb-8">
                        <GiWeightLiftingUp className='text-8xl text-amber-400' />
                    </div>
                    <h1 className="text-[1.5rem] text-black text-center uppercase">
                    modern<br/> equipments
                    </h1>
                </div>
                {/*  */}
                {/*  */}
                <div className="w-full px-8">
                    <div className="flex justify-center mb-8">
                        <CgGym className='text-8xl text-amber-400' />
                    </div>
                    <h1 className="text-[1.5rem] text-black text-center uppercase">
                    Fancy gym<br/> equipments
                    </h1>
                </div>
                {/*  */}
            </div>

            <button className="mt-16 tour-btn px-8 flex gap-6 items-center py-4 bg-gray-400 uppercase">take a tour
            <BsArrowRight className="text-white text-3xl" />
            </button>
            </div>


            {/*  */}
            <div className="w-full relative hidden lg:block lg:col-span-1">
                <img src="/assets/pexels-pikx-by-panther-1547248-removebg-preview(1).png" alt="man-fitness" className="w-full h-full object-cover" />
            </div>

            </div>
    </section>
  )
}

export default AboutWho;