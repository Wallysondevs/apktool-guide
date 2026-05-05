import { Link } from "wouter";
import { BookOpen, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4f8] px-6">
      <div className="text-center">
        <div className="text-8xl font-black text-[#3DDC84] mb-4">404</div>
        <h1 className="text-2xl font-bold text-[#073042] mb-2">Capítulo não encontrado</h1>
        <p className="text-gray-500 mb-8">
          O capítulo que você procura não existe ou foi movido.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#073042] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0d47a1] transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
