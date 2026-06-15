import Link from "next/link";
import type { Profile } from "@/domain";
import { ContactInfo } from "./ContactInfo";
import { ResumeButton } from "./ResumeButton";
import { ThemeToggle } from "./ThemeToggle";

export function Sidebar({ profile }: { profile: Profile }) {
  return (
    <aside className="sidebar">
      <div className="side-card">
        <div className="side-top">
          <div className="avatar" aria-hidden>
            {profile.name.slice(0, 1)}
          </div>
          <ThemeToggle />
        </div>

        <Link href="/" className="side-name">
          {profile.name}
        </Link>
        <p className="side-role">{profile.headline}</p>

        <nav className="side-nav">
          <Link href="/#about">About</Link>
          <Link href="/#stack">Tech Stack</Link>
          <Link href="/#projects">Projects</Link>
        </nav>

        <ContactInfo email={profile.email} github={profile.github} />

        {profile.resumeHref && <ResumeButton href={profile.resumeHref} />}
      </div>
    </aside>
  );
}
