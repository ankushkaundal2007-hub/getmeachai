"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { signIn,useSession } from 'next-auth/react'

const Dashboard = () => {
    const { data: session } = useSession()
       if(!session) {
          const router=useRouter()
          router.push('/Login')
  
   }
  return (
    <div className='text-white'>
      dashboard
    </div>
  )
}

export default Dashboard
