import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skill Up Academy",
  description: "Discover our range of free and premium courses for easy learning. Perfect for all skill levels. Start learning today!",
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",

    // Twitter Meta Tags

    "twitter:card": "summary_large_image",
    "twitter:domain": "skill-up-academy.vercel.app",
    "twitter:url":"https://skill-up-academy.vercel.app/",
    "twitter:title":"Skill Up Academy",
    "twitter:description":"Discover our range of free and premium courses for easy learning. Perfect for all skill levels. Start learning today!",
    "twitter:image": 'https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/skill-up-academy.vercel.app/Skill%20Up%20Academy/https%3A%2F%2Fi.postimg.cc%2FYCr7cCW5%2Fffdc6539-05f5-4163-9cb7-4f7cfd0071af.jpg/og.png',

    // Facebook Meta Tags

    "og:url": "https://skill-up-academy.vercel.app",
    "og:image": 'https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/skill-up-academy.vercel.app/Skill%20Up%20Academy/https%3A%2F%2Fi.postimg.cc%2FYCr7cCW5%2Fffdc6539-05f5-4163-9cb7-4f7cfd0071af.jpg/og.png',
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
