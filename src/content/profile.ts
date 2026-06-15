import type { Profile } from "@/domain";
import { profile } from "@content/profile";

/** 프로필 데이터 반환 (content/profile.ts SSOT). */
export function getProfile(): Profile {
  return profile;
}
