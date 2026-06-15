export function ResumeButton({ href }: { href: string }) {
  return (
    <a className="resume-btn" href={href} download>
      이력서 다운로드
    </a>
  );
}
