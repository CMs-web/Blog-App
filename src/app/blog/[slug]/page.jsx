// Blog detail page
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Tag } from "lucide-react";
import BlogLayout from "../components/BlogLayout";
import NewsletterSignup from "../components/NewsletterSignup";

const BlogDetail = async ({ params }) => {
  const { slug } = await params();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call to fetch the post by slug
    // For this example, we'll simulate with mock data
    setTimeout(() => {
      const mockPost = {
        title: "The Art of Minimalist Design in Modern Web Development",
        slug: "minimalist-design-web-development",
        content: `
          <p>In the ever-evolving landscape of web development, minimalist design has emerged as a powerful approach to creating digital experiences that are both visually appealing and highly functional. This design philosophy, characterized by simplicity, clean lines, and purposeful use of space, offers numerous benefits for both users and developers.</p>
          
          <h2>The Principles of Minimalist Design</h2>
          
          <p>Minimalist design is guided by several core principles:</p>
          
          <ul>
            <li><strong>Simplicity:</strong> Removing unnecessary elements and focusing only on what's essential.</li>
            <li><strong>White space:</strong> Using negative space strategically to improve readability and visual hierarchy.</li>
            <li><strong>Typography:</strong> Leveraging clean, readable fonts and thoughtful typographic hierarchy.</li>
            <li><strong>Limited color palette:</strong> Working with a restrained set of colors for clarity and consistency.</li>
          </ul>
          
          <p>When applied skillfully, these principles create interfaces that are not only aesthetically pleasing but also highly usable and accessible.</p>
          
          <h2>Benefits for User Experience</h2>
          
          <p>The minimalist approach offers tangible advantages for users navigating digital spaces:</p>
          
          <p>Improved cognitive processing: By reducing visual clutter, minimalist designs decrease cognitive load, allowing users to process information more efficiently.</p>
          
          <p>Enhanced focus: With fewer distractions, users can more easily focus on the content and actions that matter most.</p>
          
          <p>Better mobile experiences: Minimalist designs naturally adapt better to smaller screens, creating more consistent experiences across devices.</p>
          
          <h2>Implementation Strategies</h2>
          
          <p>For developers and designers looking to embrace minimalism, consider these practical strategies:</p>
          
          <ol>
            <li>Start with content priorities: Identify the most essential content and functionality before designing.</li>
            <li>Embrace the grid: Use a strong grid system to create visual order and consistency.</li>
            <li>Be intentional with every element: If something doesn't serve a clear purpose, consider removing it.</li>
            <li>Focus on typography: Invest time in creating a clear typographic hierarchy that guides users through the content.</li>
          </ol>
          
          <h2>The Future of Minimalist Web Design</h2>
          
          <p>As we look ahead, minimalist design continues to evolve. Current trends suggest a move toward more subtle micro-interactions, thoughtful animations, and increased personalization—all while maintaining the core principles of simplicity and purpose.</p>
          
          <p>By embracing minimalist design principles, developers can create web experiences that not only look beautiful but also function more effectively for users across all devices.</p>
        `,
        excerpt:
          "Explore how minimalist design principles can create more elegant, efficient, and user-friendly web experiences in today's digital landscape.",
        coverImage:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        publishedAt: "2025-04-20T10:00:00.000Z",
        author: "Alex Morgan",
        tags: ["Design", "Web Development", "UX"],
      };

      setPost(mockPost);
      setLoading(false);

      // Scroll to top when post loads
      window.scrollTo(0, 0);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <BlogLayout>
        <div className="container mx-auto px-4 md:px-6 py-16 flex justify-center">
          <div className="animate-pulse space-y-8 w-full max-w-3xl">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </BlogLayout>
    );
  }

  if (!post) {
    return (
      <BlogLayout>
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
          <h1 className="text-3xl font-serif mb-4">Post not found</h1>
          <p className="mb-8 text-blog-text">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-block bg-blog-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Back to all articles
          </Link>
        </div>
      </BlogLayout>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <BlogLayout>
      {/* Hero section */}
      <section className="pt-12 md:pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-blog-text mb-8">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <time>{formattedDate}</time>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="relative h-64 md:h-96 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <motion.div
              className="lg:flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div
                className="blog-content prose lg:prose-xl max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="w-full lg:w-72 shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="sticky top-24">
                <div className="bg-blog-light p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-lg mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white px-3 py-1 rounded-full text-sm text-blog-text border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-blog-light p-6 rounded-lg">
                  <h3 className="font-serif text-lg mb-4">Share</h3>
                  <div className="flex gap-3">
                    <button
                      className="bg-[#1DA1F2] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </button>
                    <button
                      className="bg-[#1877F2] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </button>
                    <button
                      className="bg-[#0A66C2] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </button>
                    <button
                      className="bg-gray-700 text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
                      aria-label="Copy link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </BlogLayout>
  );
};

export default BlogDetail;
