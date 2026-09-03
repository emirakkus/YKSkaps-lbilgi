import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { categories, questions as allQuestions, type Question } from "../data";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useProgress } from "../hooks/useProgress";

export type QuizPreset = {
  capsuleId?: string;
  category?: string;
  count?: number;
  label?: string;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Stage = "setup" | "playing" | "result";
type AnswerLog = { questionId: string; category: string; correct: boolean };

const ALL = 9999;
const LENGTH_OPTIONS = [5, 10, ALL] as const;
const diffStyle: Record<string, string> = {
  Kolay: "bg-emerald-100 text-emerald-700",
  Orta: "bg-amber-100 text-amber-700",
  Zor: "bg-rose-100 text-rose-700",
};

function fmtTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m > 0 ? `${m} dk ${s} sn` : `${s} sn`;
}

export function QuizMode({ preset, onConsumePreset }: { preset?: QuizPreset | null; onConsumePreset?: () => void }) {
  const [stage, setStage] = useState<Stage>("setup");
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [count, setCount] = useState<number>(5);

  const [deck, setDeck] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [log, setLog] = useState<AnswerLog[]>([]);
  const startRef = useRef<number>(0);
  const [elapsed, setElapsed] = useState(0);

  // Kalıcı işaretler
  const [favorites, setFavorites] = useLocalStorage<string[]>("yks_quiz_favorites", []);
  const [review, setReview] = useLocalStorage<string[]>("yks_quiz_review", []);

  // Öğrenilenleri (doğru bilinen soruları) tekrar sorma
  const { correctQuestions, isQuestionCorrect, markQuestionCorrect } = useProgress();
  const [hideCorrect, setHideCorrect] = useState(true);

  const available = useMemo(() => {
    let pool = selectedCat === "all" ? allQuestions : allQuestions.filter((q) => q.category === selectedCat);
    if (hideCorrect) pool = pool.filter((q) => !correctQuestions.includes(q.id));
    return pool;
  }, [selectedCat, hideCorrect, correctQuestions]);
  const maxForCat = available.length;

  // Seçili derste doğru bilinerek "öğrenilmiş" soru sayısı
  const learnedInCat = useMemo(() => {
    const pool = selectedCat === "all" ? allQuestions : allQuestions.filter((q) => q.category === selectedCat);
    return pool.filter((q) => correctQuestions.includes(q.id)).length;
  }, [selectedCat, correctQuestions]);

  function startWith(questions: Question[]) {
    setDeck(questions);
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setShowHint(false);
    setScore(0);
    setLog([]);
    startRef.current = Date.now();
    setElapsed(0);
    setStage("playing");
  }

  function start() {
    const n = count === ALL ? maxForCat : Math.min(count, maxForCat);
    startWith(shuffle(available).slice(0, n));
  }

  // Preset ile doğrudan başlatma (kapsülden "soru çöz")
  useEffect(() => {
    if (!preset) return;
    // Yalnızca o kapsüle/konuya ait sorular gösterilir
    let pool = allQuestions;
    if (preset.capsuleId) {
      pool = allQuestions.filter((q) => q.capsuleId === preset.capsuleId);
    } else if (preset.category) {
      pool = allQuestions.filter((q) => q.category === preset.category);
    }
    if (pool.length === 0) return;
    // Öğrenilenleri (doğru bilinenleri) çıkar; hepsi öğrenilmişse tüm havuza dön
    if (hideCorrect) {
      const remaining = pool.filter((q) => !correctQuestions.includes(q.id));
      if (remaining.length > 0) pool = remaining;
    }
    // İstenen sayı kadar (yoksa mevcut kadar) konuya özel soru
    const n = preset.count ? Math.min(preset.count, pool.length) : pool.length;
    startWith(shuffle(pool).slice(0, n));
    onConsumePreset?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset]);

  // Süre sayacı
  useEffect(() => {
    if (stage !== "playing") return;
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startRef.current) / 1000)), 1000);
    return () => clearInterval(id);
  }, [stage]);

  function choose(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === deck[current].correctIndex;
    if (correct) {
      setScore((s) => s + 1);
      // Doğru bilinen soru "öğrenildi" sayılır; hideCorrect açıkken tekrar sorulmaz
      markQuestionCorrect(deck[current].id);
    }
    setLog((l) => [...l, { questionId: deck[current].id, category: deck[current].category, correct }]);
  }

  function next() {
    if (current + 1 >= deck.length) {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000));
      setStage("result");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
      setShowHint(false);
    }
  }

  const toggle = (list: string[], setList: (v: string[]) => void, id: string) =>
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

  // ---------------- SETUP ----------------
  if (stage === "setup") {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-2xl shadow-lg shadow-indigo-200">
              🎯
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Soru Modu</h2>
            <p className="mt-1 text-sm text-slate-500">Konu kapsüllerine dayalı YKS tarzı sorularla kendini test et!</p>
          </div>

          {(favorites.length > 0 || review.length > 0) && (
            <div className="mb-5 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  const q = allQuestions.filter((x) => review.includes(x.id));
                  if (q.length) startWith(shuffle(q));
                }}
                disabled={review.length === 0}
                className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-left transition-colors hover:bg-amber-100 disabled:opacity-40"
              >
                <p className="text-lg font-black text-amber-700">🔁 {review.length}</p>
                <p className="text-xs font-semibold text-amber-600">Sonra Tekrar Et</p>
              </button>
              <button
                onClick={() => {
                  const q = allQuestions.filter((x) => favorites.includes(x.id));
                  if (q.length) startWith(shuffle(q));
                }}
                disabled={favorites.length === 0}
                className="rounded-2xl border border-rose-200 bg-rose-50 p-3 text-left transition-colors hover:bg-rose-100 disabled:opacity-40"
              >
                <p className="text-lg font-black text-rose-600">⭐ {favorites.length}</p>
                <p className="text-xs font-semibold text-rose-500">Favoriler</p>
              </button>
            </div>
          )}

          <div className="mb-5">
            <p className="mb-2 text-sm font-semibold text-slate-700">Ders seç</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCat("all")}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  selectedCat === "all"
                    ? "border-transparent bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                )}
              >
                🎓 Tümü
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCat(c.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    selectedCat === c.id
                      ? "border-transparent bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                  )}
                >
                  {c.emoji} {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-2 text-sm font-semibold text-slate-700">
              Soru sayısı <span className="text-slate-400">(bu derste {maxForCat} soru var)</span>
            </p>
            <div className="flex gap-2">
              {LENGTH_OPTIONS.map((n) => {
                const isAll = n === ALL;
                const disabled = !isAll && n > maxForCat && n !== LENGTH_OPTIONS[0];
                const label = isAll ? `Tümü (${maxForCat})` : `${n} soru`;
                return (
                  <button
                    key={n}
                    disabled={disabled}
                    onClick={() => setCount(n)}
                    className={cn(
                      "flex-1 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all",
                      count === n
                        ? "border-transparent bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-md shadow-indigo-200"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                      disabled && "cursor-not-allowed opacity-40",
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Öğrenilenleri (doğru bilinenleri) tekrar sorma */}
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div>
              <p className="text-sm font-semibold text-slate-700">Öğrendiklerimi tekrar sorma</p>
              <p className="text-xs text-slate-400">
                Doğru bildiğin sorular çıkarılır{learnedInCat > 0 ? ` · ${learnedInCat} soru öğrenildi` : ""}
              </p>
            </div>
            <button
              role="switch"
              aria-checked={hideCorrect}
              onClick={() => setHideCorrect((v) => !v)}
              className={cn(
                "relative h-7 w-12 shrink-0 rounded-full transition-colors",
                hideCorrect ? "bg-emerald-500" : "bg-slate-300",
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform",
                  hideCorrect ? "translate-x-[22px]" : "translate-x-0.5",
                )}
              />
            </button>
          </div>

          {maxForCat === 0 ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
              <p className="text-2xl">🎉</p>
              <p className="mt-1 text-sm font-semibold text-emerald-700">
                Bu dersteki tüm soruları doğru bildin!
              </p>
              <button
                onClick={() => setHideCorrect(false)}
                className="mt-3 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Yine de hepsini çöz
              </button>
            </div>
          ) : (
            <button
              onClick={start}
              className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              Quiz'e Başla →
            </button>
          )}
        </div>
      </div>
    );
  }

  // ---------------- RESULT ----------------
  if (stage === "result") {
    const pct = Math.round((score / deck.length) * 100);
    const message = pct >= 80 ? "Muhteşem! 🏆" : pct >= 50 ? "İyi iş! 👏" : "Tekrar zamanı! 📚";

    // Konu bazlı başarı
    const byCat = new Map<string, { correct: number; total: number }>();
    for (const l of log) {
      const e = byCat.get(l.category) ?? { correct: 0, total: 0 };
      e.total += 1;
      if (l.correct) e.correct += 1;
      byCat.set(l.category, e);
    }

    return (
      <div className="mx-auto max-w-2xl space-y-5">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-indigo-200">
            <span className="text-3xl font-black text-white">{pct}%</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{message}</h2>
          <p className="mt-2 text-slate-500">
            {deck.length} sorudan <span className="font-bold text-emerald-600">{score}</span> doğru,{" "}
            <span className="font-bold text-rose-500">{deck.length - score}</span> yanlış.
          </p>

          {/* Özet kartlar */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-emerald-50 p-3">
              <p className="text-xl font-black text-emerald-600">{score}</p>
              <p className="text-xs font-semibold text-emerald-500">Doğru</p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-3">
              <p className="text-xl font-black text-rose-500">{deck.length - score}</p>
              <p className="text-xs font-semibold text-rose-400">Yanlış</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="text-xl font-black text-slate-700">{fmtTime(elapsed)}</p>
              <p className="text-xs font-semibold text-slate-400">Süre</p>
            </div>
          </div>
        </div>

        {/* Konu bazlı analiz */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-400">📊 Konu Bazlı Başarı</h3>
          <div className="space-y-3">
            {[...byCat.entries()].map(([catId, e]) => {
              const cat = categories.find((c) => c.id === catId)!;
              const p = Math.round((e.correct / e.total) * 100);
              return (
                <div key={catId}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      {cat.emoji} {cat.name}
                    </span>
                    <span className="font-semibold text-slate-500">
                      {e.correct}/{e.total} · %{p}
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-700",
                        p >= 70 ? "bg-emerald-500" : p >= 40 ? "bg-amber-500" : "bg-rose-500",
                      )}
                      style={{ width: `${p}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={start}
            className="flex-1 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-bold text-white shadow-md shadow-indigo-200 transition-transform hover:scale-[1.01]"
          >
            Tekrar Oyna
          </button>
          <button
            onClick={() => setStage("setup")}
            className="flex-1 rounded-2xl border border-slate-200 bg-white py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Ayarlara Dön
          </button>
        </div>
      </div>
    );
  }

  // ---------------- PLAYING ----------------
  const q = deck[current];
  const cat = categories.find((c) => c.id === q.category)!;
  const progress = ((current + (answered ? 1 : 0)) / deck.length) * 100;
  const isFav = favorites.includes(q.id);
  const isReview = review.includes(q.id);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-500">
          Soru {current + 1} / {deck.length}
        </span>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white px-3 py-1 font-semibold text-slate-500 shadow-sm">⏱ {fmtTime(elapsed)}</span>
          <span className="rounded-full bg-white px-3 py-1 font-semibold text-slate-700 shadow-sm">Skor: {score}</span>
        </div>
      </div>

      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className={cn("inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-medium text-white", cat.color)}>
            {cat.emoji} {cat.name}
          </span>
          <div className="flex items-center gap-2">
            {isQuestionCorrect(q.id) && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">✓ Öğrenildi</span>
            )}
            {q.difficulty && (
              <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", diffStyle[q.difficulty])}>{q.difficulty}</span>
            )}
            <button
              onClick={() => toggle(review, setReview, q.id)}
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
                isReview ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-400 hover:text-slate-600",
              )}
              title="Sonra Tekrar Et"
            >
              🔁 Tekrar
            </button>
            <button
              onClick={() => toggle(favorites, setFavorites, q.id)}
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
                isFav ? "bg-rose-100 text-rose-600" : "bg-slate-100 text-slate-400 hover:text-slate-600",
              )}
              title="Favorilere Ekle"
            >
              {isFav ? "⭐ Favori" : "☆ Favori"}
            </button>
          </div>
        </div>

        <h2 className="mt-4 text-xl font-bold leading-snug text-slate-900">{q.question}</h2>

        {/* İpucu */}
        {!answered && (
          <div className="mt-4">
            {showHint ? (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">💡 İpucu</p>
                <p className="mt-1 text-sm text-amber-800">{q.hint}</p>
              </div>
            ) : (
              <button
                onClick={() => setShowHint(true)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-100"
              >
                💡 İpucu Gör
              </button>
            )}
          </div>
        )}

        <div className="mt-5 space-y-3">
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.correctIndex;
            const isSelected = idx === selected;
            let style = "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/40";
            if (answered) {
              if (isCorrect) style = "border-emerald-400 bg-emerald-50";
              else if (isSelected) style = "border-rose-400 bg-rose-50";
              else style = "border-slate-200 bg-white opacity-60";
            }
            return (
              <button
                key={idx}
                onClick={() => choose(idx)}
                disabled={answered}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left text-sm font-medium text-slate-800 transition-all",
                  style,
                  !answered && "active:scale-[0.99]",
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                    answered && isCorrect
                      ? "bg-emerald-500 text-white"
                      : answered && isSelected
                        ? "bg-rose-500 text-white"
                        : "bg-slate-100 text-slate-500",
                  )}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{opt}</span>
                {answered && isCorrect && <span className="text-emerald-600">✓</span>}
                {answered && isSelected && !isCorrect && <span className="text-rose-500">✕</span>}
              </button>
            );
          })}
        </div>

        {/* Cevap sonrası: doğru cevap + çözüm açıklaması */}
        {answered && (
          <div className="mt-5 space-y-3">
            {selected !== q.correctIndex && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">Doğru Cevap</p>
                <p className="mt-1 text-sm font-bold text-emerald-800">
                  {String.fromCharCode(65 + q.correctIndex)}) {q.options[q.correctIndex]}
                </p>
              </div>
            )}
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Çözüm Açıklaması</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{q.explanation}</p>
            </div>
          </div>
        )}

        {answered && (
          <button
            onClick={next}
            className="mt-5 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            {current + 1 >= deck.length ? "Sonuçları Gör" : "Sonraki Soru →"}
          </button>
        )}
      </div>
    </div>
  );
}
