import type { Metadata } from "next";
import Link from "next/link";
import { getProfile } from "@/content/profile";
import { ContactInfo } from "@/components/ContactInfo";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const profile = getProfile();

// Applied before first paint so there is no light/dark flash on load.
const THEME_INIT = `(function(){try{var t=localStorage.getItem('theme');
if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}
document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.headline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <header className="site-header">
          <Link href="/" className="site-header__brand">
            {profile.name}
          </Link>
          <ThemeToggle />
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <ContactInfo email={profile.email} github={profile.github} />
          <p className="site-footer__copy">© {profile.name}</p>
        </footer>
      </body>
    </html>
  );
}
