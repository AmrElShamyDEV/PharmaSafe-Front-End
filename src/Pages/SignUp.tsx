import { useState } from "react";
import Swal from "sweetalert2";
import { CheckCircle2, User, Shield, HeartPulse } from "lucide-react";

export default function PharmaSafeSignupWizard() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    allergies: "",
  });

  const totalSteps = 3;

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password
      ) {
        Swal.fire({
          icon: "warning",
          title: "Missing Information",
          text: "Please complete all account fields.",
          confirmButtonColor: "#2563eb",
        });
        return;
      }
    }

    if (step === 2) {
      if (
        !formData.age ||
        !formData.gender ||
        !formData.weight ||
        !formData.height
      ) {
        Swal.fire({
          icon: "warning",
          title: "Missing Information",
          text: "Please complete all personal details.",
          confirmButtonColor: "#2563eb",
        });
        return;
      }
    }

    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "Account Created!",
      text: "Welcome to PharmaSafe 🎉",
      confirmButtonColor: "#2563eb",
    });

    console.log(formData);
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 transition-all duration-500">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">PharmaSafe</h1>
          <p className="text-gray-500 mt-2">
            Secure health account setup
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-sm text-gray-500 mt-2 text-right">
            Step {step} of {totalSteps}
          </p>
        </div>

        {/* Step Content */}
        <div className="min-h-[320px] transition-all duration-500 animate-fadeIn">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                <User size={20} />
                Account Information
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    updateField("firstName", e.target.value)
                  }
                  className="inputStyle"
                />

                <input
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    updateField("lastName", e.target.value)
                  }
                  className="inputStyle"
                />
              </div>

              <input
                placeholder="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                className="inputStyle w-full"
              />

              <input
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  updateField("password", e.target.value)
                }
                className="inputStyle w-full"
              />
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                <HeartPulse size={20} />
                Personal Information
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Age"
                  type="number"
                  value={formData.age}
                  onChange={(e) =>
                    updateField("age", e.target.value)
                  }
                  className="inputStyle"
                />

                <select
                  value={formData.gender}
                  onChange={(e) =>
                    updateField("gender", e.target.value)
                  }
                  className="inputStyle"
                >
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>

                <input
                  placeholder="Weight (kg)"
                  type="number"
                  value={formData.weight}
                  onChange={(e) =>
                    updateField("weight", e.target.value)
                  }
                  className="inputStyle"
                />

                <input
                  placeholder="Height (cm)"
                  type="number"
                  value={formData.height}
                  onChange={(e) =>
                    updateField("height", e.target.value)
                  }
                  className="inputStyle"
                />
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                <Shield size={20} />
                Health Preferences
              </div>

              <textarea
                placeholder="Known allergies or health notes (optional)"
                value={formData.allergies}
                onChange={(e) =>
                  updateField("allergies", e.target.value)
                }
                rows="5"
                className="inputStyle w-full resize-none"
              />

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <CheckCircle2 size={18} />
                  Ready to create your account
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  Your information helps PharmaSafe personalize
                  medication reminders and health tracking.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="px-5 py-3 rounded-xl border border-gray-300 text-gray-600 disabled:opacity-40"
          >
            Back
          </button>

          {step < totalSteps ? (
            <button
              onClick={nextStep}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
}