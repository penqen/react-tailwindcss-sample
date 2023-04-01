import React from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  };

  return (
    <button
      type="button"
      className="rounded-full p-2 text-white hover:bg-gray-900"
      onClick={handleClick}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
