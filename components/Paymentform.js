"use client";
import {React,useState,useEffect} from "react";
import { signIn,useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


import Script from "next/script";

export default function PaymentForm() {
    const { data: session } = useSession()
      
      const router = useRouter();
        useEffect(() => {
          if (!session) {
            router.push("/Login");
          }
        }, [session,router]);
  const [user_data, setUser_data] = useState([])

   
  const [current, setCurrent] = useState(null)
 
  const [pay, setPay] = useState(false)
const [userpay, setUserpay] = useState({
  name:"",
  message:"",
  amount:"",
  payed_to:"",
})
useEffect(() => {
  if(current?.email){
    setUserpay(prev => ({
      ...prev,
      payed_to: current.email
    }))
  }
}, [current])
  
useEffect(() => {
  if (session?.user?.email) {
    getData();
  }
}, [session, pay]);

const getProfile = async () => {
    const res = await fetch("/api/user");

    const data = await res.json();
    
 const foundUser = data.find(
    (u) => u.email === session?.user?.email
  );
   
  setCurrent(foundUser);

};

useEffect(() => {
  if (session?.user?.email) {
    getProfile();
  }
}, [session]);

const getData=async () => {
   let req= await fetch(`/api/create-order`)
     const data=await req.json();
       console.log(data)
    
       const foundUser= data.filter(
       (u)=> u.payed_to === session?.user?.email
       )
       
     setUser_data(
    foundUser
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
  handler:async function (response) {
     await fetch("/api/create-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userpay),
  });
 setPay(prev => !prev);
  alert("Payment Successful");

  },
  
};


const razor = new window.Razorpay(options);
razor.open();
setUserpay({
  name: "",
  message: "",
  amount: "",
});

  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
   <div className="user relative">
    <div className="img">
      <img src='/bACK.jpg' className='w-full'></img>
    </div>
    <div className=" border-2 border-white logo  rounded-xl w-[100px] h-[100px] bg-cover absolute left-[47%] bottom-[-9%]">
      <img src={current?.profile} className='bg-cover rounded-xl' />
    </div>
</div>
<div className="name flex flex-col gap-3 justify-center items-center mt-12">
    <h1 className='text-3xl text-white'>{current?.Name}</h1>
  <p className="text-slate-400">{current?.Quote}</p>
  
  </div>
  <div className="payments flex gap-3 min-h-[25vh] pt-5 mt-10 justify-center">
    <div className="suporters w-1/2 pt-10 text-white">
    <h2 className='text-2xl font-bold mb-2 mx-3'>Supporters</h2>
   <ul className='flex flex-col justify-center gap-2 mx-3'>
    {user_data.map((item,index) => (
  <li key={index} className='flex gap-2 text-center items-center'>
    <img src="user.gif" width={33} className='rounded-full' />
    <p className='text-gray-400'>
       {item.name}donated 
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
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      <button
      disabled={userpay.amount<1 || userpay.name.length<2}
      type="button"
        onClick={()=>handlePayment()}
        className=" disabled:bg-gray-500 w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Pay Now
      </button>
       </form>
    </div>

  </div>

  
    </>
  );
}