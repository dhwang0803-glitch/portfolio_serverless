import type { Profile } from "@/domain";
import { Markdown } from "./Markdown";

export function AboutSection({ profile }: { profile: Profile }) {
  return (
    <div className="about__bio">
      <Markdown source={profile.about} />
    </div>
  );
}
