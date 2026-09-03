import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { capsules as allCapsules, categories, getReadingTime, type Capsule } from "../data";
import { useProgress } from "../hooks/useProgress";

export function Flashcards({
  deck,
  onSolveQuestions,
}: {
  deck?: Capsule[];
  onSolveQuestions: (capsuleId: string) => void;
}) {
  const { learnedCapsules, isCapsuleLearned, toggleLearnedCapsule } = useProgress();
  const [hideLearned, setHideLearned] = useState(true);

  const source = deck && deck.length ? deck : allCapsules;
  // "Öğrendiklerimi tekrar karşıma çıkarma": öğrenilenleri akıştan çıkar
  const cards = useMemo(
    () => (hideLearned ? source.filter((c) => !learnedCapsules.includes(c.id)) : source),
    [source, hideLearned, learnedCapsules],
  );

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [deck, hideLearned]);

  // İndeks sınır dışına çıkarsa düzelt (kart öğrenildi olarak işaretlenip listeden çıkınca)
  useEffect(() => {
    if (index >= cards.length && cards.length > 0) {
      setIndex(cards.length - 1);
    }
  }, [cards.length, index]);

  const go = (delta: number) => {
    if (cards.length === 0) return;
    setFlipped(false);
    setIndex((i) => (i + delta + cards.length) % cards.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards.length]);

  const learnedInSource = source.filter((c) => learnedCapsules.includes(c.id)).length;

  const HideToggle = (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm">
      <span className="font-semibold text-slate-500">
        {cards.length > 0 ? `Kart ${index + 1} / ${cards.length}` : "Kart 0 / 0"}
      </span>
      <div className="flex items-center gap-2">
        {source.length > 0 && (
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
            ✓ {learnedInSource} öğrenildi
          </span>
        )}
        <button
          onClick={() => setHideLearned((v) => !v)}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
            hideLearned ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:text-slate-700",
          )}
          title="Öğrendiklerimi tekrar gösterme"
        >
          {hideLearned ? "🙈 Öğrenilenler gizli" : "👁 Öğrenilenler görünür"}
        </button>
      </div>
    </div>
  );

  // Tüm kartlar öğrenildiyse veya boşsa
  if (cards.length === 0) {
    return (
      <div className="mx-auto max-w-xl">
        {HideToggle}
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-5xl">🎉</p>
          <h3 className="mt-4 text-xl font-black text-slate-900">Bu grubun tamamını öğrendin!</h3>
          <p className="mt-2 text-sm text-slate-500">
            Öğrendiğin kartlar tekrar karşına çıkmıyor. Hepsini görmek için öğrenilenleri tekrar açabilirsin.
          </p>
          <button
            onClick={() => setHideLearned(false)}
            className="mt-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-transform hover:scale-[1.02]"
          >
            👁 Öğrenilenleri Tekrar Göster
          </button>
        </div>
      </div>
    );
  }

  const card = cards[index];
  const cat = categories.find((c) => c.id === card.category)!;
  const learned = isCapsuleLearned(card.id);

  return (
    <div className="mx-auto max-w-xl">
      {HideToggle}

      <div className="mb-3 flex justify-end">
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">
          ⏱ ~{getReadingTime(card)} dk okuma
        </span>
      </div>

      {/* Kart */}
      <div
        className="[perspective:1600px]"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div
          key={index}
          onClick={() => setFlipped((f) => !f)}
          className={cn(
            "relative h-[24rem] w-full cursor-pointer rounded-3xl transition-transform duration-500 [transform-style:preserve-3d]",
            flipped && "[transform:rotateY(180deg)]",
          )}
        >
          {/* Ön yüz */}
          <div className="absolute inset-0 flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-lg [backface-visibility:hidden]">
            <div className="flex items-center justify-between">
              <span className={cn("inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-medium text-white", cat.color)}>
                {cat.emoji} {cat.name}
                <span className="rounded bg-white/25 px-1.5 py-0.5 text-[10px] font-bold">{cat.exam}</span>
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">{card.difficulty}</span>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-black tracking-tight text-slate-900">{card.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{card.summary}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {card.tags.slice(0, 4).map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500">
                  #{t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">Detay için karta dokun 👆</p>
          </div>

          {/* Arka yüz */}
          <div className="absolute inset-0 flex flex-col rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-7 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-xs font-bold uppercase tracking-wide text-indigo-400">Detay</p>
            <div className="mt-2 flex-1 overflow-auto">
              <p className="text-sm leading-relaxed text-slate-700">{card.detail}</p>
              <div className="mt-3 rounded-2xl bg-white/70 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">🎯 Sınav İpucu</p>
                <p className="mt-1 text-sm text-slate-700">{card.funFact}</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSolveQuestions(card.id);
              }}
              className="mt-4 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-transform hover:scale-[1.01]"
            >
              📝 Bu Konuyla İlgili Soruları Çöz →
            </button>
          </div>
        </div>
      </div>

      {/* Öğrendim butonu */}
      <button
        onClick={() => {
          toggleLearnedCapsule(card.id);
          if (!learned && hideLearned) setFlipped(false); // öğrenildi işaretlendi, sıradaki karta akıcı geçiş
        }}
        className={cn(
          "mt-4 w-full rounded-2xl py-3 text-sm font-bold transition-all",
          learned
            ? "border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
            : "bg-emerald-600 text-white shadow-md shadow-emerald-200 hover:scale-[1.01]",
        )}
      >
        {learned ? "✓ Öğrenildi (geri almak için dokun)" : "✓ Bunu Öğrendim"}
      </button>

      {/* Navigasyon */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => go(-1)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xl text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
        >
          ←
        </button>
        <button
          onClick={() => setFlipped((f) => !f)}
          className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
        >
          {flipped ? "Öne Dön" : "Çevir 🔄"}
        </button>
        <button
          onClick={() => go(1)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xl text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
        >
          →
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-slate-400">
        Klavye: ← → geçiş · Boşluk çevir · Mobilde sağa/sola kaydır
      </p>
    </div>
  );
}
