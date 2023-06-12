import React from 'react'
import {IoMdPerson} from 'react-icons/io'
import {AiOutlineClockCircle} from 'react-icons/ai'

const Classes = () => {
  return (
    <section className='w-full py-14'>
        <div className="px-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* card start */}
        <div className="w-full relative overflow-hidden h-[26rem] shadow-2xl rounded-3xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="/assets/anastase-maragos-7kEpUPB8vNk-unsplash.jpg" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Cycling</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Dorian Yate</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Wed: 9:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
            {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl  shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Meditation</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Maria Mich</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Fri: 11:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
            {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl  shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Boxing</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">John Flex</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Tue: 4:00 pm</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
            {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl  shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/1544774/pexels-photo-1544774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Karate</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">David Rich</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Sat: 9:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
            {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl  shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Power Lifting</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Dorian Yate</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Wed: 9:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
            {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl  shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Workout</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Shawn Ray</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Sun: 10:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
            {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl  shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Crossfit</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Jenifer Alex</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Wed: 9:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
            {/* card end */}
        {/* card start */}
        <div className="w-full relative group h-[26rem] overflow-hidden rounded-3xl  shadow-2xl">
            <div className="img w-full h-full overflow-hidden">
                <img src="https://images.pexels.com/photos/1109078/pexels-photo-1109078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full  object-cover h-full" />
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-4 px-5 py-8">
                <h2 className="text-2xl font-bold  capitalize text-white">Running</h2>
                <span className="bg-[#ffaf03] w-[50px] h-[4px]"></span>

                <div className="flex gap-4 items-center ">
                    <div className="flex gap-2 items-center">
                    <IoMdPerson className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Dorian Yate</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-white text-xl" />
                    <p className="text-white text-xl  font-semibold ">Wed: 9:00 am</p>
                    </div>
                </div>
                <button className="px-4 d-block max-w-[60%] py-1 text-xl uppercase bg-white font-semibold">Join now</button>
            </div>
        </div>
            {/* card end */}
        </div>

    </section>
  )
}

export default Classes