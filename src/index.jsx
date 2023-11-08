import React from "react";
import ReactDOMClient from "react-dom/client";
import { TimelineScreen } from "./screens/TimelineScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<TimelineScreen />);
