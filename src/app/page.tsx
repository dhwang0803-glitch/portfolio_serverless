import { getProfile } from "@/content/profile";
import { getAllProjects } from "@/content/projects";
import { AboutSection } from "@/components/AboutSection";
import { TechStack } from "@/components/TechStack";
import { ProjectCard } from "@/components/ProjectCard";
import { Certifications } from "@/components/Certifications";
import { ContactInfo } from "@/components/ContactInfo";
import { ResumeButton } from "@/components/ResumeButton";

const HERO_TITLE = "Daewon Hwang's Portfolio";
const HERO_SUB = "for AX Consultant";

export default function HomePage() {
  const profile = getProfile();
  const projects = getAllProjects();

  return (
    <main>
      {/* Hero banner — public/banner/hero.jpg */}
      <section className="hero" style={{ backgroundImage: "url(/banner/hero.jpg)" }}>
        <div className="hero__inner">
          <h1 className="hero__title hero-serif">{HERO_TITLE}</h1>
          <div className="hero__rule" />
          <p className="hero__sub hero-serif">{HERO_SUB}</p>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <p className="section__eyebrow">ABOUT</p>
          <h2 className="section__title serif">소개</h2>
          <div className="about">
            <AboutSection profile={profile} />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills" style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <p className="section__eyebrow">SKILLS</p>
          <h2 className="section__title serif">기술 스택</h2>
          <p className="section__lead">
            AI 모델링·LLM 서비스·AI Native 엔지니어링부터 이를 떠받치는 백엔드·인프라, 그리고 프로젝트를 이끄는 PM·문제 해결 역량까지 — 실제 프로젝트에서 검증한 AX 역량입니다.
          </p>
          <div className="tech">
            <TechStack items={profile.techStack} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
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

      {/* Certifications */}
      {profile.certifications && profile.certifications.length > 0 && (
        <section className="section" id="certifications" style={{ background: "var(--paper-2)" }}>
          <div className="container">
            <p className="section__eyebrow">CERTIFICATIONS</p>
            <h2 className="section__title serif">자격증</h2>
            <Certifications items={profile.certifications} />
          </div>
        </section>
      )}

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
