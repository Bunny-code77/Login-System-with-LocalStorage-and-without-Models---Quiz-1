import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar"; 
import { CalendarDays, Clock, Hash, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const cards = [
    { title: "Scheduled Posts", value: 42, icon: <CalendarDays className="text-white w-6 h-6" /> },
    { title: "Pending Approval", value: 5, icon: <Clock className="text-white w-6 h-6" /> },
    { title: "Top Hashtag", value: "#campaign", icon: <Hash className="text-white w-6 h-6" /> },
    { title: "Followers Growth", value: "+12%", icon: <TrendingUp className="text-white w-6 h-6" /> },
  ];

  const upcoming = [
    { platform: "Instagram", date: "Nov 5, 2025", time: "3:00 PM", status: "Scheduled" },
    { platform: "Facebook", date: "Nov 6, 2025", time: "6:00 PM", status: "Pending" },
    { platform: "LinkedIn", date: "Nov 8, 2025", time: "9:30 AM", status: "Scheduled" },
  ];

  return (
    <>
      {/* ✅ Navbar at the top */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen bg-gradient-to-br from-purple-50 to-white">
        
        {/* Page Header */}
        <header className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-extrabold text-purple-700 tracking-tight">
            Dashboard Overview
          </h1>

          <button className="px-5 py-2.5 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-800 transition-all duration-200">
            + Create New Post
          </button>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300"
            >
              <div className="flex items-center justify-between">
                <div>{c.icon}</div>
                <div className="text-lg font-semibold">{c.title}</div>
              </div>
              <div className="mt-4 text-3xl font-bold">{c.value}</div>
            </div>
          ))}
        </div>

        {/* Upcoming Posts */}
        <section className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
          <h2 className="text-2xl font-bold text-purple-700 mb-3">Upcoming Posts</h2>
          <p className="text-gray-600 mb-5">
            Keep track of your scheduled and pending posts across all platforms.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-t border-gray-200">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="py-2 px-3">Platform</th>
                  <th className="py-2 px-3">Date</th>
                  <th className="py-2 px-3">Time</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {upcoming.map((post, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-purple-50 transition duration-200"
                  >
                    <td className="py-3 px-3 font-semibold text-gray-700">{post.platform}</td>
                    <td className="py-3 px-3">{post.date}</td>
                    <td className="py-3 px-3">{post.time}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          post.status === "Scheduled"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Insights Section */}
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">Insights Summary</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Your posts are performing better than last week 🎉. Engagement is up
              by 12%, and your followers have grown steadily. Keep posting
              consistently and using trending hashtags to maintain momentum.
            </p>
            <button className="bg-[#287379] text-white px-6 py-3 rounded-lg shadow hover:bg-purple-800 transition duration-300">
              View Detailed Analytics
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-purple-200 rounded-3xl transform rotate-3"></div>
            <img
              src="https://www.loomly.com/hubfs/IMG%20Area-Feb-10-2024-06-06-30-3129-AM.png"
              alt="Analytics Preview"
              className="relative rounded-3xl shadow-lg w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </>
  );
}
