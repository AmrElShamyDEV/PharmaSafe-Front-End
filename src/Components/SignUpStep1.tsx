// During this step user's will enter their basic information such as name , email , and password
import { useState } from "react";
import Swal from "sweetalert2";
import { MailIcon, Lock, LoaderCircle, Notebook } from "lucide-react";
export default function SignUpStep1(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  setEmail: (email: string) => void,
  setPassword: (password: string) => void,
  setFirstName: (firstName: string) => void,
  setLastName: (lastName: string) => void,
  setStep: (step: number) => void,
): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!email || !password || !firstName || !lastName || !confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all the required fields",
        showConfirmButton: true,
      });
    }
    else if (password!==confirmPassword){
        Swal.fire({
            icon : "error",
            title : "Password Mismatch",
            text : "Please make sure your passwords match",
            showConfirmButton : true,
        })
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col items-center justify-center">
          <h2 className="text-blue-500 font-bold">
            Step 1 : Account information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full name*/}
            <div>
              <label className="block mb-2 text-sm font-semibold text-blue-600">
                Name
              </label>

              <div className="relative">
                <div className="flex gap-2 items-center justify-center">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-blue-600">
                Email
              </label>

              <div className="relative">
                <MailIcon
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
}
