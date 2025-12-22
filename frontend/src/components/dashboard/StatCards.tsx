// src/components/dashboard/StatCards.tsx
import React from "react";
import { ListTodo, CheckCircle, Clock, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  trend?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  color,
  trend,
}) => {
  return (
    <div className="bg-surface rounded-lg border border-border p-6 transition-all hover:shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-text-secondary mb-1">
            {title}
          </p>
          <p className="text-3xl font-bold text-text-primary">{value}</p>
          {trend && (
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-4 w-4 text-status-completed" />
              <span className="text-sm text-status-completed">{trend}</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>{icon}</div>
      </div>
    </div>
  );
};

export const DashboardStatsCards: React.FC<{ stats: any }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* <StatCard
        title="Total Tasks"
        value={stats?.total_tasks || 0}
        icon={<ListTodo className="h-6 w-6 text-white" />}
        color="bg-blue-500"
        trend="+12% from last week"
      />
      <StatCard
        title="Completed Tasks"
        value={stats?.completed_tasks || 0}
        icon={<CheckCircle className="h-6 w-6 text-white" />}
        color="bg-green-500"
        trend="+8% from last week"
      />
      <StatCard
        title="Pending Tasks"
        value={stats?.pending_tasks || 0}
        icon={<Clock className="h-6 w-6 text-white" />}
        color="bg-yellow-500"
        trend="-3% from last week"
      />
      <StatCard
        title="In Progress"
        value={
          (stats?.total_tasks || 0) -
          (stats?.completed_tasks || 0) -
          (stats?.pending_tasks || 0)
        }
        icon={<TrendingUp className="h-6 w-6 text-white" />}
        color="bg-purple-500"
        trend="+5% from last week"
      /> */}
      <StatCard
        title="Total Tasks"
        value={stats?.total_tasks || 0}
        icon={<ListTodo className="h-6 w-6 text-primary-foreground" />}
        color="bg-primary"
        trend="+12% from last week"
      />
      <StatCard
        title="Completed Tasks"
        value={stats?.completed_tasks || 0}
        icon={<CheckCircle className="h-6 w-6 text-primary-foreground" />}
        color="bg-primary"
        trend="+8% from last week"
      />
      <StatCard
        title="Pending Tasks"
        value={stats?.pending_tasks || 0}
        icon={<Clock className="h-6 w-6 text-primary-foreground" />}
        color="bg-primary"
        trend="-3% from last week"
      />
      <StatCard
        title="In Progress"
        value={
          (stats?.total_tasks || 0) -
          (stats?.completed_tasks || 0) -
          (stats?.pending_tasks || 0)
        }
        icon={<TrendingUp className="h-6 w-6 text-primary-foreground" />}
        color="bg-primary"
        trend="+5% from last week"
      />
    </div>
  );
};
