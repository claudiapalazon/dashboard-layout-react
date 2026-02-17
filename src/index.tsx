import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/app.scss";
import "font-awesome/css/font-awesome.min.css";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
