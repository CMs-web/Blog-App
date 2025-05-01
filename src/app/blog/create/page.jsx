// Create blog page
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Image, Save } from "lucide-react";
import { toast } from "sonner";

const CreateBlog = () => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    coverImage: "",
  });

  const [isCreating, setIsCreating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // Remove special chars
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
        .trim(); // Trim leading/trailing spaces

      setForm((prev) => ({ ...prev, [name]: value, slug }));
    }

    if (name === "coverImage") {
      setForm((prev) => ({ ...prev, [name]: value }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.title || !form.slug || !form.description || !form.content) {
      toast({
        title: "Missing information",
        // description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you would send this to your backend
    console.log("Submitting blog post:", form);

    // post to your backend API
    try {
      setIsCreating(true);
      fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      toast({
        title: "Success",
        description: "Blog post created successfully.",
        variant: "default",
      });
    } catch (error) {
      console.log("Error creating blog:", error);
      toast({
        title: "Error",
        description: "Failed to create blog post.",
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }

    // Reset form
    setForm({
      title: "",
      slug: "",
      description: "",
      content: "",
      coverImage: "",
    });
  };

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-center mb-4">
              Create New Blog Post
            </h1>
            <p className="text-blog-text text-center">
              Share your thoughts, ideas, and expertise with the world.
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
                  // required
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
                    // required
                  />
                </div>
                <p className="text-sm text-blog-text mt-1">
                  Auto-generated from title. You can edit if needed.
                </p>
              </div>

              {/* description */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="description"
                >
                  description *{" "}
                  <span className="text-blog-text">(max 200 characters)</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blog-primary h-20"
                  placeholder="A brief summary of your post"
                  maxLength={200}
                  // required
                />
                <p className="text-sm text-right text-blog-text mt-1">
                  {form.description.length}/200
                </p>
              </div>

              {/* Cover Image */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="coverImage"
                >
                  Cover Image URL
                </label>
                <input
                  id="coverImage"
                  name="coverImage"
                  type="text"
                  value={form.coverImage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blog-primary"
                  placeholder="Enter the URL of the cover image"
                />
                {form.coverImage && (
                  <img
                    src={form.coverImage}
                    alt="Cover Preview"
                    className="mt-4 max-h-64 object-cover rounded-md"
                  />
                )}
              </div>

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

              {/* Submit Button */}
              <motion.div
                className="flex justify-end"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  disabled={isCreating}
                  className={`flex items-center bg-blog-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors ${
                    isCreating ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <Save size={18} className="mr-2" />
                  {isCreating ? "Creating..." : "Create Post"}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CreateBlog;
