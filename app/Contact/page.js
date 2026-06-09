import React from 'react'

const page = () => {
  return (
   <>
  
    <div className="min-h-screen text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
        
        <h1 className="text-4xl font-bold text-center mb-4">
          Contact Us
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-600 text-black font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>📧 support@getmeachai.com</p>
          <p className="mt-2">We'll get back to you as soon as possible.</p>
        </div>

      </div>
    </div>

   
   </>
  )
}

export default page
