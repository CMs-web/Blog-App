"use client"; // Home page
import { motion } from "framer-motion";
import Link from "next/link";
import FeaturedPost from "../components/FeaturedPost";
import BlogCard from "../components/BlogCard";
import NewsletterSignup from "../components/NewsletterSignup";

const Index = () => {
  // Sample data - in a real app, this would come from your API
  const featuredPost = {
    title: "The Art of Minimalist Design in Modern Web Development",
    slug: "minimalist-design-web-development",
    excerpt:
      "Explore how minimalist design principles can create more elegant, efficient, and user-friendly web experiences in today's digital landscape.",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    publishedAt: "2025-04-20T10:00:00.000Z",
  };

  const recentPosts = [
    {
      title: "Creating Micro-interactions That Delight Users",
      slug: "micro-interactions-delight-users",
      excerpt:
        "Learn how subtle animations and interactions can significantly improve user experience and engagement on your website.",
      coverImage:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      publishedAt: "2025-04-15T10:00:00.000Z",
    },
    {
      title: "Typography Trends for Content-Focused Websites",
      slug: "typography-trends-content-websites",
      excerpt:
        "Discover the latest typography trends that can enhance readability and visual appeal for content-heavy platforms.",
      coverImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      publishedAt: "2025-04-10T10:00:00.000Z",
    },
    {
      title: "Color Psychology in UI Design: A Comprehensive Guide",
      slug: "color-psychology-ui-design",
      excerpt:
        "An in-depth exploration of how color choices influence user perception, behavior, and emotional response to digital products.",
      coverImage:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      publishedAt: "2025-04-05T10:00:00.000Z",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              Ethereal Blog
            </h1>
            <p className="text-blog-text text-lg md:text-xl">
              A minimalist blog focused on design, creativity, and technology,
              with beautiful aesthetics and thoughtful content.
            </p>
          </motion.div>

          {/* Featured Post */}
          <FeaturedPost post={featuredPost} />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-blog-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl">Recent Articles</h2>
            <Link
              href="/blog"
              className="text-blog-primary font-medium hover-link"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </>
  );
};

export default Index;
