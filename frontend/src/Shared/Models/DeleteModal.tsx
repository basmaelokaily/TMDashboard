import React from "react";
import { Trash2, X } from "lucide-react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  itemName?: string;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Task",
  description = "Are you sure you want to delete this task? This action cannot be undone.",
  itemName = "",
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-surface rounded-lg shadow-xl w-full max-w-md relative p-6 border border-border">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center transition-colors hover:bg-primary/10"
        >
          <X className="w-4 h-4 text-text-primary" />
        </button>

        {/* Trash Icon */}
        <div className="flex justify-center mb-6 mt-2">
          <div className="w-16 h-16 rounded-full bg-red-400/10 flex items-center justify-center">
            <Trash2 className="w-8 h-8 text-status-danger" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            {title}
          </h2>
          <p className="text-text-secondary">
            {description}
            {itemName && (
              <span className="font-medium text-text-primary">
                {" "}
                "{itemName}"
              </span>
            )}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 border border-border text-text-primary rounded-lg hover:bg-surface-hover transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
