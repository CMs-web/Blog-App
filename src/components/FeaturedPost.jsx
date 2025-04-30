import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

// Component for displaying a larger featured post
const FeaturedPost = ({ post }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden bg-blog-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative h-96 md:h-[32rem] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blog-dark to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="flex items-center text-white text-opacity-90 text-sm mb-3">
            <Calendar size={14} className="mr-1" />
            <time>{formattedDate}</time>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h2 className="font-serif font-semibold text-2xl md:text-4xl text-white mb-4">
              {post.title}
            </h2>
          </Link>

          <p className="text-white text-opacity-80 mb-6 max-w-2xl">
            {post.excerpt}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-block px-5 py-2.5 bg-blog-primary bg-opacity-90 text-white rounded-md hover:bg-opacity-100 transition-colors"
          >
            Read article
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedPost;
