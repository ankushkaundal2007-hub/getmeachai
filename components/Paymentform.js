"use client";

import Script from "next/script";

export default function PaymentForm() {

  const handlePayment = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
    });

    const order = await res.json();

    console.log("Order:", order);
const options = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  amount: order.amount,
  currency: order.currency,
  order_id: order.id,
  name: "GetMeAChai",
  handler: function (response) {
    console.log(response);
    alert("payment successful")
  },
};

const razor = new window.Razorpay(options);
razor.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <button
      type="button"
        onClick={()=>handlePayment()}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
      >
        Pay Now
      </button>
    </>
  );
}