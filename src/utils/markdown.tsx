import type { ReactNode } from "react";

/** Satır içi biçimlendirme: **kalın**, *italik*, `kod` */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Sıra önemli: önce kalın (**), sonra italik (*), sonra kod (`)
  const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[2] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-b${i}`}>{match[2]}</strong>);
    } else if (match[3] !== undefined) {
      nodes.push(<em key={`${keyPrefix}-i${i}`}>{match[3]}</em>);
    } else if (match[4] !== undefined) {
      nodes.push(
        <code key={`${keyPrefix}-c${i}`} className="rounded bg-slate-100 px-1 py-0.5 text-[0.85em] text-rose-600">
          {match[4]}
        </code>,
      );
    }
    lastIndex = regex.lastIndex;
    i++;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

/** Basit Markdown → JSX. Başlık, liste, kalın/italik/kod ve paragraf destekler. */
export function Markdown({ text }: { text: string }) {
  const lines = text.split("\n");
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length) {
      const items = [...listItems];
      blocks.push(
        <ul key={`ul-${key++}`} className="ml-5 list-disc space-y-1">
          {items.map((it, idx) => (
            <li key={idx}>{renderInline(it, `li-${key}-${idx}`)}</li>
          ))}
        </ul>,
      );
      listItems = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === "") {
      flushList();
      continue;
    }
    if (/^[-*]\s+/.test(trimmed)) {
      listItems.push(trimmed.replace(/^[-*]\s+/, ""));
      continue;
    }
    flushList();
    const h = /^(#{1,3})\s+(.*)$/.exec(trimmed);
    if (h) {
      const level = h[1].length;
      const cls = level === 1 ? "text-lg font-bold" : level === 2 ? "text-base font-bold" : "text-sm font-semibold";
      blocks.push(
        <p key={`h-${key++}`} className={cls}>
          {renderInline(h[2], `h-${key}`)}
        </p>,
      );
      continue;
    }
    blocks.push(
      <p key={`p-${key++}`}>{renderInline(trimmed, `p-${key}`)}</p>,
    );
  }
  flushList();

  return <div className="space-y-2 text-sm leading-relaxed text-slate-700">{blocks}</div>;
}
