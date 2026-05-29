import React from 'react'

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
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Refund Policies</li>
        </ul>
      </div>
          </footer>
    </>
  )
}

export default Footer
