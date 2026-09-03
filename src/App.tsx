import { useMemo, useState } from "react";
import { cn } from "./utils/cn";
import { capsules, categories } from "./data";
import { CapsuleCard } from "./components/CapsuleCard";
import { QuizMode, type QuizPreset } from "./components/QuizMode";
import { Countdown } from "./components/Countdown";
import { Pomodoro } from "./components/Pomodoro";
import { NotesPanel } from "./components/NotesPanel";
import { Flashcards } from "./components/Flashcards";
import { useProgress } from "./hooks/useProgress";

type Mode = "explore" | "flashcards" | "quiz" | "pomodoro";

const NAV: { id: Mode; label: string; icon: string }[] = [
  { id: "explore", label: "Kapsüller", icon: "📚" },
  { id: "flashcards", label: "Flashcard", icon: "🃏" },
  { id: "quiz", label: "Soru Modu", icon: "🎯" },
  { id: "pomodoro", label: "Pomodoro", icon: "⏳" },
];

export default function App() {
  const [mode, setMode] = useState<Mode>("explore");
  const [activeCat, setActiveCat] = useState<string>("all");
  const [examFilter, setExamFilter] = useState<"all" | "TYT" | "AYT">("all");
  const [query, setQuery] = useState("");
  const [notesOpen, setNotesOpen] = useState(false);
  const [quizPreset, setQuizPreset] = useState<QuizPreset | null>(null);
  const [hideLearned, setHideLearned] = useState(true);

  const { learnedCapsules, learnedCount, resetLearnedCapsules } = useProgress();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return capsules.filter((c) => {
      const cat = categories.find((x) => x.id === c.category)!;
      const catOk = activeCat === "all" || c.category === activeCat;
      const examOk = examFilter === "all" || cat.exam.includes(examFilter);
      const learnedOk = !hideLearned || !learnedCapsules.includes(c.id);
      const qOk =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q));
      return catOk && examOk && learnedOk && qOk;
    });
  }, [activeCat, examFilter, query, hideLearned, learnedCapsules]);

  const totalCapsules = capsules.length;
  const learnedPct = Math.round((learnedCount / totalCapsules) * 100);

  const visibleCats = categories.filter((c) => examFilter === "all" || c.exam.includes(examFilter));

  const handleSolve = (capsuleId: string) => {
    const cap = capsules.find((c) => c.id === capsuleId);
    setQuizPreset({ capsuleId, category: cap?.category });
    setMode("quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/40">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-lg font-black text-white shadow-lg shadow-indigo-200">
              Y
            </div>
            <div className="leading-tight">
              <h1 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">YKS 2027 Kapsül</h1>
              <p className="hidden text-xs text-slate-400 sm:block">{capsules.length} konu · Öğren, tekrar et, test et</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setNotesOpen(true)}
              className="hidden items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:text-slate-900 sm:flex"
            >
              📝 Notlar
            </button>
          </div>
        </div>

        {/* Nav */}
        <div className="mx-auto max-w-6xl px-4 pb-2 sm:px-6">
          <div className="flex gap-1 overflow-x-auto">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => setMode(n.id)}
                className={cn(
                  "whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold transition-all sm:px-4",
                  mode === n.id ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700",
                )}
              >
                {n.icon} {n.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {mode === "explore" && (
          <>
            <section className="mb-10">
              <Countdown />
            </section>

            <section className="mb-6 text-center">
              <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                TYT & AYT Konu Özetleri
              </span>
              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Kısa kapsüller, <span className="text-indigo-600">net bilgiler</span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-500">
                Her konunun özünü, kritik formüllerini ve sınav ipuçlarını dakikalar içinde tekrar et; ardından soru moduyla pekiştir.
              </p>
            </section>

            {/* Exam filter */}
            <div className="mb-4 flex justify-center gap-2">
              {(["all", "TYT", "AYT"] as const).map((e) => (
                <button
                  key={e}
                  onClick={() => {
                    setExamFilter(e);
                    setActiveCat("all");
                  }}
                  className={cn(
                    "rounded-xl px-5 py-2 text-sm font-bold transition-all",
                    examFilter === e
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "bg-white text-slate-600 shadow-sm hover:text-slate-900",
                  )}
                >
                  {e === "all" ? "Tümü" : e}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="mx-auto mb-6 max-w-md">
              <div className="relative">
                <svg
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Konu ara... (örn. türev, fotosentez, gazel)"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* İlerleme özeti + öğrenilenleri gizle */}
            <div className="mx-auto mb-6 max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-700">
                  📈 İlerleme: {learnedCount}/{totalCapsules} konu ({learnedPct}%)
                </span>
                {learnedCount > 0 && (
                  <button
                    onClick={() => {
                      if (confirm("Tüm 'öğrenildi' işaretleri sıfırlansın mı?")) resetLearnedCapsules();
                    }}
                    className="text-xs font-semibold text-slate-400 hover:text-rose-500"
                  >
                    Sıfırla
                  </button>
                )}
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-500"
                  style={{ width: `${learnedPct}%` }}
                />
              </div>
              <label className="mt-3 flex cursor-pointer items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Öğrendiklerimi tekrar gösterme</span>
                <button
                  role="switch"
                  aria-checked={hideLearned}
                  onClick={() => setHideLearned((v) => !v)}
                  className={cn(
                    "relative h-6 w-11 shrink-0 rounded-full transition-colors",
                    hideLearned ? "bg-emerald-500" : "bg-slate-300",
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
                      hideLearned ? "translate-x-[22px]" : "translate-x-0.5",
                    )}
                  />
                </button>
              </label>
            </div>

            {/* Category chips */}
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCat("all")}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  activeCat === "all"
                    ? "border-transparent bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                )}
              >
                🎓 Tüm Dersler
              </button>
              {visibleCats.map((c) => {
                const n = capsules.filter((x) => x.category === c.id).length;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCat(c.id)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                      activeCat === c.id
                        ? "border-transparent bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                    )}
                  >
                    {c.emoji} {c.name} ({n})
                  </button>
                );
              })}
            </div>

            {filtered.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((c) => (
                  <CapsuleCard key={c.id} capsule={c} onSolveQuestions={handleSolve} />
                ))}
              </div>
            ) : hideLearned && learnedCount > 0 ? (
              <div className="py-16 text-center">
                <p className="text-4xl">🎉</p>
                <p className="mt-3 font-semibold text-slate-700">Bu filtredeki tüm konuları öğrendin!</p>
                <p className="mt-1 text-sm text-slate-500">
                  Öğrendiklerin gizli. Hepsini görmek için "Öğrendiklerimi tekrar gösterme" anahtarını kapat.
                </p>
                <button
                  onClick={() => setHideLearned(false)}
                  className="mt-5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-transform hover:scale-[1.02]"
                >
                  👁 Öğrenilenleri Tekrar Göster
                </button>
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-4xl">🔍</p>
                <p className="mt-3 text-slate-500">Aramanla eşleşen konu bulunamadı.</p>
              </div>
            )}
          </>
        )}

        {mode === "flashcards" && (
          <>
            <section className="mb-6 text-center">
              <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                Hızlı Tekrar Modu
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Flashcard'larla Tekrar Et 🃏</h2>
              <p className="mx-auto mt-2 max-w-lg text-slate-500">
                Kartları çevirerek detayları gör, sağa/sola kaydırarak hızlıca ilerle.
              </p>
            </section>

            {/* Ders filtresi (flashcard) */}
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCat("all")}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  activeCat === "all"
                    ? "border-transparent bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                )}
              >
                🎓 Tümü
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    activeCat === c.id
                      ? "border-transparent bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                  )}
                >
                  {c.emoji} {c.name}
                </button>
              ))}
            </div>

            <Flashcards
              deck={activeCat === "all" ? capsules : capsules.filter((c) => c.category === activeCat)}
              onSolveQuestions={handleSolve}
            />
          </>
        )}

        {mode === "quiz" && (
          <QuizMode preset={quizPreset} onConsumePreset={() => setQuizPreset(null)} />
        )}

        {mode === "pomodoro" && (
          <>
            <section className="mb-6 text-center">
              <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                Odaklanma Aracı
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Pomodoro Zamanlayıcı ⏳</h2>
              <p className="mx-auto mt-2 max-w-lg text-slate-500">25 dk çalış, 5 dk dinlen. Odağını koru, verimini artır.</p>
            </section>
            <Pomodoro />
          </>
        )}
      </main>

      {/* Notlar için kayan buton (mobil) */}
      <button
        onClick={() => setNotesOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-2xl text-white shadow-xl shadow-indigo-300/50 transition-transform hover:scale-105 active:scale-95"
        title="Hızlı Notlar"
      >
        📝
      </button>

      <NotesPanel open={notesOpen} onClose={() => setNotesOpen(false)} />

      <footer className="border-t border-slate-200/70 py-6 text-center text-xs text-slate-400">
        YKS 2027 Kapsül · Düzenli tekrar, kalıcı başarı 🎯
      </footer>
    </div>
  );
}
