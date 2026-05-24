import { useNavigate, useLocation } from "react-router-dom";
import { Stethoscope, Bell, User, Settings, HelpCircle, LogOut } from "lucide-react";
import { useState, useRef } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Scan Prescription", path: "/scan" },
    { name: "History", path: "/history" },
    { name: "DDI Checker", path: "/ddi" },
    { name: "Alternatives", path: "/alternatives" },
  ];

  const menuItems = [
    { label: "Profile", icon: User, path: "/profile" },
    { label: "Settings", icon: Settings, path: "/settings" },
    { label: "Help", icon: HelpCircle, path: "/help" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
          <div className="h-11 w-11 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
            <Stethoscope className="text-white w-5 h-5" />
          </div>
          <h1 className="font-bold text-xl text-black">
            Pharma<span className="text-blue-600">Safe</span>
          </h1>
        </div>

        {/* Links */}
        <div className="hidden lg:flex gap-7 text-sm font-medium">
          {links.map((item) => {
            const active = location.pathname === item.path;
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`transition hover:text-blue-600 ${active ? "text-blue-600 font-semibold" : ""}`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-xl hover:bg-slate-100">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Avatar + Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Avatar */}
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer">
              <User className="w-5 h-5" />
            </div>

            {/* Dropdown */}
            {isOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-48 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                {/* User info header */}
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="text-sm font-semibold text-slate-800">John Doe</p>
                  <p className="text-xs text-slate-500">john@example.com</p>
                </div>

                {/* Menu items */}
                {menuItems.map(({ label, icon: Icon, path }) => (
                  <button
                    key={label}
                    onClick={() => { navigate(path); setIsOpen(false); }}
                    className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition"
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                    {label}
                  </button>
                ))}

                {/* Log out */}
                <div className="border-t border-slate-100">
                  <button
                    onClick={() => console.log("Logging out...")}
                    className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition"
                  >
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}