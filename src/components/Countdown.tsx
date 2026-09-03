import { useEffect, useState } from "react";
import { YKS_DATE } from "../data";

function getRemaining() {
  const now = new Date().getTime();
  const target = new Date(YKS_DATE).getTime();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-2xl font-black tabular-nums text-white backdrop-blur sm:h-20 sm:w-20 sm:text-3xl">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-white/70">{label}</span>
    </div>
  );
}

export function Countdown() {
  const [t, setT] = useState(getRemaining());

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-6 shadow-xl shadow-indigo-200/50 sm:p-8">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
      <div className="relative text-center">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
          YKS 2027'ye Kalan Süre
        </span>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
          Her gün bir kapsül, hedefe bir adım daha yakın 🚀
        </h2>
        <div className="mt-6 flex justify-center gap-3 sm:gap-4">
          <Cell value={t.days} label="Gün" />
          <Cell value={t.hours} label="Saat" />
          <Cell value={t.minutes} label="Dakika" />
          <Cell value={t.seconds} label="Saniye" />
        </div>
        <p className="mt-5 text-sm text-white/70">
          Tahmini sınav tarihi: 19 Haziran 2027
        </p>
      </div>
    </div>
  );
}
