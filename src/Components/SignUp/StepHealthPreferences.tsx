import { Shield, CheckCircle2 } from "lucide-react";

interface Props {
  formData: { allergies: string };
  updateField: (field: string, value: string) => void;
}

export default function StepHealthPreferences({ formData, updateField }: Props) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
        <Shield size={20} />
        Health Preferences
      </div>

      <textarea
        placeholder="Known allergies or health notes (optional)"
        value={formData.allergies}
        onChange={(e) => updateField("allergies", e.target.value)}
        rows={5}
        className="inputStyle w-full resize-none"
      />

      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <CheckCircle2 size={18} />
          Ready to create your account
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Your information helps PharmaSafe personalize medication reminders and health tracking.
        </p>
      </div>
    </div>
  );
}