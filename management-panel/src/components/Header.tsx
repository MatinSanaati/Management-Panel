import { useAppDispatch } from "../store/hooks";
import { toggleSidebar } from "../store/features/uiSlice";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="menu-toggle"
        aria-label="Toggle sidebar"
      >
        ☰
      </button>
      <h1>پنل مدیریت</h1>
      <ThemeToggle />
    </header>
  );
}
