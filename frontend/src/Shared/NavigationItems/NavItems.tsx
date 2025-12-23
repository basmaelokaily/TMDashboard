import type { ReactNode } from "react";
import { DashBoard } from "../../pages/ProtectedComponents/Dashboard/DashBoard";
import { Tasks } from "../../pages/ProtectedComponents/Task/Tasks";
import { AddTask } from "../../pages/ProtectedComponents/Task/AddTask";
import { ViewTask } from "../../pages/ProtectedComponents/Task/ViewTask";
import { Analytics } from "../../pages/ProtectedComponents/Analytics/Analytics";
import {
  LayoutDashboard,
  ListTodo,
  PlusCircle,
  FileText,
  BarChart3,
} from "lucide-react";

export interface NavItem {
  id: number;
  label: string;
  href: string;
  component: ReactNode;
  icon: ReactNode;
}

export const navigationItems: NavItem[] = [
  {
    id: 1,
    label: "Dashboard",
    href: "dashboard",
    component: <DashBoard />,
    icon: <LayoutDashboard className="w-5 h-5 text-white" />,
  },
  {
    id: 2,
    label: "Tasks",
    href: "tasks",
    component: <Tasks />,
    icon: <ListTodo className="w-5 h-5 text-white" />,
  },
  {
    id: 3,
    label: "Create Task",
    href: "add-task",
    component: <AddTask />,
    icon: <PlusCircle className="w-5 h-5 text-white" />,
  },
  {
    id: 4,
    label: "Analytics",
    href: "analytics",
    component: <Analytics />,
    icon: <BarChart3 className="w-5 h-5 text-white" />,
  },
];
