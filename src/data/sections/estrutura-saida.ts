import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "pasta-de-saida-overview",
    section: "estrutura-saida",
    title: "Visão Geral da Pasta de Saída",
    difficulty: "iniciante",
    subtitle: "O que cada arquivo e diretório representa no seu projeto",
    intro: "Imagine que você acabou de desmontar um relógio suíço ultra complexo e espalhou as peças em uma mesa de trabalho organizada. A pasta de saída do ApkTool é exatamente essa mesa. Quando executamos o decompile, o 'bloco monolítico' que era o arquivo APK é fragmentado em uma estrutura de diretórios que espelha fielmente como o desenvolvedor original organizou o projeto, mas com uma diferença crucial: os arquivos que antes estavam em formatos binários e compactos agora são apresentados em formatos amigáveis ao ser humano. Essa 'geografia' do projeto é o que permite que você saiba exatamente onde colocar a mão para trocar o logo da empresa, onde encontrar o endereço do banco de dados ou como desativar uma verificação de segurança chata. No Brasil, costumamos dizer que para conhecer bem uma casa, precisamos saber onde fica o quadro de luz e onde estão os canos; a pasta de saída é o mapa completo da fiação e do encanamento do aplicativo. Internamente, o ApkTool garante que a relação entre esses arquivos seja mantida através de identificadores, permitindo que, após suas modificações, as peças possam ser encaixadas de volta perfeitamente. Entender esta estrutura não é apenas uma questão de curiosidade, é a base fundamental para qualquer modificação bem-sucedida, evitando que você perca horas procurando um arquivo que está bem debaixo do seu nariz. Pense na pasta de saída como se fosse a planta baixa de um prédio comercial em São Paulo: cada andar tem uma função específica, cada sala tem uma placa na porta indicando o que acontece ali dentro, e os corredores conectam tudo de forma lógica. Da mesma maneira, a estrutura gerada pelo ApkTool segue uma convenção rigorosa onde cada diretório tem um propósito claro e bem definido. A pasta `smali/` é o escritório de engenharia onde toda a lógica de programação reside. A pasta `res/` é o departamento de design, responsável por tudo que é visual. A pasta `assets/` funciona como o almoxarifado, guardando materiais brutos que serão usados conforme a necessidade. E o `AndroidManifest.xml` é a recepção do prédio, o primeiro ponto de contato que diz ao visitante (o sistema Android) quem mora ali e o que cada morador faz. Quando você domina essa organização, modificar um aplicativo deixa de ser um tiro no escuro e passa a ser um processo cirúrgico e preciso. Cada arquivo tem seu lugar, cada pasta tem sua razão de existir, e qualquer alteração que você fizer pode ser rastreada e revertida com facilidade. É como conhecer cada beco e viela do seu bairro: você nunca se perde e sempre sabe o caminho mais rápido para chegar onde precisa. Essa familiaridade com a estrutura é o que separa um iniciante que fica perdido olhando centenas de arquivos de um profissional que vai direto ao ponto e resolve o problema em minutos.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Listando a estrutura básica gerada pelo ApkTool:\nls -F pasta_do_app/\n# A saída mostrará pastas como res/, smali/, assets/ e arquivos como apktool.yml."
      },
      {
        lang: "bash",
        code: "# 2. Localizando o arquivo de configuração principal:\ncat apktool.yml\n# Este arquivo é a 'alma' do projeto decodificado."
      },
      {
        lang: "bash",
        code: "# 3. Diferenciando conteúdo gerado vs conteúdo original:\n# O ApkTool gera a pasta 'original/' para guardar metadados de assinatura."
      },
      {
        lang: "bash",
        code: "# 4. Verificando a presença de múltiplos arquivos DEX:\nls -d smali*/\n# Se houver 'smali', 'smali_classes2', etc., o app usa Multidex."
      },
      {
        lang: "bash",
        code: "# 5. Explorando a pasta de metadados do Android:\nls -R unknown/\n# Contém arquivos que não se encaixam na estrutura padrão do Android."
      },
      {
        lang: "bash",
        code: "# 6. Visualizando o manifesto decodificado:\nhead -n 15 AndroidManifest.xml\n# O 'contrato' do aplicativo com o sistema operacional."
      },
      {
        lang: "bash",
        code: "# Visualizando a árvore de diretórios da saída\ntree -L 2 app_decompilado/ | head -30\n# Mostra a hierarquia completa de pastas e arquivos"
      },
      {
        lang: "bash",
        code: "# Contando o total de arquivos gerados\nfind app_decompilado/ -type f | wc -l\n# Apps grandes podem gerar milhares de arquivos"
      },
      {
        lang: "bash",
        code: "# Verificando o espaço total ocupado pela decompilação\ndu -sh app_decompilado/*/\n# Mostra quanto cada subpasta ocupa em disco"
      },
      {
        lang: "bash",
        code: "# Listando os tipos de arquivo mais comuns\nfind app_decompilado/ -type f | sed 's/.*\\.//' | sort | uniq -c | sort -rn | head -10\n# Revela a distribuição de extensões (.smali, .xml, .png, etc.)"
      }
    ],
    points: [
      "A pasta de saída é uma representação descompactada e decodificada do APK.",
      "Arquivos .smali contêm a lógica de programação (ex-DEX).",
      "A pasta 'res' armazena recursos que sofrem decodificação (XMLs e imagens).",
      "A pasta 'assets' contém arquivos brutos não processados pelo sistema de recursos.",
      "A pasta 'lib' guarda bibliotecas nativas (.so) para diferentes processadores.",
      "O arquivo 'apktool.yml' é indispensável para a futura recompilação.",
      "O 'AndroidManifest.xml' agora está em formato de texto puro editável.",
      "A pasta 'original' contém a assinatura original e o manifesto binário.",
      "A pasta 'unknown' armazena arquivos que estavam no APK mas não no código fonte.",
      "A estrutura de pastas dentro de 'smali/' segue o padrão de pacotes Java.",
      "A pasta de saída replica a estrutura de um projeto Android Studio para facilitar navegação.",
      "O arquivo apktool.yml na raiz contém metadados essenciais para a recompilação.",
      "Pastas smali_classes2, smali_classes3 indicam que o app usa multidex.",
      "O tamanho da pasta decompilada é tipicamente 3-5x maior que o APK original.",
      "Use tree ou find para ter uma visão geral antes de mergulhar nos detalhes."
    ],
    alerts: [
      {
        type: "info",
        content: "Nunca apague o arquivo apktool.yml; sem ele, o ApkTool não saberá como remontar o app."
      },
      {
        type: "warning",
        content: "Arquivos na pasta 'original' não devem ser editados; eles servem apenas de referência."
      },
      {
        type: "tip",
        content: "Use o comando 'tree' (se disponível) para ter uma visão aérea de toda a estrutura."
      },
      {
        type: "success",
        content: "Se tree mostra smali/, res/, AndroidManifest.xml e apktool.yml, a estrutura está completa."
      },
      {
        type: "tip",
        content: "Instale o comando tree (sudo apt install tree) para visualizar hierarquias de forma elegante."
      }
    ]
  },
  {
    slug: "entendendo-smali-folder",
    section: "estrutura-saida",
    title: "A Pasta smali/",
    difficulty: "iniciante",
    subtitle: "Estrutura de pacotes, classes e navegação no código",
    intro: "Se o APK fosse um cérebro, a pasta `smali/` seria o córtex cerebral, onde toda a lógica, as memórias e as decisões residem. Quando um desenvolvedor escreve um app em Java ou Kotlin, ele organiza o código em 'pacotes' (packages), como `com.google.android.apps`. Durante o processo de compilação oficial, tudo isso é amassado e transformado em arquivos binários `.dex`. O ApkTool, através do Baksmali, realiza o milagre de desfazer esse processo, recriando a estrutura de pastas original do desenvolvedor dentro do diretório `smali/`. Cada pasta representa um nível do pacote, e cada arquivo `.smali` representa uma classe. Se você encontrar um arquivo com um cifrão no nome, como `MainActivity$1.smali`, não se assuste: estas são as 'inner classes' ou classes anônimas, muito comuns em callbacks de botões. Navegar por esta pasta é como navegar pelo código fonte original, mas escrito em uma linguagem de montagem. É aqui que os verdadeiros 'hackers' passam a maior parte do tempo, alterando condições de IF, mudando retornos de funções e injetando códigos de depuração. No Brasil, temos a cultura de 'dar um jeitinho'; a pasta smali é o lugar onde você aprende a dar o 'jeitinho técnico' para fazer o app se comportar exatamente como você deseja. Para entender melhor, pense na pasta `smali/` como a cozinha de um restaurante por quilo em Belo Horizonte: por fora, o cliente vê apenas o buffet bonito e organizado (a interface do app), mas é na cozinha que toda a mágica acontece, onde os ingredientes são combinados, onde as receitas são seguidas e onde o tempero é ajustado. Cada arquivo `.smali` é como uma receita individual: tem seus ingredientes (variáveis), seu modo de preparo (métodos) e seu resultado final (retorno). Quando você abre um arquivo smali pela primeira vez, pode parecer assustador, como se estivesse lendo um cardápio em outro idioma. Mas assim como um cozinheiro experiente reconhece padrões nas receitas, você vai começar a identificar estruturas repetitivas: declarações de classe no topo, campos (fields) logo abaixo, e métodos com suas instruções registradas em sequência. A beleza do Smali é que, apesar de ser uma linguagem de baixo nível, ela preserva toda a estrutura organizacional do código original. Os nomes dos pacotes, das classes e dos métodos continuam lá (a menos que o desenvolvedor tenha usado ofuscação). Isso significa que, com paciência e as ferramentas certas, você consegue reconstruir mentalmente o que o programador original estava pensando quando escreveu aquele código. É um trabalho de detetive digital, onde cada pista está escondida entre registros, invocações de métodos e saltos condicionais. Dominar a navegação nesta pasta é o primeiro passo para se tornar um verdadeiro engenheiro reverso de aplicativos Android.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Estrutura de pacotes típica:\nsmali/com/whatsapp/Main.smali\n# Reflete a classe 'com.whatsapp.Main' do código Java."
      },
      {
        lang: "bash",
        code: "# 2. Identificando classes anônimas (Inner Classes):\nls smali/com/app/MainActivity$*.smali\n# Estes arquivos contêm lógicas de cliques, timers, etc."
      },
      {
        lang: "bash",
        code: "# 3. Como navegar rapidamente para um pacote:\ncd smali/com/empresa/projeto/utilidades/\n# Aqui você encontrará classes de ajuda (Utils)."
      },
      {
        lang: "bash",
        code: "# 4. Verificando o conteúdo de uma classe Smali:\ncat MainActivity.smali | head -n 20\n# Mostra o cabeçalho da classe e o super-tipo."
      },
      {
        lang: "bash",
        code: "# 5. Buscando por uma string em todos os arquivos Smali:\ngrep -r \"minha_chave_api\" smali/\n# Uma das formas mais rápidas de encontrar segredos."
      },
      {
        lang: "bash",
        code: "# 6. Lidando com Multidex (Mais de um arquivo DEX):\nsmali_classes2/com/google/...\n# Pastas numeradas indicam que o código foi dividido pelo Android."
      },
      {
        lang: "bash",
        code: "# Navegando pela estrutura de pacotes no Smali\nfind app_decompilado/smali -type d | head -20\n# Cada pasta corresponde a um pacote Java (com.exemplo.app)"
      },
      {
        lang: "bash",
        code: "# Contando classes por pacote\nfor d in app_decompilado/smali/com/*/; do echo \"$d: $(find $d -name '*.smali' | wc -l) classes\"; done\n# Identifica os módulos mais complexos do app"
      },
      {
        lang: "bash",
        code: "# Buscando a classe principal (MainActivity)\nfind app_decompilado/smali -name 'MainActivity.smali'\n# Ponto de entrada visual do aplicativo"
      },
      {
        lang: "bash",
        code: "# Verificando se há múltiplas pastas smali (multidex)\nls -d app_decompilado/smali*\n# smali_classes2, smali_classes3 indicam multidex"
      }
    ],
    points: [
      "Cada arquivo .smali é a representação textual de uma classe Java compilada.",
      "A hierarquia de diretórios é idêntica à declaração de 'package' no código original.",
      "Classes internas (inner classes) usam o caractere '$' como separador no nome do arquivo.",
      "Nomes de métodos e variáveis (fields) são preservados, a menos que haja ofuscação.",
      "O Smali é uma linguagem orientada a registros, não a pilhas (como o Java original).",
      "É possível mover arquivos entre pastas smali_classes* para reorganizar o app.",
      "A primeira linha de um arquivo Smali define o nome completo da classe (.class).",
      "A segunda linha define a classe pai (.super).",
      "Anotações (.annotation) também são preservadas e visíveis no Smali.",
      "Caminhos de classes no Smali usam barras ('/') em vez de pontos ('.').",
      "Cada arquivo .smali corresponde a exatamente uma classe Java/Kotlin.",
      "Classes internas (inner classes) aparecem como NomeClasse$InnerClass.smali.",
      "A estrutura de pastas espelha a hierarquia de pacotes Java (com/exemplo/app/).",
      "Classes anônimas aparecem como NomeClasse$1.smali, $2.smali, etc.",
      "O smali é onde toda a lógica do app reside — é o coração da engenharia reversa."
    ],
    alerts: [
      {
        type: "info",
        content: "Se o código parecer ilegível (ex: a.smali, b.smali), o app está ofuscado com ProGuard ou R8."
      },
      {
        type: "tip",
        content: "Use o VS Code com uma extensão Smali para ter realce de sintaxe e facilitar a leitura."
      },
      {
        type: "warning",
        content: "Mudar um arquivo de lugar sem atualizar sua declaração '.class' interna causará erros fatais."
      },
      {
        type: "success",
        content: "Se find retorna arquivos .smali organizados em pacotes, o código está pronto para análise."
      },
      {
        type: "tip",
        content: "Comece sempre pela MainActivity.smali — é o ponto de entrada visual do app."
      }
    ]
  },
  {
    slug: "entendendo-res-folder",
    section: "estrutura-saida",
    title: "A Pasta res/",
    difficulty: "iniciante",
    subtitle: "Recursos, DPI buckets e organização visual",
    intro: "A pasta `res/` é o camarim do aplicativo. Tudo o que o usuário vê e toca está definido aqui de forma extremamente organizada. O Android utiliza um sistema inteligente de 'qualificadores' para entregar a melhor experiência dependendo do dispositivo. Você já se perguntou por que um app parece nítido tanto em um celular baratinho quanto em um tablet de última geração? A resposta está nos 'DPI buckets' (baldes de densidade). Dentro de `res/`, você verá várias pastas `drawable-hdpi`, `drawable-xhdpi`, etc. Cada uma contém a mesma imagem, mas em resoluções diferentes. Além das imagens, temos a pasta `layout/`, que contém os arquivos XML que definem a posição de cada botão e texto na tela. E não podemos esquecer da pasta `values/`, o coração da tradução e customização. Nela, o arquivo `strings.xml` guarda todos os textos do app, enquanto o `colors.xml` guarda a paleta de cores. No Brasil, onde temos uma diversidade enorme de aparelhos Android, entender como esses recursos são selecionados pelo sistema é vital para garantir que sua modificação visual funcione bem em qualquer 'telona' ou 'telinha'. Internamente, o ApkTool converteu esses arquivos de um formato binário (o .arsc) para XMLs editáveis, permitindo que você mude frases, cores e comportamentos visuais com apenas algumas edições de texto. Para ilustrar com uma analogia bem brasileira, pense na pasta `res/` como uma loja de departamentos no centro de São Paulo. Cada andar (subpasta) é dedicado a um tipo de produto: o andar de roupas (drawable) tem seções para cada tamanho de corpo (hdpi, xhdpi, xxhdpi), garantindo que todo mundo encontre algo que sirva perfeitamente. O andar de decoração (layout) mostra como os móveis devem ser arranjados em cada cômodo da casa. O andar de papelaria (values) guarda os catálogos com nomes, preços e descrições de tudo que existe na loja. Essa organização meticulosa não é por acaso: o sistema Android, em tempo de execução, consulta essas pastas como um comprador exigente que sabe exatamente o que precisa. Se o celular está em português do Brasil, ele vai direto na pasta `values-pt-rBR/`. Se a tela é de alta densidade, ele busca em `drawable-xxhdpi/`. Se não encontrar o recurso específico, ele sobe na hierarquia até encontrar um substituto aceitável. Compreender esse mecanismo de fallback é essencial para quem quer modificar a aparência de um app sem quebrar a experiência em dispositivos diferentes. Muitos iniciantes cometem o erro de alterar uma imagem apenas na pasta `drawable-xhdpi/` e se esquecem das outras densidades, resultando em ícones pixelados ou desproporcionais em certos aparelhos. A regra de ouro é: se você vai modificar um recurso visual, verifique todas as pastas de densidade onde ele aparece e faça a alteração de forma consistente em todas elas.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Estrutura de densidades de imagem:\nres/drawable-mdpi/  # Médio (Base)\nres/drawable-hdpi/  # Alto\nres/drawable-xhdpi/ # Extra Alto"
      },
      {
        lang: "bash",
        code: "# 2. Onde as interfaces de tela moram:\nres/layout/activity_main.xml\n# Aqui você muda o design da tela principal."
      },
      {
        lang: "bash",
        code: "# 3. Traduzindo o aplicativo:\nres/values/strings.xml  # Padrão (Inglês geralmente)\nres/values-pt-rBR/strings.xml # Português do Brasil"
      },
      {
        lang: "bash",
        code: "# 4. Localizando as cores do sistema:\ncat res/values/colors.xml\n# Procure por tags como <color name=\"primary\">#FF0000</color>."
      },
      {
        lang: "bash",
        code: "# 5. Animações e transições:\nres/anim/fade_in.xml\n# Define como as janelas aparecem suavemente."
      },
      {
        lang: "bash",
        code: "# 6. Recursos específicos de versão do Android:\nres/values-v24/styles.xml\n# Estilos usados apenas em Android 7.0 ou superior."
      },
      {
        lang: "bash",
        code: "# Listando todas as pastas de recursos\nls app_decompilado/res/\n# values, layout, drawable, mipmap, xml, raw, etc."
      },
      {
        lang: "bash",
        code: "# Verificando traduções disponíveis\nls app_decompilado/res/ | grep values-\n# values-pt, values-es, values-fr indicam idiomas suportados"
      },
      {
        lang: "bash",
        code: "# Contando recursos por tipo\nfor d in app_decompilado/res/*/; do echo \"$(basename $d): $(ls $d | wc -l) arquivos\"; done\n# Mostra a distribuição de recursos"
      },
      {
        lang: "bash",
        code: "# Buscando strings que contêm URLs\ngrep -r 'http' app_decompilado/res/values/strings.xml\n# Pode revelar endpoints de API hardcoded"
      }
    ],
    points: [
      "A pasta 'res' contém recursos que o sistema Android gerencia e indexa automaticamente.",
      "Pastas com sufixos (ex: -land) são usadas apenas em modo paisagem.",
      "O arquivo 'strings.xml' é o principal alvo para traduções (i18n).",
      "Layouts XML descrevem a hierarquia de Views (botões, textos, imagens).",
      "Arquivos na pasta 'drawable' podem ser imagens PNG/WebP ou vetores XML.",
      "A pasta 'mipmap' é reservada para os ícones que aparecem no launcher do celular.",
      "O arquivo 'public.xml' em 'values' mapeia nomes de recursos para IDs hexadecimais.",
      "Recursos podem ser sobrescritos por qualificadores de idioma, região e versão.",
      "O ApkTool decodifica o arquivo 'resources.arsc' para gerar estas pastas.",
      "Erros em XMLs na pasta 'res' são a causa número 1 de falhas na recompilação.",
      "A pasta res/ contém recursos compilados que recebem IDs no R.java.",
      "Subpastas com sufixos (-hdpi, -v24, -land) são variantes para diferentes dispositivos.",
      "O arquivo public.xml mapeia nomes de recursos para seus IDs hexadecimais.",
      "Recursos em res/ são validados pelo aapt durante a recompilação.",
      "Modificar IDs em public.xml pode quebrar referências no código Smali."
    ],
    alerts: [
      {
        type: "tip",
        content: "Para mudar o nome de um app na tela inicial, procure pela string 'app_name' em res/values/strings.xml."
      },
      {
        type: "warning",
        content: "Nunca mude o ID de um recurso no public.xml a menos que saiba exatamente o que está fazendo."
      },
      {
        type: "info",
        content: "Imagens em formato .9.png (Nine-Patch) são imagens redimensionáveis especiais."
      },
      {
        type: "success",
        content: "Se ls res/ mostra múltiplas pastas (values, layout, drawable), os recursos foram decodificados."
      },
      {
        type: "tip",
        content: "Foque em res/values/strings.xml para entender os textos e res/layout/ para a interface."
      }
    ]
  },
  {
    slug: "entendendo-assets-folder",
    section: "estrutura-saida",
    title: "A Pasta assets/",
    difficulty: "iniciante",
    subtitle: "Diferenças de res/, referências por path e uso prático",
    intro: "Se a pasta `res/` é o camarim organizado, a pasta `assets/` é o porão de arquivos brutos. A grande diferença entre elas é como o Android as enxerga. Enquanto os recursos em `res/` são catalogados, ganham um ID numérico e são otimizados pelo sistema, os arquivos em `assets/` são tratados como arquivos comuns em um sistema de arquivos. O desenvolvedor precisa saber o caminho exato (`path/to/file.json`) para acessá-los via código. Por que isso importa? Porque a pasta `assets/` é o lugar perfeito para coisas que não se encaixam no modelo rígido do Android: fontes personalizadas (.ttf), arquivos de configuração em JSON ou YAML, modelos de inteligência artificial (como arquivos do TensorFlow Lite), ou até mesmo sites inteiros que rodam dentro de uma WebView. No Brasil, muitos aplicativos de bancos e serviços usam `assets/` para carregar configurações dinâmicas que mudam de acordo com o servidor. Ao contrário da `res/`, a `assets/` aceita qualquer profundidade de subpastas que você desejar, tornando-a muito mais flexível para organizar grandes volumes de dados brutos que o app precisa carregar durante o uso. Para usar uma analogia do dia a dia brasileiro, pense na diferença entre a `res/` e a `assets/` como a diferença entre um supermercado e uma feira livre. No supermercado (res/), cada produto tem um código de barras (ID numérico), está em uma prateleira específica organizada por categoria, e o sistema de caixa sabe exatamente onde cada item está. Na feira livre (assets/), os produtos estão dispostos de forma mais orgânica: você precisa saber em qual barraca ir e pedir pelo nome exato do que quer. Não existe um sistema centralizado catalogando tudo, mas em compensação a variedade é infinita e o feirante pode organizar sua barraca do jeito que quiser, sem seguir regras impostas por ninguém. Essa liberdade torna a pasta `assets/` um verdadeiro tesouro para quem faz engenharia reversa. É aqui que muitos desenvolvedores escondem configurações sensíveis, URLs de servidores, chaves de criptografia embutidas em arquivos JSON, scripts que controlam o comportamento do app e até bancos de dados SQLite pré-populados com dados iniciais. Quando você está analisando um aplicativo brasileiro de delivery, por exemplo, é muito comum encontrar na pasta `assets/` arquivos de configuração que definem as regiões de entrega, os valores de frete por CEP, ou as regras de cupons de desconto. Modificar esses arquivos é geralmente mais seguro do que mexer no código Smali, pois não envolve a tabela de recursos do Android e raramente causa erros de compilação. Porém, fique atento: aplicativos mais sofisticados implementam verificações de integridade (checksums) nos arquivos de assets para detectar modificações não autorizadas.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Estrutura de subpastas livre nos assets:\nassets/fonts/Roboto-Bold.ttf\nassets/web/index.html\nassets/config/api_endpoints.json"
      },
      {
        lang: "bash",
        code: "# 2. Verificando o tamanho de arquivos de assets:\ndu -sh assets/*\n# Assets costumam ser os maiores arquivos de um app."
      },
      {
        lang: "bash",
        code: "# 3. Buscando configurações em arquivos JSON:\ngrep -r \"server_url\" assets/\n# Muitas vezes você encontra endereços de servidores aqui."
      },
      {
        lang: "bash",
        code: "# 4. Fontes personalizadas:\nls assets/fonts/\n# Ótimo lugar para trocar a tipografia do app."
      },
      {
        lang: "bash",
        code: "# 5. Bancos de dados pré-carregados:\nls assets/*.db\n# Alguns apps já vêm com um banco SQLite inicial aqui."
      },
      {
        lang: "bash",
        code: "# 6. Referenciando um asset no código Smali (Conceitual):\n# assetManager.open(\"meu_arquivo.json\")"
      },
      {
        lang: "bash",
        code: "# Listando conteúdo da pasta assets\nls -la app_decompilado/assets/\n# Fontes, databases, configs, webviews ficam aqui"
      },
      {
        lang: "bash",
        code: "# Identificando bancos de dados SQLite nos assets\nfind app_decompilado/assets -name '*.db' -o -name '*.sqlite'\n# Podem conter dados pré-carregados interessantes"
      },
      {
        lang: "bash",
        code: "# Verificando arquivos de configuração JSON\nfind app_decompilado/assets -name '*.json' -exec echo {} \\;\n# Feature flags, configs de servidor, etc."
      },
      {
        lang: "bash",
        code: "# Extraindo fontes customizadas\nfind app_decompilado/assets -name '*.ttf' -o -name '*.otf'\n# Fontes usadas na interface do app"
      }
    ],
    points: [
      "Arquivos em assets/ não recebem um ID de recurso (R.id).",
      "São acessados através da classe AssetManager do Android.",
      "Permitem uma estrutura de diretórios arbitrária e profunda.",
      "Não são processados ou otimizados pelo ApkTool/AAPT durante o build.",
      "Ideal para armazenar arquivos grandes ou que precisam ser lidos como 'Stream'.",
      "Comum em jogos para guardar modelos 3D, texturas brutas e sons.",
      "Arquivos HTML/JS para WebViews quase sempre moram aqui.",
      "Diferente de res/, os assets não mudam baseados no idioma do celular.",
      "Modificar assets é seguro, pois não afeta a tabela de recursos do Android.",
      "Muitos apps usam assets para esconder scripts (Lua, JS, Python) que rodam internamente.",
      "Assets são copiados sem modificação para o APK final (não recebem IDs).",
      "Diferente de res/, assets podem ter subpastas com qualquer estrutura.",
      "WebViews frequentemente carregam HTML/CSS/JS da pasta assets/.",
      "Bancos de dados SQLite em assets/ podem conter dados sensíveis pré-carregados.",
      "Assets não são otimizados pelo build system — mantêm formato e tamanho original."
    ],
    alerts: [
      {
        type: "info",
        content: "Se você adicionar um arquivo em assets/, ele não aparecerá em res/values/public.xml."
      },
      {
        type: "tip",
        content: "Para descobrir onde um asset é usado, pesquise pelo nome do arquivo (ex: 'config.json') na pasta smali/."
      },
      {
        type: "warning",
        content: "Alguns aplicativos verificam a integridade (hash) dos arquivos em assets/ para evitar mods."
      },
      {
        type: "success",
        content: "Se find retorna .db ou .json nos assets, você encontrou dados potencialmente interessantes."
      },
      {
        type: "tip",
        content: "Use sqlite3 para abrir bancos de dados e jq para formatar arquivos JSON encontrados."
      }
    ]
  },
  {
    slug: "androidmanifest-decodificado",
    section: "estrutura-saida",
    title: "O AndroidManifest.xml Decodificado",
    difficulty: "iniciante",
    subtitle: "Entendendo as tags, permissões e componentes do sistema",
    intro: "O `AndroidManifest.xml` é o documento de identidade, o contrato de trabalho e a certidão de nascimento do aplicativo, tudo em um só lugar. Sem ele, o sistema operacional Android não teria a menor ideia de como iniciar o app. Originalmente, dentro do APK, ele está em um formato binário comprimido que economiza espaço mas é impossível de ler. O ApkTool o traz de volta à vida como um arquivo XML legível. Cada linha aqui tem um peso enorme: uma permissão de `READ_SMS` pode ser a diferença entre um app legítimo e um spyware. Uma tag `<activity>` define qual tela pode ser aberta, enquanto o `<intent-filter>` com a ação `MAIN` e categoria `LAUNCHER` diz ao Android: 'Ei, este é o botão que o usuário deve clicar para abrir o app'. Para um analista brasileiro, o Manifesto é o primeiro lugar a se olhar: ele revela quais segredos do celular o app quer acessar (câmera, contatos, localização) e quais 'portas de entrada' (Activities e Receivers) ele deixa abertas para outros apps. Modificar o Manifesto permite que você torne o app 'debuggable', adicione novas permissões ou até mude o ícone que aparece na tela inicial. Fazendo uma analogia com o cotidiano brasileiro, o AndroidManifest.xml funciona como o alvará de funcionamento de um estabelecimento comercial. Quando você abre um restaurante no Brasil, precisa declarar na prefeitura exatamente o que vai fazer ali: servir comida (permissão de manipulação de alimentos), tocar música ao vivo (alvará de som), funcionar até tarde (licença noturna). Da mesma forma, o Manifesto declara ao sistema Android todas as capacidades e necessidades do aplicativo. Se o app quer usar a câmera, precisa 'pedir alvará' através de uma tag `<uses-permission>`. Se quer rodar um serviço em segundo plano, precisa registrar esse serviço formalmente. Sem essa declaração, o Android simplesmente ignora o componente, como um fiscal que fecha um estabelecimento irregular. Esse arquivo também é fundamental para a segurança: ao analisar um APK suspeito, a primeira coisa que um perito digital faz é abrir o Manifesto e verificar quais permissões estão sendo solicitadas. Um app de lanterna que pede acesso a SMS, contatos e microfone é um sinal vermelho imediato. Além disso, o Manifesto controla aspectos cruciais como a orientação das telas (retrato ou paisagem), o tema visual padrão, se o app aceita backup pelo ADB, e até se ele pode ser instalado em cartão SD. Para quem está começando na engenharia reversa, dominar a leitura do Manifesto é tão importante quanto aprender a ler Smali, pois ele fornece o mapa completo de todos os componentes do aplicativo e como eles se interconectam.",
    codes: [
      {
        lang: "xml",
        code: "<!-- 1. O cabeçalho e o pacote único do app -->\n<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\" \n          package=\"com.exemplo.meuapp\">\n    <!-- Este é o ID único do aplicativo no mundo. -->"
      },
      {
        lang: "xml",
        code: "<!-- 2. Solicitando permissões ao usuário -->\n<uses-permission android:name=\"android.permission.INTERNET\" />\n<uses-permission android:name=\"android.permission.CAMERA\" />"
      },
      {
        lang: "xml",
        code: "<!-- 3. Definindo a Activity principal (A que abre primeiro) -->\n<activity android:name=\".ui.SplashActivity\">\n    <intent-filter>\n        <action android:name=\"android.intent.action.MAIN\" />\n        <category android:name=\"android.intent.category.LAUNCHER\" />\n    </intent-filter>\n</activity>"
      },
      {
        lang: "xml",
        code: "<!-- 4. Ativando o modo de depuração (Crucial para análise) -->\n<application android:debuggable=\"true\" ... >\n    <!-- Permite que você use um depurador no Smali. -->"
      },
      {
        lang: "xml",
        code: "<!-- 5. Registrando um serviço que roda em segundo plano -->\n<service android:name=\".services.MeusLogs\" android:exported=\"false\" />"
      },
      {
        lang: "xml",
        code: "<!-- 6. Definindo a versão mínima do Android suportada -->\n<uses-sdk android:minSdkVersion=\"21\" android:targetSdkVersion=\"33\" />"
      },
      {
        lang: "xml",
        code: "<!-- Exemplo de AndroidManifest.xml decodificado -->\n<manifest package=\"com.exemplo.app\">\n    <uses-permission android:name=\"android.permission.INTERNET\"/>\n    <application android:debuggable=\"false\">\n        <activity android:name=\".ui.MainActivity\"\n            android:exported=\"true\"/>\n    </application>\n</manifest>"
      },
      {
        lang: "bash",
        code: "# Extraindo informações-chave do manifesto\ngrep -E 'package=|versionCode|versionName|minSdk|targetSdk' app_decompilado/AndroidManifest.xml\n# Resume as informações mais importantes"
      },
      {
        lang: "bash",
        code: "# Listando todos os componentes do app\ngrep -E '<activity|<service|<receiver|<provider' app_decompilado/AndroidManifest.xml | wc -l\n# Conta quantos componentes o app registra"
      },
      {
        lang: "bash",
        code: "# Verificando permissões perigosas\ngrep 'uses-permission' app_decompilado/AndroidManifest.xml | grep -i 'camera\\|location\\|contacts\\|sms'\n# Filtra apenas permissões sensíveis"
      }
    ],
    points: [
      "O Manifesto declara o 'Package Name' globalmente único do aplicativo.",
      "Permissões (<uses-permission>) definem o que o app pode acessar no hardware.",
      "Activities representam as telas; Services representam processos de fundo.",
      "Broadcast Receivers permitem que o app 'ouça' eventos do sistema (ex: bateria fraca).",
      "Content Providers gerenciam o compartilhamento de dados entre aplicativos.",
      "A tag <application> contém as configurações globais de ícone, tema e nome.",
      "O atributo 'android:debuggable' permite a inspeção técnica do processo em tempo real.",
      "O 'minSdkVersion' impede que o app seja instalado em versões muito antigas do Android.",
      "Metadados (<meta-data>) são usados para passar chaves de API (ex: Google Maps).",
      "Qualquer componente não declarado no Manifesto é invisível para o sistema Android.",
      "O AndroidManifest.xml decodificado é XML legível (diferente do binário no APK).",
      "Declara TODOS os componentes: Activities, Services, Receivers e Providers.",
      "Intent Filters definem como o app responde a ações do sistema e de outros apps.",
      "O atributo android:exported é crítico para segurança — define acesso externo.",
      "Permissões customizadas (permission) podem proteger componentes internos."
    ],
    alerts: [
      {
        type: "danger",
        content: "Um erro de digitação no Manifesto (como esquecer um fecha-tag '>') fará a instalação do APK falhar."
      },
      {
        type: "info",
        content: "Para esconder um app do menu, remova a categoria LAUNCHER da sua Activity principal."
      },
      {
        type: "tip",
        content: "Adicionar 'android:usesCleartextTraffic=\"true\"' permite que o app use conexões HTTP não seguras."
      },
      {
        type: "success",
        content: "Se grep retorna permissões e activities, você já tem o mapa completo do app."
      },
      {
        type: "danger",
        content: "Componentes com android:exported=true sem permissão são vulnerabilidades de segurança."
      }
    ]
  },
  {
    slug: "apktool-yml-explicado",
    section: "estrutura-saida",
    title: "O arquivo apktool.yml",
    difficulty: "iniciante",
    subtitle: "Metadados de compilação e configurações da ferramenta",
    intro: "Se o `AndroidManifest.xml` é para o Android, o `apktool.yml` é para o próprio ApkTool. Ele é o diário de bordo da ferramenta. Quando você decompila um app, o ApkTool anota neste arquivo absolutamente tudo o que ele descobriu sobre o processo: qual versão dele mesmo foi usada, quais eram os nomes originais dos arquivos, como as imagens foram compactadas e, mais importante, quais frameworks foram necessários para entender os recursos. Imagine que você está montando um quebra-cabeça de 5000 peças: o `apktool.yml` é a foto na caixa que te guia na hora de montar tudo de novo. Sem este arquivo, ao tentar rodar o comando `apktool b` (build), a ferramenta estaria 'cega', sem saber se deve usar o AAPT1 ou AAPT2, ou se deve ignorar certas pastas que não deveriam ser comprimidas. Para nós, editores, o `apktool.yml` é também uma ferramenta de ajuste fino: aqui podemos forçar o app a acreditar que foi compilado para uma versão mais nova do Android ou instruí-lo a não comprimir arquivos que precisam ser lidos rapidamente, como vídeos ou certos assets de jogos. Para entender a importância desse arquivo com uma analogia brasileira, pense nele como a ficha técnica de um carro que vai para a revisão na oficina mecânica. Quando o mecânico recebe o veículo, ele precisa saber exatamente qual é o modelo, o ano de fabricação, qual tipo de óleo foi usado na última troca, qual a pressão correta dos pneus e quais peças são originais. Sem essa ficha, o mecânico teria que adivinhar tudo, correndo o risco de colocar o óleo errado ou apertar os parafusos com o torque inadequado. O `apktool.yml` cumpre exatamente esse papel: ele documenta todas as decisões e descobertas feitas durante a desmontagem para que a remontagem seja perfeita. Cada campo neste arquivo tem um propósito específico e alterar qualquer um deles sem entender as consequências pode resultar em um APK que não instala, que trava ao abrir, ou que fica significativamente maior do que o original. Por exemplo, a seção `doNotCompress` é particularmente importante para aplicativos que contêm arquivos de mídia grandes: se você acidentalmente permitir que um vídeo MP4 seja comprimido pelo ZIP durante o build, o player de vídeo do app não conseguirá fazer streaming do arquivo e o app travará. Da mesma forma, a informação sobre frameworks é vital para apps de sistema (como os que vêm pré-instalados em celulares Samsung ou Xiaomi), pois esses apps dependem de recursos definidos pelo fabricante que não existem no framework padrão do Android. Tratar o `apktool.yml` com respeito e entender cada uma de suas seções é o que diferencia uma modificação bem-sucedida de horas perdidas tentando entender por que o build falhou.",
    codes: [
      {
        lang: "yaml",
        code: "# 1. Versão da ferramenta e nome do arquivo original\nversion: 2.9.3\napkFileName: whatsapp_v2.apk\n# Ajuda a manter o rastreio do arquivo de origem."
      },
      {
        lang: "yaml",
        code: "# 2. Configurações de SDK (Podem ser editadas)\nsdkInfo:\n  minSdkVersion: '21'\n  targetSdkVersion: '33'\n# Mude estes valores para testar compatibilidade."
      },
      {
        lang: "yaml",
        code: "# 3. Gerenciamento de frameworks (Vital)\nusesFramework:\n  ids:\n  - 1\n  tag: null\n# O ID 1 refere-se ao framework padrão do Android."
      },
      {
        lang: "yaml",
        code: "# 4. Instruções de (não) compressão\ndoNotCompress:\n- resources.arsc\n- assets/video.mp4\n# Arquivos nesta lista serão apenas armazenados, sem compressão ZIP."
      },
      {
        lang: "yaml",
        code: "# 5. Detalhes técnicos do processo de decode\ncompressionType: false\nisFrameworkApk: false\n# Indica se estamos lidando com um APK de sistema ou de usuário."
      },
      {
        lang: "yaml",
        code: "# 6. Metadados de ferramentas (AAPT)\nunknownFiles:\n  stamp-cert-sha256: '8'\n# Registra arquivos que o ApkTool não reconheceu mas preservou."
      },
      {
        lang: "bash",
        code: "# Visualizando o conteúdo do apktool.yml\ncat app_decompilado/apktool.yml\n# Contém metadados essenciais para a recompilação"
      },
      {
        lang: "bash",
        code: "# Verificando a versão do SDK alvo\ngrep 'targetSdkVersion\\|minSdkVersion' app_decompilado/apktool.yml\n# Define compatibilidade e comportamento de segurança"
      },
      {
        lang: "bash",
        code: "# Verificando se usa compressão especial\ngrep 'doNotCompress' app_decompilado/apktool.yml\n# Lista extensões que não devem ser comprimidas no rebuild"
      },
      {
        lang: "bash",
        code: "# Editando o apktool.yml para forçar rebuild\nsed -i 's/isFrameworkApk: true/isFrameworkApk: false/' app_decompilado/apktool.yml\n# Pode resolver alguns erros de recompilação"
      }
    ],
    points: [
      "O apktool.yml registra o estado completo do projeto decodificado.",
      "Contém a versão do ApkTool usada, garantindo compatibilidade futura.",
      "A seção 'sdkInfo' reflete o que foi encontrado no Manifesto binário original.",
      "A seção 'doNotCompress' evita que arquivos já comprimidos (como MP4) sejam re-comprimidos.",
      "Registra a ordem dos arquivos DEX, essencial para o funcionamento do Multidex.",
      "Permite definir uma 'tag' de framework customizada para projetos específicos.",
      "É lido automaticamente pelo comando 'apktool b' para orientar a recompilação.",
      "Ajuda a preservar a estrutura de arquivos que não seguem o padrão Android (unknownFiles).",
      "Pode ser usado para diagnosticar por que um app não recompila (ex: versão do framework).",
      "É um arquivo YAML simples, podendo ser editado em qualquer editor de texto.",
      "O apktool.yml é gerado pelo ApkTool e NÃO existe no APK original.",
      "Contém informações como versão do ApkTool, SDK versions e flags de compressão.",
      "O campo doNotCompress lista extensões que devem permanecer sem compressão.",
      "Editar incorretamente o apktool.yml pode impedir a recompilação.",
      "O campo isFrameworkApk indica se o APK é um framework do sistema."
    ],
    alerts: [
      {
        type: "danger",
        content: "Se você perder o apktool.yml, terá que decompilar o APK novamente do zero para recuperá-lo."
      },
      {
        type: "warning",
        content: "Alterar 'doNotCompress' incorretamente pode aumentar o tamanho do APK ou quebrar a leitura de assets."
      },
      {
        type: "tip",
        content: "Se o app recompilado fechar ao abrir, verifique se o 'targetSdkVersion' no yml faz sentido."
      },
      {
        type: "success",
        content: "Se cat apktool.yml mostra sdkInfo e doNotCompress, o arquivo está íntegro."
      },
      {
        type: "danger",
        content: "Nunca delete o apktool.yml — sem ele, o ApkTool não consegue recompilar o app."
      }
    ]
  }
];
