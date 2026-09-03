import { useSyncExternalStore } from "react";

/**
 * "Öğrenilenler" ilerleme deposu.
 * - learnedCapsules: öğrenildi olarak işaretlenen kapsül id'leri
 * - correctQuestions: en az bir kez doğru cevaplanan soru id'leri
 * Tüm bileşenler arasında senkron çalışır ve localStorage'da kalıcıdır.
 */

type ProgressState = {
  learnedCapsules: string[];
  correctQuestions: string[];
};

const KEY = "yks_progress_v1";
const EMPTY: ProgressState = { learnedCapsules: [], correctQuestions: [] };

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      learnedCapsules: Array.isArray(parsed.learnedCapsules) ? parsed.learnedCapsules : [],
      correctQuestions: Array.isArray(parsed.correctQuestions) ? parsed.correctQuestions : [],
    };
  } catch {
    return EMPTY;
  }
}

let state: ProgressState = load();
const listeners = new Set<() => void>();

function emit() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* kota dolabilir */
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return state;
}

// --- Mutasyonlar ---
export function toggleLearnedCapsule(id: string) {
  const set = new Set(state.learnedCapsules);
  set.has(id) ? set.delete(id) : set.add(id);
  state = { ...state, learnedCapsules: [...set] };
  emit();
}

export function markCapsuleLearned(id: string, learned: boolean) {
  const set = new Set(state.learnedCapsules);
  learned ? set.add(id) : set.delete(id);
  state = { ...state, learnedCapsules: [...set] };
  emit();
}

export function markQuestionCorrect(id: string) {
  if (state.correctQuestions.includes(id)) return;
  state = { ...state, correctQuestions: [...state.correctQuestions, id] };
  emit();
}

export function unmarkQuestionCorrect(id: string) {
  if (!state.correctQuestions.includes(id)) return;
  state = { ...state, correctQuestions: state.correctQuestions.filter((q) => q !== id) };
  emit();
}

export function resetLearnedCapsules() {
  state = { ...state, learnedCapsules: [] };
  emit();
}

export function resetCorrectQuestions() {
  state = { ...state, correctQuestions: [] };
  emit();
}

export function resetAllProgress() {
  state = { learnedCapsules: [], correctQuestions: [] };
  emit();
}

// --- Hook ---
export function useProgress() {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  return {
    learnedCapsules: snap.learnedCapsules,
    correctQuestions: snap.correctQuestions,
    learnedCount: snap.learnedCapsules.length,
    correctCount: snap.correctQuestions.length,
    isCapsuleLearned: (id: string) => snap.learnedCapsules.includes(id),
    isQuestionCorrect: (id: string) => snap.correctQuestions.includes(id),
    toggleLearnedCapsule,
    markCapsuleLearned,
    markQuestionCorrect,
    unmarkQuestionCorrect,
    resetLearnedCapsules,
    resetCorrectQuestions,
    resetAllProgress,
  };
}
