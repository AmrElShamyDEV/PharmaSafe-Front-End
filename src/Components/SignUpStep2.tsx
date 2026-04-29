import { useState } from "react";
import Swal from "sweetalert2";
import { LoaderCircle, Calendar } from "lucide-react";
export default function SignUpStep2(
  age: number,
  gender: string,
  weight: number,
  height: number,
  setAge: (age: number) => void,
  setGender: (gender: string) => void,
  setWeight: (weight: number) => void,
  setHeight: (height: number) => void,
  setStep: (step: number) => void,
): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!age || !gender || !weight || !height) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all the required fields",
        showConfirmButton: true,
      });
    }
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col items-center justify-center">
            <h2 className="text-blue-500 font-bold">
              Step 2 : Personal Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Age */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-blue-600">
                  Age
                </label>

                <div className="relative">
                  <Calendar
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"
                  />

                  <input
                    type="number"
                    placeholder="Enter your age"
                    value={age || ""}
                    onChange={(e) => setAge(Number(e.target.value))}

                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-blue-600">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"
                  />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {/* Confirm password */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-blue-600">
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"
                  />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => setStep(2)}
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <LoaderCircle className="animate-spin" size={20} />
                ) : (
                  "Step 2 : Personal Information"
                )}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  };
}
