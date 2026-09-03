import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Phase = "focus" | "short" | "long";

const PHASE_META: Record<Phase, { label: string; emoji: string; ring: string; bg: string }> = {
  focus: { label: "Odaklanma", emoji: "🎯", ring: "text-indigo-500", bg: "from-violet-600 to-indigo-600" },
  short: { label: "Kısa Mola", emoji: "☕", ring: "text-emerald-500", bg: "from-emerald-500 to-teal-600" },
  long: { label: "Uzun Mola", emoji: "🌿", ring: "text-sky-500", bg: "from-sky-500 to-blue-600" },
};

type Settings = { focus: number; short: number; long: number; longEvery: number };
const DEFAULTS: Settings = { focus: 25, short: 5, long: 15, longEvery: 4 };

function fmt(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// Kısa bip sesi (Web Audio API, dosya gerektirmez)
function beep() {
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AC();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g);
    g.connect(ctx.destination);
    o.type = "sine";
    o.frequency.value = 880;
    g.gain.setValueAtTime(0.001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    o.start();
    o.stop(ctx.currentTime + 0.6);
    setTimeout(() => ctx.close(), 800);
  } catch {
    /* ses desteklenmiyor */
  }
}

export function Pomodoro() {
  const [settings, setSettings] = useLocalStorage<Settings>("yks_pomodoro_settings", DEFAULTS);
  const [completed, setCompleted] = useLocalStorage<number>("yks_pomodoro_completed", 0);
  const [phase, setPhase] = useState<Phase>("focus");
  const [cycle, setCycle] = useState(0); // tamamlanan odak sayısı (uzun mola için)
  const [remaining, setRemaining] = useState(settings.focus * 60);
  const [running, setRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const phaseSeconds = useCallback(
    (p: Phase) => (p === "focus" ? settings.focus : p === "short" ? settings.short : settings.long) * 60,
    [settings],
  );

  // Bildirim izni
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().catch(() => {});
    }
  }, []);

  const notify = useCallback((title: string, body: string) => {
    beep();
    if ("Notification" in window && Notification.permission === "granted") {
      try {
        new Notification(title, { body, icon: undefined });
      } catch {
        /* yut */
      }
    }
  }, []);

  const goToNextPhase = useCallback(
    (auto: boolean) => {
      setRunning(false);
      if (phase === "focus") {
        const newCycle = cycle + 1;
        setCycle(newCycle);
        setCompleted((c) => c + 1);
        const isLong = newCycle % settings.longEvery === 0;
        const next: Phase = isLong ? "long" : "short";
        setPhase(next);
        setRemaining(phaseSeconds(next));
        if (auto) notify("Mola zamanı! " + PHASE_META[next].emoji, `${settings.focus} dk odaklandın. ${PHASE_META[next].label} başlasın.`);
      } else {
        setPhase("focus");
        setRemaining(phaseSeconds("focus"));
        if (auto) notify("Odaklanma zamanı! 🎯", "Mola bitti, yeni bir Pomodoro başlat.");
      }
    },
    [phase, cycle, settings, phaseSeconds, notify, setCompleted],
  );

  // Sayaç
  useEffect(() => {
    if (!running) return;
    intervalRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          goToNextPhase(true);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [running, goToNextPhase]);

  // Sekme başlığı canlı güncelleme
  useEffect(() => {
    const base = "YKS 2027 Kapsül";
    if (running) {
      document.title = `(${fmt(remaining)}) ${PHASE_META[phase].label} - Pomodoro`;
    } else {
      document.title = base;
    }
    return () => {
      document.title = base;
    };
  }, [remaining, running, phase]);

  const reset = () => {
    setRunning(false);
    setRemaining(phaseSeconds(phase));
  };

  const total = phaseSeconds(phase);
  const progress = total > 0 ? ((total - remaining) / total) * 100 : 0;
  const meta = PHASE_META[phase];

  // SVG halka
  const R = 130;
  const C = 2 * Math.PI * R;

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {/* Faz seçiciler */}
        <div className="mb-6 flex justify-center gap-2">
          {(Object.keys(PHASE_META) as Phase[]).map((p) => (
            <button
              key={p}
              onClick={() => {
                setPhase(p);
                setRemaining(phaseSeconds(p));
                setRunning(false);
              }}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-bold transition-all sm:text-sm",
                phase === p ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:text-slate-700",
              )}
            >
              {PHASE_META[p].emoji} {PHASE_META[p].label}
            </button>
          ))}
        </div>

        {/* Halka sayaç */}
        <div className="relative mx-auto flex h-72 w-72 items-center justify-center">
          <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 300 300">
            <circle cx="150" cy="150" r={R} fill="none" stroke="currentColor" strokeWidth="14" className="text-slate-100" />
            <circle
              cx="150"
              cy="150"
              r={R}
              fill="none"
              stroke="currentColor"
              strokeWidth="14"
              strokeLinecap="round"
              className={cn("transition-all duration-500", meta.ring)}
              strokeDasharray={C}
              strokeDashoffset={C - (progress / 100) * C}
            />
          </svg>
          <div className="text-center">
            <p className="text-6xl font-black tabular-nums tracking-tight text-slate-900">{fmt(remaining)}</p>
            <p className="mt-1 text-sm font-semibold text-slate-400">
              {meta.emoji} {meta.label}
            </p>
          </div>
        </div>

        {/* Kontroller */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setRunning((r) => !r)}
            className={cn(
              "rounded-2xl bg-gradient-to-r px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-transform hover:scale-[1.02] active:scale-95",
              meta.bg,
            )}
          >
            {running ? "⏸ Duraklat" : "▶ Başlat"}
          </button>
          <button
            onClick={reset}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
            title="Sıfırla"
          >
            ↺ Sıfırla
          </button>
          <button
            onClick={() => goToNextPhase(false)}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
            title="Fazı atla"
          >
            ⏭ Atla
          </button>
        </div>

        {/* İstatistik + ayar */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <p className="text-sm text-slate-500">
            Tamamlanan Pomodoro: <span className="font-bold text-slate-900">{completed}</span>
          </p>
          <button
            onClick={() => setShowSettings((s) => !s)}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            ⚙ Süreleri Ayarla
          </button>
        </div>

        {showSettings && (
          <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-4 sm:grid-cols-4">
            {([
              ["focus", "Odak (dk)"],
              ["short", "Kısa (dk)"],
              ["long", "Uzun (dk)"],
              ["longEvery", "Uzun/kaç"],
            ] as const).map(([k, label]) => (
              <label key={k} className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
                {label}
                <input
                  type="number"
                  min={1}
                  value={settings[k]}
                  onChange={(e) => {
                    const v = Math.max(1, Number(e.target.value) || 1);
                    setSettings((s) => ({ ...s, [k]: v }));
                    if (!running && k === phase) setRemaining(v * 60);
                    if (!running && phase === "focus" && k === "focus") setRemaining(v * 60);
                  }}
                  className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm font-bold text-slate-800 outline-none focus:border-indigo-300"
                />
              </label>
            ))}
            <button
              onClick={() => {
                setSettings(DEFAULTS);
                setRemaining(DEFAULTS[phase === "focus" ? "focus" : phase] * 60);
              }}
              className="col-span-2 rounded-lg bg-white py-2 text-xs font-semibold text-slate-500 shadow-sm hover:text-slate-700 sm:col-span-4"
            >
              Varsayılana Sıfırla
            </button>
          </div>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-slate-400">
        Sesli uyarı ve bildirim için tarayıcı iznini onayla. Sekme başlığında kalan süreyi görebilirsin.
      </p>
    </div>
  );
}
