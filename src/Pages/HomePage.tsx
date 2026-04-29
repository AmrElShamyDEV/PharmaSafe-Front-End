import React from "react";
import {
  Bell,
  User,
  ShieldCheck,
  AlertTriangle,
  Pill,
  ScanLine,
  Upload,
  Search,
  History,
  Activity,
  ArrowRight,
  Stethoscope,
} from "lucide-react";
import Navbar from "../Components/NavBar";

export default function PharmaSafeHomePage() {
  const cards = [
    {
      title: "Recent Scan",
      value: "Panadol + Amoxil",
      sub: "Status: Safe",
      icon: ScanLine,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "DDI Alerts",
      value: "2 Found",
      sub: "Review recommended",
      icon: AlertTriangle,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Suggested Alternatives",
      value: "5 Options",
      sub: "Safer substitutes available",
      icon: Pill,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Daily Medications",
      value: "3 Active",
      sub: "Stored in profile",
      icon: ShieldCheck,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
  ];

  const historyData = [
    {
      name: "Prescription #241",
      date: "Apr 23, 2026",
      result: "Safe",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Prescription #240",
      date: "Apr 21, 2026",
      result: "Warning",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Prescription #239",
      date: "Apr 19, 2026",
      result: "Alternatives Found",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Prescription #238",
      date: "Apr 16, 2026",
      result: "Safe",
      color: "bg-blue-100 text-blue-700",
    },
  ];

  const quickActions = [
    { label: "Scan Again", icon: ScanLine },
    { label: "Upload Prescription", icon: Upload },
    { label: "Check Interactions", icon: AlertTriangle },
    { label: "Find Alternatives", icon: Pill },
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-slate-800">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-10">
        <div className="grid lg:grid-rows-2 gap-10 items-center">
          <h1 className="text-4xl font-bold text-bkack">Welcome back, <span className="text-blue-600">user</span>!</h1>


          <h2 className="text-3xl font-bold text-blue-600">Pick up where you left off...</h2>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="bg-white rounded-3xl p-6 shadow-sm border border-blue-100 hover:-translate-y-1 hover:shadow-xl transition duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${card.color}`} />
                </div>

                <h4 className="text-sm text-slate-500">{card.title}</h4>
                <p className="font-bold text-xl mt-1">{card.value}</p>
                <p className="text-sm text-slate-500 mt-2">{card.sub}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-blue-100">
          <h3 className="text-xl font-bold mb-5">Quick Actions</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.label}
                  className="p-5 rounded-2xl bg-blue-50 hover:bg-blue-100 hover:shadow-md hover:-translate-y-1 transition flex items-center gap-3 font-medium"
                >
                  <Icon className="w-5 h-5 text-blue-600" />
                  {action.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 pb-14">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-blue-100">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-6">
            <h3 className="text-xl font-bold">Recent Activity</h3>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-3.5 w-4 h-4 text-blue-400" />

              <input
                type="text"
                placeholder="Search history..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-blue-200 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="text-left text-slate-500 border-b border-blue-100">
                  <th className="pb-3">Prescription Name</th>
                  <th className="pb-3">Scan Date</th>
                  <th className="pb-3">Result</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {historyData.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-blue-50 last:border-none hover:bg-blue-50 transition"
                  >
                    <td className="py-4 font-medium">{item.name}</td>
                    <td className="py-4 text-slate-500">{item.date}</td>

                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${item.color}`}
                      >
                        {item.result}
                      </span>
                    </td>

                    <td className="py-4">
                      <button className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        View <ArrowRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 text-center text-slate-500 text-sm">
          PharmaSafe © 2026 — Smart AI Healthcare Protection
        </div>
      </footer>
    </div>
  );
}
