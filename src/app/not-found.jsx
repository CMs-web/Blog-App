"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      router.asPath
    );
  }, [router.asPath]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blog-light px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-blog-primary mb-6">
          404
        </h1>
        <p className="text-xl md:text-2xl font-medium text-blog-dark mb-8">
          Page not found
        </p>
        <p className="text-blog-text mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/"
            className="inline-block bg-blog-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Return to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default NotFound;
