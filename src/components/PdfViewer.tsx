export function PdfViewer({ href, title }: { href: string; title?: string }) {
  // #toolbar=0&navpanes=0 — 브라우저 내장 PDF 뷰어의 상단 툴바/사이드 패널 숨김.
  const previewSrc = `${href}#toolbar=0&navpanes=0&view=FitH`;
  return (
    <div className="pdf">
      <iframe className="pdf__frame" src={previewSrc} title={title ?? "PDF preview"} />
      <a className="pdf__download" href={href} download>
        ↓ 다운로드
      </a>
    </div>
  );
}
