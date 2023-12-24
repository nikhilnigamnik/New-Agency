import { Service } from "@/app/models/service";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    const service = await Service.find();
    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    console.log(error);
    return "Something went wrong in getting the projects";
  }
}

export async function POST(request) {
  const { title } = await request.json();
  try {
    const service = new Service({
      title,
    });
    await connectDB();
    const newService = await service.save();
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
      message: "Something went wrong in creating the service",
    });
  }
}
