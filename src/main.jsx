import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Select } from "./screens/select";
import { Home } from "./screens/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./screens/error404";
import { HomeUS } from "./screens/homeUS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/select",
        element: <Select />,
      },
      {
        path: "/us",
        element: <HomeUS />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>
);
