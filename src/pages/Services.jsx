export default function Services() {
  const features = [
    { 
      title: "Collaboration & Approvals",
      desc: "Multi-level approvals, comments, and version history to keep your workflow smooth and transparent.",
      img: "https://www.loomly.com/hubfs/Blog%20featured%20image_Photo%20dumps%20(2).jpg",
    },
    {
      title: "Post Scheduling & Calendar",
      desc: "Visual calendar, flexible scheduling and real-time previews for each platform.",
      img: "https://www.loomly.com/hubfs/FB%20First%20Comment.jpg",
    },
    {
      title: "Content Library + Editor",
      desc: "Store, organize and edit all your content assets in one place — from captions to visuals.",
      img: "https://www.loomly.com/hubfs/011725_10%20of%20the%20Best%20Social%20Media%20Marketing%20Books%20to%20Read%20in%202025.jpg",
    },
    {
      title: "Analytics & Reporting",
      desc: "Gain insights with exportable reports, post performance tracking and engagement analytics.",
      img: "https://www.loomly.com/hubfs/Social%20media%20KPIs.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700">
          Solutions for Teams & Agencies
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From content planning to analytics, PostPlanner empowers your entire social media journey 
          — designed for teams, creators, and agencies who aim for impact.
        </p>
      </header>

      {/* Highlight Section */}
      <div className="bg-gradient-to-r from-purple-300 to-purple-50 rounded-2xl p-8 text-center shadow-md">
        <h2 className="text-2xl font-semibold text-purple-800">Why choose PostPlanner?</h2>
        <p className="text-gray-700 mt-2">
          Automate your workflow, collaborate effortlessly, and focus on creativity — 
          while PostPlanner handles the rest.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-purple-100 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all p-6 flex flex-col md:flex-row items-center gap-6"
          >
            <img
              src={f.img}
              alt={f.title}
              className="w-full md:w-48 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-700">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
              <a
                className="inline-block mt-4 text-purple-700 font-medium hover:text-purple-900 transition"
                href="/"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-300 to-purple-50 rounded-xl p-8 shadow-inner">
        <h3 className="text-2xl font-bold text-purple-700 mb-2">
          Ready to simplify your social media strategy?
        </h3>
        <p className="text-gray-700 mb-4">Start creating, scheduling, and analyzing — all in one place.</p>
        <a
          href="/"
          className="bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
