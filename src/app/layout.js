import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BlogLayout from "../components/BlogLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Blog App",
  description: "A clean blog layout using Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground">
        <BlogLayout>{children}</BlogLayout>
       
      </body>
    </html>
  );
}
