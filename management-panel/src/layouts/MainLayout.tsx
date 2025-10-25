import { useAppSelector, useAppDispatch } from "../store/hooks";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { closeSidebar } from "../store/features/uiSlice";

export default function MainLayout() {
  const { sidebarOpen } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  const handleMainClick = () => {
    if (window.innerWidth <= 768 && sidebarOpen) {
      dispatch(closeSidebar());
    }
  };

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="page-content" onClick={handleMainClick}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
