import { useState } from "react";
import { cn } from "../utils/cn";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Markdown } from "../utils/markdown";

const PLACEHOLDER = `# Hızlı Notlarım

Çalışırken aklına gelenleri buraya yaz. **Markdown** desteklenir:

- **kalın** için \`**metin**\`
- *italik* için \`*metin*\`
- Liste için satır başına \`-\`

Notların otomatik olarak kaydedilir.`;

function download(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function NotesPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [notes, setNotes] = useLocalStorage<string>("yks_notes", "");
  const [preview, setPreview] = useState(false);

  if (!open) return null;

  const chars = notes.length;
  const words = notes.trim() ? notes.trim().split(/\s+/).length : 0;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Arka plan */}
      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">📝</span>
            <h2 className="text-base font-bold text-slate-900">Hızlı Notlar</h2>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPreview((p) => !p)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
                preview ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-500 hover:text-slate-700",
              )}
            >
              {preview ? "✏️ Düzenle" : "👁 Önizle"}
            </button>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-5">
          {preview ? (
            notes.trim() ? (
              <Markdown text={notes} />
            ) : (
              <p className="text-sm text-slate-400">Önizlenecek not yok. Düzenle'ye geçip yazmaya başla.</p>
            )
          ) : (
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={PLACEHOLDER}
              className="h-full w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-relaxed text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
          )}
        </div>

        <div className="border-t border-slate-200 px-5 py-4">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
            <span>
              {words} kelime · {chars} karakter
            </span>
            <span className="flex items-center gap-1 text-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Otomatik kaydedildi
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => download("yks-notlarim.md", notes)}
              className="flex-1 rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-95"
            >
              ⬇ .md indir
            </button>
            <button
              onClick={() => download("yks-notlarim.txt", notes)}
              className="flex-1 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              ⬇ .txt indir
            </button>
            <button
              onClick={() => {
                if (confirm("Tüm notlar silinsin mi?")) setNotes("");
              }}
              className="rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
              title="Temizle"
            >
              🗑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
