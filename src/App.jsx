import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
