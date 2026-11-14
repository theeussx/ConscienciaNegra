import { ArrowUpRight } from "lucide-react";
import { sources } from "../content/sources";
export function SourceList({ ids }: { ids: string[] }) {
  return (
    <ul className="source-list">
      {ids.map((id) => {
        const s = sources[id];
        return s ? (
          <li key={id}>
            <a href={s.url} target="_blank" rel="noreferrer">
              <span>
                <strong>{s.title}</strong>
                <small>
                  {s.publisher} · {s.year}
                </small>
              </span>
              <ArrowUpRight size={16} />
            </a>
          </li>
        ) : null;
      })}
    </ul>
  );
}
