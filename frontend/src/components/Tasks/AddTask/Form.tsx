import React, { useState, useEffect } from "react";
import { Save, X, Calendar, FileText, Tag, User } from "lucide-react";
import { formInputStyle } from "../../../Shared/styles/styles";

interface Task {
  id: number;
  title: string;
  description: string | null;
  status: "pending" | "in-progress" | "completed";
  created_at: string;
  updated_at: string;
  author: number;
}
interface TaskFormProps {
  initialData?: Task;
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

interface FormData {
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  due_date?: string;
}

export const TaskForm: React.FC<TaskFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    status: "pending",
    due_date: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        status: initialData.status || "pending",
      });
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (formData.title.length > 200) {
      newErrors.title = "Title must be less than 200 characters";
    }

    if (formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const isEditMode = !!initialData?.id;

  return (
    <div className="bg-surface rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">
            {isEditMode ? "Edit Task" : "Create New Task"}
          </h2>
          <p className="text-text-secondary mt-1">
            {isEditMode
              ? "Update your task details"
              : "Fill in the details to create a new task"}
          </p>
        </div>
        <button
          onClick={onCancel}
          className="p-2 rounded-lg hover:bg-surface-hover transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-text-secondary" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-text-primary"
          >
            Task Title *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FileText className="w-5 h-5 text-text-secondary" />
            </div>
            <input
              id="title"
              name="title"
              type="text"
              required
              value={formData.title}
              onChange={handleChange}
              disabled={isLoading}
              maxLength={200}
              className={formInputStyle({ errors })}
            />
          </div>
          <div className="flex justify-between">
            {errors.title && (
              <p className="text-sm text-status-danger">{errors.title}</p>
            )}
            <p className="text-sm text-text-secondary ml-auto">
              {formData.title.length}/200
            </p>
          </div>
        </div>

        {/* Description Field */}
        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-text-primary"
          >
            Description
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <FileText className="w-5 h-5 text-text-secondary" />
            </div>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              disabled={isLoading}
              rows={4}
              maxLength={500}
              className={formInputStyle({ errors })}
              placeholder="Describe your task (optional)"
            />
          </div>
          <div className="flex justify-between">
            {errors.description && (
              <p className="text-sm text-status-danger">{errors.description}</p>
            )}
            <p className="text-sm text-text-secondary ml-auto">
              {formData.description.length}/500
            </p>
          </div>
        </div>

        {/* Status & Due Date Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Status Field */}
          <div className="space-y-2">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-text-primary"
            >
              Status
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="w-5 h-5 text-text-secondary" />
              </div>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                disabled={isLoading}
                className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 appearance-none"
              >
                <option value="pending" className="bg-surface">
                  Pending
                </option>
                <option value="in-progress" className="bg-surface">
                  In Progress
                </option>
                <option value="completed" className="bg-surface">
                  Completed
                </option>
              </select>
            </div>
          </div>

          {/* Due Date Field */}
          <div className="space-y-2">
            <label
              htmlFor="due_date"
              className="block text-sm font-medium text-text-primary"
            >
              Due Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="w-5 h-5 text-text-secondary" />
              </div>
              <input
                id="due_date"
                name="due_date"
                type="date"
                value={formData.due_date}
                onChange={handleChange}
                disabled={isLoading}
                className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-end space-x-4 pt-6 border-t border-border">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="px-6 py-2.5 border border-border text-text-primary rounded-lg hover:bg-surface-hover transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                {isEditMode ? "Updating..." : "Creating..."}
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                {isEditMode ? "Update Task" : "Create Task"}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
