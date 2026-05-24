import { HeartPulse } from "lucide-react";

interface Props {
  formData: { age: string; gender: string; weight: string; height: string };
  updateField: (field: string, value: string) => void;
}

export default function StepPersonalInfo({ formData, updateField }: Props) {
  return (
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
          onChange={(e) => updateField("age", e.target.value)}
          className="inputStyle"
        />

        <select
          value={formData.gender}
          onChange={(e) => updateField("gender", e.target.value)}
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
          onChange={(e) => updateField("weight", e.target.value)}
          className="inputStyle"
        />

        <input
          placeholder="Height (cm)"
          type="number"
          value={formData.height}
          onChange={(e) => updateField("height", e.target.value)}
          className="inputStyle"
        />
      </div>
    </div>
  );
}