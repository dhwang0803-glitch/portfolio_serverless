import type { TechItem } from "@/domain";

export function TechStack({ items }: { items: TechItem[] }) {
  if (items.length === 0) return null;

  // 카테고리별 그룹화 (순서 유지).
  const groups = new Map<string, TechItem[]>();
  for (const item of items) {
    const key = item.category ?? "기타";
    const list = groups.get(key) ?? [];
    list.push(item);
    groups.set(key, list);
  }

  return (
    <div className="tech__groups">
      {[...groups.entries()].map(([category, list]) => (
        <div key={category} className="tech__group">
          <span className="tech__category">{category}</span>
          <ul className="tech__badges">
            {list.map((item) => (
              <li key={item.name} className="tech__badge">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
