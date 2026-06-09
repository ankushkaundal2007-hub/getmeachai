import React from 'react'

const page = () => {
  return (
   <>
  
    <div className="min-h-screen  text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
        
        <h1 className="text-4xl font-bold text-center mb-6">
          Terms & Conditions
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Last Updated: June 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using GetMeAChai, you agree to comply
              with these Terms & Conditions. If you do not agree,
              please do not use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Use of the Platform
            </h2>
            <p>
              You agree to use GetMeAChai responsibly and not engage
              in any activity that may harm the platform or other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              User Accounts
            </h2>
            <p>
              You are responsible for maintaining the accuracy of your
              account information and for all activities performed under
              your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Payments & Donations
            </h2>
            <p>
              Any payments, tips, or donations made through the platform
              are voluntary. Users should review details carefully before
              completing a transaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Prohibited Activities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Using the platform for illegal purposes.</li>
              <li>Attempting to gain unauthorized access.</li>
              <li>Uploading harmful or misleading content.</li>
              <li>Interfering with the platform's operation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Limitation of Liability
            </h2>
            <p>
              GetMeAChai is provided on an "as is" basis. We are not
              responsible for any losses, damages, or interruptions
              arising from the use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms & Conditions from time to time.
              Continued use of the platform after updates constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding these Terms &
              Conditions, please contact us at:
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
