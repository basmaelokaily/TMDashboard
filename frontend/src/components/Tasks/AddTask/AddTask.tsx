import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateTaskMutation } from "../../../Shared/redux/services/Task";
import { TaskForm } from "./Form";

export const CreateTaskPage = () => {
  const navigate = useNavigate();
  const [createTask, { isLoading }] = useCreateTaskMutation();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (formData: any) => {
    try {
      await createTask(formData).unwrap();
      setSuccessMessage("Task created successfully!");
      setTimeout(() => {
        navigate("/tasks");
      }, 1500);
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const handleCancel = () => {
    navigate("/tasks");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-surface border-b border-border p-6">
        <div className="flex ">
          <div className="flex items-center space-x-4">
            <Link
              to="/tasks"
              className="flex items-center text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-text-primary">
                Create New Task
              </h1>
              <p className="text-text-secondary mt-1">
                Add a new task to your list
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          {successMessage && (
            <div className="mb-6 p-4 bg-status-completed/10 border border-status-completed/30 rounded-lg">
              <p className="text-status-completed">{successMessage}</p>
              <p className="text-sm text-status-completed/80 mt-1">
                Redirecting to tasks page...
              </p>
            </div>
          )}

          <div className="bg-surface border border-border rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <TaskForm
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
