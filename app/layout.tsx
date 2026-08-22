import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Navbar from "./components/ui/navbar";
import "./globals.css";
import Footer from "./components/ui/footer";
import SmoothScroll from "./components/ui/smoothscroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bless Foundation - Building a Better Tomorrow",
  description:
    "At Bless Foundation, we are committed to uplifting lives, empowering communities, and creating lasting change.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
          <Navbar />

          {/* main tag me flex-1 add kiya jisse ye extra space fill karke Footer ko bilkul niche push kar dega */}
          <main className="flex-1">{children}</main>

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
