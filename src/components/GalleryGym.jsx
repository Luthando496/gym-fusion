import React from 'react'

const GalleryGym = () => {
  return (
    <section className='mt-[9rem] bg-white mb-5'>
         <div className="flex flex-col text-center items-center relative">
    <h2 className="font-semibold text-white text-xl w-[70%] relative uppercase z-10 ">gym Gallery
        <img src="https://gymate-iota.vercel.app/static/media/title-bg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="img" className='w-[24rem] absolute top-[-12px] z-[-8] left-[6%] md:left-[16%] lg:left-[30%]' />
    </h2>
    </div>
    <h3 className="text-center text-2xl capitalize mt-12 font-semibold">Our Workplace Gallery</h3>
    <p className="text-center leading-[1.8] text-gray-500 my-8">Our Workplace Gallery features modern office, team collaboration, and fun culture. <br/>Attracts talents and showcases company's work atmosphere.</p>


    <div className="grid grid-cols-2 gap-4 lg:grid-cols-8 mt-16 px-10 mx-auto">

    <div className="img h-[16rem] col-span-4 w-full  group overflow-hidden">
        <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image-gym" className='w-full h-full object-cover scale-[1.1] group-hover:scale-[1.8] duration-700' />
    </div>

    <div className="img h-[16rem] w-full overflow-hidden col-span-4 group">
        <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image-gym" className='w-full h-full object-cover scale-[1.1] group-hover:scale-[1.8] duration-700'  />
    </div>

    <div className="img h-[16rem] w-full overflow-hidden col-span-3 group">
        <img src="https://images.pexels.com/photos/3014237/pexels-photo-3014237.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image-gym"  className='w-full h-full object-cover scale-[1.1] group-hover:scale-[1.8] duration-700' />
    </div>

    <div className="img h-[16rem] w-full overflow-hidden col-span-3 group">
        <img src="https://images.pexels.com/photos/1566414/pexels-photo-1566414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image-gym" className='w-full h-full object-cover scale-[1.1] group-hover:scale-[1.8] duration-700' />
    </div>

    <div className="img h-[16rem] w-full overflow-hidden col-span-2 group">
        <img src="https://images.pexels.com/photos/4164510/pexels-photo-4164510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image-gym"  className='w-full h-full object-cover scale-[1.1] group-hover:scale-[1.8] duration-700' />
    </div>

    </div>
    </section>
  )
}

export default GalleryGym;