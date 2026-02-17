import { FC } from "react";

export const View: FC<{ selectedSection: string }> = ({ selectedSection }) => {
  return (
    <div>
      {selectedSection === "home" && <h1>Home Section</h1>}
      {selectedSection === "about" && <h1>About Section</h1>}
      {selectedSection === "contact" && <h1>Contact Section</h1>}
      {/* Add more sections as needed */}
    </div>
  );
};
