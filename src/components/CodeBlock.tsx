import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

const LANG_LABELS: Record<string, string> = {
  bash: "Terminal",
  shell: "Terminal",
  smali: "Smali",
  xml: "XML",
  java: "Java",
  kotlin: "Kotlin",
  python: "Python",
  yaml: "YAML",
  json: "JSON",
  toml: "TOML",
  text: "Texto",
};

const LANG_COLORS: Record<string, string> = {
  bash: "bg-[#073042] border-[#3DDC84]/30",
  shell: "bg-[#073042] border-[#3DDC84]/30",
  smali: "bg-[#1a0a2e] border-purple-500/30",
  xml: "bg-[#0d1f2d] border-blue-400/30",
  java: "bg-[#1a1a00] border-yellow-400/30",
  kotlin: "bg-[#1a0a1a] border-pink-400/30",
};

export default function CodeBlock({ lang, code }: { lang: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bgClass = LANG_COLORS[lang] ?? "bg-[#0f172a] border-gray-700/50";
  const label = LANG_LABELS[lang] ?? lang.toUpperCase();

  return (
    <div className={`rounded-xl border overflow-hidden my-4 shadow-md ${bgClass}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Terminal size={13} className="text-[#3DDC84]" />
          <span className="text-xs font-mono font-semibold text-[#3DDC84]/80 uppercase tracking-wider">
            {label}
          </span>
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-white/10"
        >
          {copied ? <Check size={13} className="text-[#3DDC84]" /> : <Copy size={13} />}
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="text-gray-100 font-mono">{code}</code>
      </pre>
    </div>
  );
}
