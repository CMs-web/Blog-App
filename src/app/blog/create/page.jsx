// Create blog page
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// import { toast } from "@/components/ui/use-toast";
import { Image, Save } from "lucide-react";

const CreateBlog = () => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
  });

  const [isDragging, setIsDragging] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

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
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
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
        setImagePreview(reader.result);
        setForm((prev) => ({ ...prev, coverImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.title || !form.slug || !form.excerpt || !form.content) {
      // toast({
      //   title: "Missing information",
      //   description: "Please fill out all required fields.",
      //   variant: "destructive",
      // });
      return;
    }

    // In a real app, you would send this to your backend
    console.log("Submitting blog post:", form);

    // toast({
    //   title: "Success!",
    //   description: "Your blog post has been created.",
    // });

    // Reset form
    setForm({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      coverImage: "",
    });
    setImagePreview("");
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
                  Auto-generated from title. You can edit if needed.
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
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Cover preview"
                        className="mx-auto max-h-64 rounded-lg"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1 rounded-full"
                        onClick={() => {
                          setImagePreview("");
                          setForm((prev) => ({ ...prev, coverImage: "" }));
                        }}
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

              {/* Submit Button */}
              <motion.div
                className="flex justify-end"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="flex items-center bg-blog-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <Save size={18} className="mr-2" />
                  Publish Post
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
