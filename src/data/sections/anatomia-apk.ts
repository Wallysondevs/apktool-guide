import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "o-que-e-um-apk",
    section: "anatomia-apk",
    title: "O Que é um APK?",
    difficulty: "iniciante",
    subtitle: "A mala de viagem do seu aplicativo",
    intro: "Imagine que você vai viajar e precisa levar roupas, sapatos, documentos e produtos de higiene. Você não leva tudo solto na mão; você organiza tudo dentro de uma mala resistente e trancada. O APK (Android Package Kit) é exatamente essa mala. Quando um desenvolvedor termina de escrever o código em Java ou Kotlin, o Android Studio não envia milhares de arquivos soltos para o seu celular. Ele compacta tudo — a lógica, as imagens, os sons e as regras de segurança — em um único arquivo com a extensão .apk. Historicamente, o APK é um descendente do formato JAR do Java, mas adaptado para a realidade dos dispositivos móveis. No Brasil, onde temos uma diversidade enorme de aparelhos, do topo de linha ao de entrada, o APK garante que o app chegue 'inteiro' ao destino. Mas cuidado: o APK é um arquivo binário, o que significa que se você tentar lê-lo como um texto comum, verá apenas um amontoado de símbolos sem sentido. Entender que o APK é um contêiner assinado digitalmente é o primeiro passo para respeitar sua estrutura. Ele é o resultado final de um longo processo de compilação, onde o código humano é mastigado para que o processador do celular consiga executá-lo com o menor consumo de bateria possível. Vamos abrir essa mala e descobrir que ela é muito mais organizada do que parece à primeira vista.",
    codes: [
      {
        lang: "bash",
        code: "# Verificando o tipo real do arquivo independente da extensão\nfile meu_app.apk # O comando 'file' analisa o cabeçalho do arquivo\n# Ele responderá que é um 'Zip archive data', confirmando sua natureza de contêiner."
      },
      {
        lang: "bash",
        code: "# Listando o conteúdo do APK sem ferramentas de engenharia reversa\nunzip -l meu_app.apk # '-l' significa list (listar apenas)\n# Você verá nomes de arquivos familiares como 'AndroidManifest.xml' e 'classes.dex'."
      },
      {
        lang: "bash",
        code: "# Calculando o hash (identidade única) do arquivo\nsha256sum meu_app.apk # Gera uma impressão digital única do APK\n# Útil para garantir que o arquivo não foi alterado por terceiros."
      },
      {
        lang: "bash",
        code: "# Verificando o tamanho detalhado de cada item na 'mala'\ndu -ak meu_app.apk # Mostra o uso de disco em kilobytes\n# Ajuda a identificar se o que mais pesa no app são as imagens ou o código."
      },
      {
        lang: "bash",
        code: "# Espiando as primeiras linhas binárias (curiosidade técnica)\nhead -c 50 meu_app.apk | xxd # Mostra os primeiros 50 bytes em hexadecimal\n# Os primeiros caracteres 'PK' são a assinatura universal de arquivos ZIP."
      },
      {
        lang: "bash",
        code: "# Verificando se o APK possui assinaturas v1, v2 ou v3\napksigner verify --verbose meu_app.apk # Ferramenta oficial do Android SDK\n# Essencial para saber se o APK é original da Play Store."
      }
    ],
    points: [
      "APK significa Android Package Kit, o formato padrão de distribuição do Android.",
      "Estruturalmente, um APK é um arquivo ZIP com uma organização interna rígida.",
      "Contém código compilado (DEX), recursos (XML/Imagens) e assinaturas digitais.",
      "O formato APK protege a integridade do app; qualquer alteração invalida a assinatura.",
      "É descendente do formato JAR (Java Archive), mas otimizado para o sistema Dalvik/ART.",
      "A Play Store usa variações como o AAB (Android App Bundle) para gerar APKs otimizados.",
      "O arquivo AndroidManifest.xml dentro dele é o 'cérebro' que guia o sistema Android.",
      "Arquivos .apk podem ser instalados manualmente (sideloading) se autorizado pelo usuário.",
      "A compactação ZIP reduz o consumo de dados durante o download do aplicativo.",
      "Entender o APK é a base para qualquer análise de malware ou modding Android."
    ],
    alerts: [
      {
        type: "info",
        content: "Mudar a extensão de .apk para .zip permite ver os arquivos, mas não permite editá-los corretamente."
      },
      {
        type: "warning",
        content: "Instalar APKs de fontes desconhecidas é o principal vetor de infecção por vírus no Android."
      },
      {
        type: "tip",
        content: "Se um APK for muito pequeno (menos de 1MB), ele provavelmente é apenas um instalador que baixa o resto pela internet."
      }
    ]
  },
  {
    slug: "dentro-do-apk-zip",
    section: "anatomia-apk",
    title: "Dentro do APK: A Estrutura ZIP",
    difficulty: "iniciante",
    subtitle: "Desmascarando o arquivo .apk",
    intro: "Aqui vai um segredo que todo hacker Android adora contar: se você pegar qualquer arquivo .apk e mudar a extensão dele para .zip, você pode abri-lo como se fosse uma pasta comum no seu Windows ou Mac. Isso acontece porque o Google escolheu o formato ZIP — aquele mesmo que usamos para compactar documentos — como a fundação do APK. No entanto, ao abrir esse 'ZIP disfarçado', você se deparará com um cenário estranho. Algumas pastas como 'res' e 'lib' farão sentido, mas arquivos como o AndroidManifest.xml parecerão estar escritos em uma língua alienígena. Isso ocorre porque o Android converte os arquivos XML de texto puro em XMLs binários para economizar espaço e processamento. É como se o Android fizesse um resumo super eficiente que só ele consegue ler rápido. Além disso, temos a pasta META-INF, que é como o lacre de segurança de um caminhão de carga: se você romper esse lacre ou mudar um único bit dentro do ZIP, o Android perceberá e se recusará a rodar o app. Explorar a estrutura ZIP é o nosso 'reconhecimento de terreno'. Antes de usar o ApkTool para a tradução pesada, entender onde cada peça mora na hierarquia de pastas é fundamental para não se perder no labirinto de arquivos que compõem um aplicativo moderno.",
    codes: [
      {
        lang: "bash",
        code: "# Extraindo o conteúdo básico para uma pasta\nunzip meu_app.apk -d pasta_app # Descompacta tudo o que há dentro\n# Agora você pode navegar pelas subpastas como faria no seu computador."
      },
      {
        lang: "bash",
        code: "# Verificando a pasta de bibliotecas nativas (C/C++)\nls -R pasta_app/lib/ # Lista recursivamente as arquiteturas suportadas\n# Você verá subpastas como 'armeabi-v7a', 'arm64-v8a' ou 'x86_64'."
      },
      {
        lang: "bash",
        code: "# Espiando a pasta de recursos compilados\nls pasta_app/res/ # Aqui moram os layouts, ícones e cores\n# Note que os arquivos XML aqui dentro ainda são binários ilegíveis."
      },
      {
        lang: "bash",
        code: "# Olhando os 'lacres' de segurança na pasta META-INF\nls pasta_app/META-INF/ # Contém arquivos como CERT.RSA e MANIFEST.MF\n# Sem esses arquivos (ou se alterados), o Android rejeita a instalação."
      },
      {
        lang: "bash",
        code: "# Verificando arquivos de ativos brutos (Assets)\nls pasta_app/assets/ # Aqui ficam fontes, modelos 3D ou bancos de dados SQLite\n# Diferente da /res, aqui os arquivos geralmente mantêm seu formato original."
      },
      {
        lang: "bash",
        code: "# Checando a existência do índice de recursos\nls -l pasta_app/resources.arsc # Este arquivo é o dicionário que o Android usa\n# Ele mapeia IDs numéricos para nomes de recursos reais (ex: @string/app_name)."
      }
    ],
    points: [
      "O APK utiliza compactação ZIP padrão (DEFLATE) em sua estrutura.",
      "A pasta /lib armazena código nativo compilado para diferentes processadores.",
      "A pasta /res contém recursos que o Android gerencia (strings, layouts, ícones).",
      "A pasta /assets guarda arquivos brutos que o app lê como se fossem arquivos comuns.",
      "META-INF é a pasta crítica que armazena a assinatura e o manifesto do ZIP.",
      "AndroidManifest.xml na raiz do ZIP está em formato binário (AXML).",
      "classes.dex é o arquivo que contém todo o código executável do aplicativo.",
      "resources.arsc funciona como uma tabela de consulta para todos os recursos do app.",
      "Arquivos dentro de /assets não são 'catalogados' pelo sistema, ao contrário da /res.",
      "A ordem dos arquivos dentro do ZIP pode afetar a performance de carregamento."
    ],
    alerts: [
      {
        type: "warning",
        content: "Nunca tente substituir um arquivo dentro do ZIP e instalar de volta. O Android detectará a falha na assinatura!"
      },
      {
        type: "info",
        content: "Alguns aplicativos novos usam o formato 'Split APKs', onde as pastas de recursos ficam em APKs separados."
      },
      {
        type: "tip",
        content: "Use o comando 'unzip -v' para ver o nível de compressão de cada arquivo dentro do APK."
      }
    ]
  },
  {
    slug: "o-que-e-dex",
    section: "anatomia-apk",
    title: "O Que é o Arquivo DEX?",
    difficulty: "iniciante",
    subtitle: "Dalvik Executable: O cérebro do App",
    intro: "Se o APK é o corpo do aplicativo, o arquivo classes.dex é o seu cérebro. DEX significa Dalvik Executable. Quando um programador termina seu código em Java ou Kotlin, ele é transformado primeiro em 'bytecode' Java (aqueles arquivos .class que rodam no PC). No entanto, o Android foi projetado para rodar em dispositivos com pouca memória e bateria limitada. Por isso, o Google criou um processo extra: ele pega todos os arquivos .class, remove redundâncias e os compacta em um único arquivo .dex altamente otimizado. No Brasil, onde muitos usuários possuem celulares com hardware modesto, essa eficiência é o que permite que apps complexos rodem sem travar. Existe, porém, um limite histórico famoso: um único arquivo DEX só pode ter 65.536 métodos (instruções). Quando um app fica gigante e ultrapassa esse limite, o desenvolvedor precisa usar o 'MultiDex', gerando arquivos como classes2.dex, classes3.dex e assim por diante. Entender o DEX é fundamental porque é nele que reside toda a lógica: desde como o app faz login até como ele processa seus pagamentos. O ApkTool transforma esse binário complexo em arquivos .smali, que são como uma radiografia do pensamento do aplicativo, permitindo que possamos ler e, se necessário, alterar seu comportamento.",
    codes: [
      {
        lang: "bash",
        code: "# Verificando quantos arquivos DEX o app possui\nls *.dex # Execute isso na pasta extraída do APK\n# Apps grandes terão classes.dex, classes2.dex, etc. (MultiDex)."
      },
      {
        lang: "bash",
        code: "# Usando o ApkTool para transformar DEX em Smali\napktool d meu_app.apk # O ApkTool faz essa conversão automaticamente\n# DEX (Máquina) -> Smali (Humano)."
      },
      {
        lang: "bash",
        code: "# Contando quantos métodos existem em um DEX (usando ferramenta externa)\ndex-method-counts classes.dex # Mostra se o app está perto do limite de 64k\n# Útil para entender a complexidade do código-fonte."
      },
      {
        lang: "smali",
        code: "# Exemplo de como uma instrução DEX aparece em Smali\ninvoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z\n# Isso é a máquina virtual comparando dois textos (String.equals)."
      },
      {
        lang: "bash",
        code: "# Verificando a versão do formato DEX\nhead -c 8 classes.dex | xxd # Mostra os primeiros bytes do arquivo\n# Você verá algo como 'dex 035' ou 'dex 037', indicando a compatibilidade."
      },
      {
        lang: "bash",
        code: "# Procurando por strings específicas dentro do binário DEX (rápido)\nstrings classes.dex | grep \"API_KEY\"\n# Às vezes, chaves secretas são esquecidas no código e aparecem aqui."
      }
    ],
    points: [
      "DEX é o formato executável exclusivo da máquina virtual do Android (Dalvik/ART).",
      "É o resultado da fusão e otimização de múltiplos arquivos .class do Java.",
      "O limite de 65.536 métodos é conhecido como o 'limite de 64k'.",
      "MultiDex é a técnica de dividir a lógica em múltiplos arquivos .dex.",
      "O código DEX é o alvo principal para análise de lógica e algoritmos.",
      "Ferramentas como o 'dex2jar' tentam converter DEX de volta para Java (nem sempre perfeito).",
      "O Smali é a representação em texto do bytecode contido no arquivo DEX.",
      "Arquivos DEX são otimizados para economia de registros e memória RAM.",
      "No Android moderno (ART), o DEX é pré-compilado para código nativo (OAT) na instalação.",
      "A segurança do app muitas vezes depende de quão difícil é ler o código DEX (obfuscação)."
    ],
    alerts: [
      {
        type: "info",
        content: "DEX significa 'Dalvik Executable', em homenagem à vila de Dalvik, na Islândia, onde o criador da VM tinha antepassados."
      },
      {
        type: "danger",
        content: "Alterar um arquivo DEX manualmente sem ferramentas como ApkTool ou Baksmali é virtualmente impossível para humanos."
      },
      {
        type: "warning",
        content: "Alguns apps usam 'Packers' que escondem o arquivo DEX real dentro de outro arquivo para evitar análise."
      }
    ]
  },
  {
    slug: "resources-e-assets",
    section: "anatomia-apk",
    title: "Resources vs Assets",
    difficulty: "iniciante",
    subtitle: "A aparência e os pertences do app",
    intro: "Dentro de um APK, existem duas formas de guardar arquivos que não são código: os Resources (Recursos) e os Assets (Ativos). Pense nos Resources (pasta /res) como as roupas e acessórios de um ator de teatro que o diretor (o Android) catalogou e organizou em um guarda-roupa. O Android sabe exatamente onde está cada item e até troca a roupa automaticamente se o cenário mudar — por exemplo, ele carrega ícones diferentes se o celular for de alta resolução ou muda os textos se o usuário trocar o idioma para Inglês. Tudo isso é gerenciado pelo arquivo resources.arsc, que é o grande inventário do app. Já os Assets (pasta /assets) são como a mala pessoal do ator: ele guarda o que quiser lá dentro, de qualquer jeito, e o Android não se mete. Pode ser um banco de dados, uma fonte exótica ou um vídeo de introdução. Para ler um Asset, o desenvolvedor precisa escrever um código específico que 'abre a mala' e procura o arquivo pelo nome. No Brasil, essa distinção é importante para quem quer traduzir apps (mexendo nos Resources) ou extrair músicas e sons de um jogo (geralmente escondidos nos Assets). Vamos aprender a diferenciar esses dois mundos para saber exatamente onde colocar as mãos quando quisermos mudar a cara de um aplicativo.",
    codes: [
      {
        lang: "xml",
        code: "<!-- Exemplo de Resource em res/values/strings.xml -->\n<string name=\"welcome_msg\">Bem-vindo ao nosso App!</string>\n<!-- O Android gera um ID numérico automático para este recurso. -->"
      },
      {
        lang: "bash",
        code: "# Listando imagens nos Resources (organizadas por densidade)\nls res/drawable-xxhdpi/ # Imagens para telas de altíssima definição\n# O Android escolhe a pasta certa baseado na tela do celular."
      },
      {
        lang: "bash",
        code: "# Espiando a pasta de Assets (arquivos 'crus')\nls assets/fonts/ # Fontes personalizadas que o app usa\n# Aqui o Android não aplica nenhuma lógica automática de seleção."
      },
      {
        lang: "bash",
        code: "# Localizando o arquivo de índice de recursos\nls -lh resources.arsc # O arquivo que mapeia tudo da pasta /res\n# Sem ele, o Android não saberia que o ID 0x7f010001 é o seu ícone."
      },
      {
        lang: "xml",
        code: "<!-- Como um layout consome um recurso em res/layout/activity_main.xml -->\n<TextView android:text=\"@string/welcome_msg\" />\n<!-- O '@string/' é o ponteiro para o dicionário de recursos. -->"
      },
      {
        lang: "bash",
        code: "# Extraindo uma imagem específica dos Resources para edição\ncp res/drawable-hdpi/ic_launcher.png ~/Desktop/\n# Depois de editada, o ApkTool ajudará a colocá-la de volta corretamente."
      }
    ],
    points: [
      "Resources (/res) são arquivos estruturados e catalogados pelo sistema Android.",
      "Assets (/assets) são arquivos brutos que o app acessa livremente pelo caminho da pasta.",
      "O arquivo resources.arsc é o 'cérebro' que gerencia todos os recursos da pasta /res.",
      "A seleção de recursos é dinâmica baseada no contexto (idioma, orientação, densidade).",
      "Qualificadores de pasta (ex: -pt-rBR) permitem regionalização automática de apps.",
      "Layouts XML definem a estrutura visual e são convertidos em binário no APK.",
      "Strings.xml centraliza todos os textos, facilitando muito a tradução (i18n).",
      "Arquivos em /assets podem manter extensões personalizadas e estruturas de subpastas livres.",
      "O comando aapt2 é a ferramenta moderna do Google que compila esses recursos.",
      "Modificar o arquivo resources.arsc diretamente é extremamente complexo sem o ApkTool."
    ],
    alerts: [
      {
        type: "tip",
        content: "Para mudar a cor de um app, você geralmente edita o arquivo 'res/values/colors.xml'."
      },
      {
        type: "info",
        content: "Muitos jogos em Unity guardam 99% de seus arquivos na pasta /assets, deixando a /res quase vazia."
      },
      {
        type: "warning",
        content: "Cuidado ao deletar recursos: se o código DEX tentar chamar um ID que não existe no resources.arsc, o app travará na hora!"
      }
    ]
  },
  {
    slug: "androidmanifest-xml",
    section: "anatomia-apk",
    title: "O AndroidManifest.xml",
    difficulty: "iniciante",
    subtitle: "A certidão de nascimento e o contrato",
    intro: "Se o APK fosse um prédio, o AndroidManifest.xml seria a planta baixa, a lista de moradores e o regulamento do condomínio, tudo em um único papel colado na porta de entrada. Todo aplicativo Android PRECISA desse arquivo na sua raiz. Nele, o app declara solenemente ao sistema operacional: 'Eu existo, meu nome oficial é este, eu exijo estas permissões para rodar e as portas de entrada para o usuário são estas'. Sem o manifesto, o Android não sabe o que fazer com o APK e simplesmente o ignora. Historicamente, o manifesto é a primeira linha de defesa e a primeira fonte de informação para qualquer analista. Quer saber se o app pode ler seus SMS ou acessar sua localização? O manifesto revela. Quer descobrir funções escondidas que não aparecem no menu principal? O manifesto lista todas as 'Activities' (telas). No Brasil, onde a privacidade digital é um tema cada vez mais forte com a LGPD, saber ler um manifesto é essencial para identificar se um app de 'Calculadora' está pedindo permissões abusivas de acesso aos seus contatos ou microfone. O ApkTool transforma o manifesto binário ilegível em um XML de texto puro, permitindo que você audite ou até altere as regras do jogo do aplicativo.",
    codes: [
      {
        lang: "xml",
        code: "<!-- A raiz do Manifesto: define o ID único do aplicativo -->\n<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    package=\"com.exemplo.meuapp\">\n    <!-- Este 'package' é a identidade digital do app no Android. -->"
      },
      {
        lang: "xml",
        code: "<!-- Declarando permissões: o que o app tem o direito de fazer -->\n<uses-permission android:name=\"android.permission.INTERNET\" />\n<uses-permission android:name=\"android.permission.CAMERA\" />\n<!-- Se não estiver aqui, o Android bloqueia o acesso na hora. -->"
      },
      {
        lang: "xml",
        code: "<!-- Definindo a tela principal que aparece no menu do celular -->\n<activity android:name=\".MainActivity\">\n    <intent-filter>\n        <action android:name=\"android.intent.action.MAIN\" />\n        <category android:name=\"android.intent.category.LAUNCHER\" />\n    </intent-filter>\n</activity>"
      },
      {
        lang: "xml",
        code: "<!-- Especificando as versões do Android suportadas -->\n<uses-sdk android:minSdkVersion=\"21\" android:targetSdkVersion=\"34\" />\n<!-- minSdkVersion 21 significa que o app roda do Android 5.0 para cima. -->"
      },
      {
        lang: "xml",
        code: "<!-- Declarando um serviço que roda em segundo plano -->\n<service android:name=\".NotificacaoService\" android:exported=\"false\" />\n<!-- 'exported=false' significa que outros apps não podem chamar este serviço. -->"
      },
      {
        lang: "xml",
        code: "<!-- Configurações de Hardware exigidas -->\n<uses-feature android:name=\"android.hardware.camera.autofocus\" android:required=\"false\" />\n<!-- Diz ao Android que o app usa a câmera, mas não é obrigatório ter foco. -->"
      }
    ],
    points: [
      "O Manifesto é o arquivo de configuração central e obrigatório de todo APK.",
      "Define o 'Package Name', que é o identificador único do app em todo o ecossistema.",
      "Lista todas as permissões que o usuário precisará conceder para o app funcionar.",
      "Declara os quatro componentes básicos: Activities, Services, Receivers e Providers.",
      "O 'Intent Filter' com a categoria LAUNCHER define qual tela abre pelo ícone.",
      "Especifica os requisitos de hardware (GPS, Bluetooth, NFC).",
      "Controla o versionamento do app e a compatibilidade com versões do Android (SDK).",
      "Permite configurar se o app pode ser movido para o cartão SD ou se permite backup.",
      "É o primeiro arquivo a ser analisado em busca de comportamentos suspeitos ou maliciosos.",
      "O ApkTool decodifica o formato binário AXML de volta para XML legível."
    ],
    alerts: [
      {
        type: "danger",
        content: "Permissões como 'READ_SMS' ou 'PROCESS_OUTGOING_CALLS' em apps comuns são sinais vermelhos de possível malware."
      },
      {
        type: "info",
        content: "Você pode adicionar a tag 'android:debuggable=\"true\"' no manifesto para facilitar a análise dinâmica."
      },
      {
        type: "tip",
        content: "Se o app não instala por 'Erro de Análise', verifique se você não esqueceu de fechar alguma tag XML no Manifesto."
      }
    ]
  },
  {
    slug: "como-android-carrega-app",
    section: "anatomia-apk",
    title: "Como o Android Carrega o App",
    difficulty: "iniciante",
    subtitle: "Do toque na tela à execução",
    intro: "O que acontece nos milissegundos entre você tocar no ícone de um app e ele aparecer na sua frente? É uma coreografia tecnológica fascinante. Primeiro, o PackageManager do Android consulta o AndroidManifest daquele APK para saber qual é o nome da 'Activity' principal. Em seguida, o sistema operacional invoca o processo 'Zygote' — um processo pai que já tem o básico do Android carregado — para dar à luz a um novo processo exclusivo para o seu aplicativo (o famoso isolamento de Sandbox). O ClassLoader entra em cena e começa a ler o arquivo classes.dex. No Android moderno, esse arquivo muitas vezes já foi pré-compilado para código de máquina nativo (formato .oat) durante a instalação para ganhar velocidade, um processo chamado AOT (Ahead-of-Time). Enquanto a lógica de código começa a rodar, o Android busca os recursos visuais no resources.arsc. Ele detecta que você está em São Paulo, o seu celular está em Português e a sua tela é de alta densidade, buscando então as strings e imagens exatas para esse cenário. O ApkTool nos permite ser os 'diretores' dessa peça: ao modificar o APK, estamos alterando o roteiro (DEX), o cenário (XML) e o figurino (Resources) antes mesmo da cortina subir. Entender esse fluxo é o que separa quem apenas 'troca ícones' de quem realmente entende de engenharia de software mobile.",
    codes: [
      {
        lang: "bash",
        code: "# Observando o sistema iniciar um novo processo para o app\nadb logcat | grep \"ActivityManager: Start proc\"\n# Você verá o Android criando o ambiente isolado (Sandbox) para o APK."
      },
      {
        lang: "bash",
        code: "# Verificando onde o Android guarda o código otimizado (OAT)\n# No dispositivo: /data/dalvik-cache/ ou junto da pasta do app\n# O comando 'dex2oat' é quem faz essa mágica na instalação."
      },
      {
        lang: "bash",
        code: "# Listando os pacotes instalados e seus caminhos reais\nadb shell pm path com.exemplo.app\n# Mostra onde o Android 'escondeu' o APK original após a instalação."
      },
      {
        lang: "bash",
        code: "# Verificando o uso de memória do app logo após o carregamento\nadb shell dumpsys meminfo com.exemplo.app\n# Mostra quanto do código DEX e dos Resources foi carregado na RAM."
      },
      {
        lang: "bash",
        code: "# Forçando o encerramento do app para testar o 'Cold Start' (partida a frio)\nadb shell am force-stop com.exemplo.app\n# Útil para ver o tempo que o Android leva para carregar tudo do zero."
      },
      {
        lang: "bash",
        code: "# Vendo a hierarquia de telas (Activities) carregadas\nadb shell dumpsys activity activities | grep \"ResumedActivity\"\n# Confirma qual tela o sistema decidiu mostrar primeiro baseada no Manifesto."
      }
    ],
    points: [
      "Zygote é o processo 'pai' que acelera o carregamento de todos os apps no Android.",
      "O PackageManager é o zelador que conhece todos os APKs instalados no sistema.",
      "Sandbox: cada app roda em seu próprio processo e usuário Linux para segurança.",
      "O ClassLoader carrega o código DEX para a memória de forma sob demanda.",
      "ART (Android Runtime) é a sucessora da antiga Dalvik e oferece maior performance.",
      "AOT (Ahead-of-Time) compila o app durante a instalação para abrir mais rápido.",
      "JIT (Just-in-Time) compila partes do código enquanto o usuário usa o app.",
      "Resources são carregados através de um AssetManager que lê o resources.arsc.",
      "A assinatura digital é verificada pelo sistema antes de qualquer código ser executado.",
      "Entender o ciclo de vida da Activity ajuda a saber quando os recursos são liberados."
    ],
    alerts: [
      {
        type: "info",
        content: "A partir do Android 7.0, o sistema usa uma mistura de JIT e AOT para equilibrar performance e espaço em disco."
      },
      {
        type: "tip",
        content: "Se o seu app modificado fecha instantaneamente ('Force Close'), o 'adb logcat' dirá qual parte do carregamento falhou."
      },
      {
        type: "warning",
        content: "Modificações que aumentam demais o tamanho do DEX podem deixar o carregamento inicial perceptivelmente mais lento."
      }
    ]
  }
];
