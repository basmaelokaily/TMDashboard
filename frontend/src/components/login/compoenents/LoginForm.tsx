// src/components/auth/LoginForm.tsx
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { UseLoginHook } from "../hooks/login";
import { inputStyle } from "../../../Shared/styles/styles";

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleChange, handleSubmit, formData, isLoading, error } =
    UseLoginHook();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="font-bold text-xl text-white">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white"
            >
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                disabled={isLoading}
                className={inputStyle}
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                className={inputStyle}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                className="absolute inset-y-0 right-0 pr-3 flex items-center disabled:opacity-50"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">
                {"data" in error && error.data
                  ? JSON.stringify(error.data)
                  : "Login failed. Please check your credentials."}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-black hover:bg-primary text-white font-medium rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Loader className="animate-spin h-5 w-5 text-white" />
              </div>
            ) : (
              "Sign In"
            )}
          </button>

          <div className="text-center text-sm">
            <span className="text-gray-400">Don't have an account?</span>{" "}
            <Link
              to="/register"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Register here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
