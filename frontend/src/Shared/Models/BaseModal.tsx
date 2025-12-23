import React from "react";
import { IoClose } from "react-icons/io5";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-3xl",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div
        className={`bg-white rounded-lg shadow-lg w-full ${maxWidth} p-6 relative`}
      >
        <div
          onClick={onClose}
          className={`bg-[#2B5DAA40] absolute right-5 top-5 rounded-full flex justify-center items-center w-6 h-6 cursor-pointer hover:bg-[#2B5DAA60] transition-colors`}
        >
          <button className="text-primary cursor-pointer">
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
