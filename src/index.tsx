import React from "react";
import ReactDOM from "react-dom/client";
import ChatPage from "./page/ChatPage";
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import DefPage from "./page/DefPage";
import RouterPage from "./routerpage";

// Initialize Firebase

// const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterPage />);
