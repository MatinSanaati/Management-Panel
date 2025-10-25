// src/components/BottomNavMenu.tsx
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "داشبورد", path: "/dashboard", icon: "📊" },
  { name: "کاربران", path: "/users", icon: "👥" },
  { name: "تنظیمات", path: "/settings", icon: "⚙️" },
];

const BottomNavMenu = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav" aria-label="منوی پایینی">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`bottom-nav-item ${
            location.pathname === item.path ? "active" : ""
          }`}
          aria-label={item.name}
        >
          <span className="bottom-nav-icon">{item.icon}</span>
          <span className="bottom-nav-label">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavMenu;
