// Aggregator — content lives in sections/*.ts (one file per trilha)
import type { Chapter, Section } from './types';
import { chapters as s0 } from './sections/boas-vindas';
import { chapters as s1 } from './sections/instalacao';
import { chapters as s2 } from './sections/anatomia-apk';
import { chapters as s3 } from './sections/decompilando';
import { chapters as s4 } from './sections/estrutura-saida';
import { chapters as s5 } from './sections/smali-basico';
import { chapters as s6 } from './sections/editando-recursos';
import { chapters as s7 } from './sections/recompilando';
import { chapters as s8 } from './sections/adb-workflow';
import { chapters as s9 } from './sections/frameworks';
import { chapters as s10 } from './sections/ferramentas-companion';
import { chapters as s11 } from './sections/casos-praticos';

export type { Chapter, Section, Difficulty, AlertType, CodeSample, AlertSpec } from './types';

export const sections: Section[] = [
  {
    id: "boas-vindas",
    icon: "BookOpen",
    label: "Boas-vindas e Introdução",
    chapterSlugs: [
      "bem-vindo-apktool",
      "o-que-e-engenharia-reversa",
      "etica-legalidade",
      "pre-requisitos-mentais",
      "ferramentas-que-precisamos",
    ],
  },
  {
    id: "instalacao",
    icon: "Download",
    label: "Instalação e Configuração",
    chapterSlugs: [
      "instalando-java",
      "verificando-java",
      "instalando-apktool-linux",
      "instalando-apktool-windows",
      "instalando-apktool-macos",
      "apktool-no-kali",
    ],
  },
  {
    id: "anatomia-apk",
    icon: "Package",
    label: "Anatomia de um APK",
    chapterSlugs: [
      "o-que-e-um-apk",
      "dentro-do-apk-zip",
      "o-que-e-dex",
      "resources-e-assets",
      "androidmanifest-xml",
      "como-android-carrega-app",
    ],
  },
  {
    id: "decompilando",
    icon: "Unlock",
    label: "Decompilando APKs",
    chapterSlugs: [
      "primeiro-decompile",
      "o-flag-d",
      "escolhendo-output",
      "flags-uteis-decode",
      "decode-sem-resources",
      "decode-sem-sources",
      "modo-verbose",
    ],
  },
  {
    id: "estrutura-saida",
    icon: "FolderOpen",
    label: "Estrutura da Saída",
    chapterSlugs: [
      "pasta-de-saida-overview",
      "entendendo-smali-folder",
      "entendendo-res-folder",
      "entendendo-assets-folder",
      "androidmanifest-decodificado",
      "apktool-yml-explicado",
    ],
  },
  {
    id: "smali-basico",
    icon: "Code2",
    label: "Smali: A Linguagem do Android",
    chapterSlugs: [
      "o-que-e-smali",
      "dalvik-vs-art",
      "registradores-smali",
      "tipos-em-smali",
      "metodos-smali",
      "instrucoes-basicas",
      "lendo-logcat-smali",
      "depurando-smali",
    ],
  },
  {
    id: "editando-recursos",
    icon: "Pencil",
    label: "Editando Recursos",
    chapterSlugs: [
      "editando-strings-xml",
      "adicionando-permissoes",
      "removendo-permissoes",
      "editando-layouts-xml",
      "trocando-icones",
      "modificando-manifest-debuggable",
      "network-security-config",
    ],
  },
  {
    id: "recompilando",
    icon: "Hammer",
    label: "Recompilando e Assinando",
    chapterSlugs: [
      "comando-build",
      "flags-build",
      "o-que-e-zipalign",
      "assinando-com-apksigner",
      "criando-keystore",
      "instalando-apos-recompilar",
    ],
  },
  {
    id: "adb-workflow",
    icon: "Terminal",
    label: "ADB: Ponte com o Dispositivo",
    chapterSlugs: [
      "o-que-e-adb",
      "instalando-adb",
      "conectando-dispositivo",
      "listando-pacotes-adb",
      "extraindo-apk-do-device",
      "instalando-apk-adb",
    ],
  },
  {
    id: "frameworks",
    icon: "Layers",
    label: "Gerenciamento de Frameworks",
    chapterSlugs: [
      "o-que-sao-frameworks-apktool",
      "quando-preciso-de-framework",
      "instalando-framework",
      "extraindo-framework-do-device",
      "atualizando-framework",
    ],
  },
  {
    id: "ferramentas-companion",
    icon: "Wrench",
    label: "Ferramentas Complementares",
    chapterSlugs: [
      "jadx-decompilador",
      "dex2jar-basico",
      "jd-gui-visualizando",
      "frida-instrumentacao",
      "apksigner-detalhes",
      "zipalign-detalhes",
      "baksmali-standalone",
    ],
  },
  {
    id: "casos-praticos",
    icon: "FlaskConical",
    label: "Casos Práticos e Avançados",
    chapterSlugs: [
      "workflow-completo-basico",
      "traduzindo-um-app",
      "ativando-modo-debug",
      "ctf-android-intro",
      "pesquisa-seguranca-etica",
      "automatizando-com-script",
      "erros-comuns-e-solucoes",
    ],
  },
];

export const chapters: Chapter[] = [
  ...s0, ...s1, ...s2, ...s3,
  ...s4, ...s5, ...s6, ...s7,
  ...s8, ...s9, ...s10, ...s11,
];

export const chapterMap: Record<string, Chapter> = Object.fromEntries(
  chapters.map((c) => [c.slug, c])
);

export function chapterIndex(slug: string): number {
  return chapters.findIndex((c) => c.slug === slug);
}
