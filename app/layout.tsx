import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skill Up Academy",
  description: "Discover our range of free and premium courses for easy learning. Perfect for all skill levels. Start learning today!",
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://i.postimg.cc/YCr7cCW5/ffdc6539-05f5-4163-9cb7-4f7cfd0071af.jpg',
    "twitter:card": "summary_large_image",

    "og:url": "skillupacademy.vercel.app",
    "og:image": 'https://i.postimg.cc/YCr7cCW5/ffdc6539-05f5-4163-9cb7-4f7cfd0071af.jpg',
    "og:type": "website",
    "og:title": "Skill Up Academy",
    "og:description": "Discover our range of free and premium courses for easy learning. Perfect for all skill levels. Start learning today!",
    "og:site_name": "Skill Up Academy",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
