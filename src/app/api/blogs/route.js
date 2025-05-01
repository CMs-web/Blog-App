import { connectToDatabase } from "../../../lib/mongodb";
import Blog from "../../../model/Blog";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    if (!blogs) {
      return NextResponse.json({ message: "No blogs found" }, { status: 404 });
    }

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Error fetching blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { title, content, description, slug, coverImage } = body;
    const blog = await Blog.create({
      title,
      content,
      slug,
      coverImage,
      description,
    });
    if (!blog) {
      return NextResponse.json(
        { message: "Blog not created" },
        { status: 404 }
      );
    }
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { message: "Error creating blog" },
      { status: 500 }
    );
  }
}
