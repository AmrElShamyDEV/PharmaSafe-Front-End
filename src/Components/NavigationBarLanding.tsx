import { User } from "lucide-react";

export default function NavigationBar() {
  const navItems = [
    { label: "Overview", href: "/overview" },,
    { label: "Login", href: "/login", icon: User },
  ];

  return (
    <nav className="w-full px-6 py-4 bg-blue-700 shadow-lg shadow-gray-500/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div>
          <h1 className="text-white font-bold text-2xl tracking-tight">
            PharmaSafe
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item?.label}
              href={item?.href}
              className="group relative text-white font-semibold text-md transition-colors hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md px-1"
            >
              <span className="flex items-center gap-1.5">
                {item?.icon && <item.icon className="w-4 h-4" />}
                {item?.label}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}