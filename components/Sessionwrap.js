"use client"
import { SessionProvider } from "next-auth/react"

import React from 'react'

const Sessionwrap = ({children}) => {
  return (
    <>
       <SessionProvider >
     {children}
    </SessionProvider>
  
   </>
  )
}

export default Sessionwrap
