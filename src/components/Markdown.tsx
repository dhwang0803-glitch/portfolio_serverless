import ReactMarkdown from "react-markdown";

/** 마크다운 문자열을 렌더링하는 래퍼. */
export function Markdown({ source }: { source: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown>{source}</ReactMarkdown>
    </div>
  );
}
