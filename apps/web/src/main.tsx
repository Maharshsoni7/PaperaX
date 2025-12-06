import { createRoot } from "react-dom/client";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

createRoot(document.getElementById("app")!).render(<App />);
