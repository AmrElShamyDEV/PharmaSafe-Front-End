import React, { useState, useEffect } from "react";
import {
  Edit3,
  Save,
  Plus,
  Trash2,
  Lock,
  BellRing,
  Eye,
  LogOut,
  CheckCircle2,
  AlertTriangle,
  HeartPulse,
} from "lucide-react";
import Navbar from "../Components/NavBar";

export default function Profile() {
  const [toast, setToast] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "Mostafa Helmy",
    age: "22",
    gender: "Male",
    weight: "78",
    email: "mostafa@email.com",
  });

  const [medications, setMedications] = useState([
    { id: 1, name: "Panadol", dosage: "500mg", frequency: "Once Daily" },
    { id: 2, name: "Metformin", dosage: "850mg", frequency: "Twice Daily" },
  ]);

  const [allergies, setAllergies] = useState(["Penicillin", "Aspirin"]);
  const [conditions, setConditions] = useState(["Diabetes", "Asthma"]);

  const conditionOptions = [
    "Diabetes",
    "Hypertension",
    "Asthma",
    "Heart Disease",
  ];

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = () => setToast(true);

  const updateProfile = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addMedication = () => {
    setMedications((prev) => [
      ...prev,
      { id: Date.now(), name: "", dosage: "", frequency: "" },
    ]);
  };

  const updateMedication = (id, field, value) => {
    setMedications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const deleteMedication = (id) => {
    setMedications((prev) => prev.filter((item) => item.id !== id));
  };

  const addAllergy = () => {
    const value = prompt("Enter allergy:");
    if (value && !allergies.includes(value)) {
      setAllergies((prev) => [...prev, value]);
    }
  };

  const removeAllergy = (name) => {
    setAllergies((prev) => prev.filter((a) => a !== name));
  };

  const toggleCondition = (item) => {
    setConditions((prev) =>
      prev.includes(item)
        ? prev.filter((c) => c !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="min-h-screen bg-blue-50 text-slate-800">
      <Navbar />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
          My Health Profile
        </h2>

        <p className="mt-3 text-slate-600 text-lg">
          Manage your medications and health information safely.
        </p>
      </section>

      {/* Layout */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-14 grid xl:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="xl:col-span-2 space-y-6">
          {/* Personal Info */}
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold">Personal Information</h3>

              <button className="text-blue-600 flex items-center gap-2 font-medium">
                <Edit3 className="w-4 h-4" />
                Edit
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                value={profile.fullName}
                onChange={(e) =>
                  updateProfile("fullName", e.target.value)
                }
                className="px-4 py-3 rounded-2xl border border-blue-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                value={profile.age}
                onChange={(e) => updateProfile("age", e.target.value)}
                className="px-4 py-3 rounded-2xl border border-blue-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <select
                value={profile.gender}
                onChange={(e) =>
                  updateProfile("gender", e.target.value)
                }
                className="px-4 py-3 rounded-2xl border border-blue-100 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Male</option>
                <option>Female</option>
              </select>

              <input
                value={profile.weight}
                onChange={(e) =>
                  updateProfile("weight", e.target.value)
                }
                className="px-4 py-3 rounded-2xl border border-blue-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                value={profile.email}
                onChange={(e) =>
                  updateProfile("email", e.target.value)
                }
                className="px-4 py-3 rounded-2xl border border-blue-100 md:col-span-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              onClick={showToast}
              className="mt-5 px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>

          {/* Medications */}
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6">
            <h3 className="text-xl font-bold mb-5">
              Daily Medications
            </h3>

            <div className="space-y-4">
              {medications.map((item) => (
                <div
                  key={item.id}
                  className="grid md:grid-cols-4 gap-4"
                >
                  <input
                    value={item.name}
                    onChange={(e) =>
                      updateMedication(
                        item.id,
                        "name",
                        e.target.value
                      )
                    }
                    className="px-4 py-3 rounded-2xl border border-blue-100"
                  />

                  <input
                    value={item.dosage}
                    onChange={(e) =>
                      updateMedication(
                        item.id,
                        "dosage",
                        e.target.value
                      )
                    }
                    className="px-4 py-3 rounded-2xl border border-blue-100"
                  />

                  <input
                    value={item.frequency}
                    onChange={(e) =>
                      updateMedication(
                        item.id,
                        "frequency",
                        e.target.value
                      )
                    }
                    className="px-4 py-3 rounded-2xl border border-blue-100"
                  />

                  <button
                    onClick={() =>
                      deleteMedication(item.id)
                    }
                    className="rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center gap-2 hover:bg-blue-100"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              <button
                onClick={addMedication}
                className="px-5 py-3 rounded-2xl bg-blue-50 text-blue-700 font-semibold flex items-center gap-2 hover:bg-blue-100"
              >
                <Plus className="w-4 h-4" />
                Add Medication
              </button>

              <button
                onClick={showToast}
                className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Save Medications
              </button>
            </div>
          </div>

          {/* Allergies */}
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold">Allergies</h3>

              <button
                onClick={addAllergy}
                className="text-blue-600 font-medium flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Allergy
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {allergies.map((item) => (
                <button
                  key={item}
                  onClick={() => removeAllergy(item)}
                  className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium hover:bg-blue-100 transition"
                >
                  {item} ×
                </button>
              ))}
            </div>
          </div>

          {/* Conditions */}
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6">
            <h3 className="text-xl font-bold mb-5">
              Medical Conditions
            </h3>

            <div className="flex flex-wrap gap-3">
              {conditionOptions.map((item) => {
                const active = conditions.includes(item);

                return (
                  <button
                    key={item}
                    onClick={() =>
                      toggleCondition(item)
                    }
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      active
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* Completion */}
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6">
            <h3 className="text-xl font-bold mb-4">
              Profile Completion
            </h3>

            <div className="text-4xl font-bold text-blue-600">
              85%
            </div>

            <div className="w-full h-3 bg-blue-100 rounded-full mt-4 overflow-hidden">
              <div className="h-full w-[85%] bg-blue-600 rounded-full"></div>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex gap-2 items-center text-blue-700">
                <CheckCircle2 className="w-4 h-4" />
                Personal Info Completed
              </div>

              <div className="flex gap-2 items-center text-blue-700">
                <CheckCircle2 className="w-4 h-4" />
                Medications Added
              </div>

              <div className="flex gap-2 items-center text-blue-700">
                <CheckCircle2 className="w-4 h-4" />
                Allergies Added
              </div>

              <div className="flex gap-2 items-center text-blue-700">
                <AlertTriangle className="w-4 h-4" />
                Add Emergency Contact
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6">
            <h3 className="text-xl font-bold mb-5">
              Account Settings
            </h3>

            <div className="space-y-3">
              {[
                ["Change Password", Lock],
                ["Notifications Settings", BellRing],
                ["Privacy Settings", Eye],
                ["Logout", LogOut],
              ].map(([label, Icon]) => (
                <button
                  key={label}
                  className="w-full px-4 py-3 rounded-2xl flex items-center gap-3 font-medium transition hover:shadow-md bg-blue-50 text-blue-700 hover:bg-blue-100"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div className="bg-blue-600 rounded-3xl shadow-xl p-6 text-white">
            <HeartPulse className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold">
              Smart Health Insights
            </h3>

            <p className="mt-2 text-sm text-white/90 leading-relaxed">
              Keeping your profile updated helps PharmaSafe
              deliver more accurate interaction checks and safer
              medicine recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-white border border-blue-100 shadow-xl rounded-2xl px-5 py-4 flex items-center gap-3 z-50">
          <CheckCircle2 className="text-blue-600 w-5 h-5" />
          <span className="font-medium">
            Profile updated successfully!
          </span>
        </div>
      )}
    </div>
  );
}