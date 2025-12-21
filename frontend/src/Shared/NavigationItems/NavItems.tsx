import type { ReactNode } from "react";
import { DashBoard } from "../../pages/ProtectedComponents/Dashboard/DashBoard";
import { Tasks } from "../../pages/ProtectedComponents/Task/Tasks";
import { AddTask } from "../../pages/ProtectedComponents/Task/AddTask";
import { ViewTask } from "../../pages/ProtectedComponents/Task/ViewTask";
import { Analytics } from "../../pages/ProtectedComponents/Analytics/Analytics";

export interface NavItem {
  id: number;
  label: string;
  href: string;
  component: ReactNode;
}

export const navigationItems: NavItem[] = [
  {
    id: 1,
    label: "Dashboard",
    href: "dashboard",
    component: <DashBoard />,
  },
  {
    id: 2,
    label: "Tasks",
    href: "tasks",
    component: <Tasks />,
  },
  {
    id: 3,
    label: "Create Task",
    href: "add-task",
    component: <AddTask />,
  },
  {
    id: 4,
    label: "View Task",
    href: "view-task",
    component: <ViewTask />,
  },
  {
    id: 5,
    label: "Analytics",
    href: "analytics",
    component: <Analytics />,
  },
];
