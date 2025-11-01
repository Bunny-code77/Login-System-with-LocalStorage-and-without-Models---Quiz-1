import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  
];

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        
        {/* Left side - Logo + Links */}
        <div className="flex items-center gap-8">
          
          {/* Logo */}
          <div 
            className="text-3xl italic text-purple-700 font-bold tracking-tight select-none"
            style={{ fontFamily: 'Libre Baskerville' }}
          >
            PostPlanner
          </div>
  
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  "text-sm font-medium transition-colors duration-200 " +
                  (isActive
                    ? "text-purple-700 underline underline-offset-4"
                    : "text-gray-700 hover:text-purple-600")
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
  
        {/* Right side - Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          
          {/* Free Trial Button */}
          <a
            href="/"
            className="hidden sm:inline-block px-5 py-2.5 text-sm font-semibold bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition-all duration-200"
          >
            Start Free Trial
          </a>
  
          {/* Mobile Menu */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="cursor-pointer px-3 py-2 text-lg rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-200">
                ☰
              </summary>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {l.label}
                  </NavLink>
                ))}
                <a
                  className="block px-4 py-2 text-sm text-purple-700 font-medium hover:bg-gray-50"
                  href="/"
                >
                  Start Free Trial
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  );
}
