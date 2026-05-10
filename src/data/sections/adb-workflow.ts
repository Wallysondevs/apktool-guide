import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "o-que-e-adb",
    section: "adb-workflow",
    title: "O Que é ADB?",
    difficulty: "iniciante",
    subtitle: "A ponte de comando definitiva entre seu PC e o Android",
    intro: "O Android Debug Bridge (ADB) é, sem dúvida, a ferramenta mais importante no cinto de utilidades de qualquer pessoa que queira ir além da superfície do sistema Android. Imagine que você está pilotando um navio (seu smartphone) e o ADB é o tubo de comunicação que permite que o capitão na ponte de comando (seu computador) envie ordens diretas para a sala de máquinas (o kernel do Linux dentro do Android). Pense nele como o interfone de um prédio residencial no Brasil: o porteiro (seu PC) precisa de um canal direto para falar com cada apartamento (cada processo do Android), e o ADB é exatamente esse canal — confiável, direto e sempre disponível quando configurado corretamente.\n\nHistoricamente, o ADB foi criado pelo Google para que desenvolvedores pudessem testar seus apps sem precisar tocar fisicamente na tela do celular a cada pequena mudança. Ele funciona através de um protocolo cliente-servidor engenhoso. Existem três partes: o \"cliente\" (o comando 'adb' que você digita no terminal), o \"servidor\" (um processo que roda em background no seu PC) e o \"daemon\" (o 'adbd', um processo persistente que vive dentro do seu celular esperando ordens). Essa arquitetura é semelhante ao sistema de delivery que usamos tanto no Brasil: você (cliente) faz o pedido pelo app, a central (servidor) organiza e despacha, e o entregador (daemon) executa a entrega na ponta final. Cada parte tem sua responsabilidade bem definida, e se uma falhar, o sistema inteiro para.\n\nNo Brasil, onde muitos dispositivos chegam com interfaces customizadas e cheias de softwares desnecessários (bloatwares), o ADB tornou-se famoso não apenas para desenvolvedores, mas para usuários comuns que queriam \"limpar\" seus celulares ou extrair APKs para compartilhamento e engenharia reversa. É como aquela faxina de fim de ano que todo brasileiro faz em casa: você precisa de ferramentas adequadas para tirar o que não serve, reorganizar o que fica e garantir que tudo funcione melhor depois. O ADB é essa vassoura tecnológica que varre o lixo digital do seu dispositivo com precisão cirúrgica.\n\nAlém disso, o ADB é a porta de entrada para um universo inteiro de possibilidades que vão desde a automação de tarefas repetitivas até a análise forense de aplicativos. Profissionais de segurança da informação no Brasil utilizam o ADB diariamente para investigar malwares em dispositivos Android, capturar logs de sistema que revelam comportamentos suspeitos e extrair evidências digitais. Para o modder iniciante, entender o ADB é como aprender a dirigir antes de participar de uma corrida: sem essa base, você não vai a lugar nenhum. Sem o ADB, você é apenas um passageiro no seu celular; com ele, você tem a chave mestra do sistema.",
    codes: [
      {
        lang: "bash",
        code: "# Mostra a versão instalada do ADB e o caminho do binário\nadb version\n# Útil para garantir que você não está usando uma versão obsoleta"
      },
      {
        lang: "bash",
        code: "# O comando central: Inicia o servidor ADB no PC caso ele não esteja rodando\nadb start-server"
      },
      {
        lang: "bash",
        code: "# Mata o servidor atual (útil quando a conexão USB 'trava' ou fica instável)\nadb kill-server"
      },
      {
        lang: "bash",
        code: "# Exemplo de comando via Shell: verifica o tempo que o celular está ligado\nadb shell uptime"
      },
      {
        lang: "bash",
        code: "# Mostra o modelo do hardware conectado\nadb shell getprop ro.product.model"
      },
      {
        lang: "bash",
        code: "# O ADB se comunica via porta 5037 por padrão entre o cliente e o servidor local"
      },
      {
        lang: "bash",
        code: "# Verificando a versão do ADB instalada\nadb version\n# Deve retornar 'Android Debug Bridge version X.X.X'"
      },
      {
        lang: "bash",
        code: "# Iniciando o servidor ADB manualmente\nadb start-server\n# Necessário se o daemon não estiver rodando"
      },
      {
        lang: "bash",
        code: "# Matando e reiniciando o servidor ADB (resolve conexões travadas)\nadb kill-server && adb start-server\n# Solução para 'device not found' ou 'unauthorized'"
      },
      {
        lang: "bash",
        code: "# Verificando variáveis de ambiente do Android SDK\necho $ANDROID_HOME\necho $PATH | tr ':' '\\n' | grep android\n# Confirma que o ADB está acessível no PATH"
      }
    ],
    points: [
      "ADB significa Android Debug Bridge (Ponte de Depuração Android).",
      "É uma ferramenta de linha de comando versátil para gerenciar dispositivos.",
      "Baseia-se em uma arquitetura cliente-servidor com três componentes distintos.",
      "O 'adbd' (daemon) roda no celular e exige permissões elevadas para certas tarefas.",
      "Permite instalação, desinstalação e extração de aplicativos (APKs).",
      "Dá acesso ao Shell do Android, que é um ambiente baseado em Linux.",
      "Pode ser usado para capturar logs do sistema em tempo real (Logcat).",
      "Suporta transferência de arquivos bidirecional (Push e Pull).",
      "Indispensável para automação de testes e engenharia reversa.",
      "Funciona via cabo USB, redes Wi-Fi ou até emuladores locais.",
      "ADB significa Android Debug Bridge — é a ponte entre PC e dispositivo Android.",
      "Funciona via USB ou Wi-Fi (após configuração inicial via USB).",
      "O daemon adb roda em background e gerencia conexões com dispositivos.",
      "É parte do Android SDK Platform Tools (download gratuito do Google).",
      "Permite instalar apps, extrair arquivos, executar comandos shell e muito mais."
    ],
    alerts: [
      {
        type: "info",
        content: "O ADB faz parte do pacote 'Android SDK Platform-Tools', fornecido oficialmente pelo Google."
      },
      {
        type: "warning",
        content: "Embora poderoso, o ADB pode ser perigoso: comandos errados podem deletar dados do usuário ou desativar apps vitais do sistema."
      },
      {
        type: "tip",
        content: "Se o seu comando ADB travar, o primeiro passo é sempre 'adb kill-server' seguido de 'adb devices'."
      },
      {
        type: "success",
        content: "O ADB é a base para ferramentas gráficas famosas, mas saber usá-lo via linha de comando te dá muito mais flexibilidade."
      },
      {
        type: "success",
        content: "Se adb version retorna sem erro, a ferramenta está instalada e pronta."
      },
      {
        type: "danger",
        content: "Nunca execute adb como root no PC — pode causar problemas de permissão nos arquivos."
      }
    ]
  },
  {
    slug: "instalando-adb",
    section: "adb-workflow",
    title: "Instalando o ADB",
    difficulty: "iniciante",
    subtitle: "Configurando seu ambiente de trabalho no Windows, Mac ou Linux",
    intro: "Instalar o ADB é o primeiro passo para a liberdade digital no Android. No passado, você precisava baixar o gigantesco Android Studio (vários gigabytes) apenas para ter acesso a este pequeno comando. Hoje, o Google facilita as coisas oferecendo o pacote \"Platform Tools\" como um download separado e leve. No entanto, a instalação não é apenas \"baixar e clicar\". O grande desafio para iniciantes, especialmente no Windows, é o conceito de \"PATH\" (Caminho do Sistema). Para quem nunca mexeu com variáveis de ambiente, isso pode parecer um bicho de sete cabeças, mas vamos desmistificar isso com calma.\n\nImagine que o ADB é uma ferramenta especial que você guardou em uma gaveta específica na sua oficina. Se você estiver em outra sala, não conseguirá usá-la a menos que saiba o caminho exato ou tenha um sistema que traga a ferramenta até você. Configurar o PATH é como colocar o ADB no seu cinto de utilidades: você pode digitar \"adb\" de qualquer lugar — seja na sua pasta de Downloads, na pasta do seu projeto de mod ou no Desktop — e o computador saberá exatamente onde o executável está. É a mesma lógica de quando você cadastra o endereço da sua casa no GPS: uma vez configurado, o sistema sempre sabe como chegar lá, não importa de onde você esteja partindo.\n\nNo Linux, o processo é ainda mais elegante, muitas vezes resumido a uma única linha no terminal que gerencia tudo para você, incluindo as regras de permissão USB (udev rules). Para quem usa Ubuntu ou distribuições baseadas em Debian — que são extremamente populares entre desenvolvedores brasileiros — o gerenciador de pacotes APT cuida de tudo: baixa o binário, coloca no PATH correto e configura as permissões necessárias. É como ir ao mercado e pedir para o açougueiro já cortar, temperar e embalar a carne do jeito que você precisa: praticidade total.\n\nNo macOS, o Homebrew faz um papel semelhante ao APT do Linux, funcionando como uma loja de ferramentas de linha de comando onde tudo é instalado e atualizado com um único comando. Já no Windows, o processo exige um pouco mais de atenção manual: você precisa baixar o ZIP do site oficial do Google, extrair em uma pasta de fácil acesso (como C:\\platform-tools), e então navegar pelas configurações do sistema para adicionar essa pasta ao PATH. Parece trabalhoso, mas é algo que você faz uma única vez e nunca mais precisa repetir. Este capítulo garante que sua fundação seja sólida, evitando o erro clássico \"'adb' não é reconhecido como um comando interno ou externo\" que frustra tantos iniciantes nos fóruns brasileiros de tecnologia.",
    codes: [
      {
        lang: "bash",
        code: "# No Windows: Baixe o ZIP, extraia em C:\\platform-tools e adicione ao PATH\n# Use o PowerShell como administrador para testar:\n[Environment]::SetEnvironmentVariable(\"Path\", \"$env:Path;C:\\platform-tools\", \"User\")"
      },
      {
        lang: "bash",
        code: "# No Ubuntu / Debian / Kali Linux:\nsudo apt update && sudo apt install android-tools-adb android-tools-fastboot -y"
      },
      {
        lang: "bash",
        code: "# No macOS (usando o Homebrew):\nbrew install --cask android-platform-tools"
      },
      {
        lang: "bash",
        code: "# Verificando se o comando está acessível globalmente:\nwhich adb  # No Linux/Mac\nwhere adb  # No Windows"
      },
      {
        lang: "bash",
        code: "# Criando um alias temporário (caso não queira mexer no PATH permanentemente):\nalias adb='/caminho/para/meu/adb'"
      },
      {
        lang: "bash",
        code: "# No Linux, pode ser necessário adicionar seu usuário ao grupo 'plugdev':\nsudo usermod -aG plugdev $USER"
      },
      {
        lang: "bash",
        code: "# Instalando ADB no Ubuntu/Debian\nsudo apt install android-tools-adb android-tools-fastboot\n# Instala ADB e Fastboot de uma vez"
      },
      {
        lang: "bash",
        code: "# Instalando via snap (alternativa mais atualizada)\nsudo snap install android-platform-tools\n# Versão geralmente mais recente que o apt"
      },
      {
        lang: "bash",
        code: "# Verificando se as regras udev estão configuradas (Linux)\nlsusb | grep -i android\nsudo adb devices\n# Se aparecer 'no permissions', precisa configurar udev rules"
      },
      {
        lang: "bash",
        code: "# Configurando udev rules para dispositivos Android (Linux)\necho 'SUBSYSTEM==\"usb\", ATTR{idVendor}==\"18d1\", MODE=\"0666\"' | sudo tee /etc/udev/rules.d/51-android.rules\nsudo udevadm control --reload-rules\n# Permite acesso ao dispositivo sem sudo"
      }
    ],
    points: [
      "Use apenas o pacote oficial 'Platform Tools' do Google para segurança e estabilidade.",
      "Configurar as Variáveis de Ambiente (PATH) é crucial no Windows.",
      "No Linux, a instalação via gerenciador de pacotes (apt, dnf) é recomendada.",
      "No Mac, o Homebrew é a forma mais rápida de manter tudo atualizado.",
      "O executável do ADB é leve (menos de 10MB), mas extremamente dependente de drivers.",
      "Drivers USB da Google (Google USB Driver) são necessários para celulares Pixel no Windows.",
      "Fabricantes como Samsung, LG e Motorola possuem seus próprios drivers USB específicos.",
      "Você pode ter múltiplas versões do ADB, mas apenas uma rodando por vez.",
      "O comando 'adb version' confirma se o binário está funcionando e sua idade.",
      "O pacote também instala o 'Fastboot', usado para modificar partições do sistema (bootloader).",
      "No Linux, pode ser necessário configurar udev rules para acesso sem sudo.",
      "No Windows, drivers USB específicos do fabricante podem ser necessários.",
      "No macOS, geralmente funciona out-of-the-box após instalar platform-tools.",
      "O snap install oferece versões mais atualizadas que os repositórios apt.",
      "Mantenha o ADB atualizado para compatibilidade com dispositivos novos."
    ],
    alerts: [
      {
        type: "warning",
        content: "Cuidado com instaladores 'ADB de 15 segundos' de fóruns antigos; eles costumam estar desatualizados e podem conter malware."
      },
      {
        type: "tip",
        content: "Sempre reinicie seu terminal (cmd ou powershell) após alterar as variáveis de ambiente para que as mudanças façam efeito."
      },
      {
        type: "info",
        content: "Se estiver no Linux e o ADB não reconhecer o celular mesmo com o cabo, você provavelmente precisa configurar as 'udev rules'."
      },
      {
        type: "danger",
        content: "Nunca apague o arquivo 'adb.exe' achando que é um vírus; ele é essencial para toda a nossa jornada de modding."
      },
      {
        type: "success",
        content: "Se adb devices mostra seu dispositivo como 'device' (não 'unauthorized'), está conectado!"
      },
      {
        type: "tip",
        content: "No Linux, adicione seu usuário ao grupo 'plugdev' para evitar problemas de permissão USB."
      }
    ]
  },
  {
    slug: "conectando-dispositivo",
    section: "adb-workflow",
    title: "Conectando o Dispositivo",
    difficulty: "iniciante",
    subtitle: "Habilitando a depuração USB e o aperto de mão digital",
    intro: "Conectar o celular ao PC por um cabo USB parece a tarefa mais simples do mundo, mas no Android, existe uma camada de proteção \"anti-intrusão\" que você precisa desarmar. Por segurança, o modo de depuração vem escondido e desativado. Para o sistema, qualquer pessoa com um cabo USB poderia ser um ladrão tentando roubar seus dados; por isso, você precisa provar que é o dono e que confia naquele computador. É como entrar em um condomínio fechado no Brasil: não basta chegar no portão, você precisa se identificar, o morador precisa autorizar sua entrada, e só então a cancela abre. O Android implementa exatamente essa lógica de segurança em múltiplas camadas.\n\nO ritual começa com o \toque sagrado\: ir até as informações do sistema e tocar sete vezes no número da versão até que uma mensagem diga \"Você agora é um desenvolvedor!\". Isso abre um portal secreto nas configurações — as famosas \"Opções do Desenvolvedor\" que ficam escondidas do usuário comum para evitar que alguém mexa onde não deve por acidente. É como encontrar uma porta secreta atrás de uma estante: ela sempre esteve ali, mas só quem sabe o truque consegue acessá-la. Lá dentro, a opção 'Depuração USB' é a chave que permite que o ADB converse com o seu dispositivo.\n\nMas não para por aí. Na primeira vez que você envia um comando, o celular exibe um popup com uma \"Impressão Digital RSA\". Essa impressão é como o RG do seu computador — uma identificação única que garante que apenas máquinas autorizadas possam enviar comandos ao seu celular. Se você não aceitar esse popup e marcar \"Sempre permitir\", o ADB ficará preso em um estado de \"unauthorized\" (não autorizado), bloqueando qualquer ação. Muitos iniciantes ficam travados nesse ponto, achando que o ADB está com defeito, quando na verdade o celular está pacientemente esperando uma confirmação na tela que ninguém percebeu.\n\nNo Brasil, com a popularização do trabalho remoto e a necessidade de testar aplicativos em dispositivos físicos sem estar no escritório, também aprendemos a usar o 'ADB over Wi-Fi', que elimina a necessidade de cabos e permite que você modifique apps enquanto carrega o celular em outra sala. É como trocar o interfone com fio por um interfone sem fio: a comunicação continua funcionando, mas com muito mais liberdade de movimento. O Android 11 trouxe ainda o \"Wireless Debugging\" nativo, que simplifica esse processo com um sistema de pareamento por código, similar ao Bluetooth. Dominar essas formas de conexão é fundamental para um fluxo de trabalho ágil e produtivo.",
    codes: [
      {
        lang: "bash",
        code: "# O comando fundamental para listar dispositivos:\nadb devices\n# Resultado esperado:\n# List of devices attached\n# ZY223ZQX6V\tdevice"
      },
      {
        lang: "bash",
        code: "# Se aparecer 'unauthorized', o celular aguarda sua permissão na tela:\n# ZY223ZQX6V\tunauthorized"
      },
      {
        lang: "bash",
        code: "# Conectando via Wi-Fi (Modo Clássico):\n# 1. Conecte via USB primeiro\n# 2. Ative a porta 5555:\nadb tcpip 5555\n# 3. Desconecte o cabo e conecte pelo IP:\nadb connect 192.168.1.15"
      },
      {
        lang: "bash",
        code: "# No Android 11+, existe o 'Wireless Debugging' nativo com código de pareamento:\nadb pair 192.168.1.15:34567"
      },
      {
        lang: "bash",
        code: "# Verificando se há múltiplos dispositivos e enviando comando para um específico:\nadb -s ZY223ZQX6V shell getprop ro.build.version.release"
      },
      {
        lang: "bash",
        code: "# Forçando o reconhecimento de um dispositivo que sumiu:\nadb reconnect"
      },
      {
        lang: "bash",
        code: "# Listando dispositivos conectados\nadb devices -l\n# Mostra serial, estado e modelo de cada dispositivo"
      },
      {
        lang: "bash",
        code: "# Conectando via Wi-Fi (sem cabo USB)\nadb tcpip 5555\nadb connect 192.168.1.100:5555\n# Permite debug wireless na mesma rede"
      },
      {
        lang: "bash",
        code: "# Autorizando dispositivo (quando aparece 'unauthorized')\nadb kill-server\nadb devices\n# Verifique o popup de autorização no celular"
      },
      {
        lang: "bash",
        code: "# Selecionando dispositivo específico quando há múltiplos\nadb -s SERIAL_DO_DEVICE shell\n# Use o serial mostrado em 'adb devices'"
      }
    ],
    points: [
      "O 'Número da Versão' no menu 'Sobre o Telefone' deve ser tocado 7 vezes.",
      "A 'Depuração USB' deve estar habilitada nas Opções do Desenvolvedor.",
      "A chave RSA garante que apenas computadores autorizados acessem o dispositivo.",
      "O status 'device' significa que o celular está pronto para receber comandos.",
      "O status 'offline' geralmente indica um problema no cabo ou driver corrompido.",
      "Cables USB de má qualidade (somente carga) são a causa #1 de falhas de conexão.",
      "A depuração Wi-Fi é excelente para testar apps em movimento.",
      "No Windows, drivers ADB genéricos da Google funcionam em 90% dos casos.",
      "Se o popup de autorização não aparecer, tente revogar as autorizações nas configurações do celular.",
      "O ADB consegue gerenciar dezenas de dispositivos simultaneamente no mesmo PC.",
      "O dispositivo deve ter 'Depuração USB' ativada nas Opções de Desenvolvedor.",
      "Na primeira conexão, o celular pede autorização — marque 'Sempre permitir'.",
      "Conexão Wi-Fi é mais lenta mas elimina a necessidade de cabo USB.",
      "Múltiplos dispositivos podem ser conectados simultaneamente (use -s serial).",
      "Se aparecer 'offline', desconecte e reconecte o cabo USB."
    ],
    alerts: [
      {
        type: "danger",
        content: "NUNCA marque 'Sempre permitir' em computadores públicos, Cybercafés ou PCs de terceiros."
      },
      {
        type: "tip",
        content: "Se o celular não for reconhecido, tente trocar a porta USB (use as portas traseiras se estiver em um PC desktop)."
      },
      {
        type: "warning",
        content: "Em alguns celulares chineses (Xiaomi, Oppo), você também precisa ativar 'Depuração USB (Configurações de Segurança)' para simular toques."
      },
      {
        type: "info",
        content: "O modo ADB é diferente do modo MTP (transferência de arquivos). O celular pode aparecer no explorador de arquivos mas não no ADB."
      },
      {
        type: "success",
        content: "Se adb shell retorna um prompt $, você tem acesso completo ao shell do Android."
      },
      {
        type: "danger",
        content: "Conexão Wi-Fi expõe o ADB na rede — desative após o uso para evitar acesso não autorizado."
      }
    ]
  },
  {
    slug: "listando-pacotes-adb",
    section: "adb-workflow",
    title: "Listando e Encontrando Pacotes",
    difficulty: "intermediario",
    subtitle: "Identificando o nome técnico dos seus aplicativos",
    intro: "No seu celular, você vê o \"WhatsApp\", o \"Instagram\" ou o \"Banco do Brasil\". Mas para o sistema operacional, esses nomes bonitos não significam nada. O Android identifica os aplicativos pelo \"Nome do Pacote\" (Package Name), uma string única no estilo de domínio reverso, como 'com.whatsapp' ou 'com.instagram.android'. É como se cada app tivesse um CPF e o nome que vemos fosse apenas um apelido. Assim como no Brasil duas pessoas podem ter o mesmo nome (João da Silva), mas jamais o mesmo CPF, dois aplicativos podem ter nomes de exibição parecidos, mas seus nomes de pacote são sempre únicos e irrepetíveis em todo o ecossistema Android mundial.\n\nPara realizar qualquer tarefa de modding com o ApkTool, o primeiro passo é descobrir o nome real do pacote do app que você deseja modificar. Sem esse identificador, você simplesmente não consegue extrair, desinstalar, desabilitar ou fazer qualquer operação significativa no aplicativo. É como tentar encontrar uma pessoa no cartório sem saber o CPF dela: você pode até ter o nome, mas sem o documento correto, o sistema não te atende.\n\nO ADB possui um módulo chamado 'pm' (Package Manager) que é o bibliotecário do sistema. Com ele, você pode listar todos os aplicativos instalados, filtrar apenas aqueles que você baixou da loja (terceiros) ou mergulhar nos arquivos protegidos do sistema. Pense no Package Manager como o catálogo de uma biblioteca pública brasileira: ele sabe onde cada livro (app) está guardado, quem é o autor (desenvolvedor), quando foi adicionado ao acervo e se está disponível para empréstimo (ativo) ou arquivado (desabilitado).\n\nSaber filtrar essa lista é vital, pois um celular moderno pode ter mais de 400 pacotes instalados, e encontrar a \"agulha no palheiro\" exige o uso correto de flags e comandos de busca como o 'grep'. Imagine que você está em um supermercado atacadista daqueles enormes que temos no Brasil — como um Assaí ou Atacadão — com milhares de produtos nas prateleiras. Sem saber o corredor certo ou usar o sistema de busca, você vai perder horas procurando um único item. O 'grep' é o seu GPS dentro desse supermercado de pacotes: ele filtra instantaneamente a lista gigante e te mostra apenas o que você procura. Este capítulo ensina você a navegar por essa floresta de nomes técnicos com a precisão de um especialista, dominando cada flag e cada truque que o Package Manager oferece.",
    codes: [
      {
        lang: "bash",
        code: "# Lista TODOS os pacotes (Cuidado: a lista será gigante!)\nadb shell pm list packages"
      },
      {
        lang: "bash",
        code: "# Lista apenas aplicativos instalados pelo usuário (não pertencentes ao sistema)\nadb shell pm list packages -3"
      },
      {
        lang: "bash",
        code: "# Lista pacotes e mostra o caminho (path) do arquivo APK original no sistema\nadb shell pm list packages -f"
      },
      {
        lang: "bash",
        code: "# Filtrando por um nome específico usando o comando grep (Ex: procurar facebook)\nadb shell pm list packages | grep 'facebook'"
      },
      {
        lang: "bash",
        code: "# No Windows (sem grep), você pode usar o findstr:\nadb shell pm list packages | findstr \"google\""
      },
      {
        lang: "bash",
        code: "# Listando apenas pacotes que estão desativados:\nadb shell pm list packages -d"
      },
      {
        lang: "bash",
        code: "# Descobrindo o nome do pacote de um app que está aberto na tela agora:\nadb shell dumpsys window | grep -E 'mCurrentFocus|mFocusedApp'"
      },
      {
        lang: "bash",
        code: "# Listando todos os pacotes instalados\nadb shell pm list packages\n# Retorna centenas de pacotes (sistema + usuário)"
      },
      {
        lang: "bash",
        code: "# Filtrando apenas apps de terceiros (instalados pelo usuário)\nadb shell pm list packages -3\n# Exclui apps do sistema"
      },
      {
        lang: "bash",
        code: "# Buscando um pacote específico\nadb shell pm list packages | grep -i whatsapp\n# Encontra o package name exato do app"
      },
      {
        lang: "bash",
        code: "# Obtendo informações detalhadas de um pacote\nadb shell dumpsys package com.exemplo.app | grep -E 'versionName|versionCode|dataDir|codePath'\n# Mostra versão, caminho do APK e pasta de dados"
      }
    ],
    points: [
      "O comando 'pm' (Package Manager) é a ferramenta de gestão de apps do Android.",
      "Nomes de pacotes são únicos e imutáveis durante a vida do app.",
      "A flag '-3' é a forma mais rápida de ignorar bloatwares e focar no que importa.",
      "A flag '-s' mostra apenas os pacotes de sistema.",
      "A flag '-f' revela a localização física do APK (ex: /data/app/...).",
      "O comando 'grep' (ou findstr) economiza tempo filtrando listas enormes.",
      "Você pode desativar apps de sistema indesejados via ADB usando 'pm disable-user'.",
      "Nomes de pacotes geralmente seguem o padrão: com.desenvolvedor.nomeapp.",
      "O ADB permite listar até pacotes que foram desinstalados mas mantiveram dados (-u).",
      "Saber o nome do pacote é pré-requisito para comandos de extração, limpeza e instalação.",
      "pm (Package Manager) gerencia todos os pacotes instalados no sistema.",
      "O flag -3 filtra apenas apps instalados pelo usuário (exclui sistema).",
      "dumpsys package mostra informações detalhadas: versão, permissões, paths.",
      "O package name é o identificador único (ex: com.whatsapp, com.instagram.android).",
      "Use grep para filtrar a saída quando há centenas de pacotes listados."
    ],
    alerts: [
      {
        type: "info",
        content: "Muitos aplicativos de sistema da Samsung ou Xiaomi começam com 'com.android' ou 'com.sec', o que pode ser confuso."
      },
      {
        type: "tip",
        content: "Se você não sabe o nome do pacote, procure o app na Play Store via navegador; o nome do pacote aparece na URL após 'id='."
      },
      {
        type: "warning",
        content: "Alguns aplicativos divididos (Split APKs) aparecem como um único pacote na lista, mas possuem múltiplos arquivos físicos."
      },
      {
        type: "danger",
        content: "Nunca tente desinstalar pacotes que contenham 'overlay' ou 'systemui' a menos que saiba exatamente o que está fazendo; isso pode causar bootloop."
      },
      {
        type: "success",
        content: "Se pm list packages retorna a lista, você tem acesso ao gerenciador de pacotes."
      },
      {
        type: "tip",
        content: "Use 'adb shell pm list packages -3 | sort' para uma lista organizada dos seus apps."
      }
    ]
  },
  {
    slug: "extraindo-apk-do-device",
    section: "adb-workflow",
    title: "Extraindo APK do Dispositivo",
    difficulty: "intermediario",
    subtitle: "Puxando os binários originais para análise no computador",
    intro: "Você encontrou um aplicativo interessante no seu celular e quer saber como ele funciona? Ou talvez queira criar um mod para um jogo que não está disponível para download em sites de APK? É aqui que entra a extração. O processo de \"puxar\" um aplicativo do celular para o PC é um dos fluxos mais satisfatórios da engenharia reversa. É como ir a uma feira livre no interior do Brasil e encontrar aquela fruta rara que você só viu uma vez na vida: você precisa colher com cuidado, embalar direito e levar para casa sem amassar, para depois poder estudar, replantar ou transformar em algo novo.\n\nDiferente do que muitos pensam, o APK não fica guardado em uma pasta comum de \"Downloads\". Ele fica em diretórios protegidos do sistema (como /data/app/). Pense nisso como um cofre de banco: os pertences estão lá dentro, organizados em gavetas numeradas, mas você não pode simplesmente entrar e pegar o que quiser sem seguir o protocolo correto. No entanto, o Android permite que qualquer usuário leia (mas não modifique) os APKs instalados, mesmo sem ROOT. É como se o banco permitisse que você tirasse uma fotocópia do documento guardado no cofre, mas não levasse o original.\n\nO processo é um combo de dois passos: primeiro, perguntamos ao sistema \"Onde este pacote está escondido?\" usando o comando 'pm path'. O sistema responde com o caminho completo, como um funcionário do cartório que consulta o arquivo e te diz \"está na pasta 3, gaveta 7, documento 42\". Em seguida, usamos o comando 'adb pull' para copiar esse arquivo para o nosso computador. É um processo limpo e seguro — você não altera nada no celular, apenas faz uma cópia fiel do aplicativo original.\n\nO desafio moderno são os \"Split APKs\" (ou App Bundles), onde um único app é quebrado em vários pedaços (base.apk, split_config.arm64.apk, split_config.xxhdpi.apk, etc.). Isso acontece porque o Google Play otimiza o download enviando apenas os recursos necessários para o seu dispositivo específico. É como comprar um móvel na loja que vem desmontado em várias caixas: se você levar apenas uma caixa para casa, não vai conseguir montar o móvel completo. Extrair apenas o base.apk de um app que usa Splits fará com que o app não funcione corretamente ao ser reinstalado. Este capítulo ensina como identificar e extrair todos os pedaços necessários para uma reconstrução perfeita no ApkTool, garantindo que nenhuma peça fique para trás.",
    codes: [
      {
        lang: "bash",
        code: "# Passo 1: Descobrir o local exato do APK no celular\nadb shell pm path com.exemplo.meuapp\n# Saída: package:/data/app/~~xyz==/com.exemplo.meuapp-abc/base.apk"
      },
      {
        lang: "bash",
        code: "# Passo 2: Puxar (Download) o arquivo para a pasta atual no PC\nadb pull /data/app/~~xyz==/com.exemplo.meuapp-abc/base.apk meu_app_original.apk"
      },
      {
        lang: "bash",
        code: "# Extraindo todos os pedaços de um Split APK (App Bundle):\nadb shell pm path com.exemplo.splitapp\n# Saída mostrará várias linhas de 'package:'\n# Puxe cada uma delas:\nadb pull /data/app/.../base.apk\nadb pull /data/app/.../split_config.xxhdpi.apk"
      },
      {
        lang: "bash",
        code: "# Script rápido para extrair o APK de um pacote conhecido:\nPKG=\"com.whatsapp\"; adb pull $(adb shell pm path $PKG | cut -d':' -f2) backup.apk"
      },
      {
        lang: "bash",
        code: "# Verificando o tamanho do arquivo extraído para garantir que não veio corrompido:\nls -lh backup.apk"
      },
      {
        lang: "bash",
        code: "# O comando 'adb pull' também pode extrair pastas inteiras (se houver permissão):\nadb pull /sdcard/Download/pasta_interessante/ ."
      },
      {
        lang: "bash",
        code: "# Encontrando o caminho do APK de um app instalado\nadb shell pm path com.exemplo.app\n# Retorna /data/app/com.exemplo.app-HASH/base.apk"
      },
      {
        lang: "bash",
        code: "# Extraindo o APK para o computador\nadb pull $(adb shell pm path com.exemplo.app | cut -d: -f2) app_extraido.apk\n# Copia o APK do dispositivo para o PC"
      },
      {
        lang: "bash",
        code: "# Extraindo APK de app com split APKs (múltiplos arquivos)\nadb shell pm path com.exemplo.app\n# Se retornar múltiplos paths, extraia todos com um loop"
      },
      {
        lang: "bash",
        code: "# Script completo para extrair qualquer app\n#!/bin/bash\nPKG=$1\nPATH_APK=$(adb shell pm path $PKG | head -1 | cut -d: -f2 | tr -d '\\r')\nadb pull \"$PATH_APK\" \"${PKG}.apk\"\necho \"Extraído: ${PKG}.apk\""
      }
    ],
    points: [
      "O comando 'pm path' é o mapa do tesouro; ele diz onde o APK reside.",
      "O 'adb pull' é a ferramenta de transporte do celular para o PC.",
      "A maioria dos APKs de usuário em /data/app/ pode ser extraída sem ROOT.",
      "Apps de sistema em /system/app/ também podem ser extraídos para análise.",
      "APKs modernos (App Bundles) exigem a extração do base.apk + splits relevantes.",
      "Sempre verifique se o caminho retornado pelo 'pm path' começa com 'package:'.",
      "O nome do arquivo no PC pode ser qualquer um (ex: app.apk), não precisa ser 'base.apk'.",
      "Se o 'adb pull' falhar com 'Permission Denied', o app pode estar em uma área protegida por Knox ou similar.",
      "Extrair o APK original é o primeiro passo obrigatório antes de usar o ApkTool.",
      "Você pode usar o 'adb shell' para navegar nas pastas antes de puxar os arquivos.",
      "O APK de apps instalados fica em /data/app/ (requer ADB para acessar).",
      "Split APKs (Android App Bundle) geram múltiplos arquivos .apk por app.",
      "O comando pm path retorna o caminho exato do APK no dispositivo.",
      "adb pull copia arquivos do dispositivo para o computador.",
      "Apps do sistema ficam em /system/app/ ou /system/priv-app/ (requer root para extrair)."
    ],
    alerts: [
      {
        type: "warning",
        content: "Extrair apenas o 'base.apk' de um app que usa Splits resultará em erro de 'Instalação Incompleta' ao tentar reinstalar."
      },
      {
        type: "tip",
        content: "Use o aplicativo 'ML Manager' ou 'APK Extractor' no celular se preferir uma interface visual, mas o ADB é muito mais rápido para múltiplos arquivos."
      },
      {
        type: "info",
        content: "APKs pagos (protegidos por DRM) podem ser extraídos, mas o binário pode estar criptografado ou exigir a licença da Google Play para rodar."
      },
      {
        type: "danger",
        content: "Cuidado ao extrair apps de bancos ou segurança; o simples ato de extrair é seguro, mas tentar modificá-los ativará proteções severas."
      },
      {
        type: "success",
        content: "Se adb pull completa sem erro, o APK foi extraído com sucesso para análise."
      },
      {
        type: "danger",
        content: "Alguns apps usam split APKs — extrair apenas o base.apk pode não ser suficiente."
      }
    ]
  },
  {
    slug: "instalando-apk-adb",
    section: "adb-workflow",
    title: "Instalando APK via ADB",
    difficulty: "intermediario",
    subtitle: "A forma profissional de testar e implantar seus aplicativos",
    intro: "Instalar um APK clicando nele no gerenciador de arquivos do celular é o jeito \"comum\". O jeito \"modder\" é usar o ADB. Por que? Porque o terminal é honesto. Se uma instalação falha no celular, ele apenas diz \"App não instalado\" — uma mensagem genérica que não te ajuda em absolutamente nada. Se falha no ADB, ele te dá um código de erro técnico (como [INSTALL_FAILED_UPDATE_INCOMPATIBLE] ou [INSTALL_FAILED_DEXOPT]) que te diz exatamente o que você fez de errado no seu mod. É a diferença entre um mecânico que diz \"seu carro está com problema\" e outro que diz \"o sensor de oxigênio do cilindro 3 está com leitura fora do padrão\". Qual dos dois você prefere?\n\nO comando 'adb install' é o canivete suíço da implantação. Ele permite que você reinstale um app mantendo todos os dados e configurações do usuário (flag -r), permite fazer o downgrade para uma versão mais antiga (flag -d) e até instalar aplicativos divididos (install-multiple). Para quem trabalha com recompilação no ApkTool, o ADB elimina a necessidade de ficar movendo arquivos para o Google Drive ou cabo USB toda vez que você faz uma pequena mudança no Smali. É como ter uma esteira rolante entre sua bancada de trabalho e o produto final: você faz o ajuste, coloca na esteira, e em segundos o resultado está rodando no celular para ser testado.\n\nNo contexto brasileiro, onde muitos modders trabalham com conexões de internet limitadas e celulares de entrada que não suportam bem múltiplas transferências simultâneas, o ADB via cabo USB se torna ainda mais valioso. A transferência é local, instantânea e não consome dados móveis. É a automação que separa os amadores dos profissionais, permitindo um ciclo de \"Editar -> Recompilar -> Instalar\" em poucos segundos. Imagine um padeiro que precisa provar cada fornada: se ele tivesse que caminhar até o outro lado da cidade para testar cada pão, levaria o dia inteiro. Mas com o forno ao lado da bancada, ele testa, ajusta a receita e testa de novo em minutos. O ADB é esse forno ao lado da sua bancada de modding.\n\nAlém da instalação simples, o ADB também oferece a desinstalação cirúrgica de aplicativos pelo nome do pacote, a capacidade de conceder permissões automaticamente durante a instalação (eliminando aqueles popups chatos de \"Permitir acesso à câmera?\"), e a possibilidade de instalar APKs marcados como teste que normalmente seriam bloqueados pelo sistema. Dominar essas flags transforma completamente sua produtividade e te permite iterar sobre modificações com a velocidade que o desenvolvimento moderno exige.",
    codes: [
      {
        lang: "bash",
        code: "# Instalação simples de um novo APK\nadb install meu_mod.apk"
      },
      {
        lang: "bash",
        code: "# Reinstalar mantendo os dados (útil para atualizar seu mod sem perder o progresso)\nadb install -r meu_mod_v2.apk"
      },
      {
        lang: "bash",
        code: "# Permitir downgrade (instalar versão anterior por cima de uma nova)\nadb install -r -d versao_antiga.apk"
      },
      {
        lang: "bash",
        code: "# Instalando Split APKs (múltiplos arquivos simultaneamente)\nadb install-multiple base.apk split_1.apk split_2.apk"
      },
      {
        lang: "bash",
        code: "# Instalando em um dispositivo específico (quando há vários conectados)\nadb -s ZY223ZQX6V install mod.apk"
      },
      {
        lang: "bash",
        code: "# Desinstalando um app pelo nome do pacote (mantendo os dados de cache: -k)\nadb uninstall com.exemplo.app"
      },
      {
        lang: "bash",
        code: "# Instalando APK com substituição de versão anterior\nadb install -r meu_mod.apk\n# -r = replace (mantém dados do usuário)"
      },
      {
        lang: "bash",
        code: "# Instalando com permissão de downgrade\nadb install -r -d meu_mod.apk\n# -d permite instalar versão menor que a atual"
      },
      {
        lang: "bash",
        code: "# Instalando e concedendo todas as permissões automaticamente\nadb install -g meu_mod.apk\n# -g = grant all permissions (útil para testes)"
      },
      {
        lang: "bash",
        code: "# Verificando se a instalação foi bem-sucedida e abrindo o app\nadb install -r app.apk && adb shell am start -n com.app/.MainActivity\n# Instala e abre em sequência"
      }
    ],
    points: [
      "O 'adb install' é mais rápido e informativo que o instalador nativo do Android.",
      "A flag '-r' (replace) é a mais usada por modders para testar mudanças rápidas.",
      "Erros como [INSTALL_FAILED_SIGNATURE_MISMATCH] exigem a desinstalação da versão antiga.",
      "A flag '-t' permite instalar APKs marcados como 'testOnly' (comum em builds do Android Studio).",
      "A flag '-g' concede todas as permissões do manifesto automaticamente na instalação.",
      "Instalações via ADB ignoram o aviso de 'Fontes Desconhecidas' em muitas versões do Android.",
      "O status 'Success' no terminal é o objetivo final de todo o processo de recompilação.",
      "Se a transferência for lenta, verifique se o cabo USB é 2.0 ou 3.0.",
      "Você pode instalar APKs diretamente em cartões SD usando a flag '-s' (legado).",
      "O ADB logcat pode ser aberto em outra aba do terminal para ver erros de crash no momento da instalação.",
      "O flag -r (replace) mantém dados do app ao reinstalar.",
      "O flag -d permite downgrade (instalar versão mais antiga).",
      "O flag -g concede todas as permissões automaticamente na instalação.",
      "INSTALL_FAILED_UPDATE_INCOMPATIBLE = assinatura diferente, precisa desinstalar.",
      "Use am start após install para verificar se o app abre sem crash."
    ],
    alerts: [
      {
        type: "danger",
        content: "Se o seu APK não estiver assinado, o ADB retornará o erro [INSTALL_PARSE_FAILED_NO_CERTIFICATES]."
      },
      {
        type: "tip",
        content: "Sempre use a flag '-r' para poupar tempo, mas se o app começar a dar erros estranhos, tente uma desinstalação limpa antes de reinstalar."
      },
      {
        type: "warning",
        content: "Em versões recentes do Android, o celular pode pedir uma confirmação física na tela ('Instalar via USB?') por segurança."
      },
      {
        type: "success",
        content: "Dominar o 'adb install' permite que você crie scripts .bat ou .sh que automatizam todo o seu fluxo de trabalho de modding."
      },
      {
        type: "success",
        content: "Se 'Success' aparece após adb install, o mod foi instalado corretamente!"
      },
      {
        type: "danger",
        content: "Instalar APKs de fontes desconhecidas pode comprometer a segurança do dispositivo."
      }
    ]
  }
];
