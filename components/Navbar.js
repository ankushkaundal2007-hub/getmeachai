"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'


import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()


  const [showdrop, setShowdrop] = useState(false)



  return (
    <>
      <nav className='flex justify-between items-center px-4  bg-blue-950 text-white h-14'>
        <div><button type="button" className="rounded-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-lg px-4 py-2.5 text-center leading-5"><Link href={"/"}>GetMeAChai!</Link></button>

        </div>
        <div className="login-button gap-3 flex relative">
          {session && (<>
            <button id="dropdownDefaultButton" onClick={() => { setShowdrop(!showdrop) }} onBlur={() => {setTimeout(() => {setShowdrop(!showdrop)
              
            }, 300);}} data-dropdown-toggle="dropdown" className="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
              Welcome {`${session.user.name}`}
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
            </button>


            <div id="dropdown" className={`z-10 ${showdrop ? " " : "hidden"} absolute  top-full mt-4 bg-blue-900 border border-default-medium rounded-base shadow-lg w-44`}>
              <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/Dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session?.user?.name}`} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your page</Link>
                </li>
                <li>
                  <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</Link>
                </li>

                <li>
                  <Link href="#" onClick={() => { signOut(); console.log("hell") }} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Log Out</Link>
                </li>
              </ul>
            </div></>
          )}
          {session && (<Link href="/Login"><button onClick={() => signOut()} type="button" className="rounded-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-lg px-4 py-2.5 text-center leading-5">Logout</button></Link>)}

          {!session && (<Link href="/Login"><button type="button" className="rounded-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-lg px-4 py-2.5 text-center leading-5">Login</button></Link>)}
        </div>

      </nav>
    </>
  )
}

export default Navbar
