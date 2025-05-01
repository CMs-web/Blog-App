import { useEffect, useState } from "react";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchBlogs() {
    const res = fetch("/api/blogs").then((response) => response.json());
    if (!res.ok) {
      setError("Failed to fetch blogs");
      setLoading(false);
      return;
    }
    setBlogs(res);
  }
  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};
