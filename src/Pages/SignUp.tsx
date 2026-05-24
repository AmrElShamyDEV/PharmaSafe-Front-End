import { useState } from "react";
import Swal from "sweetalert2";
import StepAccountInfo from "../Components/SignUp/StepAccountInfo";
import StepPersonalInfo from "../Components/SignUp/StepPersonalInfo";
import StepHealthPreferences from "../Components/SignUp/StepHealthPreferences";
import StepEULA from "../Components/SignUp/StepEULA";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
  gender: string;
  weight: string;
  height: string;
  allergies: string;
  eulaAccepted: boolean;
}

const TOTAL_STEPS = 4;

const stepValidation: Record<number, (f: FormData) => boolean> = {
  1: (f) => !!(f.firstName && f.lastName && f.email && f.password),
  2: (f) => !!(f.age && f.gender && f.weight && f.height),
  4: (f) => f.eulaAccepted,
};

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    allergies: "",
    eulaAccepted: false,
  });

  const updateField = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const nextStep = () => {
    const validate = stepValidation[step];
    if (validate && !validate(formData)) {
      Swal.fire({
        icon: "warning",
        title: step === 4 ? "Agreement Required" : "Missing Information",
        text:
          step === 4
            ? "You must accept the terms and conditions to create an account."
            : "Please complete all fields before continuing.",
        confirmButtonColor: "#2563eb",
      });
      return;
    }
    setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "Account Created!",
      text: "Welcome to PharmaSafe 🎉",
      confirmButtonColor: "#2563eb",
    });
    console.log(formData);
  };

  const steps: Record<number, React.ReactNode> = {
    1: <StepAccountInfo formData={formData} updateField={updateField} />,
    2: <StepPersonalInfo formData={formData} updateField={updateField} />,
    3: <StepHealthPreferences formData={formData} updateField={updateField} />,
    4: (
      <StepEULA
        accepted={formData.eulaAccepted}
        onAccept={(value) => updateField("eulaAccepted", value)}
      />
    ),
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">PharmaSafe</h1>
          <p className="text-gray-500 mt-2">Secure health account setup</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-right">
            Step {step} of {TOTAL_STEPS}
          </p>
        </div>

        {/* Active Step */}
        <div className="min-h-[320px]">{steps[step]}</div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="px-5 py-3 rounded-xl border border-gray-300 text-gray-600 disabled:opacity-40"
          >
            Back
          </button>

          {step < TOTAL_STEPS ? (
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
