import { NextResponse } from "next/server";
import { instance } from "@/lib/razorpay";

export async function POST() {
  const order = await instance.orders.create({
    amount: 10000, // ₹100
    currency: "INR",
  });

  return NextResponse.json(order);
}