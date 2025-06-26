import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../auth/AuthProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaLock,
  FaImage,
} from "react-icons/fa";
import useTitle from "../hooks/useTitle";

const SignUp = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const title = "Green Nest - Sign Up";
  useTitle(title);
  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const photoURL = form.photoURL.value.trim();

    // Validation checks
    if (!name) {
      toast.error("Please enter your name", {
        position: "top-center",
        transition: Bounce,
      });
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
        transition: Bounce,
      });
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long", {
        position: "top-center",
        transition: Bounce,
      });
      setIsLoading(false);
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(password)) {
      toast.error(
        "Password must contain uppercase, lowercase, number, and special character",
        {
          position: "top-center",
          transition: Bounce,
        }
      );
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      setUser(user);

      await updateUser({
        displayName: name,
        photoURL: photoURL || "https://i.pravatar.cc/150?img=3",
      });

      toast.success("🎉 Account created successfully!", {
        position: "top-center",
        transition: Bounce,
      });

      form.reset();

      setTimeout(() => {
        navigate(location.state?.from || "/", { replace: true });
      }, 1500);
    } catch (error) {
      let errorMessage = "Sign up failed. Please try again.";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email already in use. Try logging in instead.";
          break;
        case "auth/weak-password":
          errorMessage = "Password is too weak. Use a stronger password.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address format.";
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
              Create Your Account
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Join our plant-loving community
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="space-y-4">
              {/* Name Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
                  required
                />
              </div>

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
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Password must contain 8+ characters with uppercase, lowercase,
                number, and special character
              </p>

              {/* Photo URL Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaImage className="text-gray-400" />
                </div>
                <input
                  type="url"
                  name="photoURL"
                  id="photoURL"
                  placeholder="https://example.com/photo.jpg (optional)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-zinc-700 dark:text-white"
                />
              </div>
            </div>

            <div>
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
                    Creating Account...
                  </span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                state={{ from: location.state?.from }}
                className="font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              >
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
