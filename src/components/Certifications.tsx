import type { Certification } from "@/domain";

export function Certifications({ items }: { items: Certification[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="certs">
      {items.map((c) => (
        <li key={`${c.date}-${c.name}`} className="certs__item">
          <span className="certs__date">{c.date}</span>
          <span className="certs__name">{c.name}</span>
          <span className="certs__issuer">{c.issuer}</span>
        </li>
      ))}
    </ul>
  );
}
