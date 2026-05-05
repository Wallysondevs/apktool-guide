import { useRoute, Link } from "wouter";
import { chapterMap, chapters, chapterIndex, sections } from "@/data/chapters";
import PageContainer from "@/components/PageContainer";
import CodeBlock from "@/components/CodeBlock";
import AlertBox from "@/components/AlertBox";
import NotFound from "./NotFound";
import { ArrowLeft, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const diffLabel: Record<string, { label: string; classes: string }> = {
  iniciante: { label: "Iniciante", classes: "bg-[#3DDC84]/20 text-[#1b5e20] border-[#3DDC84]/30" },
  intermediario: { label: "Intermediário", classes: "bg-blue-100 text-blue-800 border-blue-200" },
  avancado: { label: "Avançado", classes: "bg-orange-100 text-orange-800 border-orange-200" },
};

export default function ChapterPage() {
  const [, params] = useRoute("/c/:slug");
  const slug = params?.slug ?? "";
  const ch = chapterMap[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!ch) return <NotFound />;

  const idx = chapterIndex(slug);
  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;
  const sec = sections.find((s) => s.id === ch.section);
  const diff = diffLabel[ch.difficulty] ?? diffLabel.iniciante;

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-[#3DDC84] transition-colors flex items-center gap-1">
            <BookOpen size={13} />
            Início
          </Link>
          <span>›</span>
          {sec && <span className="text-gray-500">{sec.label}</span>}
          <span>›</span>
          <span className="text-gray-600 font-medium truncate">{ch.title}</span>
        </div>

        {/* Chapter header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${diff.classes}`}>
              {diff.label}
            </span>
            <span className="text-xs text-gray-400">
              Capítulo {idx + 1} de {chapters.length}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#073042] mb-2 leading-tight">
            {ch.title}
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">{ch.subtitle}</p>
        </header>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progresso do livro</span>
            <span>{Math.round(((idx + 1) / chapters.length) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#3DDC84] rounded-full transition-all duration-500"
              style={{ width: `${((idx + 1) / chapters.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Intro */}
        <div className="prose-apk text-gray-700 text-base leading-relaxed mb-8 whitespace-pre-line">
          {ch.intro}
        </div>

        {/* Code examples */}
        {ch.codes.map((c, i) => (
          <CodeBlock key={i} lang={c.lang} code={c.code} />
        ))}

        {/* Key points */}
        {ch.points.length > 0 && (
          <div className="my-8 bg-[#f0faf4] border border-[#3DDC84]/30 rounded-xl p-5">
            <h2 className="flex items-center gap-2 font-bold text-[#073042] mb-4 text-lg">
              <CheckCircle2 size={18} className="text-[#3DDC84]" />
              Pontos-chave
            </h2>
            <ul className="space-y-2">
              {ch.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#3DDC84] font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Alerts */}
        {ch.alerts.map((a, i) => (
          <AlertBox key={i} type={a.type} content={a.content} />
        ))}

        {/* Navigation */}
        <nav className="flex justify-between gap-4 mt-10 pt-6 border-t border-gray-200">
          {prev ? (
            <Link
              href={`/c/${prev.slug}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:border-[#3DDC84] hover:bg-[#f0faf4] transition-all text-sm group max-w-[48%]"
            >
              <ArrowLeft size={16} className="text-gray-400 group-hover:text-[#3DDC84] flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-400 mb-0.5">Anterior</div>
                <div className="font-semibold text-[#073042] truncate">{prev.title}</div>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/c/${next.slug}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:border-[#3DDC84] hover:bg-[#f0faf4] transition-all text-sm group max-w-[48%] ml-auto"
            >
              <div className="text-right min-w-0">
                <div className="text-xs text-gray-400 mb-0.5">Próximo</div>
                <div className="font-semibold text-[#073042] truncate">{next.title}</div>
              </div>
              <ArrowRight size={16} className="text-gray-400 group-hover:text-[#3DDC84] flex-shrink-0" />
            </Link>
          ) : <div />}
        </nav>
      </motion.div>
    </PageContainer>
  );
}
