import { Info, AlertTriangle, AlertOctagon, CheckCircle, Lightbulb } from "lucide-react";
import type { AlertType } from "@/data/types";

const CONFIG: Record<AlertType, { icon: React.ReactNode; label: string; classes: string }> = {
  info: {
    icon: <Info size={16} />,
    label: "Informação",
    classes: "bg-blue-50 border-blue-200 text-blue-900",
  },
  tip: {
    icon: <Lightbulb size={16} />,
    label: "Dica",
    classes: "bg-[#e8f5e9] border-[#3DDC84]/40 text-[#1b5e20]",
  },
  warning: {
    icon: <AlertTriangle size={16} />,
    label: "Atenção",
    classes: "bg-yellow-50 border-yellow-300 text-yellow-900",
  },
  danger: {
    icon: <AlertOctagon size={16} />,
    label: "Cuidado",
    classes: "bg-red-50 border-red-200 text-red-900",
  },
  success: {
    icon: <CheckCircle size={16} />,
    label: "Sucesso",
    classes: "bg-green-50 border-green-200 text-green-900",
  },
};

export default function AlertBox({ type, content }: { type: AlertType; content: string }) {
  const cfg = CONFIG[type];
  return (
    <div className={`flex gap-3 p-4 rounded-xl border my-3 ${cfg.classes}`}>
      <span className="flex-shrink-0 mt-0.5">{cfg.icon}</span>
      <div>
        <span className="font-semibold text-xs uppercase tracking-wide block mb-1 opacity-80">
          {cfg.label}
        </span>
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
