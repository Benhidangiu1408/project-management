import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path:'/',
        element: <Login/>,
      },
      
    ],
  },
])


const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Chet chua bae");
}