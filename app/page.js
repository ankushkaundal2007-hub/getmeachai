"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";


export default function Home() {
  
  return (
    <>
      <div className=" container min-h-[50vh] mx-auto flex flex-col justify-center items-center text-white">
      <div className="box1">
        <div className="logo-slogan flex justify-center items-center mx-auto">
          <div className="font-bold text-[50px]">Get Me A Chai</div>
           <div className=" mb-19"><img width={140} height={60} src="/tea.gif"  /></div>
        </div>
        <div className="into mt-[-55px] mb-9 text-xl">A Crowdfunding platform for creaters. Get funded by your fans and followers. Start Now!</div>
        <div className="buttons flex justify-center items-center mt-4 gap-2 mx-auto ">
          <button type="button" className="rounded-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-lg px-4 py-2.5 text-center leading-5"><Link href={"/Login"}>Start Here</Link></button>
          <button type="button" className="rounded-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-lg px-4 py-2.5 text-center leading-5"><Link href={"/Read"}>Read More</Link></button>
        </div>
      </div>
      </div>
       <div className="bg-white h-[4px] w-full mt-7 opacity-45"></div>
       <div className="container min-h-[50vh] mx-auto flex flex-col justify-center items-center text-white">
        <div className="msg font-bold text-[30px]">Your fans can buy you a chai</div>
        <div className="icons flex items-center  gap-50 mt-15">
          <div className="icon1 flex flex-col items-center gap-2 mx-auto">
            <img width={88} className="rounded-full" src="/man.gif" />
            <span className="text-lg font-bold">Fund Yourself</span>
            <p>your fans are available to help you</p>
          </div>
          <div className="icon1 flex flex-col items-center gap-2 ">
            <img width={88} className="rounded-full" src="/dollar.gif" />
            <span className="text-lg font-bold">Fund Yourself</span>
            <p>your fans are available to help you</p>
          </div>
          <div className="icon1 flex flex-col items-center  gap-2">
            <img width={88} className="rounded-full" src="/group.gif" />
            <span className="text-lg font-bold">Fund Yourself</span>
            <p>your fans are available to help you</p>
          </div>
          
        </div>

       </div>
        <div className="bg-white h-[4px] w-full mt-7 opacity-45"></div>
        <div className="container min-h-[55vh] mx-auto flex flex-col justify-center items-center text-white">
          <div className="learn text-2xl font-bold mb-[64px]">Learn More About Us</div>
          <p className="text-center mb-6">At GetMeAChai, we believe great creators deserve direct support from the people who enjoy their work. Our platform makes it simple for supporters to contribute, share appreciation, and help creators continue building, creating, and inspiring.</p>
          <p className="text-center mb-6">Whether you're an artist, developer, writer, designer, or content creator, GetMeAChai provides a simple way to receive support from your community. Supporters can contribute with a message, while creators can focus on doing what they love.</p>
          <p className="text-center mb-6">Our mission is to strengthen the connection between creators and their audience by making support transparent, accessible, and meaningful.</p>
          <p className="text-center mb-6">Create. Connect. Grow. One chai at a time. ☕</p>
        </div>
    </>
  );
}
