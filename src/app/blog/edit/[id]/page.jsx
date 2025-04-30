// Edit blog page
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
// import { toast } from "@/components/ui/use-toast";
import { Image, Save, Trash2 } from "lucide-react";
import BlogLayout from "../components/BlogLayout";

const EditBlog = ({ params }) => {
  const { id } = params();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
  });

  useEffect(() => {
    // In a real app, this would be an API call to fetch the post by ID
    // For this example, we'll simulate with mock data
    setTimeout(() => {
      const mockPost = {
        id: "minimalist-design-web-development",
        title: "The Art of Minimalist Design in Modern Web Development",
        slug: "minimalist-design-web-development",
        content: `In the ever-evolving landscape of web development, minimalist design has emerged as a powerful approach to creating digital experiences that are both visually appealing and highly functional. This design philosophy, characterized by simplicity, clean lines, and purposeful use of space, offers numerous benefits for both users and developers.`,
        excerpt:
          "Explore how minimalist design principles can create more elegant, efficient, and user-friendly web experiences in today's digital landscape.",
        coverImage:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        publishedAt: "2025-04-20T10:00:00.000Z",
        updatedAt: "2025-04-20T10:00:00.000Z",
      };

      setForm(mockPost);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({ ...prev, coverImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({ ...prev, coverImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.title || !form.slug || !form.excerpt || !form.content) {
      //   toast({
      //     title: "Missing information",
      //     description: "Please fill out all required fields.",
      //     variant: "destructive",
      //   });
      return;
    }

    // In a real app, you would send this to your backend
    console.log("Updating blog post:", form);

    // toast({
    //   title: "Success!",
    //   description: "Your blog post has been updated.",
    // });

    // Navigate back to the post
    router.push(`/blog/${form.slug}`);
  };

  const handleDelete = () => {
    // In a real app, this would show a confirmation dialog before deletion
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post? This action cannot be undone."
    );

    if (confirmDelete) {
      console.log("Deleting blog post:", id);

      //   toast({
      //     title: "Post deleted",
      //     description: "The blog post has been permanently removed.",
      //   });

      // Navigate back to the blog listing
      router.push("/blog");
    }
  };

  if (loading) {
    return (
      <BlogLayout>
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-40 bg-gray-200 rounded"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-center mb-4">
              Edit Blog Post
            </h1>
            <p className="text-blog-text text-center">
              Update your article content and settings.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="title"
                >
                  Title *
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blog-primary"
                  placeholder="Enter a descriptive title"
                  required
                />
              </div>

              {/* Slug */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="slug"
                >
                  Slug *
                </label>
                <div className="flex items-center">
                  <span className="bg-gray-100 px-3 py-3 rounded-l-md border border-r-0 border-gray-200 text-gray-500">
                    /blog/
                  </span>
                  <input
                    id="slug"
                    name="slug"
                    type="text"
                    value={form.slug}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-r-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blog-primary"
                    placeholder="url-friendly-slug"
                    required
                  />
                </div>
                <p className="text-sm text-blog-text mt-1">
                  Be careful when changing the slug as it will affect the URL.
                </p>
              </div>

              {/* Excerpt */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="excerpt"
                >
                  Excerpt *{" "}
                  <span className="text-blog-text">(max 200 characters)</span>
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={form.excerpt}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blog-primary h-20"
                  placeholder="A brief summary of your post"
                  maxLength={200}
                  required
                />
                <p className="text-sm text-right text-blog-text mt-1">
                  {form.excerpt.length}/200
                </p>
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Cover Image
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center ${
                    isDragging
                      ? "border-blog-primary bg-blog-light"
                      : "border-gray-300"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {form.coverImage ? (
                    <div className="relative">
                      <img
                        src={form.coverImage}
                        alt="Cover preview"
                        className="mx-auto max-h-64 rounded-lg"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1 rounded-full"
                        onClick={() =>
                          setForm((prev) => ({ ...prev, coverImage: "" }))
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Image className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex items-center justify-center text-sm">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-blog-primary hover:text-blog-primary/80 focus-within:outline-none"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-blog-text">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="content"
                >
                  Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blog-primary h-64"
                  placeholder="Write your blog post here..."
                  required
                />
                <p className="text-sm text-blog-text mt-1">
                  Supports HTML for formatting.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-between gap-4">
                <motion.button
                  type="button"
                  onClick={handleDelete}
                  className="flex items-center bg-red-500 text-white px-5 py-2.5 rounded-md hover:bg-red-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Trash2 size={18} className="mr-2" />
                  Delete Post
                </motion.button>

                <motion.button
                  type="submit"
                  className="flex items-center bg-blog-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Save size={18} className="mr-2" />
                  Save Changes
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </BlogLayout>
  );
};

export default EditBlog;
