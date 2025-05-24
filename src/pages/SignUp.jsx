import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../auth/AuthProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    if (password.length < 7) {
      toast.error("Password must be at least 7 characters long", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{6,}$/.test(
        password
      )
    ) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        }
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;

        setUser(user);
        toast.success("🦄 Sign Up Success !!", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        if (user) {
          form.reset();
        }
        updateUser({ displayName: name, photoURL })
          .then(() => {
            toast.success("User Updated", {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          })
          .catch((error) => {
            toast.error(`Error updating user: ${error?.message}`, {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });

        setTimeout(() => {
          navigate(`${location.state ? location.state : "/"}`);
        }, 2000);
      })
      .catch((error) => {
        toast.error(`Error creating user: ${error?.message}`, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return (
    <div className="flex items-center justify-center bg-green-50 dark:bg-zinc-800 dark:text-white">
      <div className="flex flex-col w-full  max-w-lg p-6 rounded-md sm:p-10 h-screen dark:bg-zinc-900 bg-white dark:text-white mx-auto ">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register Account</h1>
          <p className="text-sm dark:text-gray-400">
            Create an account to access all features of our website.
          </p>
        </div>
        <form
          onSubmit={handleSignUp}
          noValidate=""
          action=""
          className="space-y-12"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Leroy Jenkins"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="photoURL" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                id="photoURL"
                placeholder="https://example.com/photo.jpg"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md 
                bg-green-300 text-white dark:bg-green-400  dark:text-gray-50"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have an account ?
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="hover:underline 
                text-green-600 dark:text-green-300 ml-2"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default SignUp;
