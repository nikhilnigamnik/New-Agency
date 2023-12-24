import { Project } from "@/app/models/project";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    const project = await Project.find();
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.log(error);
    return "Something went wrong in getting the projects";
  }
}

export async function POST(request) {
  const { title, description, banner, link, tags } = await request.json();
  try {
    const project = new Project({
      title,
      description,
      banner,
      link,
      tags,
    });
    await connectDB();
    const newProject = await project.save();
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
      message: "Something went wrong in creating the project",
    });
  }
}
