import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "comando-build",
    section: "recompilando",
    title: "O Comando Build (apktool b)",
    difficulty: "intermediario",
    subtitle: "A arte de reconstruir o APK a partir dos pedaços",
    intro: `A etapa de build é o "momento da verdade" em qualquer processo de engenharia reversa. Após desmontar o relógio e trocar as engrenagens, você precisa montá-lo de volta para que ele volte a marcar o tempo. No ApkTool, o comando 'apktool b' (build) realiza essa tarefa titânica. Ele não é apenas um empacotador de arquivos; ele é um orquestrador de processos complexos. 

Internamente, o ApkTool utiliza ferramentas do Android SDK, principalmente o AAPT2 (Android Asset Packaging Tool), para compilar todos aqueles arquivos XML legíveis que editamos de volta para o formato binário denso que o Android entende. Ele também pega os arquivos '.smali' e os converte novamente em arquivos 'classes.dex'. Imagine que você está traduzindo um livro: o 'build' é o processo de pegar as páginas soltas, encaderná-las e colocar a capa. Se você esqueceu uma vírgula na sintaxe do XML ou se há uma referência cruzada quebrada, o processo falhará, protegendo o sistema de gerar um app que crasharia instantaneamente. Dominar o build é entender como as peças se encaixam sob o capô do ecossistema Android.`,
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
      "Erros durante o build geralmente indicam falhas de sintaxe nos arquivos XML editados."
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
      }
    ]
  },
  {
    slug: "flags-build",
    section: "recompilando",
    title: "Flags do Build",
    difficulty: "intermediario",
    subtitle: "Ajuste fino e solução de problemas na recompilação",
    intro: `No dia a dia do modding, raramente o comando padrão de build funciona para todos os cenários. Aplicativos modernos são complexos, utilizam bibliotecas de sistema personalizadas e técnicas de otimização agressivas. É aqui que entram as "Flags" (sinalizadores). Elas são como chaves de fenda de diferentes tamanhos: você as usa para ajustar o comportamento do ApkTool às necessidades específicas do projeto.

Antigamente, o ApkTool tinha dificuldades com apps que usavam recursos do Android 7.0 em diante. Com a flag '--use-aapt2', o ApkTool passou a utilizar o novo compilador de recursos do Google, resolvendo 90% dos erros de compilação de layout. Outra flag vital é a '-c' (copy original META-INF), usada por quem tenta manter a assinatura original (embora raramente funcione para instalação, é útil para análise). Entender essas flags não é apenas decorar comandos; é ter o conhecimento técnico para diagnosticar por que um app "se recusa" a ser reconstruído e saber qual alavanca puxar para resolver o impasse. É a diferença entre um iniciante que desiste no primeiro erro e um profissional que sabe exatamente qual parâmetro passar para contornar a falha.`,
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
      "Combinar flags (ex: -f -o --use-aapt2) é uma prática comum."
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
      }
    ]
  },
  {
    slug: "o-que-e-zipalign",
    section: "recompilando",
    title: "O Que é Zipalign?",
    difficulty: "intermediario",
    subtitle: "Otimização de memória e performance do aplicativo",
    intro: `O Zipalign é uma daquelas ferramentas de "bastidores" que muitos modders ignoram, mas que é fundamental para a saúde do ecossistema Android. Para entender o porquê dele existir, imagine que você está lendo um livro: se o índice estiver perfeitamente alinhado com as páginas, você encontra o que precisa em segundos. Se estiver tudo bagunçado, você perde tempo folheando. 

Tecnicamente, o Zipalign alinha todos os arquivos não compactados dentro do APK (como imagens e recursos brutos) em limites de 4 bytes. Isso permite que o sistema operacional Android utilize o 'mmap' (memory mapping) para ler os recursos diretamente do arquivo no armazenamento, sem precisar copiá-los para a memória RAM. Historicamente, quando os celulares tinham apenas 512MB de RAM, isso era a diferença entre o app rodar ou crashar. Hoje, com aparelhos potentes, o benefício é a economia de bateria e a rapidez na abertura (cold start). Um APK não alinhado é considerado "sujo" pelo sistema e, em versões mais novas do Android, pode até ser recusado pela Google Play ou causar lentidões perceptíveis.`,
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
      "Ferramentas como o 'Uber APK Signer' automatizam essa etapa."
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
      }
    ]
  },
  {
    slug: "assinando-com-apksigner",
    section: "recompilando",
    title: "Assinando com apksigner",
    difficulty: "intermediario",
    subtitle: "A identidade digital e a segurança do seu APK",
    intro: `A assinatura de um APK é o selo de autenticidade que o sistema Android exige para qualquer instalação. Imagine que você está enviando uma carta importante: a assinatura no envelope garante que ninguém abriu ou alterou o conteúdo no caminho. No Android, isso é levado muito a sério. Como nós modificamos o APK, a assinatura original do desenvolvedor (ex: Google, Facebook) foi invalidada. Precisamos colocar o nosso próprio selo.

Historicamente, usávamos o 'jarsigner' (da JDK do Java), mas o Android evoluiu. Com o Android 7.0+, surgiu o esquema V2 (Whole File Signature), seguido pelo V3 e V4. O 'apksigner' é a ferramenta oficial do Android SDK que suporta todos esses esquemas. Ele não assina apenas arquivos individuais dentro do ZIP, mas o arquivo inteiro, tornando-o muito mais rápido de verificar pelo sistema e quase impossível de burlar sem quebrar a assinatura. Se você assinar um app usando apenas V1 (esquema antigo), o Android pode até instalá-lo, mas ele será tratado como um app "legado" e terá restrições de segurança ou performance. Dominar o apksigner é o passo final para tornar sua modificação "instalável".`,
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
      "A ferramenta 'verify' é essencial para diagnosticar por que um APK não instala."
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
      }
    ]
  },
  {
    slug: "criando-keystore",
    section: "recompilando",
    title: "Criando seu Próprio Keystore",
    difficulty: "intermediario",
    subtitle: "Sua identidade única como desenvolvedor/modder",
    intro: `Para assinar um aplicativo, você precisa de um "certificado digital", que é guardado dentro de um arquivo chamado Keystore. Pense na Keystore como um cofre e no certificado como um carimbo personalizado que só você possui. Quando você assina um app, você está dizendo ao Android: "Eu, o dono desta chave, garanto que este código é meu".

A ferramenta usada para criar esse "cofre" é o 'keytool', que faz parte da JRE/JDK do Java. No Brasil, temos o hábito de usar chaves genéricas de tutoriais, mas criar a sua própria é um passo importante para o profissionalismo. Você pode definir o nome da sua "organização", sua validade (geralmente colocamos 25-30 anos para evitar problemas) e, o mais importante, uma senha forte. Historicamente, se um desenvolvedor perdesse sua Keystore, ele perdia o controle total sobre as atualizações do seu app na Play Store. Para nós, modders, ter uma Keystore consistente permite que nossos usuários atualizem nossos mods sem precisar desinstalar e perder suas configurações a cada nova versão lançada.`,
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
      "Perder a senha da Keystore significa perder o acesso às chaves dentro dela."
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
      }
    ]
  },
  {
    slug: "instalando-apos-recompilar",
    section: "recompilando",
    title: "O Fluxo Completo: Build → Align → Sign → Install",
    difficulty: "intermediario",
    subtitle: "Automatizando o processo de teste do seu mod",
    intro: `Chegamos ao ápice do fluxo de trabalho. Você modificou o código, reconstruiu o binário e agora precisa ver se ele realmente funciona no mundo real. Fazer cada etapa manualmente (ApkTool -> Zipalign -> Apksigner -> ADB Install) é tedioso e propenso a erros. Um modder eficiente cria automações. Imagine que você é um chef: você não quer apenas cozinhar, você quer uma linha de montagem que entregue o prato quente e perfeito todas as vezes.

Neste capítulo, vamos consolidar tudo o que aprendemos em um fluxo lógico e um script de automação. Vamos entender por que a ordem dos fatores altera o produto (por exemplo, assinar antes de alinhar quebra a assinatura V2). Também vamos abordar os problemas comuns de instalação, como o famigerado 'INSTALL_FAILED_DEXOPT', que acontece quando o sistema tenta otimizar seu Smali mal escrito e falha miseravelmente. Este é o momento em que a teoria se torna prática: você verá seu APK personalizado saindo do computador e ganhando vida na tela do seu celular.`,
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
      "Parabéns! Você completou o ciclo básico da engenharia reversa de APKs."
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
      }
    ]
  }
];
