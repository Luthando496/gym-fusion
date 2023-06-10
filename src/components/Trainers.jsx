import React from 'react'
import {AiFillFacebook,AiFillTwitterCircle,AiFillGithub,AiOutlineMail} from 'react-icons/ai'



const Trainers = () => {
  return (
    <section className='mt-[9rem] bg-white mb-5'>
         <div className="flex flex-col text-center items-center relative">
    <h2 className="font-semibold text-white text-xl w-[70%] relative uppercase z-10 ">gym Trainers
        <img src="https://gymate-iota.vercel.app/static/media/title-bg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="img" className='w-[24rem] absolute top-[-12px] z-[-8] left-[6%] md:left-[16%] lg:left-[30%]' />
    </h2>
    </div>
    <h3 className="text-center text-2xl capitalize mt-12 font-semibold">Team Of Expert Coaches</h3>
    <p className="text-center text-gray-500 leading-[1.8] my-8">Expert team of coaches helps you succeed in any goal,<br/> personalized guidance and motivation provided!</p>
    <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 px-14 gap-y-4 lg:gap-y-0 ">

    {/* CARD GYM TRAINERS 1 */}
    <div className="w-full px-[4rem] hover:-translate-y-6 cursor-pointer duration-300 border border-gray-300 shadow-xl ">
        <div className="img w-full h-[14rem] flex justify-center relative">
            <img src="https://gymate-iota.vercel.app/static/media/trainer1.2b262907a2293e42de47.png" alt="img" className='h-full z-20' />
            <div className="w-full h-full absolute top-0 ">
                <img src="https://gymate-iota.vercel.app/static/media/trainer-bg.d8a91ceec330444b6dfd.png" alt="background" className="w-full h-full -z-10" />
            </div>
        </div>
        <div className="body ">
            <h3 className="font-semibold text-black mb-2 mt-10 text-xl text-center uppercase z-10">Sarah Harris</h3>
            <p className="text-center text-gray-600 text-xl capitalize font-semibold">Yoga Trainer</p>
            <div className="w-full py-6 flex justify-center">
                <div className="flex justify-between items-center gap-2">
                    <AiFillFacebook className='text-gray-600 text-2xl' />
                    <AiFillTwitterCircle className='text-gray-600 text-2xl' />
                    <AiFillGithub className='text-gray-600 text-2xl' />
                    <AiOutlineMail className='text-gray-600 text-2xl'  />
                </div>
            </div>
        </div>
    </div>
    {/* END */}
    {/* CARD GYM TRAINERS 2*/}
    <div className="w-full px-[4rem] hover:-translate-y-6 cursor-pointer duration-300 border border-gray-300 shadow-xl ">
        <div className="img w-full h-[14rem] flex justify-center relative">
            <img src="https://gymate-iota.vercel.app/static/media/trainer2.e1fe210e1c836343c1fe.png" alt="img" className='h-full z-20' />
            <div className="w-full h-full absolute top-0 ">
                <img src="https://gymate-iota.vercel.app/static/media/trainer-bg.d8a91ceec330444b6dfd.png" alt="background" className="w-full h-full -z-10" />
            </div>
        </div>
        <div className="body ">
            <h3 className="font-semibold text-black mb-2 mt-10 text-xl text-center uppercase z-10">Adam Harris</h3>
            <p className="text-center text-gray-600 text-xl capitalize font-semibold">Crossfit Trainer</p>
            <div className="w-full py-6 flex justify-center">
                <div className="flex justify-between items-center gap-2">
                    <AiFillFacebook className='text-gray-600 text-2xl' />
                    <AiFillTwitterCircle className='text-gray-600 text-2xl' />
                    <AiFillGithub className='text-gray-600 text-2xl' />
                    <AiOutlineMail className='text-gray-600 text-2xl'  />
                </div>
            </div>
        </div>
    </div>
    {/* END */}
    {/* CARD GYM TRAINERS 3*/}
    <div className="w-full px-[4rem] hover:-translate-y-6 cursor-pointer duration-300 border border-gray-300 shadow-xl">
        <div className="img w-full h-[14rem] flex justify-center relative">
            <img src="https://gymate-iota.vercel.app/static/media/trainer3.8b049fcaa3d9d0a3f143.png" alt="img" className='h-full z-20' />
            <div className="w-full h-full absolute top-0 ">
                <img src="https://gymate-iota.vercel.app/static/media/trainer-bg.d8a91ceec330444b6dfd.png" alt="background" className="w-full h-full -z-10" />
            </div>
        </div>
        <div className="body ">
            <h3 className="font-semibold text-black mb-2 mt-10 text-xl text-center uppercase z-10">Ana June</h3>
            <p className="text-center text-gray-600 text-xl capitalize font-semibold">Personal Trainer</p>
            <div className="w-full py-6 flex justify-center">
                <div className="flex justify-between items-center gap-2">
                    <AiFillFacebook className='text-gray-600 text-2xl' />
                    <AiFillTwitterCircle className='text-gray-600 text-2xl' />
                    <AiFillGithub className='text-gray-600 text-2xl' />
                    <AiOutlineMail className='text-gray-600 text-2xl'  />
                </div>
            </div>
        </div>
    </div>
    {/* END */}

    </div>
    <div className="mt-[4rem] flex justify-evenly flex-wrap gap-7 border-b pb-10  md:gap-0">
        <img src="/assets/Untitled.png" alt="image-logo" />
        <img src="/assets/Untitled2.png" alt="image-logo" />
        <img src="/assets/Untitled3.png" alt="image-logo" />
        <img src="/assets/Untitled4.png" alt="image-logo" />
        <img src="/assets/Untitled5.png" alt="image-logo" />
    </div>
    </section>
  )
}

export default Trainers