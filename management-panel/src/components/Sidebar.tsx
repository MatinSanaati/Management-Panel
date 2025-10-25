import { useAppSelector } from "../store/hooks";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "داشبورد", path: "/dashboard" },
  { name: "کاربران", path: "/users" },
  { name: "تنظیمات", path: "/settings" },
];

export default function Sidebar() {
  const { sidebarOpen } = useAppSelector((state) => state.ui);
  const location = useLocation();

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header">مدیریت</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
