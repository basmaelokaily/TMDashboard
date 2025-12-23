import { useState } from "react";
import { useLoginMutation } from "../../../Shared/redux/services/Authentication";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../Shared/constants";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../../Shared/redux/Data/UserDataSlice";
import { useDispatch } from "react-redux";

export const UseLoginHook = () => {
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(formData).unwrap();
      console.log("response:", response);
      localStorage.setItem(ACCESS_TOKEN, response.access);
      localStorage.setItem(REFRESH_TOKEN, response.refresh);
      dispatch(
        setCredentials({
          user: response.user,
          token: response.access,
        })
      );
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    handleChange,
    handleSubmit,
    formData,
    isLoading,
    error,
  };
};
