import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setSession }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreement: false,
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    agreement: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const errors = {};

      if (formData.email.trim() === "") {
        errors.email = "Email is required";
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          errors.email = "Email is invalid";
        }
      }

      if (formData.password === "") {
        errors.password = "Password is required";
      }

      if (!formData.agreement) {
        errors.agreement = "Agreement is required";
      }

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData,
        { headers }
      );

      if (response.status === 200) {
        setSession(true);
        setFormData({
          email: "",
          password: "",
        });
        toast.success("Welcome back 🥳");
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.log("Użytkonwik nie istnieje lub błędne dane");
    }
  };

  return (
    <div className="container mx-auto px-auto py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Login if you are a returing customer
        </p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 mb-2 block">
                Email Address
                <span className="text-red-600">*</span>
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                name="email"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@mail.com"
              />
              {formErrors.email && (
                <p className="text-red-600 font-bold text-sm">
                  {formErrors.email}
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Password
                <span className="text-red-600">*</span>
              </label>
              <input
                onChange={handleChange}
                value={formData.password}
                name="password"
                type="password"
                autoComplete="on"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="type password"
              />
              {formErrors.password && (
                <p className="text-red-600 font-bold text-sm">
                  {formErrors.password}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center mb-4">
              <input
                value={formData.agreement}
                onChange={handleChange}
                type="checkbox"
                name="agreement"
                id="agreement"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="agreement"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember Me
              </label>
            </div>
            <Link to={"/"} className="text-sky-400">
              Forgot Password?
            </Link>
          </div>
          {formErrors.agreement && (
            <p className="text-red-600 font-bold text-sm">
              {formErrors.agreement}
            </p>
          )}
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center text-white bg-sky-400 border border-sky-400 rounded hover:bg-transparent hover:text-black transition uppercase font-roboto font-medium"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 flex justify-center relative">
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
          <div className="text-gray-600 uppercase px-3 bg-white relative z-10">
            OR LOGIN IN WITH
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <Link className="block w-1/2 py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm">
            Google
          </Link>
          <Link className="block w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm">
            Facebook
          </Link>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?
          <Link to={"/register"} className="text-sky-400 ml-2">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
