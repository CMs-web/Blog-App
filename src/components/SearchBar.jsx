"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="search"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 pl-10 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blog-primary"
        />
        <Search
          size={18}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <motion.button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blog-primary text-white px-4 py-1.5 rounded-md text-sm hover:bg-opacity-90 transition-colors"
          whileTap={{ scale: 0.96 }}
        >
          Search
        </motion.button>
      </form>
    </motion.div>
  );
};

export default SearchBar;
