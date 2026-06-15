import type { Profile } from "@/domain";
import { Markdown } from "./Markdown";

export function AboutSection({ profile }: { profile: Profile }) {
  return (
    <section className="about">
      <h1 className="about__name">{profile.name}</h1>
      <p className="about__headline">{profile.headline}</p>
      <div className="about__bio">
        <Markdown source={profile.about} />
      </div>
    </section>
  );
}
