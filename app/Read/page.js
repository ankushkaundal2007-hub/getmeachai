import React from 'react'

const page = () => {
  return (
   
  <>
    <div className="min-h-screen text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            About GetMeAChai ☕
          </h1>
          <p className="text-gray-400 text-lg">
            Support creators. Encourage passion. Fuel creativity.
          </p>
        </div>

     
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-neutral-800">

          <h2 className="text-3xl font-bold mb-4">
            Welcome to GetMeAChai
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            GetMeAChai is a simple platform that allows supporters to
            directly contribute to creators whose work they enjoy.
            Whether it's coding projects, educational content, blogs,
            videos, or creative ideas, every contribution helps creators
            continue doing what they love.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Why Support Creators?
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            Creating valuable content takes time, effort, and consistency.
            Your support helps creators invest more time into building
            projects, sharing knowledge, and helping communities grow.
            Even a small contribution can make a big difference.
          </p>

          <div className="grid md:grid-cols-3 gap-5 my-10">
            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-xl">
              <h3 className="font-bold text-xl mb-2">
                🚀 Create More
              </h3>
              <p className="text-gray-400">
                Helps creators spend more time building valuable content.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-xl">
              <h3 className="font-bold text-xl mb-2">
                📚 Keep Learning
              </h3>
              <p className="text-gray-400">
                Supports resources, tools, and continuous improvement.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-xl">
              <h3 className="font-bold text-xl mb-2">
                ❤️ Show Appreciation
              </h3>
              <p className="text-gray-400">
                A simple way to thank creators for their work.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">
            How It Works
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start">
              <span className="bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </span>
              <p className="text-gray-300">
                Enter your name and a message.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </span>
              <p className="text-gray-300">
                Choose an amount you'd like to contribute.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </span>
              <p className="text-gray-300">
                Complete the secure payment through Razorpay.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </span>
              <p className="text-gray-300">
                Your support helps creators continue their journey.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">
              Every Chai Counts ☕
            </h2>

            <p className="text-lg">
              Thank you for supporting creators and helping them build,
              learn, and share with the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>

  )
}

export default page
