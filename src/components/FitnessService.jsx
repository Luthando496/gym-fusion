import React from 'react'

const FitnessService = () => {
  return (
    <section className='w-full'>
        <div className="bg-black relatve w-full skew-id mx-auto py-8 px-6 flex justify-between gap-12">
            <h1 className="text-white text-lg lg:text-4xl font-semibold lg:font-bold leading-[1.5] capitalize">We Are Always Providing Best<br /> Fitness Service For You</h1>
            <button className="px-2 lg:px-3 bg-orange-600 shadow-xl border  text-sm tracking-[4px] uppercase">Join with us</button>
        </div>

        <div className="w-full mt-24 grid grid-cols-1 lg:grid-cols-2 gap-14 px-14">

        <div className="w-full ">
            <div className="img-card w-full h-full relative">
            <div className="absolute px-8 w-full h-full border-4 border-black/40"></div>
                <img src="/assets/pexels-the-lazy-artist-gallery-2247179.jpg" alt="image"  className='w-full h-full' />
            </div>
        </div>

        <div className="w-full py-14">
            <h2 className="text-2xl text-black font-semibold relative">
                Why Choose Us
                <img src="https://gymate-iota.vercel.app/static/media/title-bg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="lutha" className="absolute top-0 -left-9 w-[17rem] text-slate-900 -z-10" />
            </h2>
            
            <h2 className="text-4xl mt-20 text-black/70">We Can Give A Shape Of Your<br/> Body Here!</h2>
            <p className="text-md text-gray-600 mt-10 leading-[1.9]">At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
                {/*  */}
                <div className="w-full gap-4 grid grid-cols-2 items-center">
                    <img src="https://cdn.pixabay.com/photo/2019/01/20/21/21/weightlifter-3944725_960_720.png" alt="image" className="w-full h-[5rem] rounded-full" />
                    <h3 className="text-xl text-gray-600 font-bold">Free Fitness<br /> Training</h3>
                </div>
                {/*  */}
                <div className="w-full gap-4 grid grid-cols-2 items-center">
                    <img src="https://cdn.pixabay.com/photo/2017/09/22/03/14/gymnastics-2774336_960_720.png" alt="image" className="w-full h-[5rem] rounded-full" />
                    <h3 className="text-xl text-gray-600 font-bold">Modern Gym<br /> Fitness</h3>
                </div>
                {/*  */}
                <div className="w-full gap-4 grid grid-cols-2 items-center">
                    <img src="https://cdn.pixabay.com/photo/2016/12/20/16/19/fax-1920893_960_720.jpg" alt="image-workout" className="w-full h-[5rem] rounded-full" />
                    <h3 className="text-xl text-gray-600 font-bold">Gym Bag<br /> Equipments</h3>
                </div>
                {/*  */}
                <div className="w-full gap-4 grid grid-cols-2 items-center">
                    <img src="https://cdn.pixabay.com/photo/2016/12/20/16/19/fax-1920894_960_720.jpg" alt="image-workout" className="w-full h-[5rem] rounded-full" />
                    <h3 className="text-xl text-gray-600 font-bold">Fresh Bottle<br /> Watter</h3>
                </div>
                {/*  */}
            </div>

            <button className="px-6 mt-10 py-4 bg-pink-400 font-semibold shadow-2xl hover:translate-y-3 hover:translate-x-1 duration-500 text-md text-white uppercase">Our Classes</button>


        </div>
            
        </div>
    </section>
  )
}

export default FitnessService