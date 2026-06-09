import mongoose from "mongoose";
import user from "@/models/user";
import connectDB from "@/lib/Mongodb";
import { NextResponse } from "next/server";


export async function POST(req) {
    await connectDB();
    let data = await req.json();
     const existingUser = await user.findOne({
    email: data.email,
  });

  if (existingUser) {
    await user.findOneAndUpdate(
      { email: data.email },
      data
    );

    return NextResponse.json({
      message: "User updated",
    });
  }

  await user.create(data);
    return NextResponse.json({ success: true, data })
}

export async function GET(response){
      
    await connectDB();
     const all_user= await user.find()
return NextResponse.json(all_user)
    
}


