import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const changeTheme = (next: Theme) => {
    setTheme(next);
    localStorage.setItem("theme", next);

    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return null;
  }

  const isLight = theme === "light";
  const isDark = theme === "dark";

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-inner">
      <button
        onClick={() => changeTheme("light")}
        className={`p-1.5 rounded-full transition-all hover:scale-110 ${
          isLight
            ? "bg-white shadow-sm text-gray-700 dark:text-gray-700"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        }`}
        aria-label="Switch to light theme"
        title="Light Mode"
      >
        <Sun className="w-4 h-4" />
      </button>

      <button
        onClick={() => changeTheme("dark")}
        className={`p-1.5 rounded-full transition-all hover:scale-110 ${
          isDark
            ? "bg-gray-700 shadow-sm text-gray-100"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        }`}
        aria-label="Switch to dark theme"
        title="Dark Mode"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}
