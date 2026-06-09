import { NextResponse } from "next/server";
import connectDB from "@/lib/Mongodb";
import payment from "@/models/payment";

export async function POST(req) {
  const data = await req.json();

  await connectDB();

  await payment.create({
    name: data.name,
    message: data.message,
    amount: Number(data.amount),
    payed_to: data.payed_to,
    done: true,
  });

  return NextResponse.json({
    success: true,
  });
}