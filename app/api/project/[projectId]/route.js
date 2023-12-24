import { Project } from "@/app/models/project";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { projectId } = params;
  try {
    await connectDB();

    const project = await Project.findById(projectId);
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.log(error);
    return "Something went wrong in getting the project";
  }
}


