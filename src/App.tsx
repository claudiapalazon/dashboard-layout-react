import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LayOutComponent } from "./components/Layout";
import AnnouncementsSection from "./components/sections/AnnouncementsSection";
import EmptySection from "./components/sections/EmptySection";

const App: FC = () => {
  return (
    <Router basename="/dashboard-layout-react">
      <Routes>
        <Route path="/" element={<LayOutComponent />}>
          <Route index element={<Navigate to="/announcements" />} />
          <Route path="announcements" element={<AnnouncementsSection />} />
          <Route path="emptySection" element={<EmptySection />} />
          <Route path="*" element={<Navigate to="/announcements" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
