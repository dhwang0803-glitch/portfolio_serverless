export function PdfViewer({ href, title }: { href: string; title?: string }) {
  return (
    <div className="pdf">
      <iframe className="pdf__frame" src={href} title={title ?? "PDF preview"} />
      <a className="pdf__download" href={href} download>
        ↓ 다운로드
      </a>
    </div>
  );
}
