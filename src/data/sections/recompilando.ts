import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "comando-build",
    section: "recompilando",
    title: "O Comando Build (apktool b)",
    difficulty: "intermediario",
    subtitle: "A arte de reconstruir o APK a partir dos pedaços",
    intro: "A etapa de build é o \"momento da verdade\" em qualquer processo de engenharia reversa. Após desmontar o relógio e trocar as engrenagens, você precisa montá-lo de volta para que ele volte a marcar o tempo. No ApkTool, o comando 'apktool b' (build) realiza essa tarefa titânica. Ele não é apenas um empacotador de arquivos; ele é um orquestrador de processos complexos que coordena diversas ferramentas internas para transformar aquela pasta cheia de arquivos legíveis de volta em um pacote binário funcional que o Android consegue interpretar e executar.\n\nPense assim: quando você compra um carro zero na concessionária, ele vem montado, lacrado e pronto para rodar. Se você levar esse carro a uma oficina mecânica no interior do Brasil, desmontar o motor peça por peça para fazer um preparado, trocar o comando de válvulas e ajustar a injeção, no final do serviço o mecânico precisa remontar tudo com precisão milimétrica. Se uma única junta estiver mal encaixada, o motor não liga — ou pior, liga e funde em cinco minutos. O comando 'apktool b' é exatamente esse mecânico remontando o motor: ele precisa que cada peça esteja no lugar certo, com a especificação correta, para que o resultado final funcione perfeitamente.\n\nInternamente, o ApkTool utiliza ferramentas do Android SDK, principalmente o AAPT2 (Android Asset Packaging Tool), para compilar todos aqueles arquivos XML legíveis que editamos de volta para o formato binário denso que o Android entende. Ele também pega os arquivos '.smali' e os converte novamente em arquivos 'classes.dex'. Imagine que você está traduzindo um livro: o 'build' é o processo de pegar as páginas soltas, encaderná-las e colocar a capa. Se você esqueceu uma vírgula na sintaxe do XML ou se há uma referência cruzada quebrada, o processo falhará, protegendo o sistema de gerar um app que crasharia instantaneamente.\n\nÉ importante entender que o build não é um processo \"burro\" de simplesmente zipar arquivos. Ele realiza validações, converte formatos, gera tabelas de referência e organiza a estrutura interna do APK seguindo as especificações rigorosas do formato Android. Cada recurso recebe um identificador numérico único no arquivo resources.arsc, cada classe Smali é verificada quanto à sua estrutura sintática antes de ser convertida em bytecode Dalvik, e o manifesto é validado para garantir que todas as atividades, serviços e permissões declaradas fazem sentido dentro do contexto do aplicativo. É como montar um quebra-cabeça de mil peças onde cada peça tem um encaixe único — se você forçar uma peça no lugar errado, a imagem final fica distorcida. Dominar o build é entender como as peças se encaixam sob o capô do ecossistema Android, e é o primeiro passo para transformar suas modificações em algo que realmente roda no celular.",
    codes: [
      {
        lang: "bash",
        code: "# Comando básico: reconstrói a pasta e gera o APK na subpasta 'dist'\napktool b minha_pasta_modificada\n# O resultado será: minha_pasta_modificada/dist/minha_pasta_modificada.apk"
      },
      {
        lang: "bash",
        code: "# Definindo o nome do arquivo de saída explicitamente\napktool b pasta_app -o novo_app.apk"
      },
      {
        lang: "bash",
        code: "# Forçando o uso do AAPT2 (recomendado para apps modernos)\napktool b --use-aapt2 pasta_app"
      },
      {
        lang: "bash",
        code: "# Anatomia interna simplificada do processo:\n# 1. Compilação de Recursos (XML -> Binary XML)\n# 2. Geração do resources.arsc (Tabela de IDs)\n# 3. Compilação Smali (Smali -> DEX)\n# 4. Empacotamento ZIP (O arquivo .apk final)"
      },
      {
        lang: "bash",
        code: "# Verificando logs de erro (a parte mais importante)\napktool -v b pasta_app > build_log.txt\n# O parâmetro -v (verbose) mostra cada passo detalhadamente"
      },
      {
        lang: "bash",
        code: "# Recompilando apenas os arquivos modificados (Experimental)\n# O ApkTool tenta detectar mudanças, mas geralmente faz o build completo."
      },
      {
        lang: "bash",
        code: "# Recompilando com output verboso para diagnóstico\napktool b -v app_modificado/ 2>&1 | tee build.log\n# Salva o log completo para identificar erros"
      },
      {
        lang: "bash",
        code: "# Verificando se o APK foi gerado com sucesso\nls -lh app_modificado/dist/*.apk\n# O APK final fica na subpasta dist/"
      },
      {
        lang: "bash",
        code: "# Recompilando com flag de força (ignora erros menores)\napktool b --use-aapt2 app_modificado/\n# aapt2 é mais moderno e resolve alguns problemas de recursos"
      },
      {
        lang: "bash",
        code: "# Pipeline completo: build + zipalign + sign em uma linha\napktool b app/ && zipalign -v 4 app/dist/app.apk aligned.apk && apksigner sign --ks key.jks aligned.apk"
      }
    ],
    points: [
      "O comando 'b' é o atalho para 'build'.",
      "Lê as configurações do arquivo apktool.yml gerado na decompilação.",
      "Converte Smali em arquivos DEX usando o Smali/Baksmali internamente.",
      "Compila recursos XML (layouts, strings, menus) em formato binário.",
      "Gera o arquivo 'resources.arsc', que é o índice de todos os recursos.",
      "Utiliza o binário AAPT (ou AAPT2) para validar a estrutura do manifesto.",
      "O APK resultante é tecnicamente um arquivo ZIP compactado.",
      "Arquivos na pasta 'assets/' são copiados sem modificações.",
      "A pasta 'dist/' dentro do projeto é o local padrão de saída.",
      "Erros durante o build geralmente indicam falhas de sintaxe nos arquivos XML editados.",
      "O comando apktool b reconstrói o APK a partir da pasta decompilada.",
      "O APK gerado fica em pasta_decompilada/dist/ por padrão.",
      "Erros de build geralmente indicam XML malformado ou referências quebradas.",
      "O --use-aapt2 resolve muitos problemas com recursos de versões recentes do Android.",
      "Sempre faça build antes de assinar — a ordem é: build → zipalign → sign."
    ],
    alerts: [
      {
        type: "info",
        content: "O APK gerado pelo build ainda NÃO possui assinatura e não pode ser instalado no Android imediatamente."
      },
      {
        type: "danger",
        content: "Se o build travar em 'Copying unknown files...', verifique se você não deixou arquivos abertos em editores ou pastas protegidas."
      },
      {
        type: "tip",
        content: "Se você mudou apenas o Smali, o build será muito mais rápido do que se você mudou recursos XML complexos."
      },
      {
        type: "warning",
        content: "Apps que usam 'Split APKs' (App Bundles) exigem cuidados especiais e muitas vezes não podem ser reconstruídos como um único APK sem ferramentas extras."
      },
      {
        type: "success",
        content: "Se o APK aparece em dist/ sem erros no log, o build foi bem-sucedido!"
      },
      {
        type: "danger",
        content: "Nunca distribua um APK sem assinatura — ele não instalará em nenhum dispositivo Android."
      }
    ]
  },
  {
    slug: "flags-build",
    section: "recompilando",
    title: "Flags do Build",
    difficulty: "intermediario",
    subtitle: "Ajuste fino e solução de problemas na recompilação",
    intro: "No dia a dia do modding, raramente o comando padrão de build funciona para todos os cenários. Aplicativos modernos são complexos, utilizam bibliotecas de sistema personalizadas e técnicas de otimização agressivas. É aqui que entram as \"Flags\" (sinalizadores). Elas são como chaves de fenda de diferentes tamanhos: você as usa para ajustar o comportamento do ApkTool às necessidades específicas do projeto.\n\nPara usar uma analogia bem brasileira: imagine que você está consertando uma moto no quintal de casa. O motor é o mesmo, mas dependendo do modelo — se é uma CG 125 antiga ou uma CB 300 moderna — você precisa de ferramentas diferentes, torques diferentes e até peças de encaixe diferentes. As flags do ApkTool funcionam da mesma forma: o processo de build é o mesmo, mas dependendo da complexidade do app que você está reconstruindo, você precisa ativar ou desativar comportamentos específicos para que tudo se encaixe corretamente. Um app simples de calculadora pode ser reconstruído sem nenhuma flag extra, mas um app de banco com dezenas de bibliotecas nativas e recursos otimizados vai exigir que você conheça e aplique as flags certas.\n\nAntigamente, o ApkTool tinha dificuldades com apps que usavam recursos do Android 7.0 em diante. Com a flag '--use-aapt2', o ApkTool passou a utilizar o novo compilador de recursos do Google, resolvendo 90% dos erros de compilação de layout. Outra flag vital é a '-c' (copy original META-INF), usada por quem tenta manter a assinatura original (embora raramente funcione para instalação, é útil para análise). Entender essas flags não é apenas decorar comandos; é ter o conhecimento técnico para diagnosticar por que um app \"se recusa\" a ser reconstruído e saber qual alavanca puxar para resolver o impasse.\n\nPense nas flags como os temperos de uma receita de feijoada: o feijão preto é a base (o comando build), mas é o louro, o cominho, a pimenta e o alho que fazem a diferença entre uma feijoada sem graça e uma que faz a vizinhança inteira sentir o cheiro. Da mesma forma, saber combinar flags como '--use-aapt2', '-f' e '--no-crunch' é o que separa o modder iniciante que desiste no primeiro erro do profissional que sabe exatamente qual parâmetro passar para contornar qualquer falha. Cada flag resolve um problema específico, e conhecê-las é construir um arsenal de soluções que você vai usar repetidamente ao longo da sua jornada de engenharia reversa.",
    codes: [
      {
        lang: "bash",
        code: "# -o (Output): Define o nome e local do arquivo gerado\napktool b pasta -o mod_v1.apk"
      },
      {
        lang: "bash",
        code: "# -f (Force): Sobrescreve o APK de saída se ele já existir\napktool b pasta -f"
      },
      {
        lang: "bash",
        code: "# -d (Debug): Tenta gerar um APK com suporte a depuração no Smali\napktool b -d pasta"
      },
      {
        lang: "bash",
        code: "# --use-aapt2: Usa o compilador moderno (Solução para a maioria dos erros)\napktool b --use-aapt2 pasta"
      },
      {
        lang: "bash",
        code: "# -c (Copy Meta): Mantém a pasta META-INF original (Assinatura original)\napktool b -c pasta"
      },
      {
        lang: "bash",
        code: "# --no-crunch: Pula a otimização de imagens PNG (Acelera o build)\napktool b --no-crunch pasta"
      },
      {
        lang: "bash",
        code: "# Flag --use-aapt2 para compatibilidade com recursos modernos\napktool b --use-aapt2 app_modificado/\n# Resolve erros com adaptive icons e recursos do Android 12+"
      },
      {
        lang: "bash",
        code: "# Flag -c para copiar arquivos originais não modificados\napktool b -c app_modificado/\n# Mantém arquivos que não foram alterados no formato original"
      },
      {
        lang: "bash",
        code: "# Flag -f para forçar rebuild mesmo com warnings\napktool b -f app_modificado/\n# Ignora avisos e tenta compilar de qualquer forma"
      },
      {
        lang: "bash",
        code: "# Combinando flags para build otimizado\napktool b --use-aapt2 -f app_modificado/ 2>erros.log\ngrep -i 'error' erros.log || echo 'Build OK!'"
      }
    ],
    points: [
      "A flag '-o' é essencial para automação de scripts.",
      "'-f' evita que o build pare caso você já tenha uma versão antiga no local.",
      "Aapt2 é mais rigoroso com erros de XML, mas é o padrão atual da indústria.",
      "'-d' modifica o manifesto internamente para adicionar debuggable=true.",
      "'-c' é útil se você estiver apenas trocando assets e quiser manter metadados originais.",
      "--net-sec-conf: Permite injetar configurações de segurança de rede (em algumas versões do ApkTool).",
      "Muitas flags dependem da versão do Java instalada no sistema.",
      "O uso de flags de compressão pode afetar o tamanho final do APK significativamente.",
      "Flags de framework (-p) são usadas para apps que dependem de bibliotecas de fabricantes (Samsung, LG).",
      "Combinar flags (ex: -f -o --use-aapt2) é uma prática comum.",
      "O flag --use-aapt2 é essencial para apps que usam recursos do Android 9+.",
      "O flag -c copia arquivos não modificados diretamente, acelerando o build.",
      "O flag -f força o build mesmo quando há warnings não-fatais.",
      "Erros de 'resource not found' indicam IDs quebrados no public.xml.",
      "O log de build mostra exatamente qual arquivo causou o erro."
    ],
    alerts: [
      {
        type: "warning",
        content: "Usar a flag '-c' (copy-original) fará com que o app não possa ser instalado a menos que você o assine novamente, pois a integridade do ZIP mudou."
      },
      {
        type: "tip",
        content: "Sempre tente primeiro SEM flags. Se falhar, tente '--use-aapt2' como seu primeiro passo de diagnóstico."
      },
      {
        type: "info",
        content: "A flag '-d' pode adicionar informações extras no Smali (.line, .local) para facilitar o uso do depurador JDWP."
      },
      {
        type: "danger",
        content: "Algumas flags são incompatíveis entre si; leia atentamente a saída do terminal se o comando falhar imediatamente."
      },
      {
        type: "success",
        content: "Se --use-aapt2 resolve o erro, o problema era incompatibilidade com recursos modernos."
      },
      {
        type: "tip",
        content: "Quando o build falha, leia a ÚLTIMA linha de erro — geralmente indica o arquivo problemático."
      }
    ]
  },
  {
    slug: "o-que-e-zipalign",
    section: "recompilando",
    title: "O Que é Zipalign?",
    difficulty: "intermediario",
    subtitle: "Otimização de memória e performance do aplicativo",
    intro: "O Zipalign é uma daquelas ferramentas de \"bastidores\" que muitos modders ignoram, mas que é fundamental para a saúde do ecossistema Android. Para entender o porquê dele existir, imagine que você está lendo um livro: se o índice estiver perfeitamente alinhado com as páginas, você encontra o que precisa em segundos. Se estiver tudo bagunçado, você perde tempo folheando.\n\nPara trazer isso para uma realidade mais brasileira: pense em um supermercado bem organizado, daqueles grandes como o Atacadão ou o Assaí. Quando os produtos estão perfeitamente alinhados nas prateleiras, com cada categoria no corredor certo e cada item no lugar esperado, você entra, pega o que precisa e sai rapidamente. Agora imagine esse mesmo supermercado depois de um dia de Black Friday, com produtos jogados em qualquer lugar, caixas fora de posição e corredores bloqueados. Você vai gastar o triplo do tempo para encontrar qualquer coisa. O Zipalign faz exatamente isso com os dados dentro do APK: ele organiza cada recurso em posições previsíveis e otimizadas para que o sistema operacional Android consiga acessá-los com o mínimo de esforço possível.\n\nTecnicamente, o Zipalign alinha todos os arquivos não compactados dentro do APK (como imagens e recursos brutos) em limites de 4 bytes. Isso permite que o sistema operacional Android utilize o 'mmap' (memory mapping) para ler os recursos diretamente do arquivo no armazenamento, sem precisar copiá-los para a memória RAM. Historicamente, quando os celulares tinham apenas 512MB de RAM, isso era a diferença entre o app rodar ou crashar. Hoje, com aparelhos potentes, o benefício é a economia de bateria e a rapidez na abertura (cold start).\n\nImagine que a memória do celular é como uma estante de livros. Sem o zipalign, o Android precisa pegar cada recurso do APK, copiá-lo para a estante (RAM) e só então consegue lê-lo. Com o zipalign, o Android consegue ler diretamente do arquivo no armazenamento, como se estivesse lendo um livro que já está aberto na página certa — sem precisar tirá-lo da prateleira. Essa economia pode parecer pequena para um único recurso, mas quando um app tem centenas de imagens, ícones e layouts, a diferença acumulada é significativa. Um APK não alinhado é considerado \"sujo\" pelo sistema e, em versões mais novas do Android, pode até ser recusado pela Google Play ou causar lentidões perceptíveis. Por isso, mesmo que seu mod funcione sem essa etapa, aplicar o zipalign é uma questão de qualidade e profissionalismo.",
    codes: [
      {
        lang: "bash",
        code: "# Alinhando um APK recém-criado\nzipalign -v 4 app_entrada.apk app_alinhado.apk\n# O '4' define o alinhamento de 32 bits (padrão Android)"
      },
      {
        lang: "bash",
        code: "# Verificando se um APK já está corretamente alinhado\nzipalign -c -v 4 meu_app.apk"
      },
      {
        lang: "bash",
        code: "# Anatomia da saída bem-sucedida:\n# 50325 (OK)   res/drawable/icon.png\n# O '(OK)' indica que o arquivo está alinhado no offset correto."
      },
      {
        lang: "bash",
        code: "# Localização comum no Windows (Android SDK):\n# C:\\Users\\Nome\\AppData\\Local\\Android\\Sdk\\build-tools\\30.0.3\\zipalign.exe"
      },
      {
        lang: "bash",
        code: "# No Linux (se instalado via apt):\n/usr/bin/zipalign -v 4 input.apk output.apk"
      },
      {
        lang: "bash",
        code: "# Dica: Zipalign deve ser feito ANTES da assinatura se usar apksigner,\n# ou DEPOIS se usar o antigo jarsigner."
      },
      {
        lang: "bash",
        code: "# Aplicando zipalign no APK gerado\nzipalign -v 4 app/dist/app.apk app_aligned.apk\n# O 4 indica alinhamento de 4 bytes (padrão obrigatório)"
      },
      {
        lang: "bash",
        code: "# Verificando se um APK já está alinhado\nzipalign -c -v 4 app.apk\n# Retorna 'Verification successful' se já estiver OK"
      },
      {
        lang: "bash",
        code: "# Zipalign com page alignment para Android 14+\nzipalign -p -v 4 input.apk output_aligned.apk\n# O -p ativa page alignment para libs .so"
      },
      {
        lang: "bash",
        code: "# Automatizando zipalign em script\n#!/bin/bash\nINPUT=$1\nOUTPUT=\"${INPUT%.apk}_aligned.apk\"\nzipalign -f 4 \"$INPUT\" \"$OUTPUT\" && echo \"Alinhado: $OUTPUT\""
      }
    ],
    points: [
      "Zipalign é uma ferramenta de otimização de arquivo ZIP.",
      "Alinha dados em limites de 4 bytes (32-bit alignment).",
      "Permite que o Android leia recursos via mmap(), economizando RAM.",
      "Reduz o consumo de bateria ao evitar operações de cópia desnecessárias.",
      "É um requisito obrigatório para publicação na Google Play Store.",
      "Deve ser executado em APKs que foram modificados manualmente.",
      "O comando '-c' apenas checa o alinhamento sem modificar o arquivo.",
      "O parâmetro '-v' (verbose) é útil para ver quais arquivos foram otimizados.",
      "Se você modificar o APK após o zipalign (ex: mudar um arquivo dentro do ZIP), o alinhamento é perdido.",
      "Ferramentas como o 'Uber APK Signer' automatizam essa etapa.",
      "Zipalign otimiza o acesso a dados não comprimidos dentro do APK.",
      "O alinhamento de 4 bytes permite mmap() eficiente pelo sistema Android.",
      "Deve ser executado ANTES da assinatura (apksigner) para não invalidá-la.",
      "APKs não alinhados funcionam mas consomem mais RAM e são mais lentos.",
      "O Android 14+ recomenda page alignment (-p) para bibliotecas nativas."
    ],
    alerts: [
      {
        type: "danger",
        content: "NUNCA faça o zipalign em um app que já foi assinado com V2/V3, pois isso quebrará a integridade da assinatura. Alinhe primeiro, assine depois."
      },
      {
        type: "info",
        content: "A maioria dos celulares modernos ainda exige o alinhamento de 4 bytes, embora o sistema seja 64 bits."
      },
      {
        type: "tip",
        content: "Se o seu APK modificado parece 'lento' para abrir imagens, verifique se você esqueceu o passo do zipalign."
      },
      {
        type: "warning",
        content: "O ApkTool possui uma flag interna para tentar fazer o zipalign, mas usar a ferramenta oficial do SDK é sempre mais confiável."
      },
      {
        type: "success",
        content: "Se zipalign -c retorna 'Verification successful', o APK está otimizado."
      },
      {
        type: "danger",
        content: "Executar zipalign DEPOIS do apksigner invalida a assinatura — a ordem importa!"
      }
    ]
  },
  {
    slug: "assinando-com-apksigner",
    section: "recompilando",
    title: "Assinando com apksigner",
    difficulty: "intermediario",
    subtitle: "A identidade digital e a segurança do seu APK",
    intro: "A assinatura de um APK é o selo de autenticidade que o sistema Android exige para qualquer instalação. Imagine que você está enviando uma carta importante: a assinatura no envelope garante que ninguém abriu ou alterou o conteúdo no caminho. No Android, isso é levado muito a sério. Como nós modificamos o APK, a assinatura original do desenvolvedor (ex: Google, Facebook) foi invalidada. Precisamos colocar o nosso próprio selo.\n\nPara entender melhor com uma analogia brasileira: pense no reconhecimento de firma em cartório. Quando você compra um carro usado e precisa transferir o documento, o DETRAN exige que a assinatura do vendedor no recibo seja reconhecida em cartório — isso prova que foi realmente aquela pessoa que assinou, e não alguém se passando por ela. No mundo Android, a assinatura digital do APK funciona como esse reconhecimento de firma: ela prova que o pacote não foi adulterado desde que o \"dono da chave\" o selou. Quando você modifica um APK, é como se estivesse alterando o contrato depois que ele foi assinado — a firma não bate mais, e o cartório (o Android) recusa o documento. Por isso, precisamos \"reconhecer firma\" novamente com a nossa própria identidade digital.\n\nHistoricamente, usávamos o 'jarsigner' (da JDK do Java), mas o Android evoluiu. Com o Android 7.0+, surgiu o esquema V2 (Whole File Signature), seguido pelo V3 e V4. O 'apksigner' é a ferramenta oficial do Android SDK que suporta todos esses esquemas. Ele não assina apenas arquivos individuais dentro do ZIP, mas o arquivo inteiro, tornando-o muito mais rápido de verificar pelo sistema e quase impossível de burlar sem quebrar a assinatura.\n\nA evolução dos esquemas de assinatura é como a evolução da segurança bancária no Brasil: antigamente bastava uma assinatura no cheque (V1), depois vieram os cartões com chip (V2), e hoje temos autenticação biométrica e tokens digitais (V3/V4). Cada geração é mais segura e mais difícil de falsificar. Se você assinar um app usando apenas V1 (esquema antigo), o Android pode até instalá-lo, mas ele será tratado como um app \"legado\" e terá restrições de segurança ou performance. É como tentar pagar com cheque em 2026 — tecnicamente possível, mas ninguém confia mais nisso. Dominar o apksigner é o passo final para tornar sua modificação \"instalável\" e garantir que o Android aceite seu APK sem reclamações, permitindo que ele rode com todas as permissões e otimizações que um app assinado corretamente merece.",
    codes: [
      {
        lang: "bash",
        code: "# Assinando com uma keystore existente\napksigner sign --ks minha_chave.jks app_alinhado.apk"
      },
      {
        lang: "bash",
        code: "# Verificando se a assinatura é válida e quais esquemas (V1, V2, V3) estão ativos\napksigner verify --verbose app_alinhado.apk"
      },
      {
        lang: "bash",
        code: "# Assinando e especificando o alias da chave (caso haja vários)\napksigner sign --ks minha_chave.jks --ks-key-alias meu_alias app.apk"
      },
      {
        lang: "bash",
        code: "# Localização do apksigner no Android SDK:\n# build-tools/30.0.3/lib/apksigner.jar"
      },
      {
        lang: "bash",
        code: "# Forçando o uso apenas de V1 e V2 para compatibilidade máxima\napksigner sign --v1-signing-enabled true --v2-signing-enabled true --ks chave.jks app.apk"
      },
      {
        lang: "bash",
        code: "# Verificando erro de certificado (comum em assinaturas expiradas)\napksigner verify --print-certs app.apk"
      },
      {
        lang: "bash",
        code: "# Assinando com apksigner (método moderno recomendado)\napksigner sign --ks minha_chave.jks --ks-pass pass:senha123 app_aligned.apk\n# Assina diretamente no arquivo (in-place)"
      },
      {
        lang: "bash",
        code: "# Verificando a assinatura de um APK\napksigner verify --verbose app_assinado.apk\n# Mostra esquema de assinatura (v1, v2, v3, v4)"
      },
      {
        lang: "bash",
        code: "# Assinando com esquemas específicos\napksigner sign --v1-signing-enabled true --v2-signing-enabled true --v3-signing-enabled true --ks key.jks app.apk\n# Garante compatibilidade com todas as versões do Android"
      },
      {
        lang: "bash",
        code: "# Verificando detalhes do certificado usado\napksigner verify --print-certs app.apk\n# Mostra CN, O, validade e fingerprint SHA-256"
      }
    ],
    points: [
      "Todo APK deve ser assinado para ser instalado no Android.",
      "O apksigner é a ferramenta moderna que substituiu o jarsigner.",
      "Esquema V1: Baseado em arquivos JAR (lento e menos seguro).",
      "Esquema V2/V3: Assina o binário inteiro do APK (rápido e seguro).",
      "Se você atualizar um app, ele deve ter a MESMA assinatura da versão anterior.",
      "A assinatura garante que o código não foi alterado após a selagem.",
      "Apps modificados exigem a desinstalação da versão original antes da instalação (conflito de chaves).",
      "O apksigner verifica se o arquivo foi 'zipaligned' corretamente antes de assinar.",
      "Você pode usar chaves auto-assinadas (self-signed) para mods.",
      "A ferramenta 'verify' é essencial para diagnosticar por que um APK não instala.",
      "O apksigner suporta esquemas v1 (JAR), v2 (APK Signature), v3 e v4.",
      "v2+ protege o APK inteiro contra modificação (não apenas os arquivos internos).",
      "Sem assinatura válida, o Android se recusa a instalar qualquer APK.",
      "A assinatura deve ser a ÚLTIMA etapa — qualquer modificação posterior a invalida.",
      "Use --verbose para confirmar que todos os esquemas foram aplicados."
    ],
    alerts: [
      {
        type: "danger",
        content: "NUNCA use o jarsigner para apps Android modernos (Android 7+). Use sempre o apksigner para garantir suporte aos esquemas V2 e V3."
      },
      {
        type: "tip",
        content: "Se você estiver usando o comando 'verify' e ele disser 'Verified: true', seu APK está pronto para o celular!"
      },
      {
        type: "warning",
        content: "Se você perder sua keystore, nunca mais poderá atualizar o mesmo mod mantendo os dados do usuário. Guarde-a bem."
      },
      {
        type: "info",
        content: "O erro [INSTALL_FAILED_UPDATE_INCOMPATIBLE] no ADB quase sempre significa que as assinaturas do app instalado e do novo app são diferentes."
      },
      {
        type: "success",
        content: "Se apksigner verify retorna sem erros, o APK está pronto para distribuição."
      },
      {
        type: "tip",
        content: "Use uber-apk-signer para automatizar zipalign + assinatura em um único comando."
      }
    ]
  },
  {
    slug: "criando-keystore",
    section: "recompilando",
    title: "Criando seu Próprio Keystore",
    difficulty: "intermediario",
    subtitle: "Sua identidade única como desenvolvedor/modder",
    intro: "Para assinar um aplicativo, você precisa de um \"certificado digital\", que é guardado dentro de um arquivo chamado Keystore. Pense na Keystore como um cofre e no certificado como um carimbo personalizado que só você possui. Quando você assina um app, você está dizendo ao Android: \"Eu, o dono desta chave, garanto que este código é meu\".\n\nPara usar uma analogia bem brasileira: a Keystore é como o seu CPF digital — é um documento único que te identifica no mundo dos aplicativos Android. Assim como você usa o CPF para abrir conta em banco, assinar contratos e comprovar sua identidade, a Keystore é usada para \"assinar\" seus APKs e provar que foi você quem os criou ou modificou. E assim como perder o CPF pode causar uma dor de cabeça enorme (imagine ter que refazer todos os cadastros da sua vida), perder a Keystore significa perder o controle sobre todos os apps que você já assinou com ela. Seus usuários não conseguirão mais atualizar o mod sem desinstalar e perder todos os dados salvos.\n\nA ferramenta usada para criar esse \"cofre\" é o 'keytool', que faz parte da JRE/JDK do Java. No Brasil, temos o hábito de usar chaves genéricas de tutoriais do YouTube, copiando e colando comandos sem entender o que cada parâmetro faz. Mas criar a sua própria Keystore personalizada é um passo importante para o profissionalismo e para a segurança dos seus projetos. Você pode definir o nome da sua \"organização\", sua validade (geralmente colocamos 25-30 anos para evitar problemas) e, o mais importante, uma senha forte que proteja sua identidade digital.\n\nPense no processo de criação como tirar um documento no cartório: você preenche seus dados pessoais (nome, organização, localidade, país), escolhe uma senha forte (como a senha do cofre de um banco) e recebe um arquivo que representa sua identidade digital. Esse arquivo é precioso — ele é a prova de que você é você no universo Android. Historicamente, se um desenvolvedor perdesse sua Keystore, ele perdia o controle total sobre as atualizações do seu app na Play Store, precisando publicar um app completamente novo. Para nós, modders, ter uma Keystore consistente permite que nossos usuários atualizem nossos mods sem precisar desinstalar e perder suas configurações a cada nova versão lançada. É a diferença entre um modder amador que distribui APKs descartáveis e um profissional que mantém uma base de usuários fiel e satisfeita.",
    codes: [
      {
        lang: "bash",
        code: "# Gerando uma Keystore JKS (Java Key Store) básica\nkeytool -genkey -v -keystore minha_chave.jks -keyalg RSA -keysize 2048 -validity 10000 -alias meu_mod"
      },
      {
        lang: "bash",
        code: "# Listando o conteúdo de uma Keystore para ver os certificados\nkeytool -list -v -keystore minha_chave.jks"
      },
      {
        lang: "bash",
        code: "# Mudando a senha de uma Keystore existente\nkeytool -storepasswd -keystore minha_chave.jks"
      },
      {
        lang: "bash",
        code: "# Exportando um certificado público (útil para ver o hash SHA-256)\nkeytool -export -alias meu_mod -file certificado.cer -keystore minha_chave.jks"
      },
      {
        lang: "bash",
        code: "# Criando uma chave no formato PKCS12 (padrão moderno recomendado)\nkeytool -genkeypair -alias mod_alias -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore chave.p12 -validity 10000"
      },
      {
        lang: "bash",
        code: "# Campos solicitados durante a criação:\n# CN: Seu nome ou apelido\n# OU: Unidade Organizacional (ex: Mods)\n# O: Organização (ex: Comunidade ApkTool)\n# L: Localidade (ex: São Paulo)\n# ST: Estado (ex: SP)\n# C: Código do País (ex: BR)"
      },
      {
        lang: "bash",
        code: "# Criando keystore com keytool (interativo)\nkeytool -genkey -v -keystore meu_mod.jks -keyalg RSA -keysize 2048 -validity 10000 -alias mod_key"
      },
      {
        lang: "bash",
        code: "# Criando keystore não-interativo (para scripts)\nkeytool -genkey -v -keystore auto.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key \\\n  -dname \"CN=Modder,O=MyMods,L=SP,ST=SP,C=BR\" -storepass senha123 -keypass senha123"
      },
      {
        lang: "bash",
        code: "# Listando informações de uma keystore existente\nkeytool -list -v -keystore meu_mod.jks\n# Mostra alias, validade, algoritmo e fingerprint"
      },
      {
        lang: "bash",
        code: "# Exportando o certificado público (para compartilhar)\nkeytool -exportcert -keystore meu_mod.jks -alias mod_key -file cert.pem\n# Outros podem verificar se um APK foi assinado por você"
      }
    ],
    points: [
      "Keytool é a ferramenta padrão do Java para gerenciar chaves.",
      "RSA é o algoritmo de criptografia mais comum e seguro para assinaturas Android.",
      "O tamanho da chave deve ser de pelo menos 2048 bits.",
      "A validade de 10.000 dias garante que a chave não expire tão cedo.",
      "O formato PKCS12 é o sucessor moderno do antigo JKS.",
      "Uma Keystore pode conter múltiplas chaves (aliases) diferentes.",
      "A senha da Keystore e a senha da chave individual podem ser diferentes (mas geralmente usamos a mesma para facilitar).",
      "Nunca compartilhe sua Keystore privada (.jks ou .p12) com ninguém.",
      "O alias é o nome amigável usado para referenciar a chave dentro do comando apksigner.",
      "Perder a senha da Keystore significa perder o acesso às chaves dentro dela.",
      "A keystore é seu 'CPF digital' — identifica você como autor do mod.",
      "Validade de 10000 dias (~27 anos) evita problemas de expiração.",
      "RSA 2048 bits é o mínimo recomendado; 4096 é mais seguro mas mais lento.",
      "Perder a keystore significa perder o controle sobre atualizações do mod.",
      "Faça backup da keystore em local seguro (pendrive, nuvem criptografada)."
    ],
    alerts: [
      {
        type: "warning",
        content: "Algumas ferramentas de assinatura automáticas usam senhas padrão como 'android' ou 'password'. Evite-as se quiser segurança real."
      },
      {
        type: "tip",
        content: "Faça backup da sua Keystore em um serviço de nuvem seguro. Se você trocar de computador, precisará dela para continuar seus projetos."
      },
      {
        type: "info",
        content: "O Android exige que o certificado tenha uma validade que termine após 22 de outubro de 2033."
      },
      {
        type: "danger",
        content: "Se você usar caracteres especiais brasileiros (como ç, á, õ) nos campos da Keystore, algumas ferramentas antigas podem se confundir com o encoding."
      },
      {
        type: "success",
        content: "Se keytool -list mostra seu alias e validade, a keystore foi criada corretamente."
      },
      {
        type: "danger",
        content: "NUNCA compartilhe sua keystore ou senha — quem tiver pode assinar APKs em seu nome."
      }
    ]
  },
  {
    slug: "instalando-apos-recompilar",
    section: "recompilando",
    title: "O Fluxo Completo: Build → Align → Sign → Install",
    difficulty: "intermediario",
    subtitle: "Automatizando o processo de teste do seu mod",
    intro: "Chegamos ao ápice do fluxo de trabalho. Você modificou o código, reconstruiu o binário e agora precisa ver se ele realmente funciona no mundo real. Fazer cada etapa manualmente (ApkTool -> Zipalign -> Apksigner -> ADB Install) é tedioso e propenso a erros. Um modder eficiente cria automações. Imagine que você é um chef: você não quer apenas cozinhar, você quer uma linha de montagem que entregue o prato quente e perfeito todas as vezes.\n\nPara trazer isso para o contexto brasileiro: pense em uma padaria de bairro que faz pão francês todo dia de madrugada. O padeiro não fica pensando \"primeiro eu misturo a farinha, depois eu adiciono o fermento, depois eu sovo, depois eu deixo descansar...\" — ele já tem o processo inteiro automatizado na cabeça e nas mãos, como uma coreografia. Cada etapa acontece no momento certo, na ordem certa, sem hesitação. É exatamente isso que queremos alcançar com nosso fluxo de modding: um script que executa build, alinhamento, assinatura e instalação em sequência, sem que você precise digitar quatro comandos separados e lembrar a ordem correta toda vez. Assim como o padeiro que erra a ordem dos ingredientes acaba com uma massa solada, o modder que assina antes de alinhar (no esquema V2) acaba com um APK que o Android recusa instalar.\n\nNeste capítulo, vamos consolidar tudo o que aprendemos em um fluxo lógico e um script de automação. Vamos entender por que a ordem dos fatores altera o produto (por exemplo, assinar antes de alinhar quebra a assinatura V2). Também vamos abordar os problemas comuns de instalação, como o famigerado 'INSTALL_FAILED_DEXOPT', que acontece quando o sistema tenta otimizar seu Smali mal escrito e falha miseravelmente.\n\nEste é o momento em que a teoria se torna prática: você verá seu APK personalizado saindo do computador e ganhando vida na tela do seu celular. É como assistir ao foguete decolar depois de meses projetando cada peça — a satisfação de ver o app modificado abrindo sem crashes, com suas alterações funcionando perfeitamente, é o que faz todo o esforço de aprender Smali, entender o manifesto e dominar as ferramentas valer a pena. A partir daqui, você tem um pipeline completo e repetível que transforma qualquer ideia de modificação em um APK instalável em questão de segundos, elevando seu trabalho do nível amador para o profissional.",
    codes: [
      {
        lang: "bash",
        code: "#!/bin/bash\n# Script de automação completo (ModFlow.sh)\nAPP_NAME=\"meu_app\"\n\necho \"[1/4] Recompilando...\"\napktool b $APP_NAME -o build/unsigned.apk\n\necho \"[2/4] Alinhando...\"\nzipalign -f -v 4 build/unsigned.apk build/aligned.apk\n\necho \"[3/4] Assinando...\"\napksigner sign --ks minha_chave.jks --out build/final.apk build/aligned.apk\n\necho \"[4/4] Instalando...\"\nadb install -r build/final.apk"
      },
      {
        lang: "bash",
        code: "# Troubleshooting: Erro de assinatura incompatível\nadb uninstall com.exemplo.app && adb install build/final.apk"
      },
      {
        lang: "bash",
        code: "# Verificando logs em tempo real durante a primeira abertura do app\nadb logcat *:E | grep AndroidRuntime"
      },
      {
        lang: "bash",
        code: "# Comandos para quem usa Windows (PowerShell)\n& apktool b pasta -o unsig.apk; & zipalign -v 4 unsig.apk ali.apk; & apksigner sign --ks c.jks ali.apk"
      },
      {
        lang: "bash",
        code: "# Limpando arquivos temporários após o sucesso\nrm build/unsigned.apk build/aligned.apk"
      },
      {
        lang: "bash",
        code: "# Instalando em múltiplos dispositivos simultaneamente\nadb devices | grep -v 'List' | awk '{print $1}' | xargs -I {} adb -s {} install -r final.apk"
      },
      {
        lang: "bash",
        code: "# Instalando o APK assinado via ADB\nadb install -r app_assinado.apk\n# O -r permite reinstalar sobre versão anterior"
      },
      {
        lang: "bash",
        code: "# Instalando com downgrade permitido\nadb install -r -d app_assinado.apk\n# O -d permite instalar versão menor que a atual"
      },
      {
        lang: "bash",
        code: "# Desinstalando versão anterior antes de instalar mod\nadb uninstall com.exemplo.app\nadb install app_assinado.apk\n# Necessário quando a assinatura é diferente da original"
      },
      {
        lang: "bash",
        code: "# Verificando se a instalação foi bem-sucedida\nadb shell pm list packages | grep com.exemplo\nadb shell am start -n com.exemplo.app/.MainActivity\n# Lista o pacote e tenta abrir o app"
      }
    ],
    points: [
      "A ordem correta para assinaturas V2/V3 é Build -> Align -> Sign.",
      "Para a antiga assinatura V1 (jarsigner), a ordem era Build -> Sign -> Align.",
      "O comando 'adb install -r' tenta reinstalar mantendo os dados, mas falha se as assinaturas forem diferentes.",
      "Sempre limpe a pasta 'build/' ou 'dist/' antes de começar um novo processo para evitar confusão.",
      "Scripts Bash ou Batch (Windows) economizam horas de trabalho repetitivo.",
      "Se o app travar ao abrir, o Logcat é seu único amigo para descobrir o erro no Smali.",
      "O erro 'INSTALL_FAILED_INVALID_APK' geralmente indica falha no passo de alinhamento ou ZIP corrompido.",
      "Desinstalar a versão original é obrigatório se você não tiver a chave privada do desenvolvedor original.",
      "O modo de Depuração USB deve estar sempre ativo no celular.",
      "Parabéns! Você completou o ciclo básico da engenharia reversa de APKs.",
      "O flag -r (replace) permite atualizar sem desinstalar dados do usuário.",
      "Assinaturas diferentes exigem desinstalação completa antes de reinstalar.",
      "O flag -d permite downgrade (instalar versão mais antiga).",
      "Use adb shell am start para testar se o app abre após instalação.",
      "Verifique o logcat imediatamente após instalar para detectar crashes."
    ],
    alerts: [
      {
        type: "success",
        content: "Se você automatizou este processo, você agora tem um ambiente de desenvolvimento de mods profissional!"
      },
      {
        type: "danger",
        content: "Cuidado com o 'Reinstall': Se você mudar o nome do pacote (Package Name) no manifesto, o Android tratará como um app novo e não atualizará o antigo."
      },
      {
        type: "tip",
        content: "Use o comando 'adb shell am start -n com.pacote/.MainActivity' para abrir o app automaticamente após a instalação pelo script."
      },
      {
        type: "info",
        content: "Se estiver usando emuladores (como BlueStacks ou LDPlayer), certifique-se de habilitar a ponte ADB nas configurações do emulador."
      },
      {
        type: "success",
        content: "Se o app abre normalmente após adb install, todo o pipeline (build→align→sign→install) está correto!"
      },
      {
        type: "danger",
        content: "Se aparecer 'INSTALL_FAILED_UPDATE_INCOMPATIBLE', desinstale a versão anterior primeiro."
      }
    ]
  }
];
