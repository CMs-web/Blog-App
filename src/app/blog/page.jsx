// Blog listing page
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../../components/BlogCard";
import SearchBar from "../../components/SearchBar";

const Blog = () => {
  // Sample data - in a real app, this would come from your API
  const allPosts = [
    {
      title: "The Art of Minimalist Design in Modern Web Development",
      slug: "minimalist-design-web-development",
      excerpt:
        "Explore how minimalist design principles can create more elegant, efficient, and user-friendly web experiences in today's digital landscape.",
      coverImage:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      publishedAt: "2025-04-20T10:00:00.000Z",
    },
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
    {
      title: "The Future of Web Animation",
      slug: "future-web-animation",
      excerpt:
        "Discover what's next in the world of web animation and how it will shape user experiences in the coming years.",
      coverImage:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      publishedAt: "2025-03-28T10:00:00.000Z",
    },
    {
      title: "Designing for Accessibility: Best Practices",
      slug: "designing-accessibility-best-practices",
      excerpt:
        "A guide to creating inclusive web experiences that work for everyone, regardless of abilities or disabilities.",
      coverImage:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      publishedAt: "2025-03-20T10:00:00.000Z",
    },
  ];

  const [posts, setPosts] = useState(allPosts);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setPosts(allPosts);
      return;
    }

    // Simple client-side search
    const filteredPosts = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
    );

    setPosts(filteredPosts);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Blog Articles
          </h1>
          <p className="text-blog-text">
            Explore our collection of articles on design, development, and
            digital creativity.
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Results Info */}
        {searchQuery && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-blog-text">
              {posts.length === 0
                ? `No results found for "${searchQuery}"`
                : `Found ${posts.length} result${
                    posts.length !== 1 ? "s" : ""
                  } for "${searchQuery}"`}
            </p>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && !searchQuery && (
          <div className="text-center py-16">
            <p className="text-blog-text text-lg">
              No posts available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
