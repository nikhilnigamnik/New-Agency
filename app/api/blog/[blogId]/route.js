import { Blog } from "@/app/models/blog";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const data = await Blog.findOne({
      slug: params.blogId,
    });
    console.log(data);
    return NextResponse.json({
      data,
      message: "Blog Found",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Blog Found Failed",
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { blogId } = params;
    await connectDB();
    await Blog.deleteOne({
      _id: blogId,
    });
    return NextResponse.json({
      message: "Blog Deleted",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Blog Delete Failed",
    });
  }
}
