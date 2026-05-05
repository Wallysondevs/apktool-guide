import { Link } from "wouter";
import { sections, chapters, chapterMap } from "@/data/chapters";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, BookOpen, Shield, Smartphone } from "lucide-react";

const diffBadge: Record<string, string> = {
  iniciante: "bg-[#3DDC84]/20 text-[#1b5e20]",
  intermediario: "bg-blue-100 text-blue-700",
  avancado: "bg-orange-100 text-orange-700",
};

export default function Home() {
  return (
    <div className="min-h-full">
      {/* Hero */}
      <section className="bg-[#073042] text-white px-6 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 text-[#3DDC84] font-mono text-sm">apktool d app.apk</div>
          <div className="absolute top-12 right-12 text-[#3DDC84] font-mono text-sm">apktool b output/</div>
          <div className="absolute bottom-8 left-16 text-[#3DDC84] font-mono text-sm">adb install signed.apk</div>
          <div className="absolute bottom-14 right-8 text-[#3DDC84] font-mono text-sm">zipalign -p 4 app.apk</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 bg-[#3DDC84]/20 border border-[#3DDC84]/30 rounded-full px-4 py-1.5 text-[#3DDC84] text-sm font-medium mb-6">
            <Smartphone size={14} />
            Engenharia Reversa Android — Do Zero
          </div>

          <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            ApkTool:{" "}
            <span className="text-[#3DDC84]">Do Zero ao Avançado</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Um livro completo em português com{" "}
            <strong className="text-white">{chapters.length} capítulos</strong> práticos —
            do primeiro <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-sm">apktool d app.apk</code>{" "}
            até Smali, frameworks, CTFs e pesquisa de segurança.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/c/${chapters[0]?.slug ?? ""}`}
              className="inline-flex items-center gap-2 bg-[#3DDC84] text-[#073042] px-6 py-3 rounded-xl font-bold hover:bg-[#5AE69A] transition-colors shadow-lg"
            >
              Começar do início <ArrowRight size={16} />
            </Link>
            <Link
              href="/c/instalando-apktool-linux"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              <Shield size={16} />
              Instalar ApkTool
            </Link>
          </div>
        </motion.div>

        {/* Terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 max-w-xl mx-auto bg-black/40 rounded-xl border border-white/10 text-left text-sm font-mono overflow-hidden shadow-2xl"
        >
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="ml-2 text-gray-400 text-xs">Terminal</span>
          </div>
          <pre className="p-4 text-gray-200 leading-relaxed">{`$ apktool d MyApp.apk -o MyApp
I: Using Apktool 2.x.x ...
I: Decoding resources...
I: Baksmaling classes.dex...
I: Copying assets and libs...
I: Copying unknown files...

$ ls MyApp/
AndroidManifest.xml  assets/  lib/
apktool.yml          res/     smali/

$ apktool b MyApp -o MyApp-mod.apk
I: Checking whether resources has changed...
I: Building resources...
I: Building apk file...
I: Copying unknown files/dir...`}</pre>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-[#3DDC84] py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-[#073042]">
          <div className="text-center">
            <div className="text-2xl font-black">{sections.length}</div>
            <div className="text-sm font-medium opacity-80">trilhas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black">{chapters.length}</div>
            <div className="text-sm font-medium opacity-80">capítulos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black">100%</div>
            <div className="text-sm font-medium opacity-80">em português</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black">gratuito</div>
            <div className="text-sm font-medium opacity-80">e open source</div>
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-[#073042] mb-2">
          {sections.length} trilhas de aprendizado
        </h2>
        <p className="text-gray-500 mb-8">
          Do zero absoluto até casos práticos avançados. Siga em ordem ou pule para o que precisar.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s, i) => {
            const Icon = (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[s.icon] ?? BookOpen;
            const firstSlug = s.chapterSlugs[0];
            const firstCh = firstSlug ? chapterMap[firstSlug] : null;

            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link href={firstSlug ? `/c/${firstSlug}` : "/"}>
                  <div className="bg-white rounded-xl border border-gray-200 p-5 h-full hover:border-[#3DDC84] hover:shadow-md transition-all cursor-pointer group">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#073042] rounded-lg group-hover:bg-[#3DDC84] transition-colors">
                        <Icon size={16} className="text-[#3DDC84] group-hover:text-[#073042]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-[#073042] text-sm leading-tight group-hover:text-[#3DDC84] transition-colors">
                          {s.label}
                        </h3>
                        <span className="text-xs text-gray-400">{s.chapterSlugs.length} capítulos</span>
                      </div>
                    </div>

                    {firstCh && (
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        Começa com: <em>{firstCh.title}</em>
                      </p>
                    )}

                    <div className="mt-3 flex flex-wrap gap-1">
                      {s.chapterSlugs.slice(0, 3).map((slug) => {
                        const c = chapterMap[slug];
                        if (!c) return null;
                        return (
                          <span key={slug} className={`text-[10px] px-1.5 py-0.5 rounded-full ${diffBadge[c.difficulty] ?? ""}`}>
                            {c.difficulty}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-gray-400 border-t border-gray-200">
        Feito com ❤️ por{" "}
        <a href="https://github.com/Wallysondevs" target="_blank" rel="noopener noreferrer" className="text-[#3DDC84] hover:underline">
          @Wallysondevs
        </a>
        {" · "}
        Baseado no{" "}
        <a href="https://github.com/iBotPeaches/Apktool" target="_blank" rel="noopener noreferrer" className="text-[#3DDC84] hover:underline">
          ApkTool
        </a>
      </footer>
    </div>
  );
}
