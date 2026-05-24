import { User } from "lucide-react";

interface Props {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  updateField: (field: string, value: string) => void;
}

export default function StepAccountInfo({ formData, updateField }: Props) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
        <User size={20} />
        Account Information
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => updateField("firstName", e.target.value)}
          className="inputStyle"
        />
        <input
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => updateField("lastName", e.target.value)}
          className="inputStyle"
        />
      </div>

      <input
        placeholder="Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => updateField("email", e.target.value)}
        className="inputStyle w-full"
      />

      <input
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={(e) => updateField("password", e.target.value)}
        className="inputStyle w-full"
      />
    </div>
  );
}
