"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering on the server
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-lg ${
          theme === "light" ? "bg-gray-200" : "hover:bg-gray-100"
        }`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-lg ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "hover:bg-gray-700 hover:text-white"
        }`}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-lg ${
          theme === "system"
            ? "bg-gray-500 text-white"
            : "hover:bg-gray-500 hover:text-white"
        }`}
      >
        System
      </button>
    </div>
  );
}
