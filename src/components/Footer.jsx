import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blog-light py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg mb-4">Ethereal</h3>
            <p className="text-blog-text text-sm">
              A minimalist blog focused on beautiful design and thoughtful
              content.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-blog-text hover:text-blog-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-blog-text hover:text-blog-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blog-text hover:text-blog-primary transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Subscribe</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blog-primary flex-1"
                required
              />
              <button
                type="submit"
                className="bg-blog-primary text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 text-center text-sm text-blog-text">
          <p>&copy; {currentYear} Ethereal Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
