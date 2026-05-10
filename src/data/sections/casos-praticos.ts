import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "workflow-completo-basico",
    section: "casos-praticos",
    title: "Workflow Completo: Do APK ao APK Modificado",
    difficulty: "intermediario",
    subtitle: "O caminho mestre da modificação profissional",
    intro: "Dominar ferramentas isoladas é como saber usar uma chave de fenda e um martelo, mas não saber construir uma casa. Imagine que você é um mestre de obras no Brasil: conhece cada material, cada técnica de alvenaria, mas sem um projeto arquitetônico e uma sequência lógica de construção, a obra desmorona. O 'Workflow Completo' é exatamente esse projeto arquitetônico — a engenharia por trás da modificação de APKs. Este processo não é apenas uma sequência de comandos digitados no terminal, mas uma coreografia técnica meticulosamente planejada que garante que cada transformação preserva a integridade do aplicativo enquanto introduz as alterações desejadas com precisão cirúrgica. Pense no APK como um carro popular brasileiro saindo da linha de montagem: cada peça foi colocada em uma ordem específica, cada parafuso tem um torque exato. Se você quiser trocar o motor (a lógica do app), precisa desmontar na ordem certa, fazer a substituição e remontar seguindo o manual — caso contrário, o carro simplesmente não liga. O fluxo profissional começa com a extração limpa do APK original, muitas vezes realizada via ADB diretamente do dispositivo, garantindo que você trabalha com a versão exata que está instalada. Em seguida, vem a decompilação estratégica com o ApkTool, que transforma o pacote binário em arquivos legíveis e editáveis. Recompilar um APK não é garantia de sucesso; pequenos erros em XMLs ou referências de recursos podem quebrar o build inteiro, assim como um único fio desencapado pode causar um curto-circuito em toda a instalação elétrica de um prédio. Por isso, profissionais utilizam scripts de automação que verificam cada etapa antes de prosseguir para a próxima. Após a recompilação bem-sucedida, entramos na fase de otimização com o zipalign, que reorganiza os bytes do APK para acesso eficiente em memória — algo vital para a performance, especialmente em dispositivos Android mais modestos que são a realidade da maioria dos brasileiros. Finalizamos com a assinatura digital usando o apksigner, que funciona como o reconhecimento de firma em cartório: sem ela, o Android simplesmente se recusa a instalar o pacote. Este ciclo — Decompilar, Editar, Recompilar, Alinhar e Assinar — é o padrão ouro da indústria. Entender os 'porquês' de cada passo, como por que alinhar antes de assinar no esquema V2, ou por que a ordem dos blocos de assinatura importa, separa o amador que apenas copia comandos da internet do especialista que sabe diagnosticar exatamente onde o processo falhou e como corrigi-lo sem comprometer a estabilidade do app no dispositivo final.",
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
      },
      {
        lang: "bash",
        code: "# Workflow completo em um script\n#!/bin/bash\nAPK=$1\napktool d \"$APK\" -o work/\n# ... fazer modificações ...\napktool b work/ -o work/dist/mod.apk\nzipalign -f 4 work/dist/mod.apk aligned.apk\napksigner sign --ks key.jks aligned.apk"
      },
      {
        lang: "bash",
        code: "# Verificando o resultado final\napksigner verify aligned.apk && echo 'APK válido!'\nadb install -r aligned.apk && echo 'Instalado!'\nadb shell am start -n com.app/.MainActivity"
      },
      {
        lang: "bash",
        code: "# Criando backup antes de modificar\ncp -r work/ work_backup_$(date +%Y%m%d)/\n# Sempre tenha um ponto de restauração"
      },
      {
        lang: "bash",
        code: "# Limpando arquivos temporários após sucesso\nrm -rf work/ aligned.apk\n# Mantém apenas o APK final assinado"
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
      "A assinatura deve ser feita com uma chave persistente para permitir updates futuros.",
      "O workflow completo é: decode → modify → build → align → sign → install.",
      "Sempre faça backup da pasta decompilada antes de começar modificações.",
      "Use scripts bash para automatizar o pipeline e evitar erros manuais.",
      "Teste o app imediatamente após instalar para detectar problemas cedo.",
      "Mantenha o APK original intacto para poder recomeçar do zero."
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
      },
      {
        type: "success",
        content: "Se o app abre normalmente após todo o pipeline, seu workflow está correto e completo!"
      },
      {
        type: "tip",
        content: "Crie um Makefile ou script .sh com todo o pipeline para reutilizar em projetos futuros."
      }
    ]
  },
  {
    slug: "traduzindo-um-app",
    section: "casos-praticos",
    title: "Traduzindo um App para Português",
    difficulty: "intermediario",
    subtitle: "Localização profunda e cultural",
    intro: "Traduzir um aplicativo vai muito além de trocar 'Welcome' por 'Bem-vindo'. É como traduzir uma novela da Globo para o inglês: não basta converter palavra por palavra, é preciso capturar o contexto cultural, as expressões idiomáticas e até o humor local para que a experiência seja autêntica. No ecossistema Android, o sistema de recursos é extremamente sofisticado, permitindo que o app se adapte não apenas ao idioma, mas à região específica do usuário — o que chamamos de localidade. Um brasileiro de São Paulo e um português de Lisboa falam o mesmo idioma, mas usam expressões completamente diferentes, assim como 'ônibus' aqui é 'autocarro' lá. O processo central de tradução reside na pasta 'res/values', onde o arquivo 'strings.xml' armazena todas as cadeias de texto visíveis ao usuário. Para adicionar suporte ao Português do Brasil, criamos a pasta 'values-pt-rBR', seguindo a convenção de nomenclatura do Android que combina o código do idioma com o código da região. O sistema operacional usa um algoritmo inteligente de seleção de recursos: se o dispositivo do usuário estiver configurado para PT-BR, ele priorizará automaticamente essa pasta, caindo para o idioma padrão apenas quando uma string específica não for encontrada na versão traduzida. Mas a tradução técnica exige cuidados especiais que vão além do domínio linguístico. Devemos lidar com 'plurals', que são regras de plural que mudam drasticamente entre línguas — em português temos singular e plural, mas em árabe existem seis formas diferentes. Precisamos preservar 'format strings' como %1$s, que são placeholders dinâmicos que recebem valores em tempo de execução, como o nome do usuário ou a quantidade de notificações. Caracteres especiais precisam ser escapados corretamente em XML: o & comercial vira &amp;, aspas duplas precisam de barra invertida, e apóstrofos podem quebrar toda a estrutura do arquivo se não forem tratados. Além disso, há o desafio das 'hardcoded strings' — textos que o desenvolvedor original escreveu diretamente no código Smali ou Java, sem usar o sistema de recursos do Android. Essas strings não aparecem no strings.xml e exigem uma busca manual pelo código decompilado. Uma tradução profissional e completa envolve varrer tanto os XMLs de recursos quanto o código fonte recuperado pelo JADX, garantindo que nenhuma mensagem técnica, erro ou texto de interface permaneça no idioma original, proporcionando uma experiência verdadeiramente nativa e polida ao usuário final brasileiro.",
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
      },
      {
        lang: "bash",
        code: "# Encontrando o arquivo de strings do idioma alvo\nfind work/res -name 'strings.xml' | sort\n# Lista todos os arquivos de tradução disponíveis"
      },
      {
        lang: "bash",
        code: "# Criando pasta de tradução para português brasileiro\nmkdir -p work/res/values-pt-rBR/\ncp work/res/values/strings.xml work/res/values-pt-rBR/\n# Copia o original como base para tradução"
      },
      {
        lang: "bash",
        code: "# Contando strings a traduzir\ngrep -c '<string' work/res/values/strings.xml\n# Mostra quantas strings precisam ser traduzidas"
      },
      {
        lang: "bash",
        code: "# Usando sed para tradução em massa de termos comuns\nsed -i 's/>Settings</>Configurações</g' work/res/values-pt-rBR/strings.xml\nsed -i 's/>Cancel</>Cancelar</g' work/res/values-pt-rBR/strings.xml"
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
      "O Google Tradutor é uma base, mas a revisão contextual é obrigatória.",
      "A pasta values-pt-rBR/ é específica para português brasileiro.",
      "Strings com %1$s contêm variáveis — não traduza os placeholders.",
      "Nem todas as strings precisam ser traduzidas — IDs e nomes técnicos ficam como estão.",
      "Teste a tradução em diferentes tamanhos de tela (textos longos podem quebrar layouts).",
      "Contribua traduções para a comunidade — muitos apps aceitam pull requests."
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
      },
      {
        type: "success",
        content: "Se o app mostra textos em português após instalar, a tradução foi aplicada com sucesso."
      },
      {
        type: "warning",
        content: "Textos muito longos em português podem ultrapassar os limites de UI projetados para inglês."
      }
    ]
  },
  {
    slug: "ativando-modo-debug",
    section: "casos-praticos",
    title: "Ativando Modo Debug para Análise",
    difficulty: "avancado",
    subtitle: "Abrindo as vísceras do app para o depurador",
    intro: "No mundo do desenvolvimento Android, aplicativos de produção são 'selados' por segurança, como cofres de banco que impedem qualquer pessoa não autorizada de ver o que acontece internamente. Imagine um carro com o capô soldado: você sabe que o motor está ali dentro, ouve ele funcionando, mas não consegue ver as engrenagens girando, medir a temperatura do radiador ou identificar qual peça está fazendo aquele barulho estranho. Ativar o modo debug é como instalar uma janela de vidro transparente nesse capô soldado — de repente, você enxerga tudo que acontece por dentro, em tempo real, enquanto o motor funciona. No contexto técnico do Android, essa 'janela' é controlada por uma única chave mestra que reside no arquivo 'AndroidManifest.xml', especificamente no atributo 'android:debuggable=\"true\"'. Quando este sinalizador está ativo, o sistema operacional Android permite que o Java Debug Wire Protocol (JDWP) se conecte ao processo do aplicativo, estabelecendo um canal de comunicação bidirecional entre o dispositivo e sua máquina de desenvolvimento. Isso é equivalente a colocar um estetoscópio digital no coração do app. Com essa conexão estabelecida, você desbloqueia o uso de ferramentas poderosas como o Android Studio Debugger, o IntelliJ IDEA e até depuradores de linha de comando como o JDB — tudo isso mesmo que você não tenha acesso ao código-fonte original do aplicativo. É como se um mecânico conseguisse fazer o diagnóstico completo de um carro apenas conectando o scanner OBD, sem precisar do manual do fabricante. Na prática, você pode abrir o projeto decompilado no Android Studio como um projeto Smali, posicionar 'breakpoints' estratégicos em métodos específicos que deseja investigar, e analisar o valor exato das variáveis no preciso momento em que cada linha de código é executada. Pense nisso como pausar um filme frame por frame para entender exatamente o que aconteceu em uma cena de ação rápida. Internamente, o runtime do Android (ART) altera significativamente seu comportamento quando detecta a flag debuggable: ele desativa certas otimizações de compilação JIT, mantém informações de debug nos registradores e permite a introspecção completa do estado da máquina virtual. Além de facilitar enormemente a engenharia reversa para fins educacionais e de pesquisa, essa técnica é absolutamente fundamental para entender como algoritmos de criptografia funcionam na prática, para mapear o fluxo de dados sensíveis dentro do aplicativo, ou para descobrir onde exatamente um app está falhando silenciosamente — engolindo exceções sem mostrar nenhuma mensagem ao usuário, como um encanador que precisa abrir a parede para encontrar o vazamento escondido que está causando infiltração no andar de baixo.",
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
      },
      {
        lang: "bash",
        code: "# Ativando debuggable no manifesto\nsed -i 's/android:debuggable=\"false\"/android:debuggable=\"true\"/' work/AndroidManifest.xml\n# Ou adicionar se não existir:\nsed -i 's/<application/<application android:debuggable=\"true\"/' work/AndroidManifest.xml"
      },
      {
        lang: "bash",
        code: "# Verificando se a flag foi aplicada\ngrep 'debuggable' work/AndroidManifest.xml\n# Deve mostrar android:debuggable=\"true\""
      },
      {
        lang: "bash",
        code: "# Testando acesso aos dados após instalar\nadb install -r debug_app.apk\nadb shell run-as com.app ls /data/data/com.app/\n# Se listar arquivos, debuggable está funcionando"
      },
      {
        lang: "bash",
        code: "# Extraindo banco de dados para análise\nadb exec-out run-as com.app cat databases/app.db > local.db\nsqlite3 local.db '.tables'\n# Mostra todas as tabelas do banco de dados do app"
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
      "Nunca deixe esse sinalizador ativo em versões que serão distribuídas publicamente.",
      "debuggable=true permite run-as, Layout Inspector e JDWP debugging.",
      "Combine com Network Security Config para interceptar tráfego HTTPS.",
      "Alguns apps detectam debuggable e bloqueiam funcionalidades (SafetyNet).",
      "Use para extrair SharedPreferences, databases e arquivos internos.",
      "NUNCA distribua mods com debuggable=true — expõe dados do usuário final."
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
      },
      {
        type: "success",
        content: "Se run-as funciona e você acessa dados internos, o modo debug está ativo."
      },
      {
        type: "danger",
        content: "Nunca distribua APKs com debuggable=true — qualquer app no device pode roubar dados."
      }
    ]
  },
  {
    slug: "ctf-android-intro",
    section: "casos-praticos",
    title: "Introdução a CTFs Android",
    difficulty: "avancado",
    subtitle: "A arte competitiva da invasão de APKs",
    intro: "Capture The Flag (CTF) é o esporte de elite da segurança da informação, e a categoria Android é uma das mais desafiadoras e empolgantes que existem nesse universo competitivo. Se a engenharia reversa fosse um esporte olímpico, os CTFs seriam as Olimpíadas — e o Brasil tem uma comunidade crescente e talentosa nessa área, com times como o ELT, FireShell e outros que competem internacionalmente. Nesses desafios, você recebe um APK 'vulnerável' ou 'misterioso' e seu objetivo é encontrar a 'flag', uma string secreta geralmente no formato FLAG{alguma_coisa} que prova que você decifrou o enigma proposto. É como uma caça ao tesouro digital onde o mapa está escondido dentro do próprio código do aplicativo. O ApkTool é sua arma primária nesse campo de batalha, o canivete suíço que permite abrir o APK e examinar suas entranhas. Os desafios variam enormemente em complexidade: desde simples segredos hardcoded no código Smali — que qualquer iniciante com um grep encontra em segundos — até complexos algoritmos de criptografia customizada, ofuscação de fluxo de controle que transforma o código em um labirinto incompreensível, ou até mesmo código nativo em C/C++ compilado em bibliotecas .so que exigem conhecimento de Assembly ARM. A estratégia vencedora em CTFs Android segue um padrão que os competidores experientes chamam de 'triagem': primeiro, a análise rápida de strings e recursos com ferramentas como o comando 'strings' do Linux, buscando padrões óbvios; depois, a decompilação para Java legível com o JADX para entender a lógica de alto nível do aplicativo; e, quando necessário, o mergulho profundo no código Smali com o ApkTool para modificar o comportamento do app e forçar a exibição da flag — por exemplo, fazendo uma função de verificação sempre retornar 'true'. Plataformas como HackTheBox, Root-Me, PicoCTF e competições anuais de prestígio como o Google CTF e o DEF CON CTF fornecem cenários realistas onde você pode testar e aprimorar suas habilidades progressivamente. Participar de CTFs não é apenas diversão ou hobby de fim de semana; é comprovadamente a maneira mais rápida e eficiente de se tornar um especialista em segurança mobile, pois cada desafio te força a aprender uma nova técnica de defesa que os desenvolvedores reais implementam no dia a dia para proteger seus aplicativos contra exatamente o tipo de análise que você está praticando.",
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
      },
      {
        lang: "bash",
        code: "# Estrutura típica de um CTF Android\n# 1. Baixar o APK do desafio\n# 2. Decompilar com apktool d\n# 3. Analisar o código Smali/JADX\n# 4. Encontrar a flag escondida"
      },
      {
        lang: "bash",
        code: "# Buscando flags hardcoded no código\ngrep -r 'flag{\\|CTF{\\|FLAG{' work/smali/\ngrep -r 'flag{\\|CTF{\\|FLAG{' work/res/values/\n# Flags podem estar em strings ou no código"
      },
      {
        lang: "bash",
        code: "# Analisando verificação de senha em CTF\ngrep -r 'checkPassword\\|verify\\|validate' work/smali/ | head -10\n# Encontra o método que valida a resposta"
      },
      {
        lang: "bash",
        code: "# Bypass de verificação (patch comum em CTFs)\n# Trocar if-eqz por if-nez (inverte a condição)\n# Ou forçar return true:\nconst/4 v0, 0x1\nreturn v0"
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
      "Documentar sua resolução (Write-up) consolida o aprendizado.",
      "CTFs Android testam habilidades de engenharia reversa em ambiente controlado.",
      "Flags geralmente estão escondidas em strings, assets ou lógica de verificação.",
      "O patch mais comum é inverter condicionais (if-eqz ↔ if-nez).",
      "Plataformas como PicoCTF, HackTheBox e CTFtime têm desafios Android.",
      "Documente seu processo de resolução — é valioso para portfólio profissional."
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
      },
      {
        type: "success",
        content: "Se você encontrou a flag do CTF, parabéns — suas habilidades de RE estão evoluindo!"
      },
      {
        type: "tip",
        content: "Comece com CTFs de nível 'easy' e vá subindo — a curva de aprendizado é íngreme mas recompensadora."
      }
    ]
  },
  {
    slug: "pesquisa-seguranca-etica",
    section: "casos-praticos",
    title: "Pesquisa de Segurança Responsável",
    difficulty: "avancado",
    subtitle: "Navegando nas águas da ética hacker",
    intro: "A linha entre um pesquisador de segurança e um criminoso cibernético é definida por um único conceito fundamental: ética. É como a diferença entre um chaveiro profissional que abre a porta do seu carro quando você perde a chave e um ladrão que usa a mesma técnica para roubar o veículo — a habilidade técnica é idêntica, mas a intenção e o contexto legal são completamente opostos. No Brasil, onde o Marco Civil da Internet e a Lei Carolina Dieckmann (Lei 12.737/2012) regulamentam crimes cibernéticos, essa distinção não é apenas filosófica, mas tem consequências penais reais. Ao usar o ApkTool para analisar aplicativos de terceiros, você está entrando em um território legalmente complexo que exige consciência e responsabilidade. A pesquisa de segurança responsável — também chamada de 'ethical hacking' ou 'white hat hacking' — envolve encontrar vulnerabilidades com o objetivo exclusivo de ajudar a proteger os usuários, nunca para explorá-los ou causar dano. Programas de Bug Bounty, oferecidos por plataformas como HackerOne, Bugcrowd e até diretamente por empresas brasileiras como Nubank e iFood, formalizam esse processo criando um contrato legal que oferece recompensas financeiras e reconhecimento público para quem descobre e reporta falhas de forma coordenada e responsável. O processo ético de pesquisa exige que você siga metodologias reconhecidas internacionalmente, como o 'OWASP Mobile Top 10', que lista os dez riscos mais críticos em aplicativos móveis Android e iOS, incluindo armazenamento inseguro de dados sensíveis, comunicação não criptografada que permite ataques man-in-the-middle, autenticação fraca e uso inadequado de criptografia. Um relatório profissional de vulnerabilidade não deve apenas apontar o erro encontrado, mas calcular objetivamente o impacto potencial usando o sistema CVSS (Common Vulnerability Scoring System), que atribui uma nota de 0 a 10 baseada em fatores como complexidade do ataque, privilégios necessários e impacto na confidencialidade, integridade e disponibilidade dos dados. Além disso, o relatório deve sugerir correções práticas e implementáveis. O compromisso de 'Divulgação Responsável' (Responsible Disclosure) significa dar ao desenvolvedor ou empresa um prazo razoável — geralmente 90 dias, seguindo o padrão estabelecido pelo Google Project Zero — para corrigir o problema antes de torná-lo público. Ser um pesquisador ético é ser um guardião da privacidade digital em um mundo cada vez mais dependente de dispositivos móveis, onde milhões de brasileiros realizam transações bancárias, acessam dados de saúde e compartilham informações pessoais diariamente através de aplicativos Android.",
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
      },
      {
        lang: "bash",
        code: "# Relatório de segurança: listando permissões perigosas\necho '=== PERMISSÕES PERIGOSAS ===' > relatorio.txt\ngrep 'uses-permission' work/AndroidManifest.xml | grep -i 'camera\\|location\\|contacts\\|sms\\|phone' >> relatorio.txt"
      },
      {
        lang: "bash",
        code: "# Verificando componentes exportados (superfície de ataque)\necho '=== COMPONENTES EXPORTADOS ===' >> relatorio.txt\ngrep -B1 'exported=\"true\"' work/AndroidManifest.xml >> relatorio.txt"
      },
      {
        lang: "bash",
        code: "# Buscando credenciais hardcoded\necho '=== POSSÍVEIS CREDENCIAIS ===' >> relatorio.txt\ngrep -rn 'password\\|secret\\|api_key\\|token' work/smali/ | head -20 >> relatorio.txt"
      },
      {
        lang: "bash",
        code: "# Verificando uso de criptografia fraca\necho '=== CRYPTO FRACA ===' >> relatorio.txt\ngrep -rn 'MD5\\|SHA1\\|DES\\|ECB' work/smali/ >> relatorio.txt"
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
      "Pesquisadores éticos são pilares da transparência na tecnologia.",
      "Divulgação responsável: reporte vulnerabilidades ao desenvolvedor antes de publicar.",
      "Use o OWASP Mobile Top 10 como checklist para testes de segurança.",
      "Documente achados com screenshots, logs e passos para reproduzir.",
      "Programas de Bug Bounty pagam por vulnerabilidades reportadas responsavelmente.",
      "Mantenha um lab isolado (emulador) para testes sem afetar dados reais."
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
      },
      {
        type: "success",
        content: "Se seu relatório identifica vulnerabilidades reais, você está pronto para Bug Bounty."
      },
      {
        type: "danger",
        content: "Nunca teste segurança em apps sem autorização explícita — isso é crime mesmo com boas intenções."
      }
    ]
  },
  {
    slug: "automatizando-com-script",
    section: "casos-praticos",
    title: "Automatizando o Fluxo com Bash/Python",
    difficulty: "avancado",
    subtitle: "Transformando o terminal em uma linha de montagem",
    intro: "A diferença entre um entusiasta e um profissional é a escala. Se você gasta 10 minutos para processar um APK manualmente, levará quase duas horas para processar 10. Com a automação, você processa centenas de APKs enquanto toma um cafezinho na padaria da esquina. É a mesma lógica de uma fábrica brasileira: o artesão que faz um sapato por vez produz peças bonitas, mas a linha de montagem automatizada calça o país inteiro. No mundo da engenharia reversa Android, criar scripts robustos em Bash ou Python para envolver o ApkTool é o auge da maturidade técnica — é quando você deixa de ser operário e se torna engenheiro do processo. Pense no ApkTool como uma máquina industrial poderosa: sozinha ela faz o trabalho pesado, mas sem um operador programando a sequência de operações, ela fica parada esperando comandos manuais. A automação é o programa CNC dessa máquina. Um script de automação bem feito não é apenas uma lista de comandos colados em sequência; ele lida com tratamento de erros inteligente (o que fazer quando um APK específico falha na decompilação?), gerencia diferentes versões de frameworks automaticamente, aplica patches cirúrgicos no código Smali usando expressões regulares precisas, e entrega o APK final assinado e otimizado sem nenhuma intervenção humana. Python, em particular, brilha nessa área por sua capacidade excepcional de manipulação de arquivos, parsing de XML, integração com ferramentas de terceiros via biblioteca 'subprocess', e seu ecossistema rico de bibliotecas para análise de dados e geração de relatórios. Com Python, você pode construir ferramentas completas que baixam APKs automaticamente de repositórios como o APKMirror, varrem o código decompilado em busca de chaves de API expostas, tokens hardcoded e URLs de servidores de desenvolvimento esquecidas, e geram relatórios detalhados em Markdown ou HTML prontos para serem compartilhados com a equipe. Bash, por outro lado, é imbatível para fluxos lineares e integração direta com o sistema operacional Linux, sendo perfeito para scripts de CI/CD que rodam em servidores. A automação não serve apenas para ganhar tempo; ela elimina completamente o erro humano — aquele typo no nome do arquivo, aquele passo esquecido na pressa — e garante que cada modificação seja aplicada de forma absolutamente consistente em todas as versões e variantes do aplicativo que você precisa processar.",
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
      },
      {
        lang: "bash",
        code: "# Script de análise automatizada em lote\n#!/bin/bash\nfor apk in apks/*.apk; do\n  echo \"Analisando: $apk\"\n  apktool d --no-src \"$apk\" -o /tmp/analysis/ -f\n  grep -l 'INTERNET' /tmp/analysis/AndroidManifest.xml && echo \"  -> Usa internet\"\n  rm -rf /tmp/analysis/\ndone"
      },
      {
        lang: "bash",
        code: "# Automatizando busca por padrões suspeitos\n#!/bin/bash\napktool d \"$1\" -o /tmp/scan/ -f 2>/dev/null\necho \"Trackers:\" && grep -rc 'facebook\\|firebase\\|adjust\\|appsflyer' /tmp/scan/smali/ | grep -v ':0$'\necho \"Crypto:\" && grep -rc 'MD5\\|DES' /tmp/scan/smali/ | grep -v ':0$'"
      },
      {
        lang: "bash",
        code: "# Usando Python para análise programática\npython3 -c \"\nimport os, re\nfor root, dirs, files in os.walk('work/smali'):\n    for f in files:\n        content = open(os.path.join(root,f)).read()\n        urls = re.findall(r'https?://[^\\\"]+', content)\n        if urls: print(f'{f}: {urls}')\n\""
      },
      {
        lang: "bash",
        code: "# Gerando relatório JSON automatizado\npython3 -c \"\nimport json, subprocess\nresult = {'permissions': [], 'urls': [], 'trackers': []}\n# ... preencher com dados da análise ...\nprint(json.dumps(result, indent=2))\n\" > report.json"
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
      "A biblioteca 'argparse' do Python cria ferramentas CLI profissionais.",
      "Automação permite analisar centenas de APKs em busca de padrões.",
      "Scripts Python + ApkTool formam uma combinação poderosa para análise em massa.",
      "Gere relatórios estruturados (JSON/CSV) para facilitar triagem.",
      "Integre com CI/CD para análise automática de segurança em builds.",
      "Ferramentas como MobSF automatizam muitas verificações de segurança."
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
      },
      {
        type: "success",
        content: "Se seu script processa múltiplos APKs sem erros, a automação está funcionando."
      },
      {
        type: "tip",
        content: "Use GNU parallel para acelerar análise em lote em máquinas com múltiplos cores."
      }
    ]
  },
  {
    slug: "erros-comuns-e-solucoes",
    section: "casos-praticos",
    title: "Erros Comuns e Como Resolver",
    difficulty: "avancado",
    subtitle: "A enciclopédia de solução de problemas",
    intro: "Trabalhar com o ApkTool é uma jornada pontuada por mensagens de erro em vermelho no terminal — e se você nunca viu uma, provavelmente ainda não começou de verdade. Esses erros não são sinais de fracasso ou incompetência; são guias valiosos que apontam inconsistências no processo, como as luzes de advertência no painel de um carro que te avisam antes que o motor funda. No Brasil, temos um ditado perfeito para isso: 'errar é humano, persistir no erro é burrice'. E é exatamente por isso que este capítulo existe — para que você não persista nos mesmos erros que já tiraram o sono de milhares de desenvolvedores ao redor do mundo. A maioria das falhas com o ApkTool ocorre em três momentos críticos e bem definidos do fluxo de trabalho. O primeiro é durante o decoding (decompilação), onde os problemas geralmente envolvem falta de frameworks específicos do fabricante do celular, APKs corrompidos durante o download ou transferência, ou versões incompatíveis entre o ApkTool e o APK alvo. O segundo momento crítico é durante o build (recompilação), onde erros de sintaxe XML — uma tag não fechada, um atributo duplicado, um caractere especial não escapado — ou recursos duplicados e referências quebradas impedem a geração do novo APK. O terceiro e último momento de dor é durante a instalação no dispositivo, onde problemas de assinatura digital incompatível, versão mínima de SDK não atendida, ou conflitos com a versão já instalada do app frustram o teste final. O erro 'brut.androlib.err.InFileNotFoundException', por exemplo, é um clássico absoluto que indica que o ApkTool tentou acessar um recurso referenciado no código mas que não existe fisicamente na pasta de saída, geralmente porque ele não conseguiu decodificar corretamente um arquivo binário específico do fabricante. Já erros como 'INSTALL_FAILED_OLDER_SDK' mostram um desalinhamento entre as versões de SDK definidas no AndroidManifest e a versão do Android rodando no dispositivo de teste — é como tentar rodar um jogo de PS5 num PS3. Entender a causa raiz de cada erro — que muitas vezes está escondida atrás de uma longa e intimidadora pilha de exceções Java — é a habilidade fundamental que separa o mestre do iniciante. O iniciante lê apenas a primeira linha e entra em pânico; o mestre rola até o final, encontra o 'Caused by' mais interno, e resolve o problema na fonte. Este capítulo serve como seu guia de consulta rápida, o 'porto seguro' onde você encontrará as soluções testadas e comprovadas para os problemas mais frequentes da comunidade.",
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
      },
      {
        lang: "bash",
        code: "# Erro: 'brut.androlib.AndrolibException'\n# Solução: atualizar ApkTool ou usar --use-aapt2\napktool b --use-aapt2 work/"
      },
      {
        lang: "bash",
        code: "# Erro: 'resource not found'\n# Solução: verificar public.xml e IDs referenciados\ngrep '0x7f' work/res/values/public.xml | wc -l\n# Comparar com referências no Smali"
      },
      {
        lang: "bash",
        code: "# Erro: 'INSTALL_FAILED_UPDATE_INCOMPATIBLE'\n# Solução: desinstalar versão anterior\nadb uninstall com.exemplo.app\nadb install mod.apk"
      },
      {
        lang: "bash",
        code: "# Erro: 'VerifyError' após modificar Smali\n# Solução: verificar .locals, tipos e registradores\nadb logcat -d | grep -A5 'VerifyError'\n# O logcat mostra exatamente qual método tem o erro"
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
      "O StackOverflow e o GitHub do ApkTool são as melhores fontes para erros novos.",
      "A maioria dos erros de build são causados por XML malformado ou IDs quebrados.",
      "VerifyError indica problema no Smali: tipos incompatíveis ou registradores errados.",
      "INSTALL_FAILED = problema de assinatura ou versão incompatível.",
      "Sempre leia o logcat após um crash para identificar a causa raiz.",
      "Mantenha um documento com erros comuns e suas soluções para referência rápida."
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
      },
      {
        type: "success",
        content: "Se você resolveu o erro consultando o logcat, está debugando como profissional."
      },
      {
        type: "tip",
        content: "Mantenha um 'cheat sheet' pessoal com erros que você já resolveu e suas soluções."
      }
    ]
  }
];
