import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <footer className='flex flex-col justify-center items-center px-4  bg-blue-950 text-white '>
        <div className="copyright mt-3">
          Copyright © 2026 Get Me A Chai | All rights reserved!
        </div>
        <div> Made by Ankush Kaundal with ❤
</div>  
      <div className="policies flex">
        <ul className='flex justify-center items-center my-2 gap-3'>
          <li><Link href="/Read">About Us</Link></li>
          <li><Link href="/Contact">Contact Us</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms & Conditions</Link></li>
          <li><Link href="/refund">Refund Policies</Link></li>
        </ul>
      </div>
          </footer>
    </>
  )
}

export default Footer
