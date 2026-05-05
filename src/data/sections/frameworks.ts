import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "o-que-sao-frameworks-apktool",
    section: "frameworks",
    title: "O Que São Frameworks no ApkTool?",
    difficulty: "intermediario",
    subtitle: "O dicionário de recursos do Android",
    intro: "Para compreender o papel dos frameworks no ecossistema Android e no funcionamento do ApkTool, imagine que você está tentando ler um manuscrito medieval onde certas palavras são substituídas por códigos numéricos. Para entender o texto, você não precisa apenas do manuscrito, mas também de um glossário que diga que o código '0x01' significa 'Rei' e '0x02' significa 'Castelo'. No Android, os aplicativos funcionam exatamente assim. Para economizar espaço e manter a consistência visual, o sistema não inclui todas as definições de cores, estilos e layouts básicos dentro de cada APK individual. Em vez disso, ele aponta para um repositório centralizado de recursos: o Framework. O arquivo 'resources.arsc' dentro de um APK contém tabelas de IDs que fazem referência a esse framework. Historicamente, o Android foi projetado para ser modular, permitindo que fabricantes (OEMs) como Samsung, Xiaomi e LG criassem suas próprias camadas de personalização. Isso significa que um APK da Xiaomi pode tentar carregar um recurso que só existe no 'glossário' da Xiaomi. Quando o ApkTool tenta 'traduzir' esse APK de volta para XML legível sem o dicionário correto, ele encontra IDs órfãos e falha miseravelmente. Internamente, o ApkTool utiliza esses frameworks instalados para resolver as referências durante a fase de decoding. Sem o framework adequado, o processo de engenharia reversa para em erros de 'ResourceNotFoundException', pois a ferramenta não consegue associar o número hexadecimal a um nome de recurso real.",
    codes: [
      {
        lang: "bash",
        code: "# Localização padrão no Linux/macOS\nls -la ~/.local/share/apktool/framework\n# Lista os arquivos de framework instalados (.apk)"
      },
      {
        lang: "bash",
        code: "# Localização no Windows (PowerShell)\nls $env:LOCALAPPDATA\\apktool\\framework\n# Exibe os dicionários de recursos armazenados"
      },
      {
        lang: "text",
        code: "ResID: 0x01030005\n# Os dois primeiros dígitos (01) indicam o Package ID do Framework Android padrão."
      },
      {
        lang: "text",
        code: "ResID: 0x020a0014\n# O prefixo 02 geralmente indica um framework de fabricante (OEM)."
      },
      {
        lang: "bash",
        code: "# Verificando o conteúdo de um framework (ele é um APK sem código DEX)\napktool d /path/to/framework-res.apk -s -o out_framework\n# -s ignora a decompilação de fontes (não há classes.dex)"
      },
      {
        lang: "bash",
        code: "# Exemplo de estrutura do diretório de frameworks\n# 1.apk -> Android Padrão\n# 2.apk -> Framework Secundário (ex: Samsung/Xiaomi)"
      }
    ],
    points: [
      "Frameworks são coleções de recursos compartilhados pelo sistema Android.",
      "Eles evitam a redundância de dados em aplicativos individuais.",
      "O arquivo resources.arsc vincula IDs hexadecimais a nomes de recursos.",
      "Fabricantes (OEMs) estendem o framework base com recursos próprios.",
      "O ApkTool precisa desses arquivos para gerar XMLs legíveis.",
      "O diretório padrão de armazenamento varia conforme o sistema operacional.",
      "O '1.apk' é o framework base do Android AOSP.",
      "Erros de 'Resource ID' geralmente indicam falta de framework.",
      "Frameworks não contêm código Java/DEX, apenas recursos.",
      "A instalação de um framework é uma cópia renomeada para a pasta interna."
    ],
    alerts: [
      {
        type: "info",
        content: "O framework padrão (1.apk) é gerado automaticamente pelo ApkTool na primeira execução."
      },
      {
        type: "warning",
        content: "APK de fabricantes como Xiaomi falharão sem o framework específico da MIUI."
      },
      {
        type: "tip",
        content: "Você pode mudar o diretório de frameworks usando a flag --frame-path no ApkTool."
      },
      {
        type: "danger",
        content: "Nunca delete o 1.apk manualmente a menos que esteja resolvendo um problema de corrupção."
      }
    ]
  },
  {
    slug: "quando-preciso-de-framework",
    section: "frameworks",
    title: "Quando Preciso Instalar um Framework?",
    difficulty: "intermediario",
    subtitle: "Identificando sintomas e dependências",
    intro: "Saber quando instalar um framework é a diferença entre um analista de APKs produtivo e um que perde horas lutando contra mensagens de erro enigmáticas. A regra de ouro é simples: se você está lidando com um aplicativo que não foi baixado diretamente da Google Play Store, mas sim extraído de um dispositivo com modificações de fabricante (OEM), você provavelmente precisará de frameworks adicionais. Aplicativos de sistema, como o discador da Samsung, a galeria da Xiaomi ou as configurações da Motorola, são profundamente integrados às bibliotecas de recursos dessas marcas. Quando o ApkTool tenta decompilar esses aplicativos, ele se depara com referências a IDs que não constam no framework padrão do Android (AOSP). O sintoma mais comum é o temido 'W: Could not decode attr value...'. Isso acontece porque o ApkTool encontrou um atributo XML que aponta para um 'lugar' que ele não conhece. Internamente, o Android utiliza uma hierarquia: o Framework AOSP fornece o básico (botões padrão, cores primárias), enquanto o Framework OEM adiciona o 'tempero' da marca. Se você tentar abrir um bolo (APK) que pede um ingrediente secreto da marca (Recurso OEM), você precisará desse ingrediente em sua bancada (Pasta de frameworks). Além disso, versões muito recentes do Android podem exigir que você atualize o framework do seu ambiente de trabalho para suportar novas tags e atributos introduzidos pelo Google.",
    codes: [
      {
        lang: "text",
        code: "W: Could not decode attr value, using undecoded value instead: n=0x01010034, v=0x020a0012\n# O valor v=0x02 indica que o recurso pertence ao framework de ID 2."
      },
      {
        lang: "text",
        code: "brut.androlib.res.errors.ResourceNotFoundException: resource spec: 0x0201000b\n# Erro fatal: O ApkTool parou porque não encontrou a definição para este ID."
      },
      {
        lang: "bash",
        code: "# Verificando se o erro ocorre apenas nos recursos\napktool d app.apk -r\n# -r pula a decompilação de recursos; se funcionar, o problema é certamente o framework."
      },
      {
        lang: "bash",
        code: "# Checando a versão do Android do APK alvo\ngrep \"targetSdkVersion\" app/AndroidManifest.xml\n# Versões maiores podem exigir frameworks de sistemas mais novos."
      },
      {
        lang: "text",
        code: "Can't find framework resources for package of id: 2\n# Mensagem direta informando que o framework de ID 2 não está instalado."
      },
      {
        lang: "bash",
        code: "# Tentando identificar o fabricante pelo nome do pacote\nadb shell pm list packages -f | grep \"samsung\"\n# Ajuda a decidir qual framework extrair do dispositivo."
      }
    ],
    points: [
      "Apps de sistema (SystemUI, Settings) exigem frameworks OEM.",
      "Sintomas incluem ResourceNotFoundException e avisos de 'Could not decode'.",
      "O ID do pacote no erro (ex: 0x02) identifica qual framework falta.",
      "Apps da Play Store raramente precisam de frameworks extras.",
      "A diferença entre AOSP e OEM é a raiz da necessidade de frameworks.",
      "Apps de operadoras às vezes também possuem frameworks customizados.",
      "Atualizações de Android (ex: 13 para 14) exigem novos frameworks.",
      "O ApkTool avisa no console exatamente qual ID de pacote está ausente.",
      "Usar a flag -r ajuda a confirmar se o erro é nos recursos.",
      "Alguns apps usam múltiplos frameworks simultaneamente."
    ],
    alerts: [
      {
        type: "warning",
        content: "A falta de framework pode gerar arquivos XML com valores hexadecimais em vez de nomes, dificultando a edição."
      },
      {
        type: "info",
        content: "A maioria dos desenvolvedores de apps comuns utiliza apenas o framework padrão para garantir compatibilidade máxima."
      },
      {
        type: "tip",
        content: "Sempre que mudar de dispositivo de teste, limpe sua pasta de frameworks para evitar conflitos de versão."
      },
      {
        type: "danger",
        content: "Não tente 'adivinhar' o framework; leia o log de erro para saber exatamente o que o ApkTool está pedindo."
      }
    ]
  },
  {
    slug: "instalando-framework",
    section: "frameworks",
    title: "Instalando um Framework",
    difficulty: "intermediario",
    subtitle: "Ensinando novos idiomas ao ApkTool",
    intro: "A instalação de um framework é um dos procedimentos mais críticos e, ao mesmo tempo, mais simples na vida de um engenheiro reverso de Android. O comando 'apktool if' (abreviação de 'install framework') não instala um software no sentido tradicional do sistema operacional; em vez disso, ele processa o APK do framework e o armazena em uma pasta interna do ApkTool com uma nomenclatura específica (como 1.apk, 2.apk, etc.). Este processo é análogo a registrar uma nova biblioteca em um compilador. Quando você executa este comando, o ApkTool lê o arquivo 'resources.arsc' do framework para entender como mapear os IDs de recursos para nomes legíveis em futuras decompilações. É possível usar a flag '-t' (tag) para organizar seus frameworks. Imagine que você trabalha com vários dispositivos Samsung; você pode instalar o framework com a tag 'samsung' para evitar que ele seja confundido com um framework da Xiaomi. Além disso, a flag '-p' permite especificar um caminho personalizado para o repositório de frameworks, o que é extremamente útil se você estiver trabalhando em um ambiente onde as permissões de escrita na pasta de usuário são restritas ou se você deseja manter bibliotecas de frameworks separadas para projetos diferentes. Lembre-se: uma vez instalado, o framework fica disponível para todos os projetos do ApkTool naquele ambiente até que seja removido manualmente.",
    codes: [
      {
        lang: "bash",
        code: "# Comando básico de instalação\napktool if framework-res.apk\n# Instala o framework e atribui o próximo ID disponível (geralmente 1 ou 2)"
      },
      {
        lang: "bash",
        code: "# Instalando com uma TAG para organização\napktool if framework-res.apk -t miui_v14\n# O framework será salvo com um nome que inclui a tag"
      },
      {
        lang: "bash",
        code: "# Especificando uma pasta de destino personalizada\napktool if framework-res.apk -p ./meus_frameworks\n# Útil para projetos portáteis ou isolados"
      },
      {
        lang: "bash",
        code: "# Instalando frameworks de fabricantes específicos (ex: Samsung)\napktool if twm-res.apk\n# Alguns dispositivos Samsung exigem o twm-res.apk além do framework-res.apk"
      },
      {
        lang: "bash",
        code: "# Verificando para onde o framework foi copiado\napktool if framework-res.apk | grep \"stored\"\n# Mostra o caminho absoluto do arquivo instalado"
      },
      {
        lang: "bash",
        code: "# Instalando múltiplos frameworks em sequência\nfor f in *.apk; do apktool if \"$f\"; done\n# Script rápido para instalar todos os APKs de uma pasta como framework"
      }
    ],
    points: [
      "O comando 'if' significa 'install framework'.",
      "O ApkTool renomeia o arquivo internamente para IDs numéricos.",
      "A flag -t (tag) ajuda a diferenciar frameworks de diferentes marcas.",
      "A flag -p permite usar um diretório de frameworks não padrão.",
      "A instalação é necessária apenas uma vez por framework/versão.",
      "O ApkTool não altera o arquivo APK original durante a instalação.",
      "Você pode ter dezenas de frameworks instalados simultaneamente.",
      "A ordem de instalação pode afetar a atribuição de IDs automáticos.",
      "O comando exibe o caminho de destino no terminal após o sucesso.",
      "Instalar frameworks de versões superiores do Android é comum para suporte a apps novos."
    ],
    alerts: [
      {
        type: "success",
        content: "Framework instalado com sucesso! Agora você pode decompilar apps que dependem dele."
      },
      {
        type: "info",
        content: "Se você instalar um framework sem tag, ele substituirá o framework padrão se o ID coincidir."
      },
      {
        type: "tip",
        content: "Use tags curtas e descritivas (ex: -t s10, -t pixel6) para facilitar a gestão."
      },
      {
        type: "warning",
        content: "Alguns apps exigem a instalação de 2 ou 3 frameworks diferentes para serem totalmente decodificados."
      }
    ]
  },
  {
    slug: "extraindo-framework-do-device",
    section: "frameworks",
    title: "Extraindo Frameworks do Dispositivo",
    difficulty: "intermediario",
    subtitle: "Buscando o dicionário direto na fonte",
    intro: "Muitas vezes, você não encontrará o framework necessário para download na internet, especialmente para dispositivos obscuros ou ROMs muito customizadas. Nesses casos, a solução é extraí-lo diretamente do hardware usando o Android Debug Bridge (ADB). O coração dos recursos do Android reside no diretório '/system/framework/', onde o arquivo 'framework-res.apk' reina soberano. No entanto, a arquitetura do Android evoluiu; hoje, recursos específicos de fabricantes podem estar espalhados em pastas como '/vendor/framework/', '/product/framework/' ou até mesmo '/system_ext/framework/'. Identificar qual arquivo é o 'correto' exige observação dos logs de erro do ApkTool ou conhecimento da árvore de diretórios do sistema. O processo de extração via 'adb pull' é inofensivo e não requer acesso Root, pois esses arquivos possuem permissão de leitura global. Imagine que você está resgatando o código genético do sistema operacional para cloná-lo em seu ambiente de desenvolvimento. Ao extrair esses arquivos, você garante que seu ApkTool terá a versão exata do 'dicionário' que o aplicativo utiliza em tempo de execução no celular. É uma prática comum extrair todos os arquivos '.apk' dessas pastas de framework para garantir que nenhuma dependência oculta impeça o seu progresso na engenharia reversa.",
    codes: [
      {
        lang: "bash",
        code: "# Listando frameworks disponíveis no dispositivo\nadb shell ls /system/framework/*.apk\n# Identifica os principais candidatos para extração"
      },
      {
        lang: "bash",
        code: "# Extraindo o framework principal (AOSP/Base)\nadb pull /system/framework/framework-res.apk .\n# Copia o arquivo para a pasta atual no seu PC"
      },
      {
        lang: "bash",
        code: "# Buscando frameworks em partições de fabricantes\nadb pull /vendor/framework/ .\n# Extrai todos os frameworks da partição Vendor (comum em dispositivos novos)"
      },
      {
        lang: "bash",
        code: "# Identificando a localização de um pacote específico via shell\nadb shell pm path android\n# Mostra o caminho exato do framework-res.apk no sistema"
      },
      {
        lang: "bash",
        code: "# Extraindo frameworks de extensões de sistema\nadb pull /system_ext/framework/ .\n# Essencial para dispositivos com modificações profundas de UI"
      },
      {
        lang: "bash",
        code: "# Verificando o tamanho dos arquivos extraídos\nls -lh *-res.apk\n# Frameworks geralmente têm entre 20MB e 100MB"
      }
    ],
    points: [
      "A pasta /system/framework/ é a localização primária dos recursos.",
      "Não é necessário Root para ler e baixar frameworks via ADB.",
      "Frameworks modernos podem estar em /vendor/ ou /product/.",
      "O framework-res.apk é o arquivo mais importante a ser extraído.",
      "A extração direta garante compatibilidade total com o dispositivo alvo.",
      "Use o comando 'adb shell pm path' para localizar pacotes de framework.",
      "Sempre verifique se há arquivos como 'com.samsung.device.apk' ou similares.",
      "A extração é um processo de cópia (Pull), não afeta o funcionamento do celular.",
      "ROMs customizadas (LineageOS, Pixel Experience) têm seus próprios frameworks.",
      "Identificar o framework correto economiza tempo e evita erros de decoding."
    ],
    alerts: [
      {
        type: "info",
        content: "Em dispositivos com Android 10+, a estrutura de partições (Dynamic Partitions) pode tornar a busca mais complexa."
      },
      {
        type: "tip",
        content: "Se estiver em dúvida, extraia todos os APKs das pastas /system/framework e /vendor/framework."
      },
      {
        type: "warning",
        content: "Frameworks extraídos de um celular podem não funcionar perfeitamente para apps de outro celular da mesma marca, mas versões diferentes."
      },
      {
        type: "success",
        content: "Uma vez extraído e instalado (apktool if), o framework servirá para todos os seus projetos futuros."
      }
    ]
  },
  {
    slug: "atualizando-framework",
    section: "frameworks",
    title: "Atualizando e Gerenciando Frameworks",
    difficulty: "intermediario",
    subtitle: "Manutenção da sua biblioteca de recursos",
    intro: "Gerenciar sua coleção de frameworks é como cuidar de uma biblioteca: se você não organizar e limpar periodicamente, acabará perdido em meio a volumes obsoletos. Com o lançamento anual de novas versões do Android, os frameworks antigos tornam-se insuficientes. Um framework do Android 10 não consegue explicar as novas tags de layout do Android 14. Além disso, o próprio ApkTool evolui, e sua forma de processar esses arquivos pode mudar entre versões maiores (como da v2.x para a v3.x). Troubleshooting de frameworks envolve saber quando descartar o que você tem e começar do zero. Se você começar a ver erros estranhos de 'NullPointerException' durante o decoding, ou se o ApkTool se comportar de forma imprevisível, a primeira recomendação da comunidade é: delete sua pasta de frameworks. Isso força o ApkTool a regenerar o framework padrão (1.apk) e permite que você reinstale os frameworks OEM limpos. Outro ponto crucial é a gestão de espaço; em discos pequenos, acumular frameworks de dezenas de dispositivos diferentes pode consumir gigabytes desnecessários. Aprender a gerenciar esses arquivos no Linux, Windows e macOS é essencial para manter um ambiente de desenvolvimento saudável e livre de bugs inexplicáveis.",
    codes: [
      {
        lang: "bash",
        code: "# Limpando todos os frameworks no Linux/macOS\nrm -rf ~/.local/share/apktool/framework/*.apk\n# Remove todos os dicionários instalados para uma instalação limpa"
      },
      {
        lang: "bash",
        code: "# Limpando no Windows (CMD)\ndel /S /Q %LOCALAPPDATA%\\apktool\\framework\\*.apk\n# Comando rápido para resetar o ambiente de frameworks"
      },
      {
        lang: "bash",
        code: "# Verificando a versão do ApkTool antes de atualizar frameworks\napktool -version\n# Versões novas podem lidar melhor com frameworks modernos"
      },
      {
        lang: "bash",
        code: "# Sobrescrevendo um framework existente\napktool if novo-framework.apk -t samsung\n# A instalação com a mesma tag substitui o arquivo anterior"
      },
      {
        lang: "bash",
        code: "# Listando frameworks por data de modificação\nls -lt ~/.local/share/apktool/framework\n# Ajuda a identificar frameworks instalados recentemente"
      },
      {
        lang: "bash",
        code: "# Backup da pasta de frameworks antes de uma limpeza\ncp -r ~/.local/share/apktool/framework ~/backup_frameworks\n# Segurança em primeiro lugar"
      }
    ],
    points: [
      "Frameworks precisam ser atualizados para acompanhar novas versões do Android.",
      "Limpar a pasta de frameworks resolve conflitos entre versões do ApkTool.",
      "A regeneração do 1.apk acontece automaticamente após a exclusão.",
      "Versões incompatíveis podem causar falhas silenciosas na decompilação.",
      "A pasta de frameworks varia conforme o OS, mas a lógica de uso é idêntica.",
      "Manter backups de frameworks OEM raros é uma prática recomendada.",
      "A tag -t ajuda a manter frameworks de diferentes versões organizados.",
      "O gerenciamento manual é necessário pois o ApkTool não possui comando 'update'.",
      "Erros de 'NullPointerException' no decoding costumam ser frameworks corrompidos.",
      "A limpeza total é o 'passo zero' de qualquer troubleshooting avançado."
    ],
    alerts: [
      {
        type: "danger",
        content: "Cuidado ao apagar pastas! Certifique-se de que está no diretório correto do ApkTool."
      },
      {
        type: "info",
        content: "Sempre que atualizar a versão do arquivo apktool.jar, considere limpar seus frameworks."
      },
      {
        type: "tip",
        content: "Se um app específico falha, tente baixar o framework de uma versão de firmware mais recente daquele dispositivo."
      },
      {
        type: "warning",
        content: "Frameworks corrompidos podem gerar XMLs que parecem corretos mas falham na recompilação."
      }
    ]
  }
];
