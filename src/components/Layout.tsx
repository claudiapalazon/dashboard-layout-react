import { FC, useEffect, useRef, useState } from "react";
import { Menu } from "./Menu";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HeaderSection } from "./sections/components/HeaderSection";

export const LayOutComponent: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isInitialLoad = useRef(true);
  const [sectionTitle, setSectionTitle] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname.endsWith("announcements")) {
      setSectionTitle("Anuncios");
    } else if (pathname.endsWith("emptySection")) {
      if (isInitialLoad.current) {
        navigate("/announcements", { replace: true });
      } else {
        setSectionTitle("Calendario");
      }
    }
    isInitialLoad.current = false;
  }, [pathname, navigate]);

  return (
    <div className={`layout ${menuOpen ? "layout--menu-open" : ""}`}>
      <button
        type="button"
        className="layout-menu-toggle"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menú"
      >
        <span className="layout-menu-toggle-bar" />
        <span className="layout-menu-toggle-bar" />
        <span className="layout-menu-toggle-bar" />
      </button>
      <div
        className="layout-overlay"
        role="button"
        tabIndex={0}
        onClick={() => setMenuOpen(false)}
        onKeyDown={(e) => e.key === "Escape" && setMenuOpen(false)}
        aria-label="Cerrar menú"
      />
      <div className="layout-menu">
        <Menu
          sectionTitle={sectionTitle}
          setSectionTitle={setSectionTitle}
          onClose={() => setMenuOpen(false)}
        />
      </div>
      <div className="layout-section">
        <HeaderSection title={sectionTitle} />
        <Outlet />
      </div>
    </div>
  );
};
