import { Link, useLocation } from "wouter";
import { useMemo, useState } from "react";
import { sections, chapterMap } from "@/data/chapters";
import * as Icons from "lucide-react";
import { ChevronDown, Search, X } from "lucide-react";

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [location] = useLocation();
  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    if (!query.trim()) return sections;
    const q = query.toLowerCase();
    return sections
      .map((s) => ({
        ...s,
        chapterSlugs: s.chapterSlugs.filter((slug) => {
          const c = chapterMap[slug];
          return c && (c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q));
        }),
      }))
      .filter((s) => s.chapterSlugs.length > 0);
  }, [query]);

  const diffColor: Record<string, string> = {
    iniciante: "bg-[#3DDC84]/20 text-[#1b5e20]",
    intermediario: "bg-blue-100 text-blue-800",
    avancado: "bg-orange-100 text-orange-800",
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`
          fixed lg:sticky lg:top-14 top-0 left-0 z-50 lg:z-10
          h-screen lg:h-[calc(100vh-3.5rem)]
          w-72 bg-white border-r border-gray-200
          flex flex-col
          overflow-y-auto sidebar-scroll
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <span className="font-bold text-[#073042]">Trilhas</span>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
            <X size={18} />
          </button>
        </div>

        <div className="p-3 border-b border-gray-100">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar capítulos..."
              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#3DDC84] focus:ring-1 focus:ring-[#3DDC84]/30 bg-gray-50"
            />
          </div>
        </div>

        <nav className="flex-1 py-2">
          {filtered.map((s) => {
            const Icon = (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[s.icon] ?? Icons.BookOpen;
            const isCollapsed = collapsed[s.id];
            return (
              <div key={s.id} className="mb-1">
                <button
                  onClick={() => setCollapsed((p) => ({ ...p, [s.id]: !p[s.id] }))}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#073042] hover:bg-[#3DDC84]/10 transition-colors group"
                >
                  <Icon size={15} className="text-[#3DDC84] flex-shrink-0" />
                  <span className="flex-1 text-left leading-tight">{s.label}</span>
                  <span className="text-xs text-gray-400 group-hover:text-gray-600">{s.chapterSlugs.length}</span>
                  <ChevronDown
                    size={14}
                    className={`text-gray-400 transition-transform ${isCollapsed ? "-rotate-90" : ""}`}
                  />
                </button>

                {!isCollapsed && (
                  <ul className="ml-4 border-l-2 border-[#3DDC84]/20 pl-3 pb-1">
                    {s.chapterSlugs.map((slug) => {
                      const c = chapterMap[slug];
                      if (!c) return null;
                      const active = location === `/c/${slug}`;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/c/${slug}`}
                            onClick={onClose}
                            className={`
                              flex items-start gap-2 px-2 py-1.5 rounded-md text-sm transition-colors my-0.5
                              ${active
                                ? "bg-[#3DDC84] text-[#073042] font-semibold"
                                : "text-gray-600 hover:bg-gray-100 hover:text-[#073042]"
                              }
                            `}
                          >
                            <span className="flex-1 leading-tight">{c.title}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${diffColor[c.difficulty] ?? ""}`}>
                              {c.difficulty === "iniciante" ? "ini" : c.difficulty === "intermediario" ? "int" : "adv"}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-3 border-t border-gray-100 text-center text-xs text-gray-400">
          {Object.keys(chapterMap).length} capítulos · 12 trilhas
        </div>
      </aside>
    </>
  );
}
