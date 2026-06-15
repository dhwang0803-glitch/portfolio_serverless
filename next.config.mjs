/** @type {import('next').NextConfig} */
const nextConfig = {
  // 백엔드 없는 순수 정적 사이트 — 빌드 시 정적 HTML로 export.
  output: "export",
  // 정적 export에서는 next/image 최적화 서버가 없으므로 비활성.
  images: { unoptimized: true },
  // 정적 호스팅 호환을 위해 디렉토리/index.html 형태로 출력.
  trailingSlash: true,
};

export default nextConfig;
