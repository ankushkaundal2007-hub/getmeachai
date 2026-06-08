"use client";
import {React,useState,useEffect} from "react";

import Script from "next/script";

export default function PaymentForm({user}) {
  const [user_data, setUser_data] = useState([])
  const [pay, setPay] = useState(false)
const [userpay, setUserpay] = useState({
  name:"",
  message:"",
  amount:"",
})
useEffect(() => {
    getData();
  
}, [pay])

const getData=async () => {
   let req= await fetch("/api/create-order")
     const data=await req.json();
     setUser_data(
    data
     )
   
}

 const handleChange=(e) => {
   setUserpay({...userpay,
    [e.target.name]:e.target.value
   })
 }
 

  const handlePayment = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
       headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(userpay),
    });

    const order = await res.json();

   
const options = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  amount: order.amount,
  currency: order.currency,
  order_id: order.id,
  name: "GetMeAChai",
  handler: function (response) {
    alert("payment successful")

  },
  
};


const razor = new window.Razorpay(options);
razor.open();
setUserpay({
  name: "",
  message: "",
  amount: "",
});
setPay(!pay)
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
   <div className="user relative">
    <div className="img">
      <img src='/bACK.jpg' className='w-full'></img>
    </div>
    <div className=" border-2 border-white logo  rounded-xl w-[100px] h-[100px] bg-cover absolute left-[47%] bottom-[-9%]">
      <img src="/Gautam Profile.jpg"  className='bg-cover rounded-xl' />
    </div>
</div>
<div className="name flex flex-col gap-3 justify-center items-center mt-12">
    <h1 className='text-3xl text-white'>@{user.split("%")[0]}</h1>
  <p className="text-slate-400">speaks on peace of mind in daily living.</p>
  <p className="text-slate-400">292 Posts</p>
  </div>
  <div className="payments flex gap-3 min-h-[25vh] pt-5 mt-10 justify-center">
    <div className="suporters w-1/2 pt-10 text-white">
    <h2 className='text-2xl font-bold mb-2 mx-3'>Supporters</h2>
   <ul className='flex flex-col justify-center gap-2 mx-3'>
    {user_data.map((item,index) => (
  <li key={index} className='flex gap-2 text-center items-center'>
    <img src="user.gif" width={33} className='rounded-full' />
    <p className='text-gray-400'>
      {item.name} donated 
      <span className='text-white font-bold'>
         ₹{item.amount}
      </span>
      with a message "{item.message}"
    </p>
  </li>
))}
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
            name="name"
            value={userpay.name}
            onChange={(e)=>handleChange(e)}
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
            value={userpay.message}
            name="message"
            onChange={(e)=>handleChange(e)}
            placeholder="Write a message..."
            className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Amount (₹)
          </label>
          <input
          name="amount"
          onChange={(e)=>handleChange(e)}
            type="number"
            value={userpay.amount}
            min="1"
            placeholder="Enter amount"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      <button
      type="button"
        onClick={()=>handlePayment()}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
      >
        Pay Now
      </button>
       </form>
    </div>

  </div>

  
    </>
  );
}