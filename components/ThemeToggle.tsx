"use client";
import classnames from 'classnames';
import { useThemeContext } from '@/state/theme';

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useThemeContext();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className={classnames(
        "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xl leading-none transition-colors hover:bg-white/10 hover:text-[#DFDFDF]",
        className,
      )}
    >
      {/* Render nothing until mounted so the icon never mismatches the server HTML */}
      {theme && <i className={classnames(theme === "dark" ? "sun" : "moon", "icon m-0 flex items-center justify-center leading-none")} />}
    </button>
  );
}
