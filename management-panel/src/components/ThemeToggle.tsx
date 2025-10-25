import { useAppDispatch } from "../store/hooks";
import { toggleTheme } from "../store/features/themeSlice";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      ☀️
    </button>
  );
}
