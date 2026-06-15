import Link from "next/link";
import { getProfile } from "@/content/profile";
import { getAllProjects } from "@/content/projects";
import { AboutSection } from "@/components/AboutSection";
import { TechStack } from "@/components/TechStack";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactInfo } from "@/components/ContactInfo";
import { ResumeButton } from "@/components/ResumeButton";
import { coverLayer, coverSrc } from "@/lib/placeholder";

function shortLabel(title: string): string {
  return title.split(/[—(·]/)[0].trim();
}

export default function HomePage() {
  const profile = getProfile();
  const projects = getAllProjects();

  return (
    <main>
      {/* Hero banner — /banner/hero.jpg 를 넣으면 채워지고, 없으면 톤 배경 */}
      <section className="hero" style={{ backgroundImage: "url(/banner/hero.jpg)" }}>
        <div className="hero__inner">
          <p className="hero__eyebrow">PORTFOLIO</p>
          <h1 className="hero__title serif">{profile.name}</h1>
          <div className="hero__rule" />
          <p className="hero__sub">{profile.headline}</p>
        </div>
      </section>

      {/* 배너 하단에 걸친 썸네일 메뉴 줄 */}
      <div className="container">
        <nav className="menu-row" aria-label="프로젝트 바로가기">
          {projects.map((p, i) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="thumb">
              <div
                className="thumb__img"
                style={{ backgroundImage: coverLayer(coverSrc(p.slug, p.thumbnail), i) }}
              />
              <div className="thumb__label">{shortLabel(p.title)}</div>
            </Link>
          ))}
        </nav>
      </div>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <p className="section__eyebrow">ABOUT</p>
          <h2 className="section__title serif">소개</h2>
          <div className="about">
            <AboutSection profile={profile} />
          </div>
          <div className="tech">
            <TechStack items={profile.techStack} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects" style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <p className="section__eyebrow">WORKS</p>
          <h2 className="section__title serif">프로젝트</h2>
          <p className="section__lead">
            AI 워크플로우 자동화부터 NILM 에너지 진단, 멀티모달 추천까지 — 직접 설계하고 구현한 프로젝트입니다.
          </p>
          <div className="projects">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section--tight" id="contact">
        <div className="container">
          <p className="section__eyebrow">CONTACT</p>
          <h2 className="section__title serif">연락처</h2>
          <div className="contact">
            <ContactInfo email={profile.email} github={profile.github} />
            {profile.resumeHref && <ResumeButton href={profile.resumeHref} />}
          </div>
        </div>
      </section>
    </main>
  );
}
