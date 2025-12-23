import React, { useEffect, useState } from "react";
import {
  useGetTasksQuery,
  useDeleteTaskMutation,
} from "../../Shared/redux/services/Task";
import {
  Plus,
  Upload,
  Search,
  Filter,
  Edit,
  Trash2,
  Loader,
  AlertCircle,
} from "lucide-react";
import { usePagination } from "../../Shared/hooks/usePagination";
import { Pagination } from "../../Shared/pagination/pagination";
import { useModal } from "../../Shared/hooks/useModal";
import { DeleteModal } from "../../Shared/Models/DeleteModal";
import { useNavigate } from "react-router-dom";

export const ViewTasks = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const pagination = usePagination();
  const deleteModal = useModal();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetTasksQuery({
    search,
    status,
    page: pagination.pageNumber,
    limit: 10,
  });

  useEffect(() => {
    pagination.setTotalPages(data ? data.total_pages : 1);
  }, [data]);

  const [deleteTask] = useDeleteTaskMutation();

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteTask(id).unwrap();
      } catch (err) {
        console.error("Failed to delete task:", err);
      }
    }
  };
  const handleBulkUpload = () => {
    console.log("Bulk upload clicked");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-status-danger mx-auto mb-4" />
          <p className="text-text-secondary">Failed to load tasks</p>
        </div>
      </div>
    );
  }

  const tasks = data ? data?.results : [];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">My Tasks</h1>
          <p className="text-text-secondary mt-1">
            Manage and track your tasks efficiently
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => console.log("Navigate to add task")}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Task
          </button>
          <button
            onClick={handleBulkUpload}
            className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-text-primary rounded-lg hover:bg-surface-hover transition-colors"
          >
            <Upload className="h-4 w-4" />
            Bulk Upload
          </button>
        </div>
      </div>

      <div className="bg-surface rounded-lg border border-border p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-text-secondary" />
            </div>
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-text-secondary" />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-4 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-surface rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-hover">
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  Title
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  Description
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  Created
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks?.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-text-secondary"
                  >
                    No tasks found. Create your first task!
                  </td>
                </tr>
              ) : (
                tasks?.map((task: any) => (
                  <tr
                    key={task.id}
                    className="border-b border-border hover:bg-surface-hover"
                  >
                    <td className="py-3 px-4">
                      <div className="font-medium text-text-primary">
                        {task.title}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-text-secondary text-sm max-w-xs truncate">
                        {task.description || "No description"}
                      </div>
                    </td>
                    <td className="py-3">
                      <span
                        className={`flex flex-row items-center justify-center w-full mx-auto px-4 py-2 rounded-full text-xs font-bold ${
                          task.status === "completed"
                            ? "bg-green-400/10 text-green-800"
                            : task.status === "in-progress"
                              ? "bg-blue-400/10 text-blue-800"
                              : "bg-red-400/10 text-red-800"
                        }`}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-text-secondary">
                      {new Date(task.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/edit-task/${task.id}`)}
                          className="p-2 text-text-secondary hover:text-primary hover:bg-primary/10 rounded transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedId(task.id);
                            deleteModal.open();
                          }}
                          className="p-2 text-text-secondary hover:text-status-danger hover:bg-status-danger/10 rounded transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          pageNumber={pagination.pageNumber}
          setPageNumber={pagination.setPageNumber}
          totalPages={pagination.totalPages}
        />
        <DeleteModal
          isOpen={deleteModal.isOpen}
          onClose={() => deleteModal.close()}
          onConfirm={() => handleDelete(selectedId!)}
          title="Delete Task"
          description="This task will be permanently deleted."
        />
      </div>
    </div>
  );
};
