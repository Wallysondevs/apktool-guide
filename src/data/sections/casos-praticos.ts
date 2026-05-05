import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "workflow-completo-basico",
    section: "casos-praticos",
    title: "Workflow Completo: Do APK ao APK Modificado",
    difficulty: "intermediario",
    subtitle: "O caminho mestre da modificação profissional",
    intro: "Dominar ferramentas isoladas é como saber usar uma chave de fenda e um martelo, mas não saber construir uma casa. O 'Workflow Completo' é a engenharia por trás da modificação de APKs. Este processo não é apenas uma sequência de comandos, mas uma coreografia técnica que garante que cada transformação preserva a integridade do aplicativo enquanto introduz as alterações desejadas. O fluxo profissional começa com a extração limpa (muitas vezes via ADB), seguida por uma decompilação estratégica. Recompilar um APK não é garantia de sucesso; pequenos erros em XMLs ou referências de recursos podem quebrar o build. Por isso, profissionais utilizam scripts de automação que verificam cada etapa. Após a recompilação, entramos na fase de otimização com o zipalign, que é vital para a performance, e finalizamos com a assinatura digital usando o apksigner. Este ciclo — Decompilar, Editar, Recompilar, Alinhar e Assinar — é o padrão ouro da indústria. Entender os 'porquês' de cada passo (como por que alinhar antes de assinar no esquema V2) separa o amador, que apenas copia comandos, do especialista, que sabe diagnosticar onde o processo falhou e como corrigi-lo sem comprometer a estabilidade do app no dispositivo final.",
    codes: [
      {
        lang: "bash",
        code: "#!/bin/bash\n# Script Profissional de Build\nAPP_DIR=\"meu_app_folder\"\nOUTPUT_APK=\"modificado_final.apk\"\n\n# 1. Recompilação com verificação de erro\napktool b $APP_DIR -o build/unsigned.apk || { echo 'Falha na Recompilação'; exit 1; }\n\n# 2. Alinhamento de memória (Zipalign)\nzipalign -v 4 build/unsigned.apk build/aligned.apk\n\n# 3. Assinatura com apksigner (Esquema V2/V3)\napksigner sign --ks meu.keystore --out $OUTPUT_APK build/aligned.apk\n\n# 4. Verificação final\napksigner verify -v $OUTPUT_APK\n\n# 5. Instalação automática\nadb install -r $OUTPUT_APK"
      },
      {
        lang: "bash",
        code: "# Extraindo o APK original para começar o trabalho\nadb shell pm path com.exemplo.app\nadb pull /data/app/.../base.apk original.apk"
      },
      {
        lang: "bash",
        code: "# Decompilando com foco em recursos e código\napktool d original.apk -o projeto_trabalho\n# A pasta projeto_trabalho agora contém smali e res"
      },
      {
        lang: "bash",
        code: "# Criando uma keystore de teste rapidamente\nkeytool -genkey -v -keystore teste.jks -alias teste -keyalg RSA -keysize 2048 -validity 10000"
      },
      {
        lang: "bash",
        code: "# Limpando builds anteriores para evitar conflitos\nrm -rf build/*.apk\nmkdir -p build"
      },
      {
        lang: "bash",
        code: "# Logs em tempo real durante o primeiro boot do app modificado\nadb logcat | grep -i \"AndroidRuntime\""
      }
    ],
    points: [
      "O fluxo completo garante que nenhuma etapa de integridade seja esquecida.",
      "Trabalhar em diretórios separados (build/dist) evita poluição do projeto.",
      "A verificação de erros (|| exit 1) no bash é crucial para automação.",
      "O alinhamento (zipalign) deve sempre preceder a assinatura V2.",
      "Sempre use o apksigner para garantir compatibilidade com Android 11+.",
      "O comando adb install -r preserva os dados do app durante o teste.",
      "Manter o APK original em uma pasta de backup é obrigatório.",
      "Logs de erro do ApkTool durante o build devem ser lidos com atenção.",
      "O uso de variáveis em scripts torna o processo reutilizável para outros apps.",
      "A assinatura deve ser feita com uma chave persistente para permitir updates futuros."
    ],
    alerts: [
      {
        type: "info",
        content: "Para apps muito grandes, a etapa de zipalign pode levar alguns minutos."
      },
      {
        type: "warning",
        content: "Se o app original estiver instalado, você deve desinstalá-lo se sua assinatura for diferente."
      },
      {
        type: "tip",
        content: "Use scripts Bash no Linux/macOS ou PowerShell no Windows para automatizar esse workflow."
      },
      {
        type: "success",
        content: "Um workflow bem estruturado reduz o tempo de iteração de minutos para segundos."
      }
    ]
  },
  {
    slug: "traduzindo-um-app",
    section: "casos-praticos",
    title: "Traduzindo um App para Português",
    difficulty: "intermediario",
    subtitle: "Localização profunda e cultural",
    intro: "Traduzir um aplicativo vai muito além de trocar 'Welcome' por 'Bem-vindo'. No Android, o sistema de recursos é extremamente sofisticado, permitindo que o app se adapte não apenas ao idioma, mas à região (localidade). O processo central reside na pasta 'res/values', onde o arquivo 'strings.xml' armazena as cadeias de texto. Para adicionar o suporte ao Português do Brasil, criamos a pasta 'values-pt-rBR'. O Android usa um algoritmo de seleção de recursos: se o sistema do usuário estiver configurado para PT-BR, ele priorizará essa pasta. Mas a tradução técnica exige cuidados especiais. Devemos lidar com 'plurals' (regras de plural que mudam entre línguas), 'format strings' (como %1$s que recebe um nome dinâmico) e caracteres especiais que precisam ser escapados em XML (como o & que vira &amp;). Além disso, há o desafio das 'hardcoded strings' que residem diretamente no código Smali e não aparecem nos arquivos de recursos. Uma tradução profissional envolve varrer tanto os XMLs quanto o código fonte recuperado pelo JADX para garantir que nenhuma mensagem técnica ou erro permaneça no idioma original, proporcionando uma experiência nativa e polida ao usuário final.",
    codes: [
      {
        lang: "xml",
        code: "<!-- res/values-pt-rBR/strings.xml -->\n<resources>\n    <string name=\"app_name\">Meu App Traduzido</string>\n    <string name=\"login_success\">Bem-vindo de volta, %1$s!</string>\n    <!-- %1$s é um placeholder para o nome do usuário -->\n</resources>"
      },
      {
        lang: "xml",
        code: "<!-- Lidando com plurais corretamente -->\n<plurals name=\"items_count\">\n    <item quantity=\"one\">Você tem um item.</item>\n    <item quantity=\"other\">Você tem %d itens.</item>\n</plurals>"
      },
      {
        lang: "bash",
        code: "# Buscando textos escondidos no código Smali\ngrep -r \"original_text\" ./smali\n# Ajuda a encontrar strings que não estão no strings.xml"
      },
      {
        lang: "bash",
        code: "# Criando a estrutura de pastas necessária\nmkdir -p res/values-pt-rBR\ncp res/values/strings.xml res/values-pt-rBR/"
      },
      {
        lang: "xml",
        code: "<!-- Escapando caracteres especiais -->\n<string name=\"terms\">Termos &amp; Condições</string>\n<string name=\"quote\">Ele disse: \\\"Olá!\\\"</string>"
      },
      {
        lang: "bash",
        code: "# Verificando se o XML de tradução está bem formatado\nxmlstarlet val res/values-pt-rBR/strings.xml\n# Evita erros de recompilação por tags mal fechadas"
      }
    ],
    points: [
      "O Android usa qualificadores de pasta (ex: pt-rBR) para localização.",
      "O arquivo principal de textos é o strings.xml em res/values.",
      "Nunca altere o atributo 'name' das tags <string>, apenas o conteúdo.",
      "Format strings (%s, %d) devem ser mantidas na ordem correta.",
      "Plurals permitem lidar com diferenças gramaticais entre idiomas.",
      "Caracteres especiais como ', \", & devem ser escapados em XML.",
      "Textos em Smali (hardcoded) exigem edição direta no bytecode.",
      "A ferramenta 'AAPT' ajuda a validar os recursos durante o build.",
      "Traduções incompletas farão o Android usar o idioma padrão (fallback).",
      "O Google Tradutor é uma base, mas a revisão contextual é obrigatória."
    ],
    alerts: [
      {
        type: "tip",
        content: "Use o VS Code com extensões de XML para facilitar a edição em massa."
      },
      {
        type: "warning",
        content: "Traduções muito longas podem quebrar o layout da interface (UI)."
      },
      {
        type: "info",
        content: "Alguns apps usam serviços de tradução remota que ignoram o strings.xml local."
      },
      {
        type: "danger",
        content: "Mudar o 'name' de uma string causará erro de compilação ou crash no app."
      }
    ]
  },
  {
    slug: "ativando-modo-debug",
    section: "casos-praticos",
    title: "Ativando Modo Debug para Análise",
    difficulty: "avancado",
    subtitle: "Abrindo as vísceras do app para o depurador",
    intro: "No mundo do desenvolvimento Android, apps de produção são 'selados' por segurança, impedindo que desenvolvedores externos vejam o estado interno da memória ou parem a execução do código. Ativar o modo debug é como colocar uma janela de vidro em uma caixa preta. A chave mestra para isso reside no arquivo 'AndroidManifest.xml', especificamente no atributo 'android:debuggable=\"true\"'. Quando este sinalizador está ativo, o sistema operacional permite que o Java Debug Wire Protocol (JDWP) se conecte ao processo do aplicativo. Isso desbloqueia o uso de ferramentas poderosas como o Android Studio Debugger, mesmo que você não tenha o código-fonte original. Você pode abrir o projeto decompilado no Android Studio como um projeto Smali, colocar 'breakpoints' em métodos específicos e analisar o valor das variáveis no exato momento em que o código é executado. Internamente, o runtime do Android (ART) altera seu comportamento para permitir essa introspecção. Além de facilitar a engenharia reversa, isso é fundamental para entender como algoritmos de criptografia funcionam ou para descobrir onde exatamente um aplicativo está falhando silenciosamente.",
    codes: [
      {
        lang: "xml",
        code: "<!-- Editando o AndroidManifest.xml -->\n<application \n    android:debuggable=\"true\" \n    android:label=\"@string/app_name\">\n    <!-- Certifique-se de que não há outros sinalizadores de segurança impedindo -->\n</application>"
      },
      {
        lang: "bash",
        code: "# Listando processos debuggáveis no celular via ADB\nadb jdwp\n# Retorna os IDs dos processos que aceitam conexão de debugger"
      },
      {
        lang: "bash",
        code: "# Forçando um app a esperar pelo debugger no início\nadb shell am set-debug-app -w com.exemplo.app\n# -w faz o app pausar na tela 'Waiting for Debugger'"
      },
      {
        lang: "bash",
        code: "# Removendo a trava de espera pelo debugger\nadb shell am clear-debug-app"
      },
      {
        lang: "bash",
        code: "# Usando o logcat para ver mensagens de depuração extras\nadb logcat | grep -i \"debug\"\n# Muitos apps liberam mais logs quando debuggable=true"
      },
      {
        lang: "bash",
        code: "# Verificando se o APK final realmente ficou como debuggable\naapt dump badging modificado.apk | grep \"debuggable\""
      }
    ],
    points: [
      "O atributo android:debuggable=true é a porta de entrada para o JDWP.",
      "Permite o uso de Breakpoints para pausar a execução do app.",
      "Facilita a inspeção de variáveis locais e globais em tempo real.",
      "Essencial para conectar o Android Studio a apps de terceiros.",
      "Permite a visualização detalhada da pilha de chamadas (Stack Trace).",
      "Muitos malwares desativam recursos de segurança quando detectam modo debug.",
      "O comando 'adb jdwp' é o termômetro para saber se a alteração funcionou.",
      "A flag -w no 'am set-debug-app' é útil para debugar o processo de inicialização.",
      "Debugar Smali exige plugins específicos no Android Studio ou VS Code.",
      "Nunca deixe esse sinalizador ativo em versões que serão distribuídas publicamente."
    ],
    alerts: [
      {
        type: "danger",
        content: "Apps debuggáveis podem ter sua memória lida por qualquer outro processo no celular."
      },
      {
        type: "warning",
        content: "Alguns apps verificam esse sinalizador e se recusam a rodar como medida anti-reversa."
      },
      {
        type: "tip",
        content: "Combine o modo debug com o 'Smali Idea' no Android Studio para uma experiência de debug profissional."
      },
      {
        type: "info",
        content: "Em dispositivos Rooted, você pode forçar todos os apps a serem debuggáveis via Magisk."
      }
    ]
  },
  {
    slug: "ctf-android-intro",
    section: "casos-praticos",
    title: "Introdução a CTFs Android",
    difficulty: "avancado",
    subtitle: "A arte competitiva da invasão de APKs",
    intro: "Capture The Flag (CTF) é o esporte de elite da segurança da informação, e a categoria Android é uma das mais desafiadoras. Nesses desafios, você recebe um APK 'vulnerável' ou 'misterioso' e seu objetivo é encontrar a 'flag' — uma string secreta geralmente no formato FLAG{alguma_coisa}. O ApkTool é sua arma primária nesse campo de batalha. Os desafios variam de simples segredos hardcoded no código Smali a complexos algoritmos de criptografia customizada ou ofuscação de fluxo de controle. A estratégia vencedora em CTFs Android segue um padrão: primeiro, a análise rápida de strings e recursos; depois, a decompilação para Java com JADX para entender a lógica; e, se necessário, o mergulho profundo no Smali com o ApkTool para modificar o app e forçar a exibição da flag. Plataformas como HackTheBox, Root-Me e competições anuais como o Google CTF fornecem cenários reais onde você pode testar suas habilidades. Participar de CTFs não é apenas diversão; é a maneira mais rápida de se tornar um especialista, pois cada desafio te força a aprender uma nova técnica de defesa que os desenvolvedores reais usam no dia a dia.",
    codes: [
      {
        lang: "bash",
        code: "# Procurando por padrões comuns de flags no diretório decompilado\ngrep -rE \"flag\\{.*\\}\" .\n# Busca recursiva usando regex para o formato padrão"
      },
      {
        lang: "bash",
        code: "# Extraindo todas as strings do arquivo classes.dex\nstrings classes.dex | grep -i \"key\"\n# Técnica rápida sem precisar decompilar tudo"
      },
      {
        lang: "bash",
        code: "# Analisando o AndroidManifest para encontrar Activities ocultas\ncat AndroidManifest.xml | grep \"activity\"\n# Muitas vezes a flag está em uma tela que não pode ser acessada normalmente"
      },
      {
        lang: "bash",
        code: "# Forçando o lançamento de uma Activity secreta via ADB\nadb shell am start -n com.desafio.ctf/.SecretActivity\n# Ignora o fluxo normal do app para ir direto ao alvo"
      },
      {
        lang: "javascript",
        code: "// Script Frida rápido para interceptar uma função de comparação de senhas\nJava.perform(function() {\n  var Check = Java.use('com.ctf.Vault');\n  Check.verifyPassword.implementation = function(pass) {\n    console.log('Senha tentada: ' + pass);\n    return true; // Força a entrada\n  };\n});"
      },
      {
        lang: "bash",
        code: "# Verificando arquivos na pasta assets ou res/raw\nls -R assets/\n# Flags costumam estar escondidas em arquivos de texto ou imagens (esteganografia)"
      }
    ],
    points: [
      "CTFs são competições focadas na resolução de problemas de segurança.",
      "A 'flag' é o troféu que prova que você resolveu o desafio.",
      "Análise estática (ApkTool) e dinâmica (Frida) são complementares.",
      "Desafios comuns envolvem criptografia XOR, Base64 e AES.",
      "Activities não exportadas no Manifest são esconderijos frequentes.",
      "O código nativo (.so) é usado em desafios de nível 'Insane'.",
      "A esteganografia (esconder dados em imagens) é comum em CTFs Android.",
      "Analisar o tráfego de rede com Burp Suite pode revelar flags enviadas para APIs.",
      "A persistência é a habilidade mais importante em um CTF.",
      "Documentar sua resolução (Write-up) consolida o aprendizado."
    ],
    alerts: [
      {
        type: "tip",
        content: "Comece com os desafios 'Uncrackable' da OWASP para ganhar confiança."
      },
      {
        type: "info",
        content: "Em CTFs, nada é o que parece; um arquivo .png pode ser um arquivo .zip disfarçado."
      },
      {
        type: "warning",
        content: "Não se sinta frustrado se não resolver de primeira; leia 'write-ups' de outros para aprender."
      },
      {
        type: "success",
        content: "Resolver um desafio de Android em um CTF de renome mundial é um grande diferencial no currículo."
      }
    ]
  },
  {
    slug: "pesquisa-seguranca-etica",
    section: "casos-praticos",
    title: "Pesquisa de Segurança Responsável",
    difficulty: "avancado",
    subtitle: "Navegando nas águas da ética hacker",
    intro: "A linha entre um pesquisador de segurança e um criminoso cibernético é definida por um único conceito: ética. Ao usar o ApkTool para analisar aplicativos, você está entrando em um território legalmente complexo. A pesquisa de segurança responsável envolve encontrar vulnerabilidades para ajudar a proteger os usuários, não para explorá-los. Programas de Bug Bounty (como HackerOne e Bugcrowd) formalizam esse processo, oferecendo recompensas financeiras e reconhecimento legal para quem descobre e reporta falhas de forma coordenada. O processo ético exige que você siga o 'OWASP Mobile Top 10', que lista os riscos mais críticos em apps Android, como armazenamento inseguro de dados e comunicação não criptografada. Um relatório profissional não deve apenas apontar o erro, mas calcular o impacto usando o sistema CVSS (Common Vulnerability Scoring System) e sugerir correções. O compromisso de 'Divulgação Responsável' significa dar ao desenvolvedor um prazo (geralmente 90 dias) para corrigir o problema antes de torná-lo público. Ser um pesquisador ético é ser um guardião da privacidade digital em um mundo cada vez mais dependente de dispositivos móveis.",
    codes: [
      {
        lang: "text",
        code: "Exemplo de Escala CVSS v3.1:\n- Baixo (0.1 - 3.9): Risco mínimo.\n- Médio (4.0 - 6.9): Requer atenção.\n- Alto (7.0 - 8.9): Crítico, deve ser corrigido rápido.\n- Crítico (9.0 - 10.0): Risco total aos dados."
      },
      {
        lang: "bash",
        code: "# Verificando permissões perigosas no app\naapt dump permissions modificado.apk | grep \"dangerous\"\n# Identifica potenciais vetores de invasão de privacidade"
      },
      {
        lang: "bash",
        code: "# Buscando por URLs inseguras (HTTP) no código\ngrep -r \"http://\" ./smali\n# Aponta falta de criptografia em trânsito (MITM)"
      },
      {
        lang: "bash",
        code: "# Verificando armazenamento de dados sensíveis em logs\nadb logcat | grep -E \"password|token|key\"\n# Apps éticos nunca devem imprimir segredos no log"
      },
      {
        lang: "text",
        code: "Estrutura de Relatório de Vulnerabilidade:\n1. Título e Resumo\n2. Severidade (CVSS)\n3. Passos para Reproduzir\n4. Prova de Conceito (PoC)\n5. Recomendação de Correção"
      },
      {
        lang: "bash",
        code: "# Verificando se o app aceita certificados de usuário (Segurança de Rede)\ncat res/xml/network_security_config.xml\n# Configurações mal feitas podem permitir interceptação de dados"
      }
    ],
    points: [
      "Ética hacker foca na proteção e melhoria de sistemas.",
      "Programas de Bug Bounty são o caminho legal para recompensas.",
      "O OWASP Mobile Top 10 é o guia padrão de vulnerabilidades.",
      "CVSS é a métrica universal para classificar a gravidade de falhas.",
      "Divulgação coordenada protege os usuários finais durante a correção.",
      "Relatórios técnicos devem ser claros, concisos e acionáveis.",
      "Análise de APKs deve ser feita em ambientes isolados (Sandboxes).",
      "Respeitar o contrato de confidencialidade (NDA) é fundamental.",
      "O objetivo final é um ecossistema Android mais seguro para todos.",
      "Pesquisadores éticos são pilares da transparência na tecnologia."
    ],
    alerts: [
      {
        type: "danger",
        content: "Modificar e redistribuir APKs sem permissão é violação de direitos autorais."
      },
      {
        type: "info",
        content: "A maioria das empresas grandes possui uma política de 'Vulnerability Disclosure' em seus sites."
      },
      {
        type: "warning",
        content: "Nunca teste vulnerabilidades em servidores de produção sem autorização expressa."
      },
      {
        type: "success",
        content: "Um bom histórico em Bug Bounty pode abrir portas nas melhores empresas de tecnologia do mundo."
      }
    ]
  },
  {
    slug: "automatizando-com-script",
    section: "casos-praticos",
    title: "Automatizando o Fluxo com Bash/Python",
    difficulty: "avancado",
    subtitle: "Transformando o terminal em uma linha de montagem",
    intro: "A diferença entre um entusiasta e um profissional é a escala. Se você gasta 10 minutos para processar um APK manualmente, levará quase duas horas para processar 10. Com a automação, você processa centenas de APKs enquanto toma um café. Criar scripts robustos em Bash ou Python para envolver o ApkTool é o auge da maturidade técnica. Um script de automação bem feito lida com tratamento de erros, gerencia diferentes versões de frameworks, aplica patches no Smali via regex e entrega o APK final assinado e otimizado. Python, em particular, brilha nessa área por sua capacidade de manipulação de arquivos e integração com ferramentas de terceiros via biblioteca 'subprocess'. Você pode construir ferramentas que baixam APKs automaticamente, varrem o código em busca de chaves de API expostas e geram relatórios detalhados em Markdown. A automação não serve apenas para ganhar tempo; ela elimina o erro humano e garante que cada modificação seja aplicada de forma consistente em todas as versões do aplicativo.",
    codes: [
      {
        lang: "python",
        code: "import subprocess\nimport os\n\ndef run_apktool(apk_path):\n    # Decompila o APK usando subprocess\n    print(f'Decompilando {apk_path}...')\n    subprocess.run(['apktool', 'd', apk_path, '-o', 'out_dir'], check=True)\n\ndef patch_smali(file_path, old_text, new_text):\n    # Patch cirúrgico via Python\n    with open(file_path, 'r') as f:\n        content = f.read()\n    new_content = content.replace(old_text, new_text)\n    with open(file_path, 'w') as f:\n        f.write(new_content)\n\n# Exemplo de uso\nrun_apktool('meu_app.apk')\npatch_smali('out_dir/smali/com/app/Config.smali', 'const/4 v0, 0x0', 'const/4 v0, 0x1')"
      },
      {
        lang: "bash",
        code: "#!/bin/bash\n# Script Bash para processamento em lote\nfor apk in ./apks/*.apk; do\n    name=$(basename \"$apk\" .apk)\n    echo \"Processando $name...\"\n    apktool d \"$apk\" -o \"out/$name\"\n    # Aqui você pode adicionar lógica de análise ou modificação\ndone"
      },
      {
        lang: "python",
        code: "# Buscando chaves de API automaticamente com Python\nimport re\ndef find_keys(directory):\n    pattern = re.compile(r'AIza[0-9A-Za-z-_]{35}') # Regex para Google Maps API\n    for root, dirs, files in os.walk(directory):\n        for file in files:\n            if file.endswith('.smali'):\n                with open(os.path.join(root, file), 'r') as f:\n                    matches = pattern.findall(f.read())\n                    if matches: print(f'Chave encontrada em {file}: {matches}')"
      },
      {
        lang: "bash",
        code: "# Integrando zipalign e apksigner no script Bash\n./zipalign -v 4 build.apk final_aligned.apk\n./apksigner sign --ks my.keystore --ks-pass pass:123456 final_aligned.apk"
      },
      {
        lang: "python",
        code: "# Gerando relatório em Markdown\nwith open('relatorio.md', 'w') as f:\n    f.write('# Relatório de Análise Automática\\n')\n    f.write(f'APK analisado: {apk_name}\\n')\n    f.write('## Vulnerabilidades encontradas: ...')"
      },
      {
        lang: "bash",
        code: "# Usando o sed para edições rápidas no Smali via terminal\nfind ./smali -name \"*.smali\" -exec sed -i 's/isPremium:Z = false/isPremium:Z = true/g' {} +"
      }
    ],
    points: [
      "Automação elimina tarefas repetitivas e cansativas.",
      "Scripts Bash são excelentes para fluxos lineares simples.",
      "Python oferece maior flexibilidade para análise lógica de código.",
      "O uso de Regex permite patches em massa no código Smali.",
      "A automação garante a reprodutibilidade dos resultados.",
      "Pode ser integrada a sistemas de CI/CD para análise contínua.",
      "Facilita a extração de inteligência de grandes conjuntos de APKs.",
      "Tratamento de exceções em Python evita que o script pare no primeiro erro.",
      "Relatórios automatizados são essenciais para pesquisadores de segurança.",
      "A biblioteca 'argparse' do Python cria ferramentas CLI profissionais."
    ],
    alerts: [
      {
        type: "tip",
        content: "Use bibliotecas como 'Rich' em Python para tornar a saída do seu script elegante e colorida."
      },
      {
        type: "warning",
        content: "Sempre valide as alterações automatizadas com um teste manual básico."
      },
      {
        type: "info",
        content: "A automação de patches no Smali exige que você conheça bem a estrutura do código alvo."
      },
      {
        type: "success",
        content: "Um script de 50 linhas pode economizar 50 horas de trabalho manual ao longo de um projeto."
      }
    ]
  },
  {
    slug: "erros-comuns-e-solucoes",
    section: "casos-praticos",
    title: "Erros Comuns e Como Resolver",
    difficulty: "avancado",
    subtitle: "A enciclopédia de solução de problemas",
    intro: "Trabalhar com o ApkTool é uma jornada pontuada por mensagens de erro em vermelho no terminal. Esses erros não são sinais de fracasso, mas sim guias que apontam inconsistências no processo. A maioria das falhas ocorre em três momentos críticos: no decoding (geralmente falta de frameworks ou APKs corrompidos), no build (erros de sintaxe XML ou recursos duplicados) e na instalação (problemas de assinatura ou versão). O erro 'brut.androlib.err.InFileNotFoundException', por exemplo, é um clássico que indica que o ApkTool tentou acessar um recurso que não existe ou que ele não conseguiu decodificar corretamente. Já erros como 'INSTALL_FAILED_OLDER_SDK' mostram um desalinhamento entre as versões de SDK definidas no Manifest. Entender a causa raiz — que muitas vezes está escondida atrás de uma longa pilha de erros Java — é a habilidade que separa o mestre do iniciante. Este capítulo serve como seu guia de consulta rápida, o 'porto seguro' onde você encontrará as soluções para os problemas que já tiraram o sono de milhares de desenvolvedores ao redor do mundo.",
    codes: [
      {
        lang: "text",
        code: "Erro: brut.androlib.AndrolibException: res/values/strings.xml: duplicado\nCausa: Você tem duas entradas <string name=\"...\"> com o mesmo nome no arquivo.\nSolução: Busque pelo nome e apague a duplicata."
      },
      {
        lang: "text",
        code: "Erro: W: Could not decode attr value, using undecoded value instead\nCausa: Framework faltando ou incompatível com a marca do celular.\nSolução: Extraia e instale o framework-res.apk do dispositivo original."
      },
      {
        lang: "text",
        code: "Erro: [INSTALL_FAILED_UPDATE_INCOMPATIBLE]\nCausa: O app já está instalado com uma assinatura diferente (original vs sua).\nSolução: adb uninstall com.exemplo.app"
      },
      {
        lang: "text",
        code: "Erro: java.lang.NullPointerException no build\nCausa: Frequentemente causado por imagens .9.png mal editadas ou corrompidas.\nSolução: Verifique as bordas de 1px das imagens nine-patch."
      },
      {
        lang: "text",
        code: "Erro: I: Could not find sources\nCausa: Você tentou recompilar uma pasta que não foi gerada corretamente no decode.\nSolução: Delete a pasta e refaça o apktool d com o framework correto."
      },
      {
        lang: "text",
        code: "Erro: INSTALL_FAILED_DEXOPT\nCausa: O código Smali injetado tem erros de lógica que impedem a otimização do Android.\nSolução: Verifique se os registradores (v0, v1) foram usados corretamente no seu código."
      }
    ],
    points: [
      "Erros de framework são a causa de 90% dos problemas de decoding.",
      "Assinaturas incompatíveis impedem a instalação de APKs modificados.",
      "Imagens .9.png exigem um cuidado especial na edição (borda de 1px).",
      "O Logcat é essencial para descobrir por que o app dá crash após a instalação.",
      "Nomes de pastas com espaços podem confundir o ApkTool no Windows.",
      "A versão do Java instalada no PC deve ser compatível com a do ApkTool.",
      "Arquivos XML mal formatados (tags não fechadas) interrompem o build.",
      "A flag --copy-force no build pode ajudar em problemas persistentes de recursos.",
      "Desinstalar a versão original do app é quase sempre necessário antes de testar.",
      "O StackOverflow e o GitHub do ApkTool são as melhores fontes para erros novos."
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca ignore os avisos 'Warning' durante o decode; eles geralmente viram erros no build."
      },
      {
        type: "info",
        content: "Muitos erros de 'Resource Not Found' são resolvidos apenas limpando a pasta de frameworks."
      },
      {
        type: "tip",
        content: "Sempre verifique o 'targetSdkVersion' no Manifest se o app não instalar em Androids novos."
      },
      {
        type: "warning",
        content: "Edições manuais no arquivo 'apktool.yml' podem corromper todo o processo de build."
      }
    ]
  }
];
