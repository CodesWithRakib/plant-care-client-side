import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../hooks/useTitle";

const SignIn = () => {
  const { logIn, logInWithGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const title = "Green Nest - Sign In";
  useTitle(title);

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    try {
      const res = await logInWithGoogle();
      const user = res.user;
      setUser(user);

      toast.success("🎉 Google login successful!", {
        position: "top-center",
        transition: Bounce,
      });

      setTimeout(() => {
        navigate(location.state?.from || "/", { replace: true });
      }, 1500);
    } catch (error) {
      let errorMessage = "Google login failed. Please try again.";
      if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "Login popup was closed before completing.";
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        errorMessage = "Account exists with different credentials.";
      }

      toast.error(errorMessage, {
        position: "top-center",
        transition: Bounce,
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      await logIn(email, password);

      toast.success("🎉 Login successful!", {
        position: "top-center",
        transition: Bounce,
      });

      setTimeout(() => {
        navigate(location.state?.from || "/", { replace: true });
      }, 1500);
    } catch (error) {
      let errorMessage = "Login failed. Please try again.";
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No account found with this email.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address format.";
          break;
        case "auth/too-many-requests":
          errorMessage =
            "Too many attempts. Try again later or reset your password.";
          break;
      }

      toast.error(errorMessage, {
        position: "top-center",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 dark:from-zinc-800 dark:to-zinc-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to continue your plant journey
            </p>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading}
            className={`w-full flex items-center justify-center py-3 px-4 border rounded-lg transition-colors mb-6 ${
              isGoogleLoading
                ? "bg-gray-100 dark:bg-zinc-700 cursor-not-allowed"
                : "bg-white dark:bg-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-600"
            }`}
          >
            {isGoogleLoading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <FcGoogle className="text-xl mr-3" />
            )}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {isGoogleLoading ? "Signing in..." : "Continue with Google"}
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300 dark:border-zinc-600"></div>
            <div className="px-3 text-gray-500 dark:text-gray-400">or</div>
            <div className="flex-1 border-t border-gray-300 dark:border-zinc-600"></div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full px-6 py-3 font-semibold rounded-lg transition-colors ${
                isLoading
                  ? "bg-green-400 dark:bg-green-500 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              } text-white`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                state={{ from: location.state?.from }}
                className="font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
