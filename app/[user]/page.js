
import React from 'react'
import Paymentform from "@/components/Paymentform";

export default async function User({ params }) {
  const { user } = await params
  return (
    <>
   
        <Paymentform user={user}/>
    </>
  )
}