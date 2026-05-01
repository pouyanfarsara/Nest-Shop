"use client";

import { toast } from "react-toastify";
import { useState } from "react";
import { z } from "zod";
import FooterTop from "../components/layout/Footer";
import FooterBottom from "../components/layout/FooterBottom";
import ShopHeader from "../components/layout/shopheader";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function LoginPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      remember: false,
    });
    setErrors({});
  };

  const handleModeChange = () => {
    setIsLogin((prev) => !prev);
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      if (isLogin) {
        const result = loginSchema.safeParse({
          email: formData.email,
          password: formData.password,
          remember: formData.remember,
        });

        if (!result.success) {
          const fieldErrors = {};

          result.error.issues.forEach((issue) => {
            const fieldName = issue.path[0];
            fieldErrors[fieldName] = issue.message;
          });

          setErrors(fieldErrors);
          setLoading(false);
          return;
        }

        const res = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        console.log("signIn result:", res);

        if (!res || res.error) {
          toast.error("Invalid email or password");
          setLoading(false);
          return;
        }

        toast.success("Login successful");
        resetForm();

        router.push("/products");
        router.refresh();
        return;
      }

      const result = registerSchema.safeParse({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      if (!result.success) {
        const fieldErrors = {};

        result.error.issues.forEach((issue) => {
          const fieldName = issue.path[0];
          fieldErrors[fieldName] = issue.message;
        });

        setErrors(fieldErrors);
        setLoading(false);
        return;
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Register failed");
        setLoading(false);
        return;
      }

      toast.success("Register successful");
      resetForm();
      setIsLogin(true);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page container">
      <ShopHeader />

      <div
        className="lg:flex w-full items-center md:justify-between md:px-12 md:py-10 bg-center md:bg-cover rounded-2xl shadow-xl mt-5"
        style={{
          backgroundImage: "url(/mainbanner.png)",
        }}
      >
        <div className="hidden lg:block">
          <p className="text-2xl text-[#253D4E] mb-4">
            Welcome back to{" "}
            <span className="text-[#3BB77E] font-semibold">Nest Mart</span>
          </p>

          <h1 className="text-5xl md:font-bold text-[#253D4E] mb-6">
            Fresh groceries delivered to your door
          </h1>

          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-[#3BB77E]">✔</span> Fast Delivery
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#3BB77E]">✔</span> Organic Products
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#3BB77E]">✔</span> Best Prices
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center py-0 md:py-12 w-full md:w-auto">
          <div className="bg-white md:w-[500px] w-full p-5 md:p-10 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-2">
              {isLogin ? "Login to your account" : "Create your account"}
            </h2>

            <p className="text-gray-500 mb-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}

              <button
                type="button"
                onClick={handleModeChange}
                className="text-[#3BB77E] ml-2 font-medium cursor-pointer"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <div>
                  <label className="text-sm text-gray-600">Full Name</label>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full border rounded-lg px-4 py-3 mt-1 focus:ring-1 focus:outline-none focus:ring-[#3BB77E] ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
              )}

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-3 mt-1 focus:ring-1 focus:outline-none focus:ring-[#3BB77E] ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-3 mt-1 focus:ring-1 focus:outline-none focus:ring-[#3BB77E] ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label className="text-sm text-gray-600">
                    Confirm Password
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full border rounded-lg px-4 py-3 mt-1 focus:ring-1 focus:outline-none focus:ring-[#3BB77E] ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              {isLogin && (
                <div className="flex justify-between text-sm">
                  <label className="flex gap-2 items-center">
                    <input
                      name="remember"
                      type="checkbox"
                      checked={formData.remember}
                      onChange={handleChange}
                    />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="text-[#3BB77E] cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#3BB77E] hover:bg-[#2ea76f] disabled:opacity-70 text-white py-3 rounded-lg cursor-pointer transition"
              >
                {loading
                  ? isLogin
                    ? "Logging in..."
                    : "Registering..."
                  : isLogin
                    ? "Login"
                    : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <FooterTop />
      <FooterBottom />
    </div>
  );
}
