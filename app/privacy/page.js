import React from 'react'

const page = () => {
  return (
    <>
    <div className="min-h-screen  text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
        
        <h1 className="text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-300 mb-8 text-center">
          Last Updated: June 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Introduction
            </h2>
            <p>
              Welcome to GetMeAChai. Your privacy is important to us.
              This Privacy Policy explains how we collect, use, and
              protect your information when you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Information We Collect
            </h2>
            <p>
              We may collect basic information such as your name,
              email address, profile image, and any details you
              voluntarily provide while using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and improve our services.</li>
              <li>To manage user accounts and profiles.</li>
              <li>To process support requests and inquiries.</li>
              <li>To maintain platform security and reliability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal
              information from unauthorized access, misuse, or disclosure.
              However, no online platform can guarantee complete security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Third-Party Services
            </h2>
            <p>
              Our platform may use trusted third-party services for
              authentication, analytics, or payment processing.
              These services have their own privacy policies and practices.
            </p>
          </section>

         

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of
              your personal information where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy,
              please contact us at:
            </p>

            <p className="mt-3 font-medium text-blue-600">
              support@getmeachai.com
            </p>
          </section>

        </div>
      </div>
    </div>

    
    </>
  )
}

export default page
