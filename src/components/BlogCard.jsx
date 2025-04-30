import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

// Blog card component that accepts a post object
const BlogCard = ({ post }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center text-blog-text text-sm mb-2">
          <Calendar size={14} className="mr-1" />
          <time>{formattedDate}</time>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-serif font-medium text-xl mb-2 hover:text-blog-primary transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-blog-text text-sm line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="text-blog-primary font-medium text-sm hover-link inline-block"
        >
          Read more
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
