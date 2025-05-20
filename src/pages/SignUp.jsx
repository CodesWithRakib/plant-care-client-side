import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
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
            console.log("User updated successfully");
          })
          .catch((error) => {
            console.error("Error updating user:", error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto my-10 h-screen">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register Account</h1>
        <p className="text-sm dark:text-gray-600">
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
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign up
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Already have an account ?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="hover:underline dark:text-violet-600 ml-2"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignUp;
