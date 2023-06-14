import React from 'react'
import HeaderSecond from '../components/Header-2'
import {FaLayerGroup} from 'react-icons/fa'
import {BsArrowRight,BsSearch} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'



const BlogPage = () => {
  return (
    <>
        <HeaderSecond title={'Blog'}  />
        
        <section className="w-full my-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-6 lg:px-14">
            <div className="col-span-2 flex flex-col gap-14">
            {/* card */}
            <div className="w-full">
              <div className="img w-full h-[27rem]">
                <img src="https://images.pexels.com/photos/3917334/pexels-photo-3917334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
              </div>
              <div className="flex gap-3 items-center  my-4">
                <FaLayerGroup  className='text-yellow-400 text-xl' />
                <span className="text-base font-semibold text-gray-500">By Admin | June 11, 2023 | Yoga</span>
              </div>
              <h2 className="text-black  capitalize text-3xl font-bold">Yoga For Everyone in 2022</h2>
              <p className="py-2 text-gray-600 font-semibold text-base leading-[1.8]">Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.</p>

              <button className="my-7 px-6 py-3 text-semibold text-white uppercase flex gap-4 items-center text-xl bg-yellow-500">purchase now
              <BsArrowRight className='' />
              </button>
            </div>
            {/*  */}
            {/* card */}
            <div className="w-full">
              <div className="img w-full h-[27rem]">
                <img src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
              </div>
              <div className="flex gap-3 items-center  my-4">
                <FaLayerGroup  className='text-yellow-400 text-xl' />
                <span className="text-base font-semibold text-gray-500">By Admin | May 19, 2023 | Yoga</span>
              </div>
              <h2 className="text-black  capitalize text-3xl font-bold">Getting Back Into CrossFit After Vacation</h2>
              <p className="py-2 text-gray-600 font-semibold text-base leading-[1.8]">Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.</p>

              <button className="my-7 px-6 py-3 text-semibold text-white uppercase flex gap-4 items-center text-xl bg-yellow-500">purchase now
              <BsArrowRight className='' />
              </button>
            </div>
            {/*  */}
            {/* card */}
            <div className="w-full">
              <div className="img w-full h-[27rem]">
                <img src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
              </div>
              <div className="flex gap-3 items-center  my-4">
                <FaLayerGroup  className='text-yellow-400 text-xl' />
                <span className="text-base font-semibold text-gray-500">By Admin | May 23, 2023 | Yoga</span>
              </div>
              <h2 className="text-black  capitalize text-3xl font-bold">Meet Fitness Ambassador Grace</h2>
              <p className="py-2 text-gray-600 font-semibold text-base leading-[1.8]">Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.</p>

              <button className="my-7 px-6 py-3 text-semibold text-white uppercase flex gap-4 items-center text-xl bg-yellow-500">purchase now
              <BsArrowRight className='' />
              </button>
            </div>
            {/*  */}
            {/* card */}
            <div className="w-full">
              <div className="img w-full h-[27rem]">
                <img src="https://images.pexels.com/photos/3822139/pexels-photo-3822139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
              </div>
              <div className="flex gap-3 items-center  my-4">
                <FaLayerGroup  className='text-yellow-400 text-xl' />
                <span className="text-base font-semibold text-gray-500">By Admin | June 11, 2023 | Yoga</span>
              </div>
              <h2 className="text-black  capitalize text-3xl font-bold">The Best are European Materls Direct</h2>
              <p className="py-2 text-gray-600 font-semibold text-base leading-[1.8]">Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.</p>

              <button className="my-7 px-6 py-3 text-semibold text-white uppercase flex gap-4 items-center text-xl bg-yellow-500">purchase now
              <BsArrowRight className='' />
              </button>
            </div>
            {/*  */}
            {/* card */}
            <div className="w-full">
              <div className="img w-full h-[27rem]">
                <img src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
              </div>
              <div className="flex gap-3 items-center  my-4">
                <FaLayerGroup  className='text-yellow-400 text-xl' />
                <span className="text-base font-semibold text-gray-500">By Admin | June 11, 2023 | Yoga</span>
              </div>
              <h2 className="text-black  capitalize text-3xl font-bold">Give your Fitness a Boost with our Gym</h2>
              <p className="py-2 text-gray-600 font-semibold text-base leading-[1.8]">Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.</p>

              <button className="my-7 px-6 py-3 text-semibold text-white uppercase flex gap-4 items-center text-xl bg-yellow-500">purchase now
              <BsArrowRight className='' />
              </button>
            </div>
            {/*  */}
            {/* card */}
            <div className="w-full">
              <div className="img w-full h-[27rem]">
                <img src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
              </div>
              <div className="flex gap-3 items-center  my-4">
                <FaLayerGroup  className='text-yellow-400 text-xl' />
                <span className="text-base font-semibold text-gray-500">By Admin | January 11, 2029 | Fitness</span>
              </div>
              <h2 className="text-black  capitalize text-3xl font-bold">How to Get Fit Your Kids Moving Throughout The Summer</h2>
              <p className="py-2 text-gray-600 font-semibold text-base leading-[1.8]">Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.</p>

              <button className="my-7 px-6 py-3 text-semibold text-white uppercase flex gap-4 items-center text-xl bg-yellow-500">purchase now
              <BsArrowRight className='' />
              </button>
            </div>
            {/*  */}


            </div>

            <div className="w-full col-span-1 px-2 lg:px-4">
              <div className="flex items-center w-full mx-auto">
                <input type="text" placeholder='Search...' className='px-10 py-6 rounded-l-lg border w-full focus:outline-none' />
                <button className="px-6 py-[1.69rem] bg-slate-900 rounded-r-lg">
                  <BsSearch className='text-pink-500 text-xl font-bold' />
                </button>
              </div>
              {/*  */}
              <div className="w-full border bg-gray-100 py-10 px-4 my-16 shadow-xl shadow-slate-200">
              <h3 className='text-xl font-bold'>Categories</h3>
              <div className="my-3 bg-emerald-500 w-[4rem] h-[3px]"></div>

              {/*  */}
              <div className="w-full my-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                  <IoIosArrowForward  className='text-pink-500 text-2xl' />
                  <span className="text-gray-500 text-[18px] font-semibold">Body Building</span>
                </div>
                <span className="text-xl text-gray-400">(4)</span>
              </div>
              <div className="bg-gray-400 w-full my-4 h-[1px]"></div>
              </div>
              {/*  */}
              {/*  */}
              <div className="w-full my-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <IoIosArrowForward  className='text-pink-500 text-2xl' />
                  <span className="text-gray-500 text-[18px] font-semibold">Boxing</span>
                </div>
                <span className="text-xl text-gray-400">(4)</span>
              </div>
              <div className="bg-gray-400 w-full my-4 h-[1px]"></div>
              </div>
              {/*  */}
              {/*  */}
              <div className="w-full my-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <IoIosArrowForward  className='text-pink-500 text-2xl' />
                  <span className="text-gray-500 text-[18px] font-semibold">CrossFit</span>
                </div>
                <span className="text-xl text-gray-400">(4)</span>
              </div>
              <div className="bg-gray-400 w-full my-4 h-[1px]"></div>
              </div>
              {/*  */}
              {/*  */}
              <div className="w-full my-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <IoIosArrowForward  className='text-pink-500 text-2xl' />
                  <span className="text-gray-500 text-[18px] font-semibold">Fitness</span>
                </div>
                <span className="text-xl text-gray-400">(4)</span>
              </div>
              <div className="bg-gray-400 w-full my-4 h-[1px]"></div>
              </div>
              {/*  */}
              {/*  */}
              <div className="w-full my-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <IoIosArrowForward  className='text-pink-500 text-2xl' />
                  <span className="text-gray-500 text-[18px] font-semibold">Meditation</span>
                </div>
                <span className="text-xl text-gray-400">(4)</span>
              </div>
              <div className="bg-gray-400 w-full my-4 h-[1px]"></div>
              </div>
              {/*  */}
              {/*  */}
              <div className="w-full my-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <IoIosArrowForward  className='text-pink-500 text-2xl' />
                  <span className="text-gray-500 text-[18px] font-semibold">Yoga</span>
                </div>
                <span className="text-xl text-gray-400">(4)</span>
              </div>
              <div className="bg-gray-400 w-full my-4 h-[1px]"></div>
              </div>
              {/*  */}

              </div>
              {/*  */}
              {/*  */}
              <div className="w-full bg-gray-100 px-4 py-10 shadow-xl shadow-slate-200">
              <h3 className='text-xl font-bold'>Recent Posts</h3>
              <div className="my-3 bg-emerald-500 w-[4rem] h-[3px]"></div>

              {/*  */}
              <div className="my-4 flex gap-4 items-center">
                <div className="img h-32  max-w-[112px]">
                <img src="https://images.pexels.com/photos/3917334/pexels-photo-3917334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <p className="text-gray-500">June 11, 2023</p>
                  <span className="font-semibold text-black text-base">Yoga For Everyone in 2022</span>

                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="my-4 flex gap-4 items-center">
                <div className="img h-32  max-w-[112px]">
                <img src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <p className="text-gray-500">May 19, 2023</p>
                  <span className="font-semibold text-black text-base">Getting Back Into CrossFit After Vacation</span>

                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="my-4 flex gap-4 items-center">
                <div className="img h-32  max-w-[112px]">
                <img src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <p className="text-gray-500">May 23, 2023</p>
                  <span className="font-semibold text-black text-base">Meet Fitness Ambassador Grace</span>

                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="my-4 flex gap-4 items-center">
                <div className="img h-32  max-w-[112px]">
                <img src="https://images.pexels.com/photos/3822139/pexels-photo-3822139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <p className="text-gray-500">June 11, 2023</p>
                  <span className="font-semibold text-black text-base">The Best are European Materls Direct</span>

                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="my-4 flex gap-4 items-center">
                <div className="img h-32  max-w-[112px]">
                <img src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full object-cover h-full" />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <p className="text-gray-500">June 11, 2023</p>
                  <span className="font-semibold text-black text-base">Give your Fitness a Boost with our Gym</span>

                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="my-4 flex gap-4 items-center">
                <div className="img h-32 max-w-[112px]">
                <img src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="max-w-[112px] object-cover h-full" />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <p className="text-gray-500">January 11, 2029</p>
                  <span className="font-semibold text-black text-base">How to Get Fit Your Kids Moving Throughout The Summer</span>

                </div>
              </div>
              {/*  */}
              </div>
              {/*    */}  
              <div className="w-full bg-gray-100 px-4 py-10 my-8 shadow-xl shadow-slate-200">
              <h3 className='text-xl font-bold'>Recent Posts</h3>
              <div className="my-3 bg-emerald-500 w-[4rem] h-[3px]"></div>

              <div className="flex my-10 gap-4 flex-wrap items-center">
                <span className="px-3 py-1 text-xl font-semibold text-gray-400 bg-white">#Crossfit</span>
                <span className="px-3 py-1 text-xl font-semibold text-gray-400 bg-white">#Fitness</span>
                <span className="px-3 py-1 text-xl font-semibold text-gray-400 bg-white">#Gym</span>
                <span className="px-3 py-1 text-xl font-semibold text-gray-400 bg-white">#Meditation</span>
                <span className="px-3 py-1 text-xl font-semibold text-gray-400 bg-white">#Running</span>
                <span className="px-3 py-1 text-xl font-semibold text-gray-400 bg-white">#Workout</span>
                <span className="px-3 py-1 text-xl font-semibold text-gray-400 bg-white">#Yoga</span>
                <span className="px-3 py-1 text-xl font-semibold text-gray-400 bg-white">#Boxing</span>
              </div>
              </div>
              {/*  */}
              <div className="w-full mt-4">
                <div className="img w-full h-[40rem]">
                  <img src="https://images.pexels.com/photos/6739948/pexels-photo-6739948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            </div>
        </section>


    </>
  )
}

export default BlogPage;