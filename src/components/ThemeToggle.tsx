"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function current(): Theme {
  if (typeof document === "undefined") return "dark";
  return (document.documentElement.dataset.theme as Theme) ?? "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  // Sync with the theme the inline script already applied (avoids hydration flash).
  useEffect(() => setTheme(current()), []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore storage errors (private mode) */
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
      title="테마 전환"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
