import { Link } from "wouter";
import { Menu, Github, Smartphone } from "lucide-react";

export default function Header({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-50 bg-[#073042] text-white shadow-lg">
      <div className="flex items-center gap-3 px-4 h-14">
        <button
          onClick={onMenu}
          className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Abrir menu"
        >
          <Menu size={20} />
        </button>

        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-90 transition-opacity">
          <span className="bg-[#3DDC84] text-[#073042] rounded-md px-2 py-0.5 text-sm font-mono font-black tracking-tight">
            APK
          </span>
          <span className="hidden sm:block">ApkTool: Do Zero ao Avançado</span>
          <span className="sm:hidden">ApkTool</span>
        </Link>

        <div className="flex-1" />

        <a
          href="https://github.com/iBotPeaches/Apktool"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm hover:text-[#3DDC84] transition-colors px-3 py-1.5 rounded-md hover:bg-white/10"
        >
          <Github size={16} />
          <span className="hidden sm:block">ApkTool no GitHub</span>
        </a>

        <div className="flex items-center gap-1.5 text-xs bg-[#3DDC84]/20 text-[#3DDC84] px-3 py-1 rounded-full border border-[#3DDC84]/30">
          <Smartphone size={12} />
          <span>Android</span>
        </div>
      </div>
    </header>
  );
}
