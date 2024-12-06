import { useState } from "react";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "password123") {
      setError("");
      onLoginSuccess();
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
      <div className="w-full max-w-sm rounded-[10px] bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-semibold text-black-1">
          Login
        </h2>

        {error && (
          <div className="mb-4 text-center text-sm text-red-500">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-[10px] border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-grey-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-[10px] border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-grey-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 rounded-[10px] border-gray-300 text-indigo-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-indigo-500 hover:text-indigo-700"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-[10px] bg-indigo-600 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-indigo-500 hover:text-indigo-700">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
