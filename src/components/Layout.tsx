import { FC, useEffect, useRef, useState } from "react";
import { Menu } from "./Menu";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HeaderSection } from "./sections/components/HeaderSection";

export const LayOutComponent: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isInitialLoad = useRef(true);
  const [sectionTitle, setSectionTitle] = useState<string>("");

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
    <div className="layout">
      <div className="layout-menu">
        <Menu sectionTitle={sectionTitle} setSectionTitle={setSectionTitle} />
      </div>
      <div className="layout-section">
        <HeaderSection title={sectionTitle} />
        <Outlet />
      </div>
    </div>
  );
};
