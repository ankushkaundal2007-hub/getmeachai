import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white text-center shadow-lg">

        <h1 className="text-4xl font-bold mb-4">
          Contact Me
        </h1>

        <p className="text-gray-300 mb-8">
          Feel free to reach out through the details below.
        </p>

        <div className="space-y-6 text-lg">
          <div>
            <p className="text-gray-400">Name</p>
            <p className="font-semibold">Ankush Kaundal</p>
          </div>

          <div>
            <p className="text-gray-400">Email</p>
            <a
              href="mailto:ankushkaundal2007@gmail.com"
              className="text-blue-400 hover:underline"
            >
              ankushkaundal2007@gmail.com
            </a>
          </div>

          <div>
            <p className="text-gray-400">GitHub</p>
            <a
              href="https://github.com/ankushkaundal2007-hub"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              github.com/ankushkaundal2007-hub
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page