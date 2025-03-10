import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import firebase from "./firebaseApp.ts";
import { BrowserRouter } from "react-router-dom";
console.log(firebase);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
