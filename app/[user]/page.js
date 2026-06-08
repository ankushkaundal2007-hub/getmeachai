
import React from 'react'
import Paymentform from "@/components/Paymentform";

export default async function User({ params }) {
  const { user } = await params

  return (
    <>
    <div className="user relative">
    <div className="img">
      <img src='/bACK.jpg' className='w-full'></img>
    </div>
    <div className=" border-2 border-white logo  rounded-xl w-[100px] h-[100px] bg-cover absolute left-[47%] bottom-[-9%]">
      <img src="/Gautam Profile.jpg"  className='bg-cover rounded-xl' />
    </div>
</div>
<div className="name flex flex-col gap-3 justify-center items-center mt-12">
    <h1 className='text-3xl text-white'>@{user}</h1>
  <p className="text-slate-400">speaks on peace of mind in daily living.</p>
  <p className="text-slate-400">292 Posts</p>
  </div>
  <div className="payments flex gap-3 min-h-[25vh] pt-5 mt-10 justify-center">
    <div className="suporters w-1/2 pt-10 text-white">
    <h2 className='text-2xl font-bold mb-2 mx-3'>Supporters</h2>
   <ul className='flex flex-col justify-center gap-2 mx-3'>
    <li className='flex gap-2 text-center items-center '>
      <img src="user.gif" width={33} className='rounded-full' />
      <p className='text-gray-400'>Gautam donated <span className='text-white font-bold'>$30</span> with a message "chai was goood 👌" </p>
    </li>
    <li className='flex gap-2 text-center items-center '>
      <img src="user.gif" width={33} className='rounded-full' />
      <p className='text-gray-400'>Verma donated <span className='text-white font-bold'>$30</span> with a message "chai was goood 👌" </p>
    </li>
    <li className='flex gap-2 text-center items-center '>
      <img src="user.gif" width={33} className='rounded-full' />
      <p className='text-gray-400'>Anmol donated <span className='text-white font-bold'>$30</span> with a message "chai was goood 👌" </p>
    </li>
   </ul>
    </div>
    <div className="w-1/2 mt-4 mx-auto p-6 text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Support Me ☕
      </h2>

      <form className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write a message..."
            className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Amount ($)
          </label>
          <input
            type="number"
            min="1"
            placeholder="Enter amount"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <Paymentform/>
      </form>
    </div>

  </div>

    </>
  )
}