"use client"
import {React,useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { signIn,useSession } from 'next-auth/react'

const Dashboard = () => {
    const { data: session } = useSession()
         const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/Login");
    }
  }, [session,router]);

  const [form, setForm] = useState({Name:"",id:"",secret:"",email:""})

  const handleChange =(e) => {
  setForm({
      ...form,
      [e.target.name]:e.target.value}
    )
    
    
  }
  const handleSave= async() => {
     let res=await fetch("/api/user",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(form)

    })

    let result=await res.text()

    console.log(result)
  }
  
  

 

  return (
    <div className=" text-white min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-blue-800 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-white mb-2">
         Register
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Create your dashboard account
        </p>

        <form className="space-y-5">

          <div>
            <label className="block text-sm text-gray-200 mb-2">
              Full Name
            </label>

            <input
           onChange={(e)=>{handleChange(e)}}
            
              type="text"
              name="Name"
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-200 mb-2">
              Email Address
            </label>

            <input
            name="email"
      
            onChange={(e)=>{handleChange(e)}}
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-200 mb-2">
              Razorpay Id
            </label>

            <input
            name="id"
             
            onChange={(e)=>{handleChange(e)}}
              type="text"
              placeholder="Razorpay Id"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-200 mb-2">
              Razorpay Secret
            </label>

            <input
            name="secret"
          onChange={(e)=>{handleChange(e)}}
              type="text"
              placeholder="Razorpay Secret"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
          onClick={()=>handleSave()}
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-400 hover:bg-blue-600 text-white font-semibold transition"
             
          >
            Save
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?
          <span className="text-blue-400 cursor-pointer ml-1">
            Login
          </span>
        </p>

      </div>
    </div>
  );

}

export default Dashboard
