import { NextResponse } from "next/server";
import { instance } from "@/lib/razorpay";
import connectDB from "@/lib/Mongodb";
import payment from "@/models/payment";

export async function POST(req) {

  const data = await req.json();

  console.log(data);

  const order = await instance.orders.create({
    amount: Number(data.amount) * 100,
    currency: "INR",
  });
  await connectDB();
  await payment.create({
    name:data.name,
    message:data.message,
    amount:Number(data.amount),
    orderId:order.id,
    done:true

  })


  return NextResponse.json(order);
}

export async function GET(response){
   await connectDB();
   const user_pay= await payment.find()

  return NextResponse.json(user_pay)
}