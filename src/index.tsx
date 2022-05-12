import App from "./components/App";
import { createRoot } from "react-dom/client";

const container = document.querySelector("main");
const root = createRoot(container!);
root.render(<App />);
