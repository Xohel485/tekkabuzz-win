import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Suppress browser's automatic PWA install prompt/banner
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
});

// Register service worker for fast caching
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
