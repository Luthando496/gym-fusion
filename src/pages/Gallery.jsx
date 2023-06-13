import React from 'react'
import HeaderSecond from '../components/Header-2';
import {SlArrowRight} from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'; 'react-router-dom'

const Gallery = () => {

    const navigate = useNavigate();


  return (
    <>
        <HeaderSecond  title={'Gallery'} />

        <section className="mt-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-10">
            <div className="w-full h-[22rem]">
                <img src="https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-cover h-full' alt="gallery" />
            </div>
            <div className="w-full h-[22rem]">
                <img src="https://images.pexels.com/photos/4761587/pexels-photo-4761587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-cover h-full' alt="gallery" />
            </div>
            <div className="w-full h-[22rem]">
                <img src="https://images.pexels.com/photos/6296013/pexels-photo-6296013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-cover h-full' alt="gallery" />
            </div>
            {/*  */}
            <div className="w-full h-[22rem]">
                <img src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_960_720.jpg" className='w-full object-cover h-full' alt="gallery" />
            </div>
            <div className="w-full h-[22rem]">
                <img src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-cover h-full' alt="gallery" />
            </div>
            <div className="w-full h-[22rem]">
                <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-cover h-full' alt="gallery" />
            </div>
            {/*  */}
            <div className="w-full h-[22rem]">
                <img src="https://images.unsplash.com/photo-1662045010180-a2b1ac1652b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className='w-full object-cover h-full' alt="gallery" />
            </div>
            <div className="w-full h-[22rem]">
                <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className='w-full object-cover h-full' alt="gallery" />
            </div>
    
        </div>

        </section>

        <div className="my-14 w-full flex justify-center items-center">
            <div className="flex gap-5 items-center">
                <button className="border font-semibold border-gray-300 py-2 px-4 bg-pink-500 text-white text-base">1</button>
                <button onClick={()=> navigate('/gallery/page-2')} className="px-4 border font-semibold border-gray-300 py-2  text-black text-base">2</button>
                <button onClick={()=> navigate('/gallery/page-2')} className="px-2 border font-semibold border-gray-300 py-3  text-black text-base flex ">
                    <span className="flex">
                    <SlArrowRight className="text-base" />
                    <SlArrowRight className="text-base" />
                    </span>
                </button>
            </div>
        </div>
    </>
  )
}

export default Gallery;