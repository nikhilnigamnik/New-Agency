import { Blog } from "@/app/models/blog";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

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
