// 배너/커버 이미지를 아직 제공하지 않았을 때 보일 따뜻한 뉴트럴 그라데이션 폴백.
// 실제 이미지가 들어오면 url() 레이어가 위에 깔려 그라데이션을 덮는다.
const GRADIENTS = [
  "linear-gradient(135deg, #2b8fd6 0%, #0e5aa6 100%)",
  "linear-gradient(135deg, #43b6cb 0%, #1f7fb0 100%)",
  "linear-gradient(135deg, #6cc6dc 0%, #2a93c0 100%)",
  "linear-gradient(135deg, #79b4e2 0%, #2f6fb6 100%)",
];

export function placeholder(index: number): string {
  return GRADIENTS[index % GRADIENTS.length];
}

/** background-image 값: 실제 이미지(있으면) 위, 폴백 그라데이션 아래로 레이어링. */
export function coverLayer(src: string, index: number): string {
  return `url(${src}), ${placeholder(index)}`;
}

/** 프로젝트 커버 이미지 관례 경로 (없으면 그라데이션 폴백). */
export function coverSrc(slug: string, thumbnail?: string): string {
  return thumbnail ?? `/projects/${slug}/cover.jpg`;
}
