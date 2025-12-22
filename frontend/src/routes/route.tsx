// src/routes/index.ts (Route configuration ONLY)
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { RegisterAndClearStorage } from "../pages/register/Register";
import ProtectedRoute from "../Auth/ProtectedRoute";
import { Layout } from "../Shared/layout/Protected/Layout";
import { DashBoard } from "../pages/ProtectedComponents/Dashboard/DashBoard";
import { Tasks } from "../pages/ProtectedComponents/Task/Tasks";
import { AddTask } from "../pages/ProtectedComponents/Task/AddTask";
import { Analytics } from "../pages/ProtectedComponents/Analytics/Analytics";
import { ViewTask } from "../pages/ProtectedComponents/Task/ViewTask";
import { NotFound } from "../pages/NotFound/NotFound";
import Logout from "../pages/logout/Logout";
import { AuthLayout } from "../Shared/layout/Auth/AuthLayout";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <RegisterAndClearStorage />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "add-task",
        element: <AddTask />,
      },
      {
        path: "view-task",
        element: <ViewTask />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
