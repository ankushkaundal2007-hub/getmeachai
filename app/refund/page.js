import React from 'react'

const page = () => {
  return (
  <>

    <div className="min-h-screen  text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
        
        <h1 className="text-4xl font-bold text-center mb-6">
          Refund Policy
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Last Updated: June 2026
        </p>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          
          <p>
            GetMeAChai allows users to voluntarily support creators through
            tips and donations.
          </p>

          <p>
            All payments made on the platform are considered final and
            non-refundable.
          </p>

          <p>
            Once a payment has been successfully processed, we are unable
            to cancel, reverse, or refund the transaction.
          </p>

          <p>
            By making a payment, you acknowledge and agree to this
            Refund Policy.
          </p>

          <div className="mt-8 p-4 rounded-lg border border-blue-500/30 bg-blue-500/10">
            <p className="font-semibold text-blue-600">
              No Refunds
            </p>
            <p className="mt-2">
              All tips, donations, and contributions made through
              GetMeAChai are final and cannot be refunded.
            </p>
          </div>

        </div>
      </div>
    </div>

  
  </>
  )
}

export default page
