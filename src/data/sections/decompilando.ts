import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "primeiro-decompile",
    section: "decompilando",
    title: "Seu Primeiro Decompile",
    difficulty: "iniciante",
    subtitle: "Passo a passo detalhado do apktool d app.apk",
    intro: "Você já sentiu aquela curiosidade avassaladora de abrir um controle remoto antigo para ver os circuitos verdes lá dentro? Ou talvez a vontade de entender como uma receita de bolo de padaria consegue ser tão perfeita? Decompilar um aplicativo é o equivalente digital de 'abrir o capô'. No mundo Android, os aplicativos que baixamos da Play Store são arquivos selados chamados APKs (Android Packages). Eles são como contêineres lacrados que escondem toda a inteligência e o design criados pelos desenvolvedores. Quando usamos o ApkTool para realizar um 'decompile', não estamos apenas descompactando um arquivo; estamos traduzindo uma linguagem que apenas o processador do celular entende (o bytecode binário) para algo que nós, seres humanos, conseguimos ler, interpretar e — o mais empolgante — modificar. Imagine que o APK é um móvel montado daquelas grandes lojas de departamento brasileiras: o decompile é o processo de desmontá-lo com tal cuidado que você termina com todas as peças no chão, os parafusos separados em potinhos e, milagrosamente, o manual de montagem original reaparece na sua mão. Internamente, o ApkTool aciona uma série de motores complexos (como o Baksmali e o framework de recursos) para garantir que cada imagem, cada linha de código e cada configuração de segurança seja extraída sem perdas. Este é o seu rito de passagem: a transição de um simples usuário de tecnologia para um analista que olha por trás das cortinas.",
    codes: [
      {
        lang: "bash",
        code: "# 1. O comando mais simples para iniciar o processo:\napktool d aplicativo.apk\n# O 'd' instrui o ApkTool a executar a função 'decode'."
      },
      {
        lang: "bash",
        code: "# 2. Analisando o output típico da ferramenta:\nI: Using Apktool 2.9.3 on aplicativo.apk\nI: Loading resource table...\n# Aqui ele carrega os nomes de todas as imagens e textos."
      },
      {
        lang: "bash",
        code: "I: Decoding AndroidManifest.xml with resources...\n# O 'mapa' do app está sendo convertido de binário para XML legível."
      },
      {
        lang: "bash",
        code: "I: Loading resource table from file: /home/user/.local/share/apktool/framework/1.apk\n# Ele busca as 'peças padrão' do Android para entender o app."
      },
      {
        lang: "bash",
        code: "I: Regular manifest package...\nI: Decoding file-resources...\n# Extraindo ícones, sons e layouts das telas."
      },
      {
        lang: "bash",
        code: "I: Decoding values */* XMLs...\n# Traduzindo as cores, dimensões e textos do aplicativo."
      },
      {
        lang: "bash",
        code: "I: Baksmaling classes.dex...\n# O momento crítico: transformando o código binário em arquivos .smali."
      },
      {
        lang: "bash",
        code: "I: Copying assets and libs...\n# Movendo arquivos brutos e bibliotecas nativas para a pasta final."
      }
    ],
    points: [
      "O comando básico é 'apktool d [nome-do-arquivo].apk'.",
      "O ApkTool cria automaticamente uma pasta com o nome do aplicativo.",
      "O processo envolve a decodificação de recursos (XMLs) e fontes (DEX).",
      "O arquivo original .apk permanece intacto e inalterado.",
      "A saída no terminal (logs) é vital para verificar se houve erros.",
      "O tempo de processamento varia de acordo com o tamanho do app.",
      "A ferramenta utiliza o 'Baksmali' internamente para processar o código.",
      "Arquivos de framework são carregados para garantir a compatibilidade.",
      "Pastas como 'smali', 'res' e 'assets' são geradas na raiz do projeto.",
      "O AndroidManifest.xml é transformado em um arquivo de texto editável."
    ],
    alerts: [
      {
        type: "info",
        content: "Certifique-se de que o Java está instalado e configurado no seu PATH antes de começar."
      },
      {
        type: "warning",
        content: "Apps protegidos por 'obfuscators' pesados ou 'packers' podem gerar erros neste estágio."
      },
      {
        type: "tip",
        content: "Sempre organize seus APKs em pastas limpas para evitar confusão com múltiplos arquivos."
      },
      {
        type: "success",
        content: "Se você viu a mensagem 'Copying assets and libs', seu decompile foi um sucesso!"
      }
    ]
  },
  {
    slug: "o-flag-d",
    section: "decompilando",
    title: "O Comando decode em Detalhes",
    difficulty: "iniciante",
    subtitle: "Anatomia do comando e funcionamento interno",
    intro: "No dia a dia, costumamos usar a letra 'd' como um atalho rápido, mas por trás desse único caractere existe um universo de processos orquestrados com precisão cirúrgica. O comando 'decode' (ou simplesmente 'd') é o cérebro do ApkTool. Quando você o executa, a ferramenta inicia uma 'triagem' do arquivo APK, que nada mais é do que um arquivo compactado (ZIP) com uma estrutura interna rígida e otimizada para a velocidade de execução do Android. O objetivo do 'decode' é reverter essas otimizações. Imagine que um desenvolvedor 'cozinhou' o código e os recursos para criar o APK; o ApkTool tenta realizar a 'des-cozinha', separando os ingredientes originais. Internamente, ele utiliza o motor 'AAPT' para lidar com os recursos binários e o 'Baksmali' para desmontar o código Dalvik. É um processo de engenharia reversa que precisa lidar com diferentes versões do Android, frameworks customizados de fabricantes (como Samsung ou Xiaomi) e possíveis corrupções de arquivos. Entender a anatomia desse comando permite que você saiba exatamente o que está acontecendo quando o terminal parece 'parado' em uma etapa específica, permitindo diagnósticos mais rápidos de falhas ou incompatibilidades.",
    codes: [
      {
        lang: "bash",
        code: "# Estrutura completa do comando decode:\napktool d [opções] <arquivo.apk> [-o pasta_saida]\n# Onde 'd' é o comando principal."
      },
      {
        lang: "bash",
        code: "# O que acontece internamente (Etapa 1: Unzipping):\n# O ApkTool abre o APK e lê o cabeçalho do arquivo ZIP."
      },
      {
        lang: "bash",
        code: "# Etapa 2: Resource Decoding (AAPT):\n# Converte resources.arsc (tabela binária) em XMLs legíveis."
      },
      {
        lang: "bash",
        code: "# Etapa 3: Baksmaling (DEX processing):\n# Transforma classes.dex em arquivos .smali (Assembler Dalvik)."
      },
      {
        lang: "bash",
        code: "# Etapa 4: Framework Linking:\n# Vincula IDs de recursos do sistema aos nomes reais (ex: @android:string/ok)."
      },
      {
        lang: "bash",
        code: "# Etapa 5: Manifest Reconstruction:\n# Traduz o Manifesto binário para o formato XML original do projeto."
      }
    ],
    points: [
      "O comando 'decode' é o ponto de entrada para qualquer modificação.",
      "Ele aceita parâmetros opcionais antes do nome do arquivo.",
      "A ferramenta detecta automaticamente a versão do framework necessária.",
      "Internamente, separa arquivos que precisam de decode dos que são copiados 'as-is'.",
      "O Baksmali converte Bytecode Dalvik (.dex) em Smali (.smali).",
      "O decodificador de recursos transforma formatos binários em XML amigável.",
      "O arquivo apktool.yml é gerado para registrar o estado da decodificação.",
      "Diferentes flags podem ser usadas para acelerar ou pular etapas do decode.",
      "O ApkTool gerencia conflitos de nomes de arquivos entre diferentes densidades.",
      "A integridade dos arquivos originais é verificada durante a leitura."
    ],
    alerts: [
      {
        type: "info",
        content: "Você pode usar 'apktool decode' (por extenso) se preferir comandos mais verbosos."
      },
      {
        type: "danger",
        content: "Nunca interrompa o processo de decode no meio; isso deixará a pasta de saída corrompida."
      },
      {
        type: "tip",
        content: "Se um app der erro no decode, verifique se você instalou o framework correto do fabricante."
      }
    ]
  },
  {
    slug: "escolhendo-output",
    section: "decompilando",
    title: "Escolhendo a Pasta de Saída (-o)",
    difficulty: "iniciante",
    subtitle: "Organização e controle do diretório de destino",
    intro: "Imagine que você é um arquiteto trabalhando em vários projetos simultaneamente. Se você não der nomes específicos às suas pastas e arquivos, acabará com uma confusão monumental de documentos chamados 'projeto1', 'projeto_final', 'projeto_agora_vai'. No mundo do ApkTool, a organização é a diferença entre um modder amador e um profissional de segurança. Por padrão, o ApkTool cria a pasta de saída com o mesmo nome do arquivo APK. Se você rodar `apktool d whatsapp.apk`, ele criará a pasta `whatsapp/`. Mas e se você estiver testando diferentes versões ou patches? É aqui que entra o flag `-o` (output). Ele permite que você defina o nome exato e até o caminho completo de onde quer que os arquivos sejam despejados. É como ter o poder de dizer: 'Extraia este app de teste nesta pasta específica na minha Área de Trabalho para eu não esquecer'. Além disso, o flag `-f` (force) é o parceiro ideal do `-o`, pois permite sobrescrever uma pasta existente sem que você precise apagá-la manualmente no explorador de arquivos. Essa dupla de comandos é essencial para automações e scripts onde você quer garantir um ambiente de trabalho limpo a cada execução.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Definindo um nome personalizado para a pasta:\napktool d meu_app.apk -o pasta_da_analise\n# O resultado será a pasta 'pasta_da_analise'."
      },
      {
        lang: "bash",
        code: "# 2. Usando caminhos absolutos (Linux/macOS):\napktool d app.apk -o ~/Documents/EngenhariaReversa/Teste1"
      },
      {
        lang: "bash",
        code: "# 3. Usando caminhos no Windows:\napktool d app.apk -o C:\\Users\\Analista\\Desktop\\ProjetoX"
      },
      {
        lang: "bash",
        code: "# 4. Forçando a sobrescrita de uma pasta existente:\napktool d app.apk -f -o minha_pasta\n# O flag -f apaga o conteúdo antigo antes de extrair o novo."
      },
      {
        lang: "bash",
        code: "# 5. Organizando por versão (Boa prática):\napktool d v3.2.1.apk -o v3.2.1_original\napktool d v3.2.1.apk -o v3.2.1_mod_v1"
      },
      {
        lang: "bash",
        code: "# 6. Verificando a criação:\nls -d */ # Lista apenas as pastas no diretório atual."
      }
    ],
    points: [
      "O flag '-o' define o diretório de destino (output directory).",
      "Ajuda a manter múltiplas versões do mesmo app organizadas.",
      "Evita a necessidade de renomear manualmente pastas após o decompile.",
      "Aceita tanto nomes de pastas simples quanto caminhos complexos.",
      "No Windows, lembre-se de usar aspas se o caminho tiver espaços.",
      "O flag '-f' (force) é essencial quando você precisa repetir o processo.",
      "Organizar pastas por data ou versão é uma prática recomendada.",
      "O ApkTool falhará se tentar criar uma pasta onde já existe um arquivo comum.",
      "Facilita o uso de ferramentas de comparação (diff) entre pastas.",
      "Permite salvar resultados diretamente em drives externos ou redes."
    ],
    alerts: [
      {
        type: "warning",
        content: "Cuidado ao usar o flag '-f'; ele apagará TUDO na pasta de destino sem pedir confirmação."
      },
      {
        type: "tip",
        content: "Use nomes curtos e sem caracteres especiais para evitar problemas em diferentes terminais."
      },
      {
        type: "info",
        content: "Se você omitir o '-o', o ApkTool usará o nome do arquivo APK (removendo a extensão .apk)."
      }
    ]
  },
  {
    slug: "flags-uteis-decode",
    section: "decompilando",
    title: "Flags Mais Úteis do Decode",
    difficulty: "intermediario",
    subtitle: "Aumentando o poder e a flexibilidade da ferramenta",
    intro: "O ApkTool não é uma ferramenta de 'um clique só'; ele é um canivete suíço com dezenas de acessórios que você só descobre quando precisa. As 'flags' são esses acessórios. Elas modificam o comportamento padrão da ferramenta para se adaptar a situações específicas. Imagine que você está tentando consertar um carro, mas os parafusos estão enferrujados. Você não usa apenas a chave de fenda, você usa um lubrificante. As flags do ApkTool são esses lubrificantes técnicos. Às vezes, o aplicativo tem tantos recursos que a memória do seu computador acaba; existe uma flag para isso. Às vezes, você só quer ver o manifesto para entender as permissões; existe uma flag para isso também. Dominar essas opções é o que separa o apertador de botões do verdadeiro especialista. Por exemplo, o uso de múltiplas threads (`-t`) pode reduzir o tempo de decompile em processadores modernos de minutos para segundos. Já a flag `--force-manifest` garante que você tenha acesso ao coração do app mesmo quando outros recursos falham. Conhecer essa tabela de opções é fundamental para lidar com apps modernos, cada vez mais complexos e pesados.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Ignorar a decodificação de recursos (Rápido):\napktool d app.apk -r\n# Útil quando você só quer o código Smali."
      },
      {
        lang: "bash",
        code: "# 2. Ignorar a decodificação das fontes (DEX):\napktool d app.apk -s\n# Útil quando você só quer mudar ícones ou traduzir."
      },
      {
        lang: "bash",
        code: "# 3. Forçar a limpeza da pasta de saída:\napktool d app.apk -f"
      },
      {
        lang: "bash",
        code: "# 4. Usar múltiplas threads para acelerar o processo:\napktool d app.apk -t 4\n# Onde '4' é o número de núcleos do seu processador."
      },
      {
        lang: "bash",
        code: "# 5. Manter os arquivos de recursos binários o mais próximo do original:\napktool d app.apk --keep-broken-res\n# Tenta prosseguir mesmo se encontrar erros em algum XML."
      },
      {
        lang: "bash",
        code: "# 6. Especificar o caminho do framework:\napktool d app.apk -p ./meus_frameworks"
      }
    ],
    points: [
      "'-r' (no-res): Pula a decodificação de recursos visuais.",
      "'-s' (no-src): Pula a decodificação de arquivos DEX para Smali.",
      "'-f' (force): Apaga o diretório de destino se ele já existir.",
      "'-t' (threads): Define quantos núcleos de CPU usar.",
      "'--only-main-classes': Decompila apenas o arquivo classes.dex principal.",
      "'-p' (frame-path): Define onde buscar os arquivos de framework.",
      "'-m' (match-original): Tenta manter o APK o mais próximo possível do original.",
      "'-a' (aapt): Permite especificar uma versão customizada do executável AAPT.",
      "'--force-manifest': Prioriza a decodificação do AndroidManifest.xml.",
      "A combinação de flags ajuda a contornar erros em apps protegidos."
    ],
    alerts: [
      {
        type: "info",
        content: "Muitas flags podem ser combinadas, como 'apktool d app.apk -f -r -s'."
      },
      {
        type: "warning",
        content: "Usar '--keep-broken-res' pode gerar um APK que não instala se os erros forem graves."
      },
      {
        type: "tip",
        content: "Em computadores potentes, o flag '-t' reduz significativamente a espera."
      }
    ]
  },
  {
    slug: "decode-sem-resources",
    section: "decompilando",
    title: "Decompile Sem Resources (-r)",
    difficulty: "intermediario",
    subtitle: "Focando exclusivamente na análise de código",
    intro: "Você já tentou baixar um arquivo imenso só para descobrir que só precisava de uma página dele? Em muitos cenários de engenharia reversa, os 'recursos' (imagens em 4K, sons de alta fidelidade, layouts complexos) são apenas ruído. Se o seu objetivo é analisar um algoritmo de criptografia, encontrar uma URL de servidor escondida ou aplicar um patch de bypass em uma verificação de licença, você não precisa que o ApkTool perca tempo transformando milhares de imagens PNG em pastas organizadas. O flag `-r` (de 'no-resources') é a sua ferramenta de precisão. Ele instrui o ApkTool a extrair os recursos em seu formato binário original, sem tentar decodificá-los. Isso tem um impacto duplo: primeiro, a velocidade de decompile aumenta drasticamente (às vezes até 10x mais rápido); segundo, você evita erros de decodificação comuns em apps que usam técnicas de 'anti-apktool' focadas em corromper o cabeçalho de recursos. É a técnica favorita de analistas de malware e pesquisadores de segurança que querem ir direto ao ponto: o código Smali.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Comando focado em análise de código:\napktool d malware.apk -r\n# Os XMLs continuarão binários, mas o Smali estará legível."
      },
      {
        lang: "bash",
        code: "# 2. Onde verificar o resultado:\ncd pasta_do_app/res/\n# Você verá que os arquivos .xml não podem ser lidos como texto."
      },
      {
        lang: "bash",
        code: "# 3. Por que isso é mais rápido?\n# O ApkTool pula a etapa 'Decoding values */* XMLs'."
      },
      {
        lang: "bash",
        code: "# 4. Ideal para busca de strings no código:\ngrep -r \"http://\" smali/\n# Pesquisando conexões de rede sem ruído de recursos."
      },
      {
        lang: "bash",
        code: "# 5. Combinando com output personalizado:\napktool d app.apk -r -o analise_codigo_apenas"
      },
      {
        lang: "bash",
        code: "# 6. Como saber se funcionou:\n# Verifique se a pasta 'res' contém arquivos .xml ilegíveis."
      }
    ],
    points: [
      "O flag '-r' impede a decodificação da tabela de recursos (resources.arsc).",
      "Imagens e arquivos brutos permanecem inalterados.",
      "Reduz drasticamente o uso de memória RAM durante o processo.",
      "Ideal para análise de malwares que tentam travar o ApkTool via recursos.",
      "Os arquivos Smali são gerados normalmente.",
      "Você NÃO conseguirá editar textos ou layouts neste modo.",
      "É útil quando você só precisa recompilar o código e não tocou na interface.",
      "Evita erros de 'Resource not found' durante a recompilação.",
      "Mantém o tamanho original dos recursos, evitando inflar o APK.",
      "Perfeito para extrair lógicas de apps que têm gigabytes de assets."
    ],
    alerts: [
      {
        type: "danger",
        content: "Se você usar '-r', não tente editar o strings.xml; ele estará em formato binário."
      },
      {
        type: "info",
        content: "Este modo é excelente para quem faz 'Smali Patching' puro."
      },
      {
        type: "tip",
        content: "Combine com '-f' para garantir que você está vendo a versão binária correta."
      }
    ]
  },
  {
    slug: "decode-sem-sources",
    section: "decompilando",
    title: "Decompile Sem Sources (-s)",
    difficulty: "intermediario",
    subtitle: "Focando em design, tradução e recursos visuais",
    intro: "Imagine que você é um designer encarregado de traduzir um aplicativo estrangeiro para o português brasileiro ou de mudar a identidade visual de um app interno para o modo noturno. Você não é um programador Smali e não quer nem chegar perto daquelas linhas de código intimidadoras. O flag `-s` (de 'no-sources') foi feito sob medida para você. Ele diz ao ApkTool: 'Ignore os arquivos .dex, não transforme nada em Smali, apenas me dê os XMLs e as imagens'. O resultado é uma pasta de saída limpa, sem as milhares de pastas de código que costumam poluir o projeto. O arquivo `classes.dex` original é copiado como um arquivo comum. Isso garante que a lógica do aplicativo permaneça 100% original e segura, sem qualquer risco de erro de recompilação no código. É a escolha perfeita para tradutores, criadores de temas (themes) e entusiastas que querem apenas 'dar um tapa' no visual sem quebrar as engrenagens internas do software.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Comando focado em design e tradução:\napktool d app.apk -s\n# O processo será muito mais rápido, pulando o Baksmali."
      },
      {
        lang: "bash",
        code: "# 2. Verificando a pasta de saída:\nls -F\n# Você verá a pasta 'res', mas NÃO verá a pasta 'smali'."
      },
      {
        lang: "bash",
        code: "# 3. Onde está o código?\n# O arquivo 'classes.dex' estará na raiz como um arquivo binário."
      },
      {
        lang: "bash",
        code: "# 4. Traduzindo o app:\nnano res/values/strings.xml\n# Altere os textos e salve."
      },
      {
        lang: "bash",
        code: "# 5. Mudando cores:\nnano res/values/colors.xml\n# Altere os valores hexadecimais (ex: #FF0000)."
      },
      {
        lang: "bash",
        code: "# 6. Combinando com recursos binários (Raro):\napktool d app.apk -s -r\n# Isso apenas descompacta o APK, sem decodificar NADA."
      }
    ],
    points: [
      "O flag '-s' pula a fase de desmontagem do código (Baksmali).",
      "Foca inteiramente na decodificação de arquivos XML e imagens.",
      "Garante que a lógica do aplicativo não seja alterada por acidente.",
      "É o modo mais rápido de abrir um APK para edição visual.",
      "Ideal para quem trabalha com 'Theming' (personalização de cores).",
      "Indispensável para projetos de tradução comunitária de apps.",
      "Reduz a chance de erros de recompilação causados por código complexo.",
      "O arquivo classes.dex é mantido em sua forma original comprimida.",
      "Permite editar o AndroidManifest.xml livremente.",
      "Facilita a análise da estrutura de arquivos de mídia (sons, vídeos)."
    ],
    alerts: [
      {
        type: "warning",
        content: "Se você usar '-s', não poderá adicionar novas funcionalidades ou bypasses lógicos."
      },
      {
        type: "info",
        content: "Muitos modders de jogos usam este modo para trocar apenas as texturas."
      },
      {
        type: "tip",
        content: "Se o seu objetivo é APENAS mudar o ícone, este é o comando correto."
      }
    ]
  },
  {
    slug: "modo-verbose",
    section: "decompilando",
    title: "Modo Verbose e Debugging",
    difficulty: "iniciante",
    subtitle: "Interpretando logs e diagnosticando falhas",
    intro: "Você já esteve em um consultório médico onde o doutor apenas te dá um remédio sem explicar o que você tem? É frustrante, não é? No mundo do desenvolvimento, rodar um comando e receber apenas um 'Erro' é a mesma coisa. O modo 'Verbose' (`-v`) é o seu médico tagarela: ele vai te contar cada detalhe, cada pequeno passo e cada decisão que o ApkTool está tomando enquanto trabalha. Ao ativar o modo verbose, o terminal deixa de exibir apenas as etapas principais e passa a mostrar o 'fluxo de consciência' da ferramenta. Isso é fundamental quando um decompile falha. O log verbose pode revelar que o erro não foi no aplicativo inteiro, mas em uma única imagem malformada na pasta `res/drawable-xxhdpi`, ou que um framework específico está faltando no seu sistema. Aprender a ler esses logs é como aprender a ler exames de imagem: no começo parece apenas ruído, mas logo você começa a identificar os padrões que levam à solução dos problemas mais complexos de engenharia reversa.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Ativando o modo tagarela:\napktool -v d app.apk\n# O '-v' deve vir ANTES do comando 'd' em algumas versões."
      },
      {
        lang: "bash",
        code: "# 2. Exemplo de log detalhado de recursos:\nI: Re-querying resource: [0x01010000] (android:attr/name)\n# O ApkTool está buscando a definição oficial do Android."
      },
      {
        lang: "bash",
        code: "# 3. Identificando falhas de framework:\nW: Could not decode attr value, using undecoded value\n# Aviso: Algo não pôde ser traduzido, mas o processo continua."
      },
      {
        lang: "bash",
        code: "# 4. Debugging de erros DEX:\nI: Baksmaling classes.dex... (v2.2.0)\n# Mostra a versão exata do Baksmali sendo usada."
      },
      {
        lang: "bash",
        code: "# 5. Redirecionando logs para um arquivo (Melhor para ler):\napktool -v d app.apk > logs_analise.txt 2>&1\n# Salva tudo em um arquivo de texto para análise posterior."
      },
      {
        lang: "bash",
        code: "# 6. Filtrando erros específicos com grep:\napktool -v d app.apk 2>&1 | grep -i \"error\""
      }
    ],
    points: [
      "O flag '-v' aumenta o nível de detalhamento das mensagens no terminal.",
      "Mostra as versões internas das subferramentas (Baksmali, Smali, AAPT).",
      "Essencial para identificar qual arquivo específico está causando erro no decode.",
      "Ajuda a entender como o ApkTool resolve dependências de frameworks.",
      "Permite monitorar o progresso em tempo real de apps muito grandes.",
      "Mostra avisos ('W:') que não interrompem o processo, mas são importantes.",
      "Facilita o reporte de bugs para os desenvolvedores do ApkTool.",
      "Revela caminhos de arquivos internos usados durante o processamento.",
      "Útil para aprender o funcionamento interno da plataforma Android.",
      "Pode ser usado em conjunto com qualquer outro flag ou comando."
    ],
    alerts: [
      {
        type: "info",
        content: "O modo verbose gera MUITO texto. Use o scroll do terminal ou salve em um arquivo."
      },
      {
        type: "tip",
        content: "Se o ApkTool 'congelar', o modo verbose mostrará qual arquivo ele está tentando processar no momento."
      },
      {
        type: "warning",
        content: "Em alguns terminais muito lentos, o excesso de logs pode atrasar um pouco o processo."
      }
    ]
  }
];
