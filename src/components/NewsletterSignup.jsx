"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real app, you would send this to your backend
    console.log("Email submitted:", email);

    // Show success message
    // toast({
    //   title: "Thanks for subscribing!",
    //   description: "You've successfully joined our newsletter.",
    // });

    // Reset form
    setEmail("");
  };

  return (
    <section className="bg-blog-light py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl mb-4">Stay Updated</h2>
          <p className="text-blog-text mb-8">
            Subscribe to our newsletter to get the latest updates and new blog
            posts directly in your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blog-primary flex-1 max-w-md"
              required
            />
            <motion.button
              type="submit"
              className="bg-blog-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
