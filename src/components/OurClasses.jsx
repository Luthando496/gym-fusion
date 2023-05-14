import React from 'react'

const OurClasses = () => {
  return (
    <section className='py-20'>
    <div className="flex flex-col text-center items-center relative">
    <h2 className="font-semibold text-black text-[15px] relative uppercase z-10 ">Our featured classes
        <img src="https://gymate-iota.vercel.app/static/media/title-bg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="img" className='w-[24rem] absolute -top-[2px] z-[-8]' />
    </h2>
    <h3 className="text-[3.6rem] capitalize  text-black font-bold my-10">We Are Offering Best Flexible Classes</h3>
    </div>

    <div className="w-full px-8 space-y-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {/*  */}
        <div className="col-span-1 lg:col-span-2 w-full relative group cursor-pointer">
            <div className="img w-full h-[20rem] overflow-hidden">
                <img src="/assets/anastase-maragos-7kEpUPB8vNk-unsplash.jpg" alt="image" className="w-full grayscale group-hover:grayscale-0 group-hover:scale-[1.8] duration-1000 object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full px-5 py-8">
                <h2 className="text-2xl font-bold my-4 capitalize text-white">Cycling</h2>
                <span className="text-white bg-amber-300 px-4 py-2">Wednesday: 9:00am-10:00am</span>
            </div>
        </div>

        {/*  */}
        <div className="col-span-1 w-full relative group cursor-pointer">
            <div className="img w-full h-[20rem] overflow-hidden">
                <img src="/assets/anastase-maragos-HyvE5SiKMUs-unsplash.jpg" alt="image" className="w-full grayscale group-hover:grayscale-0 group-hover:scale-[1.8] duration-1000 object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full px-5 py-8">
                <h2 className="text-2xl font-bold my-4 capitalize text-white">Karate</h2>
                <span className="text-white bg-amber-300 px-4 py-2">Thursday: 9:00am-:1100am</span>
            </div>
        </div>
        {/*  */}
        <div className="col-span-1 w-full relative group cursor-pointer">
            <div className="img w-full h-[20rem] overflow-hidden">
                <img src="/assets/anastase-maragos-FP7cfYPPUKM-unsplash.jpg" alt="image" className="w-full grayscale group-hover:grayscale-0 group-hover:scale-[1.8] duration-1000 object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full px-5 py-8">
                <h2 className="text-2xl font-bold my-4 capitalize text-white">Power</h2>
                <span className="text-white bg-amber-300 px-4 py-2">Wednesday: 9:00am-10:pm</span>
            </div>
        </div>
        {/*  */}

        </div>
        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {/*  */}
        <div className="col-span-1  w-full relative group cursor-pointer">
            <div className="img w-full h-[20rem] overflow-hidden">
                <img src="/assets/anastase-maragos-7kEpUPB8vNk-unsplash.jpg" alt="image" className="w-full grayscale group-hover:grayscale-0 group-hover:scale-[1.8] duration-1000 object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full px-5 py-8">
                <h2 className="text-2xl font-bold my-4 capitalize text-white">Meditation</h2>
                <span className="text-white bg-amber-300 px-4 py-2">Wednesday: 12:pm-7:00pm</span>
            </div>
        </div>

        {/*  */}
        <div className="col-span-1 w-full relative group cursor-pointer">
            <div className="img w-full h-[20rem] overflow-hidden">
                <img src="/assets/anastase-maragos-HyvE5SiKMUs-unsplash.jpg" alt="image" className="w-full grayscale group-hover:grayscale-0 group-hover:scale-[1.8] duration-1000 object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full px-5 py-8">
                <h2 className="text-2xl font-bold my-4 capitalize text-white">Boxing</h2>
                <span className="text-white bg-amber-300 px-4 py-2">Monday: 7:00am-9:pm</span>
            </div>
        </div>
        {/*  */}
        <div className="col-span-1 lg:col-span-2 w-full relative group cursor-pointer">
            <div className="img w-full h-[20rem] overflow-hidden">
                <img src="/assets/anastase-maragos-FP7cfYPPUKM-unsplash.jpg" alt="image" className="w-full grayscale group-hover:grayscale-0 group-hover:scale-[1.8] duration-1000 object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full px-5 py-8">
                <h2 className="text-2xl font-bold my-4 capitalize text-white">Running</h2>
                <span className="text-white bg-amber-300 px-4 py-2">Tuesday: 6:00am-10:00am</span>
            </div>
        </div>
        {/*  */}

        </div>
    </div>

    </section>
  )
}

export default OurClasses