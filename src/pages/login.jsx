import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear previous errors

    // ✅ simple client-side validation
    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    try {
      // ✅ send login request to backend
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.data.token) {
        // ✅ store JWT token
        localStorage.setItem("token", res.data.token);

        // ✅ redirect to dashboard
        navigate("/dashboard");
      } else {
        setError("Login failed — please try again.");
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err);
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-purple-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:ring focus:ring-purple-300"
            required
          />

          {error && (
            <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-purple-700 font-semibold hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
