import type { Metadata } from "next";
import { getProfile } from "@/content/profile";
import { TopNav } from "@/components/TopNav";
import "./globals.css";

const profile = getProfile();

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.headline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopNav brand={profile.name} />
        {children}
        <footer className="footer">© {profile.name} · Portfolio</footer>
      </body>
    </html>
  );
}
