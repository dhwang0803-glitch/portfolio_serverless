import { getProfile } from "@/content/profile";
import { getAllProjects } from "@/content/projects";
import { AboutSection } from "@/components/AboutSection";
import { TechStack } from "@/components/TechStack";
import { ProjectGallery } from "@/components/ProjectGallery";

export default function HomePage() {
  const profile = getProfile();
  const projects = getAllProjects();
  const domains = new Set(profile.techStack.map((t) => t.category ?? "기타"));

  return (
    <>
      <section className="hero">
        <span className="hero__eyebrow">PORTFOLIO</span>
        <h1 className="hero__title">
          안녕하세요,
          <br />
          <span className="grad">{profile.name}</span>입니다
        </h1>
        <p className="hero__sub">{profile.headline}</p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">
            프로젝트 보기
          </a>
          {profile.github && (
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              ↗ GitHub
            </a>
          )}
          {profile.resumeHref && (
            <a className="btn" href={profile.resumeHref} download>
              ⬇ 이력서
            </a>
          )}
        </div>

        <div className="hero__stats">
          <div>
            <div className="stat__num">{projects.length}</div>
            <div className="stat__label">PROJECTS</div>
          </div>
          <div>
            <div className="stat__num">{profile.techStack.length}</div>
            <div className="stat__label">TECHNOLOGIES</div>
          </div>
          <div>
            <div className="stat__num">{domains.size}</div>
            <div className="stat__label">DOMAINS</div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section__head">
          <span className="section__kicker">About</span>
          <span className="section__line" />
        </div>
        <div className="panel">
          <AboutSection profile={profile} />
        </div>
      </section>

      <section className="section" id="stack">
        <div className="section__head">
          <span className="section__kicker">Tech Stack</span>
          <span className="section__line" />
        </div>
        <TechStack items={profile.techStack} />
      </section>

      <section className="section" id="projects">
        <div className="section__head">
          <span className="section__kicker">Projects</span>
          <span className="section__line" />
          <span className="section__count">{projects.length}건</span>
        </div>
        <ProjectGallery projects={projects} />
      </section>
    </>
  );
}
