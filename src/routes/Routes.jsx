import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Schedule from "../pages/Schedule";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cricket-schedule", element: <Schedule /> },
    ],
  },
  {
    path: "/helo",
    element: <div>Hello helo!</div>,
  },
]);
