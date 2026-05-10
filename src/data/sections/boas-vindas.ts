import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "bem-vindo-apktool",
    section: "boas-vindas",
    title: "Bem-vindo ao Mundo do ApkTool",
    difficulty: "iniciante",
    subtitle: "Sua jornada na engenharia reversa Android começa aqui",
    intro: "Imagine que você adquiriu um rádio antigo em uma feira de antiguidades no centro de São Paulo. Ele funciona, mas a curiosidade bate forte: como aquelas peças minúsculas se organizam para transformar ondas invisíveis em som? O ApkTool é exatamente isso para o universo Android: a chave de fenda e o multímetro que permitem abrir a 'caixa preta' de qualquer aplicativo. No Brasil, temos uma cultura de 'gambiarra' — no bom sentido da palavra — de entender como as coisas funcionam para consertá-las ou melhorá-las. O ApkTool traz essa filosofia para o software. Um arquivo APK não é um bloco maciço de código impenetrável; ele é mais como um kit de LEGO montado por alguém. O ApkTool nos permite desmontar esse LEGO, peça por peça, ver a cor de cada bloco, entender como as peças se encaixam e, o mais incrível, trocar uma peça ou adicionar um novo acessório antes de montar tudo de novo. Historicamente, o Android foi construído sobre a ideia de abertura, mas os arquivos que baixamos da Play Store são otimizados para máquinas, não para humanos. O ApkTool faz a ponte de volta, traduzindo o binário frio em algo que podemos ler, editar e aprender. Ao dominar esta ferramenta, você deixa de ser apenas um consumidor passivo de tecnologia e passa a ser um artesão digital, capaz de auditar a segurança de seus próprios apps, traduzir ferramentas úteis para o português ou simplesmente satisfazer a sede de conhecimento técnico que move todo grande desenvolvedor.",
    codes: [
      {
        lang: "bash",
        code: "# Verifica se o ambiente Java está pronto para receber o ApkTool\njava -version # Chama o interpretador Java para checar a versão\n# Sem o Java, o ApkTool (que é um arquivo .jar) não tem 'motor' para rodar"
      },
      {
        lang: "bash",
        code: "# O comando de 'batismo' para testar se o ApkTool está no seu PATH\napktool -version # Pede ao ApkTool para dizer qual sua versão atual\n# Se retornar um número (ex: 2.9.3), a 'ponte' entre você e o código está aberta"
      },
      {
        lang: "bash",
        code: "# O primeiro passo real: decodificar um aplicativo\napktool d meu_app.apk # 'd' significa decode (decodificar)\n# Isso cria uma pasta com o conteúdo 'traduzido' para humanos lerem"
      },
      {
        lang: "bash",
        code: "# Verificando os arquivos gerados após a decompilação\nls -F meu_app/ # Lista arquivos e pastas com indicadores de tipo\n# Você verá pastas como 'smali' (código) e 'res' (recursos/imagens)"
      },
      {
        lang: "bash",
        code: "# Espiando o manifesto, o 'RG' do aplicativo\ncat meu_app/AndroidManifest.xml # Exibe o conteúdo do arquivo principal\n# Aqui você descobre o que o app realmente faz por baixo dos panos"
      },
      {
        lang: "bash",
        code: "# O comando para fechar a 'mala' após fazer suas alterações\napktool b meu_app # 'b' vem de build (construir/montar)\n# Ele tenta transformar sua pasta de volta em um arquivo .apk usável"
      },
      {
        lang: "bash",
        code: "# Verificando a estrutura interna de um APK sem decodificar\nunzip -l meu_app.apk | head -20\n# Mostra os arquivos dentro do APK como se fosse um ZIP comum"
      },
      {
        lang: "bash",
        code: "# Comparando o tamanho antes e depois da decompilação\ndu -sh meu_app.apk meu_app/\n# A pasta decompilada costuma ser 3-5x maior que o APK original"
      },
      {
        lang: "bash",
        code: "# Buscando textos específicos dentro do app decompilado\ngrep -r \"senha\\|password\\|token\" meu_app/res/values/\n# Procura por strings sensíveis nos recursos do aplicativo"
      },
      {
        lang: "bash",
        code: "# Contando quantos arquivos Smali (classes) o app possui\nfind meu_app/smali -name '*.smali' | wc -l\n# Apps grandes podem ter milhares de classes para explorar"
      }
    ],
    points: [
      "O ApkTool é a ferramenta padrão da indústria para engenharia reversa Android.",
      "Ele permite a extração completa de recursos como imagens, textos e layouts XML.",
      "Transforma o código binário (DEX) em Smali, uma linguagem legível por humanos.",
      "Possibilita a modificação (modding) de aplicativos para personalização ou estudo.",
      "É essencial para auditoria de segurança e busca por vulnerabilidades críticas.",
      "Facilita a tradução de aplicativos que não possuem suporte oficial ao Português.",
      "Ajuda desenvolvedores a entenderem como grandes apps implementam certas funções.",
      "Funciona através da linha de comando, permitindo automação de tarefas repetitivas.",
      "Mantém a estrutura original do projeto Android, facilitando a navegação interna.",
      "É gratuito, de código aberto e mantido por uma comunidade global ativa.",
      "O ApkTool não requer ROOT no dispositivo Android para funcionar.",
      "Suporta APKs de qualquer versão do Android, desde a 1.0 até a mais recente.",
      "A comunidade XDA Developers é o maior fórum de discussão sobre uso do ApkTool.",
      "Pode ser integrado em scripts Bash/Python para análise automatizada em massa.",
      "Diferente de descompiladores como JADX, o ApkTool permite recompilar o app de volta."
    ],
    alerts: [
      {
        type: "tip",
        content: "Pense no ApkTool como um tradutor universal que fala a língua dos robôs e a dos humanos ao mesmo tempo."
      },
      {
        type: "info",
        content: "Este livro foca no ApkTool, mas ele é apenas o começo de um ecossistema vasto de análise Android."
      },
      {
        type: "warning",
        content: "Não se assuste com o Smali; ele parece grego no início, mas logo você falará fluentemente."
      },
      {
        type: "success",
        content: "Se o comando 'apktool d' rodou sem erros e criou uma pasta, parabéns — você já fez sua primeira engenharia reversa!"
      },
      {
        type: "danger",
        content: "Nunca distribua APKs modificados de apps pagos. Isso é pirataria e pode ter consequências legais sérias."
      }
    ]
  },
  {
    slug: "o-que-e-engenharia-reversa",
    section: "boas-vindas",
    title: "O Que é Engenharia Reversa?",
    difficulty: "iniciante",
    subtitle: "Entendendo o caminho de volta da criação",
    intro: "A engenharia tradicional é como seguir uma receita de bolo: você separa os ovos, a farinha e o açúcar (o código-fonte) e os coloca no forno (o compilador) para obter o bolo pronto (o APK). A Engenharia Reversa é o caminho inverso: você tem o bolo pronto em mãos e sua missão é descobrir quantos ovos foram usados, qual a marca da farinha e se há algum ingrediente secreto não declarado. No Brasil, chamamos isso informalmente de 'desmontar para ver como funciona'. No Android, esse processo é vital porque o código que o programador escreve em Java ou Kotlin sofre uma transformação radical até virar o arquivo que o processador executa. Nosso trabalho é como o de um arqueólogo digital: removemos as camadas de otimização e compressão para revelar a estrutura original. Existem dois grandes tipos de análise: a estática, onde olhamos o 'corpo' parado do código (que é o foco do ApkTool), e a dinâmica, onde observamos o app em movimento enquanto ele roda. A engenharia reversa nos permite auditar se um app de banco é realmente seguro, se um jogo está coletando dados excessivos ou simplesmente aprender técnicas de UI de apps famosos. É uma habilidade de detetive, onde cada arquivo .smali é uma pista e cada XML é um mapa do tesouro esperando para ser interpretado por quem tem a curiosidade e as ferramentas certas.",
    codes: [
      {
        lang: "bash",
        code: "# O fluxo da Engenharia Comum (Criação)\n# Código fonte (.java) -> Compilador -> Executável (.dex) -> Empacotamento (.apk)\n# É um caminho de ida, otimizando para a máquina."
      },
      {
        lang: "bash",
        code: "# O fluxo da Engenharia Reversa (Desconstrução)\n# Pacote (.apk) -> ApkTool -> Recursos Decodificados e Smali (.smali)\n# É o caminho de volta, otimizando para o humano."
      },
      {
        lang: "bash",
        code: "# Exemplo de análise estática rápida: procurando por domínios no código\ngrep -r \"http\" meu_app/smali/ # Busca a string 'http' em todos os arquivos smali\n# Ajuda a identificar para onde o app envia seus dados."
      },
      {
        lang: "smali",
        code: "# Como o código se parece após a engenharia reversa (Smali)\nconst-string v0, \"Hello World\" # Carrega o texto na 'gaveta' (registrador) v0\n# No Java original, isso seria apenas: String v = \"Hello World\";"
      },
      {
        lang: "bash",
        code: "# Verificando se o app usa bibliotecas nativas (C/C++)\nls meu_app/lib/ # Lista o conteúdo da pasta de bibliotecas\n# Apps com muitas 'libs' costumam ser mais complexos de analisar."
      },
      {
        lang: "bash",
        code: "# Comparando o tamanho do original vs o decompilado\ndu -sh meu_app.apk meu_app/ # Mostra o espaço em disco de ambos\n# A pasta decompilada é sempre maior porque o código foi expandido."
      },
      {
        lang: "bash",
        code: "# Listando todas as Activities (telas) declaradas no app\ngrep -i 'activity' meu_app/AndroidManifest.xml\n# Cada <activity> é uma tela que o usuário pode ver ou interagir"
      },
      {
        lang: "bash",
        code: "# Procurando por URLs e endpoints de API no código\ngrep -rn 'https://' meu_app/smali/ | head -15\n# Revela servidores com os quais o app se comunica secretamente"
      },
      {
        lang: "bash",
        code: "# Usando JADX para obter uma visão em Java (complementar ao ApkTool)\njadx -d output_java/ meu_app.apk\n# Gera código Java aproximado para leitura mais fácil"
      },
      {
        lang: "bash",
        code: "# Extraindo apenas os recursos sem tocar no código Smali\napktool d --no-src meu_app.apk -o apenas_recursos/\n# Útil quando você só quer ver imagens, layouts e strings"
      }
    ],
    points: [
      "Engenharia reversa é o processo de extrair conhecimento de algo já fabricado.",
      "Análise Estática foca no código sem executá-lo, usando o ApkTool.",
      "Análise Dinâmica observa o comportamento do app durante a execução (emuladores).",
      "Decompilação tenta retornar ao código original, enquanto desensamblagem revela o baixo nível.",
      "É uma ferramenta fundamental para analistas de malware e pesquisadores de cibersegurança.",
      "Permite a interoperabilidade, fazendo softwares diferentes conversarem entre si.",
      "Ajuda na recuperação de código-fonte perdido de projetos antigos.",
      "Revela vulnerabilidades que passariam despercebidas em testes de caixa-preta.",
      "É amplamente utilizada para 'cracking' de proteção, embora este livro foque no uso ético.",
      "Desenvolve um entendimento profundo da arquitetura interna do sistema Android.",
      "O bytecode Dalvik é mais fácil de reverter que código nativo ARM compilado.",
      "Ferramentas como Frida permitem análise dinâmica em tempo real sem modificar o APK.",
      "Bug bounty programs pagam até R$50.000+ por vulnerabilidades encontradas via ER.",
      "A combinação de análise estática (ApkTool) + dinâmica (Frida) é o padrão ouro.",
      "Universidades brasileiras como USP e UNICAMP já incluem ER em suas grades."
    ],
    alerts: [
      {
        type: "info",
        content: "Você não terá o código Java exato de volta, mas o Smali é funcionalmente idêntico."
      },
      {
        type: "tip",
        content: "Combine o ApkTool com o JADX-GUI para uma visualização em Java mais amigável durante a leitura."
      },
      {
        type: "warning",
        content: "Alguns aplicativos usam 'obfuscação', tornando o código uma sopa de letras difícil de ler."
      },
      {
        type: "success",
        content: "Se você consegue ler um AndroidManifest.xml decompilado e entender as permissões, já está fazendo ER!"
      },
      {
        type: "danger",
        content: "Nunca use ER para burlar proteções de DRM ou distribuir apps pagos gratuitamente."
      }
    ]
  },
  {
    slug: "etica-legalidade",
    section: "boas-vindas",
    title: "Ética e Legalidade",
    difficulty: "iniciante",
    subtitle: "Com grandes poderes vêm grandes responsabilidades",
    intro: "No Brasil, temos leis que protegem a propriedade intelectual, mas também temos o Marco Civil da Internet e a LGPD, que versam sobre a transparência e segurança dos dados. Aprender engenharia reversa é como aprender a abrir fechaduras: você pode se tornar um chaveiro respeitado ou um invasor. A técnica é idêntica; o que muda é a sua intenção e o contexto legal. Historicamente, a engenharia reversa para fins de interoperabilidade (fazer dois sistemas conversarem) e para estudos de segurança é permitida em diversos âmbitos, mas a linha pode ser tênue. Se você abre um app para entender como ele criptografa seus dados e descobre que ele é inseguro, você tem o poder de ajudar milhões. Se você usa o mesmo conhecimento para remover anúncios de um desenvolvedor independente que sobrevive disso, você está prejudicando o ecossistema. A divulgação responsável é o padrão ouro da ética: se encontrar uma falha, reporte ao dono do app antes de contar ao mundo. Além disso, o uso de CVSS (Common Vulnerability Scoring System) ajuda a classificar a gravidade do que você encontra. Lembre-se: o conhecimento deve ser usado como um escudo para proteger usuários e como um microscópio para aprender, nunca como uma arma para pirataria ou danos a terceiros.",
    codes: [
      {
        lang: "bash",
        code: "# Verificando permissões sensíveis que podem violar a LGPD\ngrep \"READ_CONTACTS\" AndroidManifest.xml # Busca por acesso aos contatos\n# Por que uma lanterna precisaria ler seus contatos? Ética começa aqui."
      },
      {
        lang: "bash",
        code: "# Identificando rastreadores (trackers) de terceiros\ngrep -r \"ads\" smali/ # Procura por bibliotecas de anúncios no código\n# Transparência sobre o que o app faz com seus dados é um direito."
      },
      {
        lang: "bash",
        code: "# Exemplo de verificação de URLs de log/telemetria\ngrep -E \"https?://[a-zA-Z0-9.-]+\" -r smali/ # Busca URLs no código\n# Para onde os seus dados estão 'viajando' sem você saber?"
      },
      {
        lang: "bash",
        code: "# Analisando se o app usa criptografia fraca (MD5/SHA1)\ngrep -ri \"MD5\" smali/ # Busca por algoritmos de hash antigos e inseguros\n# Ajudar a melhorar a segurança é o papel do hacker ético."
      },
      {
        lang: "bash",
        code: "# Checando se o app faz log de dados sensíveis (senhas, etc)\ngrep -r \"Log.d\" smali/ # Busca por comandos de debug que podem vazar dados\n# Desenvolvedores às vezes esquecem 'portas abertas' no código."
      },
      {
        lang: "bash",
        code: "# Verificando a presença de certificados de segurança (SSL Pinning)\ngrep -r \"checkServerTrusted\" smali/ # Busca por validação de certificados\n# Entender como o app se protege contra ataques 'Man-in-the-Middle'."
      },
      {
        lang: "bash",
        code: "# Verificando se o app coleta identificadores únicos do dispositivo\ngrep -r \"getDeviceId\\|ANDROID_ID\\|getImei\" smali/\n# Coleta de IMEI sem consentimento viola a LGPD no Brasil"
      },
      {
        lang: "bash",
        code: "# Listando todas as permissões perigosas declaradas\ngrep 'uses-permission' AndroidManifest.xml | grep -i 'CAMERA\\|LOCATION\\|CONTACTS\\|RECORD_AUDIO'\n# Permissões sensíveis devem ter justificativa clara para o usuário"
      },
      {
        lang: "bash",
        code: "# Gerando um relatório de segurança básico com MobSF (ferramenta automatizada)\nmobsf -s meu_app.apk -o relatorio.pdf\n# Ferramentas automatizadas ajudam a documentar achados de forma profissional"
      },
      {
        lang: "bash",
        code: "# Verificando se o app envia dados para servidores fora do Brasil\ngrep -r 'amazonaws\\|firebase\\|analytics' smali/ | grep -v '.smali:    #'\n# Transferência internacional de dados tem regras específicas na LGPD"
      }
    ],
    points: [
      "A ética profissional separa o pesquisador de segurança do criminoso virtual.",
      "A LGPD (Lei Geral de Proteção de Dados) exige transparência no tratamento de dados.",
      "Divulgação Responsável: reporte falhas aos desenvolvedores antes de publicá-las.",
      "Engenharia reversa para fins de interoperabilidade é geralmente aceita pela jurisprudência.",
      "Pirataria e remoção ilegal de proteções financeiras são crimes previstos em lei.",
      "O Marco Civil da Internet garante direitos de privacidade aos usuários brasileiros.",
      "CVSS é a métrica usada para classificar a seriedade de falhas encontradas.",
      "Sempre leia os Termos de Uso (EULA), embora cláusulas que proíbam estudo possam ser abusivas.",
      "O conhecimento adquirido deve ser usado para fortalecer o ecossistema de software.",
      "Respeite o trabalho alheio: não redistribua apps modificados sem autorização.",
      "Programas de Bug Bounty como HackerOne e Bugcrowd pagam por vulnerabilidades reportadas.",
      "A Lei 9.609/98 (Lei do Software) permite ER para fins de estudo e interoperabilidade.",
      "Empresas como Google, Samsung e Nubank possuem programas de recompensa por bugs.",
      "Documentar suas descobertas com screenshots e logs é essencial para relatórios profissionais.",
      "A comunidade OWASP Mobile mantém um guia de boas práticas para testes de segurança em apps."
    ],
    alerts: [
      {
        type: "danger",
        content: "Remover anúncios ou sistemas de pagamento de apps de terceiros é pirataria e pode ter consequências legais."
      },
      {
        type: "success",
        content: "Seguir uma carreira de 'Bug Bounty' é uma forma legal e lucrativa de usar suas habilidades."
      },
      {
        type: "info",
        content: "Este material tem fins estritamente educacionais e de pesquisa de segurança."
      },
      {
        type: "warning",
        content: "Mesmo para fins de estudo, evite publicar chaves de API ou dados pessoais encontrados durante a análise."
      },
      {
        type: "tip",
        content: "Crie um 'lab' isolado com emulador Android para praticar sem riscos em apps reais de produção."
      }
    ]
  },
  {
    slug: "pre-requisitos-mentais",
    section: "boas-vindas",
    title: "Pré-requisitos Mentais",
    difficulty: "iniciante",
    subtitle: "Preparando o cérebro para o desconhecido",
    intro: "Você não precisa ser um gênio da matemática ou saber programar em dez linguagens para usar o ApkTool, mas precisa de uma 'configuração mental' específica. A primeira peça é a 'paciência de monge'. Na engenharia reversa, você vai passar horas olhando para um código que parece um formigueiro bagunçado até encontrar a linha que faz sentido. A segunda é a 'curiosidade de detetive'. Por que o desenvolvedor nomeou este arquivo como 'a.b.c'? O que acontece se eu mudar esse 'true' para 'false' e recompilar? O processo é tentativa e erro puro. No Brasil, chamamos de 'fuçar'. Outro ponto crucial é o pensamento lógico: o computador é o ser mais literal do mundo; ele não entende intenções, apenas instruções. Se você cometer um erro de sintaxe, o ApkTool vai reclamar e você terá que ler o erro — sim, ler o erro é um pré-requisito! Você precisa entender o básico de como um computador organiza arquivos (pastas, extensões) e ter familiaridade com a linha de comando. O terminal é sua mesa de cirurgia; se você tem medo da tela preta, é hora de enfrentar esse dragão. Por fim, a humildade: você nunca saberá tudo, e a documentação será sua melhor amiga. Prepare-se para falhar dez vezes antes de ter o seu primeiro 'Sucesso' na tela, e saiba que cada erro é um professor valioso.",
    codes: [
      {
        lang: "bash",
        code: "# O primeiro passo mental: não ter medo da ajuda do comando\napktool --help # Mostra todas as opções da ferramenta\n# Ler a ajuda é o segredo dos profissionais que parecem saber tudo."
      },
      {
        lang: "bash",
        code: "# Entendendo a estrutura de diretórios básica\ncd pasta_do_app && ls -la # Navega e lista arquivos ocultos\n# Organização mental começa com a organização dos seus arquivos."
      },
      {
        lang: "bash",
        code: "# Usando o histórico do terminal para não repetir trabalho\nhistory | grep \"apktool\" # Busca comandos que você já digitou\n# Poupar energia cerebral para o que realmente importa: o código."
      },
      {
        lang: "bash",
        code: "# Criando um backup antes de fazer bobagem\ncp -r app_orig app_backup # Faz uma cópia de segurança de tudo\n# Errar é humano, não ter backup é opcional."
      },
      {
        lang: "bash",
        code: "# Verificando o tipo de um arquivo misterioso\nfile classes.dex # O comando 'file' diz o que o arquivo realmente é\n# Não confie apenas na extensão do arquivo; investigue."
      },
      {
        lang: "bash",
        code: "# Limpando a tela para focar no problema atual\nclear # Remove a 'sujeira' visual do terminal\n# Mente limpa, código claro."
      },
      {
        lang: "bash",
        code: "# Usando grep recursivo para encontrar qualquer texto em um projeto\ngrep -rn 'texto_procurado' pasta_do_app/\n# O -n mostra o número da linha, essencial para localizar rapidamente"
      },
      {
        lang: "bash",
        code: "# Criando aliases para comandos frequentes no ~/.bashrc\nalias apkd='apktool d'\nalias apkb='apktool b'\n# Economiza digitação e reduz erros de typo"
      },
      {
        lang: "bash",
        code: "# Usando find para localizar arquivos por extensão\nfind meu_app/ -name '*.xml' | head -10\n# Encontra todos os XMLs dentro da pasta decompilada"
      },
      {
        lang: "bash",
        code: "# Verificando diferenças entre duas versões de um arquivo\ndiff original.smali modificado.smali\n# Mostra exatamente o que você mudou, linha por linha"
      }
    ],
    points: [
      "Persistência: a maioria dos problemas é resolvida na terceira ou quarta tentativa.",
      "Atenção aos detalhes: um ponto ou vírgula no lugar errado quebra o rebuild.",
      "Leitura de logs: as mensagens de erro são mapas, não apenas avisos chatos.",
      "Pensamento estruturado: divida um app grande em pequenas partes menores.",
      "Conhecimento básico de terminal: cd, ls, cp, mv e mkdir são comandos vitais.",
      "Noções de XML: entender como tags e atributos funcionam facilita a vida.",
      "Curiosidade técnica: o desejo de saber 'por que' algo funciona é o seu motor.",
      "Gestão de frustração: aceitar que nem todo app pode ser facilmente aberto.",
      "Inglês técnico básico: a maioria das ferramentas e erros está em inglês.",
      "Mentalidade de Backup: nunca trabalhe na sua única cópia de um arquivo.",
      "Aprenda a usar grep e find — são seus melhores amigos para navegar código desconhecido.",
      "Mantenha um caderno de anotações (digital ou físico) com padrões que você descobre.",
      "Comece com apps simples e pequenos antes de tentar reverter apps de grandes empresas.",
      "A técnica de 'dividir para conquistar' funciona: isole um problema de cada vez.",
      "Participe de comunidades como XDA, Reddit r/ReverseEngineering e fóruns brasileiros."
    ],
    alerts: [
      {
        type: "tip",
        content: "Quando travar em um erro, dê uma volta, tome um café e volte depois. O cérebro resolve problemas em segundo plano."
      },
      {
        type: "info",
        content: "Não tente decorar comandos. Entenda o que eles fazem e onde consultar quando esquecer."
      },
      {
        type: "warning",
        content: "A pressa é a maior inimiga do analista. Um passo de cada vez evita bugs impossíveis de rastrear."
      },
      {
        type: "success",
        content: "Se você consegue navegar por pastas no terminal e abrir arquivos com cat/nano, já tem a base necessária."
      },
      {
        type: "danger",
        content: "Nunca edite o APK original diretamente. Sempre trabalhe em cópias para poder recomeçar do zero."
      }
    ]
  },
  {
    slug: "ferramentas-que-precisamos",
    section: "boas-vindas",
    title: "Ferramentas que Precisamos",
    difficulty: "iniciante",
    subtitle: "Organizando sua bancada de trabalho",
    intro: "Para realizar uma cirurgia em um aplicativo, você não pode usar facas de cozinha; você precisa de instrumentos de precisão. O ApkTool é o nosso bisturi principal, mas ele não trabalha sozinho. Primeiro, precisamos do Java JDK (Java Development Kit), que é o 'motor' que permite ao ApkTool rodar no seu computador. Sem o Java, o ApkTool é apenas um arquivo morto. Depois, temos o ADB (Android Debug Bridge), o 'cordão umbilical' que liga o seu PC ao seu celular, permitindo enviar e receber arquivos instantaneamente. Para assinar os aplicativos que modificamos (como se estivéssemos colocando um selo de autenticidade para o Android aceitá-los), usamos o Uber-APK-Signer ou o apksigner oficial. Ferramentas de inspeção visual como o JADX-GUI são como lupas potentes que transformam o código difícil (Smali) em algo mais familiar (Java), facilitando a leitura. E, claro, você precisará de um bom editor de texto — esqueça o Bloco de Notas! Use o VS Code com extensões para Smali, que colorem o código e ajudam seus olhos a não fritarem após dez minutos. Ter essa 'bancada' bem montada e organizada é o que diferencia o curioso amador do analista profissional. Cada ferramenta tem um porquê de existir, e ao longo deste capítulo, vamos garantir que todas estejam brilhando e prontas para o combate.",
    codes: [
      {
        lang: "bash",
        code: "# Verificando se o Java (o motor) está instalado\njava -version # Checa a versão do interpretador\njavac -version # Checa a versão do compilador (exigido por algumas ferramentas)"
      },
      {
        lang: "bash",
        code: "# Testando a conexão com o dispositivo via ADB\nadb devices # Lista aparelhos conectados e autorizados\n# Se não aparecer nada aqui, seu 'cordão umbilical' está desconectado."
      },
      {
        lang: "bash",
        code: "# O comando básico do nosso protagonista\napktool # Apenas digite para ver se ele responde\n# É o início de tudo o que faremos."
      },
      {
        lang: "bash",
        code: "# Localizando onde o executável do Java está (útil para configurar PATH)\nwhich java # No Linux/Mac, mostra o caminho real do programa\nwhere java # No Windows, faz a mesma busca de endereço."
      },
      {
        lang: "bash",
        code: "# Verificando se o Python está disponível (alguns scripts auxiliares usam)\npython3 --version # Muitas ferramentas de suporte são escritas em Python\n# Ter o Python instalado expande muito seu kit de ferramentas."
      },
      {
        lang: "bash",
        code: "# Testando se o editor de texto pode ser chamado via terminal\ncode --version # Testa o VS Code (opcional, mas recomendado)\n# Chamar o editor pelo terminal agiliza muito o fluxo de trabalho."
      },
      {
        lang: "bash",
        code: "# Instalando o ApkTool via wrapper script (Linux/Mac)\nwget https://raw.githubusercontent.com/AntBranch/apktool/master/scripts/linux/apktool\nchmod +x apktool && sudo mv apktool /usr/local/bin/\n# Agora o comando 'apktool' funciona de qualquer pasta"
      },
      {
        lang: "bash",
        code: "# Verificando se o zipalign está disponível no PATH\nzipalign --help 2>&1 | head -3\n# Faz parte do Android SDK Build Tools"
      },
      {
        lang: "bash",
        code: "# Testando o apksigner (assinatura digital)\napksigner --help 2>&1 | head -5\n# Sem assinatura, o Android se recusa a instalar qualquer APK"
      },
      {
        lang: "bash",
        code: "# Criando a pasta de trabalho organizada\nmkdir -p ~/android-re/{apks,tools,output,keys}\n# Organização é fundamental quando você trabalha com múltiplos apps"
      }
    ],
    points: [
      "Java JDK 8 ou superior: o ambiente de execução obrigatório para o ApkTool.",
      "ApkTool: o decodificador e reconstrutor de arquivos APK.",
      "ADB (Android Debug Bridge): ponte de comunicação entre PC e celular.",
      "Editor de Código (VS Code/Notepad++): sua interface de edição principal.",
      "JADX: visualizador de código Java para facilitar a compreensão da lógica.",
      "Zipalign: ferramenta de otimização de arquivos para o Android rodar mais rápido.",
      "Apksigner: essencial para aplicar a assinatura digital após a modificação.",
      "Terminal (Bash, PowerShell ou CMD): onde a mágica dos comandos acontece.",
      "Frameworks Android: o ApkTool precisa dos arquivos de sistema para entender o app.",
      "Uber-APK-Signer: uma ferramenta que facilita muito o processo de assinatura.",
      "Frida: framework de instrumentação dinâmica para análise em tempo real.",
      "Ghidra/IDA: descompiladores de código nativo (para libs .so em C/C++).",
      "Charles Proxy ou Burp Suite: interceptadores de tráfego de rede HTTPS.",
      "Um dispositivo Android real ou emulador (Genymotion/AVD) para testes práticos.",
      "Git: controle de versão para rastrear suas modificações no código Smali."
    ],
    alerts: [
      {
        type: "info",
        content: "Não instale tudo de uma vez sem testar. Vamos fazer isso passo a passo no próximo capítulo."
      },
      {
        type: "tip",
        content: "Crie uma pasta 'C:\\Ferramentas' ou '~/tools' para manter tudo centralizado e evitar confusão."
      },
      {
        type: "warning",
        content: "Versões muito antigas do Java podem causar erros misteriosos no ApkTool. Use versões modernas (11 ou 17)."
      },
      {
        type: "success",
        content: "Se java -version, apktool -version e adb version retornam sem erro, seu ambiente está pronto!"
      },
      {
        type: "danger",
        content: "Cuidado com downloads de ferramentas de fontes não oficiais — podem conter malware disfarçado."
      }
    ]
  }
];
