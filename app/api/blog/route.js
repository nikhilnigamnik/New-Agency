import { Blog } from "@/app/models/blog";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    const blog = await Blog.find();
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.log(error);
    return "Something went wrong in getting the blogs";
  }
}

export async function POST(request) {
  const { title, slug, banner, content, tags, status } = await request.json();
  try {
    const project = new Blog({
      title,
      slug,
      banner,
      content,
      tags,
      status,
    });
    await connectDB();
    const newBlog = await project.save();
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
      message: "Something went wrong in creating the blog",
    });
  }
}
