// 이메일을 HTML 엔티티로 인코딩해 정적 HTML 소스에 평문 주소가 남지 않게 한다
// (기본 스크래핑 봇의 정규식 매칭 회피). 서버 컴포넌트라 클라이언트 번들에도 미포함.
function encodeEntities(s: string): string {
  return s
    .split("")
    .map((c) => `&#${c.charCodeAt(0)};`)
    .join("");
}

export function ContactInfo({ email, github }: { email: string; github?: string }) {
  const enc = encodeEntities(email);
  const mailtoHtml = `<a class="contact__link" href="mailto:${enc}">✉ ${enc}</a>`;

  return (
    <div className="contact">
      <span dangerouslySetInnerHTML={{ __html: mailtoHtml }} />
      {github && (
        <a className="contact__link" href={github} target="_blank" rel="noopener noreferrer">
          ↗ GitHub
        </a>
      )}
    </div>
  );
}
