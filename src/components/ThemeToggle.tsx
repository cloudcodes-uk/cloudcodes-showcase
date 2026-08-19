import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg border border-border bg-secondary/40 hover:bg-secondary text-foreground hover:text-primary transition-all flex items-center justify-center ${className}`}
      aria-label="Toggle theme"
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light (White) Mode"}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-foreground transition-transform hover:rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-primary transition-transform hover:rotate-45" />
      )}
    </button>
  );
}
