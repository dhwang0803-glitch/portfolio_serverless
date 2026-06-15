import type { Metadata } from "next";
import { getProfile } from "@/content/profile";
import { Sidebar } from "@/components/Sidebar";
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
        <div className="shell">
          <Sidebar profile={profile} />
          <div className="content">
            {children}
            <footer className="footer">© {profile.name} · Built with Next.js</footer>
          </div>
        </div>
      </body>
    </html>
  );
}
