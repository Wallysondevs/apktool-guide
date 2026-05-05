# ApkTool Book — Do Zero ao Avançado

Livro interativo sobre ApkTool e Engenharia Reversa Android, em português, para iniciantes absolutos até avançado.

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4**
- **Wouter** (hash routing)
- **Framer Motion**
- **Lucide React**

## Estrutura

```
src/
  data/
    sections/     # 12 seções, 76 capítulos
    chapters.ts   # agregador central
    types.ts      # tipos TypeScript
  pages/          # Home, Chapter, NotFound
  components/     # Header, Sidebar, CodeBlock, AlertBox...
```

## Instalação e Build

```bash
# Instalar dependências
npm install   # ou pnpm install

# Build para produção (ajuste BASE_PATH conforme seu domínio)
PORT=3000 BASE_PATH="/" npm run build

# Os arquivos finais ficam em dist/public/
```

## Conteúdo

12 seções cobrindo:
1. Boas-vindas e Introdução
2. Instalação e Configuração
3. Anatomia de um APK
4. Decompilando APKs
5. Estrutura da Saída
6. Smali Básico
7. Editando Recursos
8. Recompilando
9. ADB Workflow
10. Frameworks
11. Ferramentas Companion (JADX, Frida, dex2jar...)
12. Casos Práticos e CTFs
