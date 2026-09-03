import { useEffect, useState } from "react";

/**
 * localStorage ile senkron çalışan, otomatik kaydeden state hook'u.
 * Sayfa yenilense de veriler korunur.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? (JSON.parse(raw) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* kota dolabilir; sessizce yut */
    }
  }, [key, value]);

  return [value, setValue] as const;
}
