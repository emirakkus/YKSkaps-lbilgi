import { useState } from "react";
import { cn } from "../utils/cn";
import type { Capsule } from "../data";
import { categories, getReadingTime } from "../data";
import { useProgress } from "../hooks/useProgress";

const diffStyles: Record<string, string> = {
  Temel: "bg-emerald-100 text-emerald-700",
  Orta: "bg-amber-100 text-amber-700",
  İleri: "bg-rose-100 text-rose-700",
};

export function CapsuleCard({
  capsule,
  onSolveQuestions,
}: {
  capsule: Capsule;
  onSolveQuestions?: (capsuleId: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const cat = categories.find((c) => c.id === capsule.category)!;
  const readMin = getReadingTime(capsule);
  const { isCapsuleLearned, toggleLearnedCapsule } = useProgress();
  const learned = isCapsuleLearned(capsule.id);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60",
      )}
    >
      <div className={cn("h-1.5 w-full bg-gradient-to-r", cat.color)} />
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-medium text-white",
              cat.color,
            )}
          >
            <span>{cat.emoji}</span>
            {cat.name}
            <span className="rounded bg-white/25 px-1.5 py-0.5 text-[10px] font-bold tracking-wide">
              {cat.exam}
            </span>
          </span>
          <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", diffStyles[capsule.difficulty])}>
            {capsule.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold tracking-tight text-slate-900">{capsule.title}</h3>
        </div>
        <p className="mt-1 text-xs font-medium text-slate-400">⏱ ~{readMin} dk okuma</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{capsule.summary}</p>

        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <p className="text-sm leading-relaxed text-slate-700">{capsule.detail}</p>
            <div className="mt-3 rounded-2xl bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">🎯 Sınav İpucu</p>
              <p className="mt-1 text-sm text-slate-700">{capsule.funFact}</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {capsule.tags.map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500">
                  #{t}
                </span>
              ))}
            </div>
            {onSolveQuestions && (
              <button
                onClick={() => onSolveQuestions(capsule.id)}
                className="mt-4 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-transform hover:scale-[1.01]"
              >
                📝 Bu Konuyla İlgili Soruları Çöz →
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
          >
            {open ? "Daha az göster" : "Detayları gör"}
            <svg
              className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => toggleLearnedCapsule(capsule.id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
              learned
                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                : "bg-slate-100 text-slate-400 hover:text-slate-600",
            )}
            title="Öğrendim olarak işaretle"
          >
            {learned ? "✓ Öğrenildi" : "Öğrendim"}
          </button>
        </div>
      </div>
    </div>
  );
}
