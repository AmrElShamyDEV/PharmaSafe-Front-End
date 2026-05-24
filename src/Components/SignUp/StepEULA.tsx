import { ScrollText } from "lucide-react";

interface Props {
  accepted: boolean;
  onAccept: (value: boolean) => void;
}

export default function StepEULA({ accepted, onAccept }: Props) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
        <ScrollText size={20} />
        Terms & Agreement
      </div>

      {/* Scrollable EULA box */}
      <div className="h-64 overflow-y-auto rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-600 space-y-3 leading-relaxed">
        <p className="font-semibold text-slate-800">End User License Agreement (EULA)</p>

        <p>Welcome to PharmaSafe. By creating an account, you agree to the following terms and conditions. Please read them carefully before proceeding.</p>

        <p><span className="font-medium text-slate-700">1. Acceptance of Terms.</span> By accessing or using PharmaSafe, you confirm that you are at least 18 years of age and agree to be bound by this agreement.</p>

        <p><span className="font-medium text-slate-700">2. Medical Disclaimer.</span> PharmaSafe is an informational tool and does not constitute medical advice. Always consult a qualified healthcare professional before making any medication decisions.</p>

        <p><span className="font-medium text-slate-700">3. Data Privacy.</span> Your personal and health data is encrypted and stored securely. We do not sell your data to third parties. For full details, refer to our Privacy Policy.</p>

        <p><span className="font-medium text-slate-700">4. Use of AI Features.</span> PharmaSafe uses AI to assist with drug interaction checks and alternatives. These results are not guaranteed to be 100% accurate and should be verified by a pharmacist or physician.</p>

        <p><span className="font-medium text-slate-700">5. Account Responsibility.</span> You are responsible for maintaining the confidentiality of your account credentials. PharmaSafe is not liable for unauthorized access resulting from your failure to secure your login details.</p>

        <p><span className="font-medium text-slate-700">6. Modifications.</span> PharmaSafe reserves the right to modify this agreement at any time. Continued use of the platform after changes constitutes acceptance of the new terms.</p>

        <p><span className="font-medium text-slate-700">7. Termination.</span> We reserve the right to suspend or terminate your account if you violate any terms outlined in this agreement.</p>

        <p className="text-slate-400 text-xs">Last updated: May 2026</p>
      </div>

      {/* Checkbox */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => onAccept(e.target.checked)}
          className="mt-1 w-4 h-4 accent-blue-600 cursor-pointer"
        />
        <span className="text-sm text-slate-600 group-hover:text-slate-800 transition">
          I have read and agree to the{" "}
          <span className="text-blue-600 font-medium">Terms & Conditions</span>{" "}
          and{" "}
          <span className="text-blue-600 font-medium">Privacy Policy</span>{" "}
          of PharmaSafe.
        </span>
      </label>
    </div>
  );
}