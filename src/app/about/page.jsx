// About page
"use client";
import { motion } from "framer-motion";
import BlogLayout from "../../components/BlogLayout";
import Link from "next/link";

const About = () => {
  return (
    <BlogLayout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              About Ethereal
            </h1>
            <p className="text-blog-text text-lg">
              A minimalist blog focused on design, creativity, and technology.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-video rounded-xl overflow-hidden mb-12">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                alt="Ethereal Blog"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose lg:prose-xl max-w-none">
              <h2>Our Mission</h2>
              <p>
                At Ethereal, we believe in the power of clean, minimal design
                combined with thoughtful, engaging content. Our mission is to
                inspire and educate through articles that explore the
                intersection of design, technology, and creativity.
              </p>

              <p>
                Our team of writers and designers is passionate about creating
                content that is not only visually appealing but also provides
                real value to our readers. Whether you're looking for practical
                tips, in-depth guides, or creative inspiration, we strive to
                deliver content that helps you grow professionally and
                creatively.
              </p>

              <h2>Our Values</h2>
              <ul>
                <li>
                  <strong>Simplicity:</strong> We believe that less is more, and
                  that clarity comes from simplicity.
                </li>
                <li>
                  <strong>Quality:</strong> We prioritize depth and value over
                  quantity in everything we create.
                </li>
                <li>
                  <strong>Accessibility:</strong> We design and write with
                  everyone in mind, ensuring our content is accessible to all.
                </li>
                <li>
                  <strong>Community:</strong> We value the diverse perspectives
                  and experiences of our readers and contributors.
                </li>
              </ul>

              <h2>Get Involved</h2>
              <p>
                We're always looking for new voices and perspectives to
                contribute to our blog. If you're passionate about design,
                technology, or creativity and would like to write for us, we'd
                love to hear from you.
              </p>

              <div className="not-prose mt-8">
                <Link
                  href="/blog"
                  className="inline-block bg-blog-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Explore our articles
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </BlogLayout>
  );
};

export default About;
