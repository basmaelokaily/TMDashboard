// src/pages/register/RegisterPage.tsx
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { inputStyle } from "../../Shared/styles/styles";
import { useRegisterMutation } from "../../Shared/redux/services/Authentication";

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters!");
      return;
    }

    try {
      const response = await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }).unwrap();

      if (response.access) {
        localStorage.setItem("access_token", response.access);
        localStorage.setItem("refresh_token", response.refresh);
        localStorage.setItem("user_id", response.user.id.toString());
        localStorage.setItem("username", response.user.username);
        localStorage.setItem("user_email", response.user.email);
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    } catch (err: any) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full auto-y-scroll">
      <div className="flex flex-col items-center justify-center w-full mb-8">
        <h1 className="font-bold text-2xl text-white mb-2">Create Account</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        {/* Username Field */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-white"
          >
            Username *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
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
              placeholder="Choose a username"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className={inputStyle}
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password *
          </label>
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
              placeholder="At least 8 characters"
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

        {/* Confirm Password Field */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-white"
          >
            Confirm Password *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
              className={inputStyle}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              disabled={isLoading}
              className="absolute inset-y-0 right-0 pr-3 flex items-center disabled:opacity-50"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400 text-sm">Registration failed</p>
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
            "Create Account"
          )}
        </button>

        <div className="text-center text-sm">
          <span className="text-gray-400">Already have an account?</span>{" "}
          <Link
            to="/login"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            Sign in here
          </Link>
        </div>
      </form>
    </div>
  );
};
