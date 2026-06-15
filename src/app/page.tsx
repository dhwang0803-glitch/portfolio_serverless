import { getProfile } from "@/content/profile";
import { getAllProjects } from "@/content/projects";
import { AboutSection } from "@/components/AboutSection";
import { TechStack } from "@/components/TechStack";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ResumeButton } from "@/components/ResumeButton";

export default function HomePage() {
  const profile = getProfile();
  const projects = getAllProjects();

  return (
    <div className="home">
      <AboutSection profile={profile} />
      {profile.resumeHref && (
        <div className="home__resume">
          <ResumeButton href={profile.resumeHref} />
        </div>
      )}
      <TechStack items={profile.techStack} />
      <ProjectGallery projects={projects} />
    </div>
  );
}
