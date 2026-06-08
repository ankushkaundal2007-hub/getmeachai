import mongoose from "mongoose";
import user from "@/models/user";
import connectDB from "@/lib/Mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
    await connectDB();
    let data = await req.json();
    await user.create(data);
    return NextResponse.json({ success: true, data })
}
