import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "o-que-e-smali",
    section: "smali-basico",
    title: "O Que é Smali?",
    difficulty: "intermediario",
    subtitle: "O assembler da Máquina Virtual Dalvik",
    intro: "Você já ouviu aquela história de que computadores só entendem zeros e uns? Pois é, mas entre esses zeros e o código Java elegante que os programadores escrevem, existe um 'meio de campo' fascinante. No mundo Android, esse meio de campo é o Smali. Imagine que o código Java é como uma partitura de música erudita: linda e fácil de ler para um músico. O Bytecode Dalvik (o arquivo .dex) é a gravação digital dessa música em um CD: perfeita para o player (o celular) tocar, mas impossível de ler apenas olhando para os sulcos do disco. O Smali é como se alguém pegasse aquela gravação e escrevesse, nota por nota, exatamente o que o player está fazendo: 'Abaixe a agulha aqui', 'Aumente o volume ali'. Ele é um 'Assembler', uma linguagem de baixíssimo nível que traduz as instruções binárias complexas em mnemônicos que nós, humanos, conseguimos entender com um pouco de treino. No Brasil, temos a analogia do 'mecânico de confiança': ele não precisa do manual da fábrica para saber o que há de errado com o motor; ele ouve o barulho e entende o que cada peça está fazendo. Aprender Smali é se tornar esse mecânico. Você não olha para o código fonte idealizado, você olha para a realidade do que está sendo executado no processador. Internamente, o Smali é a representação textual do que o 'Baksmali' extrai dos arquivos DEX, permitindo que você altere a lógica do aplicativo sem nunca ter visto uma única linha do código original em Java ou Kotlin.",
    codes: [
      {
        lang: "smali",
        code: "# 1. Declaração da classe (Sempre a primeira linha)\n.class public Lcom/exemplo/Calculadora;\n# O 'L' indica que é um tipo de objeto (classe)."
      },
      {
        lang: "smali",
        code: "# 2. Definição da classe pai (Superclasse)\n.super Ljava/lang/Object;\n# Quase toda classe herda de Object se não houver outra."
      },
      {
        lang: "smali",
        code: "# 3. Um campo (variável) da classe\n.field private nomeUsuario:Ljava/lang/String;\n# Nome da variável : Tipo da variável."
      },
      {
        lang: "smali",
        code: "# 4. O construtor padrão da classe\n.method public constructor <init>()V\n    .locals 0\n    invoke-direct {p0}, Ljava/lang/Object;-><init>()V\n    return-void\n.end method"
      },
      {
        lang: "smali",
        code: "# 5. Uma instrução simples de soma\nadd-int v0, v1, v2\n# Soma v1 com v2 e guarda o resultado em v0."
      },
      {
        lang: "smali",
        code: "# 6. Retornando um valor booleano verdadeiro\nconst/4 v0, 0x1\nreturn v0"
      }
    ],
    points: [
      "Smali é a linguagem de montagem (assembly) para a VM Dalvik do Android.",
      "Baksmali é o processo de desmontar o DEX; Smali é o de montar de volta.",
      "A sintaxe é baseada no projeto jasmin e usa mnemônicos para instruções.",
      "Diferente do Java, o Smali é orientado a registradores (v0, v1, p0, etc).",
      "Cada arquivo .smali corresponde a exatamente uma classe .class (ou .dex).",
      "Preserva toda a estrutura da classe: campos, métodos, anotações e tipos.",
      "Permite a modificação da lógica do app em nível de instrução atômica.",
      "É a base para a criação de patches, mods e análise de malware.",
      "Caminhos de pacotes usam '/' em vez de '.' (ex: java/lang/String).",
      "O nome 'Smali' significa 'Assembler' em Islandês (homenagem à herança do autor)."
    ],
    alerts: [
      {
        type: "info",
        content: "O Smali não é case-sensitive para instruções, mas é para nomes de classes e campos."
      },
      {
        type: "tip",
        content: "Pense no Smali como um passo-a-passo detalhado: ele não pula etapas, ele descreve cada movimento da CPU."
      },
      {
        type: "warning",
        content: "Qualquer erro de sintaxe no Smali impedirá o ApkTool de recompilar o aplicativo."
      }
    ]
  },
  {
    slug: "dalvik-vs-art",
    section: "smali-basico",
    title: "Dalvik vs ART",
    difficulty: "intermediario",
    subtitle: "JIT, AOT e o impacto na engenharia reversa",
    intro: "A história do Android é marcada por uma grande transição sob o capô: a mudança do Dalvik para o ART (Android Runtime). Imagine que você tem um tradutor de livros. No tempo do Dalvik (Android 4.4 e anteriores), o tradutor esperava você abrir a página para traduzir o texto ali na hora (isso é o JIT - Just-In-Time). Era rápido para instalar o app, mas ele rodava um pouco mais 'pesado' porque o celular estava sempre trabalhando na tradução. Já o ART (Android 5.0 em diante) é como um tradutor que traduz o livro inteiro na hora que você o compra e já o deixa pronto na prateleira (isso é o AOT - Ahead-Of-Time). O app abre mais rápido e gasta menos bateria, mas a instalação demora um pouco mais. Para nós, no ApkTool, isso é fascinante porque, embora o Android moderno use arquivos `.odex` e `.vdex` otimizados para o hardware, a 'matéria-prima' original que extraímos do APK continua sendo o Bytecode Dalvik (arquivos `.dex`). O Smali continua sendo o nosso idioma universal. No Brasil, é como se tivéssemos mudado o motor do carro de carburado para injeção eletrônica: a tecnologia mudou completamente, mas o combustível (o Smali) continua sendo o mesmo que faz tudo funcionar. Entender essa diferença ajuda a explicar por que certos apps modificados demoram a 'otimizar' na primeira inicialização após um update de sistema.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Localizando arquivos DEX originais em um app:\nunzip -l app.apk | grep \".dex\""
      },
      {
        lang: "bash",
        code: "# 2. Onde o ART guarda as otimizações no celular (Root necessário):\nls /data/dalvik-cache/arm/ # Contém arquivos .dex e .oat otimizados."
      },
      {
        lang: "bash",
        code: "# 3. Verificando o formato de um arquivo OAT (ELF):\nfile /data/app/com.exemplo/oat/arm/base.odex"
      },
      {
        lang: "bash",
        code: "# 4. Comando do sistema para otimizar um app manualmente:\nadb shell cmd package compile -m speed com.exemplo.app"
      },
      {
        lang: "bash",
        code: "# 5. Diferença visual (Conceitual):\n# Dalvik: Executa Bytecode diretamente via JIT.\n# ART: Executa código nativo pré-compilado a partir do DEX."
      },
      {
        lang: "bash",
        code: "# 6. Como o ApkTool lida com isso:\n# Ele sempre busca o 'classes.dex' original para gerar o Smali."
      }
    ],
    points: [
      "Dalvik usava JIT (Just-In-Time) para compilar código durante a execução.",
      "ART usa AOT (Ahead-Of-Time) para compilar tudo durante a instalação.",
      "O formato DEX (Dalvik Executable) permanece como o padrão de distribuição.",
      "Arquivos .odex (Optimized DEX) são específicos para o hardware do aparelho.",
      "Arquivos .vdex contêm o DEX original para facilitar atualizações e verificações.",
      "O ART introduziu melhorias significativas no Garbage Collector (limpeza de memória).",
      "O Smali ignora as otimizações do ART e foca no código lógico base.",
      "A mudança para ART permitiu que o Android suportasse melhor processadores 64-bit.",
      "A partir do Android 7.0, o ART usa um mix de JIT, AOT e Perfis de Usuário.",
      "Modificar o Smali obriga o ART a re-otimizar o aplicativo na próxima execução."
    ],
    alerts: [
      {
        type: "info",
        content: "O ART é totalmente retrocompatível com o Bytecode Dalvik gerado pelo ApkTool."
      },
      {
        type: "warning",
        content: "Apps de sistema podem ter apenas arquivos .odex, exigindo o processo de 'deodex' antes do ApkTool."
      },
      {
        type: "tip",
        content: "Se um app modificado estiver lento, tente o comando 'cmd package compile' para forçar a otimização ART."
      }
    ]
  },
  {
    slug: "registradores-smali",
    section: "smali-basico",
    title: "Registradores: As Variáveis do Smali",
    difficulty: "intermediario",
    subtitle: "p0, v0 e a gestão de memória interna",
    intro: "No Java, você cria variáveis com nomes lindos como `int contador` ou `String nomeDoUsuario`. No Smali, esqueça o luxo. Aqui trabalhamos com 'Registradores', que são como caixas numeradas onde você pode colocar qualquer coisa temporariamente. Imagine que você está em uma cozinha industrial (o processador) e tem apenas um número limitado de tigelas (registradores) na bancada. Para fazer um bolo, você coloca a farinha na tigela `v0`, o açúcar na `v1`, mistura e coloca o resultado de volta na `v0`. Existem duas nomenclaturas fundamentais: os registradores `v` (locais) e os `p` (parâmetros). O registrador `p0` é a tigela mais importante: em métodos comuns, ela contém o 'this' (a própria instância da classe). Se o método recebe dois números, eles estarão em `p1` e `p2`. No Brasil, gostamos de usar analogias de futebol: o `p0` é o capitão do time que sempre está em campo, enquanto os `v0, v1...` são os jogadores reservas que entram para realizar uma tarefa específica e depois saem. Aprender a gerenciar esses registradores sem 'sobrescrever' um dado importante por acidente é a habilidade mais crítica para qualquer editor de Smali. Se você tentar usar uma tigela que não declarou que ia usar (via `.locals`), a cozinha explode (o app crasha).",
    codes: [
      {
        lang: "smali",
        code: "# 1. Declarando que vamos usar 2 registradores locais\n.method public somar(II)I\n    .locals 2\n    # v0 e v1 agora estão disponíveis para uso."
      },
      {
        lang: "smali",
        code: "# 2. Entendendo os parâmetros (p)\n# p0 = this\n# p1 = primeiro 'I' (inteiro)\n# p2 = segundo 'I' (inteiro)"
      },
      {
        lang: "smali",
        code: "# 3. Colocando um valor constante em v0\nconst/4 v0, 0x5\n# v0 agora vale 5."
      },
      {
        lang: "smali",
        code: "# 4. Movendo o valor de um parâmetro para um local\nmove v1, p1\n# v1 agora tem o valor que foi passado para a função."
      },
      {
        lang: "smali",
        code: "# 5. Somando e guardando o resultado\nadd-int v0, v1, p2\n# v0 = v1 + p2."
      },
      {
        lang: "smali",
        code: "# 6. Retornando o resultado final\nreturn v0"
      }
    ],
    points: [
      "Registradores são espaços de 32 bits usados para armazenar dados e referências.",
      "A diretiva '.locals N' define quantos registradores locais (v0 a vN-1) serão usados.",
      "A nomenclatura 'v' refere-se a variáveis locais; 'p' refere-se a parâmetros do método.",
      "Em métodos de instância, p0 é sempre a referência 'this'.",
      "Em métodos estáticos (static), p0 é o primeiro argumento real.",
      "Tipos 'wide' (Long e Double) ocupam dois registradores consecutivos (ex: v0 e v1).",
      "O número total de registradores é a soma de .locals + parâmetros + 1 (para p0).",
      "O ApkTool permite usar a nomenclatura '.registers N' para definir o total absoluto.",
      "Sobrescrever p0 geralmente causa erros de verificação (VerifyError).",
      "Registradores não têm tipo fixo; você pode colocar um int em v0 e depois um objeto."
    ],
    alerts: [
      {
        type: "danger",
        content: "Acessar um registrador fora do limite declarado em .locals causará um erro fatal no Android."
      },
      {
        type: "info",
        content: "A nomenclatura 'p' é apenas um apelido (alias) para os últimos registradores 'v' do método."
      },
      {
        type: "tip",
        content: "Ao adicionar código, sempre aumente o número em '.locals' para ter 'tigelas' extras livres."
      }
    ]
  },
  {
    slug: "tipos-em-smali",
    section: "smali-basico",
    title: "Sistema de Tipos em Smali",
    difficulty: "intermediario",
    subtitle: "V, Z, I, L e a sopa de letras dos tipos Dalvik",
    intro: "No Smali, economizar espaço é a regra de ouro. Em vez de escrever nomes completos de tipos como `Boolean`, `Integer` ou `Void`, a Máquina Virtual Dalvik usa uma taquigrafia de uma única letra. Pode parecer uma sopa de letrinhas confusa no começo, mas há uma lógica por trás. Por que o Booleano é `Z`? Porque o `B` já estava ocupado pelo `Byte`. Por que o `Long` é `J`? Porque o `L` é o prefixo universal para objetos (Classes). Imagine que você está mandando um telegrama e cada letra custa caro; você abrevia tudo. Um Inteiro é `I`, um Float é `F`. Quando chegamos aos objetos, a coisa muda: usamos um `L` no começo, o caminho completo da pasta separado por barras, e um `;` no final para dizer que o nome acabou. Por exemplo, uma String em Java é `Ljava/lang/String;` em Smali. E se for uma lista (array)? Basta colocar um colchete `[` na frente! Um array de inteiros vira `[I`. No Brasil, essa lógica é parecida com as siglas de estados ou aeroportos: `SP`, `RJ`, `GRU`, `GIG`. Uma vez que você decora os principais, a leitura do Smali flui naturalmente como se você estivesse lendo português.",
    codes: [
      {
        lang: "smali",
        code: "# 1. Tipos Primitivos Simples:\n# V - Void (usado em retornos de métodos que não devolvem nada)\n# Z - Boolean (true/false)\n# I - Integer (número inteiro de 32 bits)"
      },
      {
        lang: "smali",
        code: "# 2. Tipos de Ponto Flutuante e Grandes:\n# F - Float (decimal)\n# D - Double (decimal de precisão dupla - 64 bits)\n# J - Long (inteiro de 64 bits)"
      },
      {
        lang: "smali",
        code: "# 3. Tipos de Caractere e Pequenos:\n# B - Byte\n# S - Short\n# C - Char"
      },
      {
        lang: "smali",
        code: "# 4. Objetos (Classes):\n# Lpackage/name/ClassName;\n# Exemplo: Landroid/view/View;"
      },
      {
        lang: "smali",
        code: "# 5. Arrays (Listas):\n# [I  -> Array de Inteiros\n# [Ljava/lang/String; -> Array de Strings"
      },
      {
        lang: "smali",
        code: "# 6. Assinatura de um método complexo:\n# (IZLjava/lang/String;)V\n# Um método que recebe: (Int, Boolean, String) e retorna Void."
      }
    ],
    points: [
      "Cada tipo primitivo Java tem uma correspondência de uma letra no Smali.",
      "O tipo 'Z' (Boolean) usa 0 para false e 1 para true internamente.",
      "Objetos sempre começam com 'L' e terminam obrigatoriamente com ';'.",
      "O símbolo '[' indica um nível de array; '[[' seria uma matriz bidimensional.",
      "Assinaturas de métodos não usam espaços ou vírgulas para separar parâmetros.",
      "O tipo de retorno vem sempre após o fechamento dos parênteses.",
      "Tipos de 64 bits (J e D) exigem o uso de dois registradores para armazenamento.",
      "Strings são tratadas como objetos (Ljava/lang/String;).",
      "A sintaxe de tipos é idêntica à usada na JNI (Java Native Interface).",
      "Entender os tipos é crucial para localizar as assinaturas corretas dos métodos."
    ],
    alerts: [
      {
        type: "info",
        content: "O caractere ';' ao final de um objeto não é um separador de linha, faz parte do nome do tipo."
      },
      {
        type: "warning",
        content: "Não confunda 'B' (Byte) com 'Z' (Boolean). É um erro comum para iniciantes."
      },
      {
        type: "tip",
        content: "Sempre que vir um 'L' seguido de caminhos com '/', você está olhando para uma classe."
      }
    ]
  },
  {
    slug: "metodos-smali",
    section: "smali-basico",
    title: "Estrutura de um Método Smali",
    difficulty: "intermediario",
    subtitle: "Method, End Method, Modificadores e Invokes",
    intro: "Um método no Smali é como uma receita de bolo contida dentro de um envelope lacrado. Ele começa com a diretiva `.method` e termina com `.end method`. No topo do envelope (a assinatura), temos informações vitais: quem pode ler (modificadores como `public`, `private`, `static`), o nome da receita e quais ingredientes ela precisa (parâmetros). Mas a parte mais importante para quem faz engenharia reversa são as 'invocações' (`invokes`). Como o Smali é uma linguagem de baixo nível, ele não simplesmente 'chama' uma função; ele precisa dizer como essa chamada deve ser feita. Se for uma função privada da mesma classe, usamos `invoke-direct`. Se for uma função comum de um objeto, usamos `invoke-virtual`. Se for uma função estática (que não precisa de um objeto criado), usamos `invoke-static`. É como se, no Brasil, tivéssemos formas diferentes de chamar alguém: 'Ô fulano!' (direto), 'Senhor fulano' (virtual) ou apenas gritar para a multidão (estático). Dominar a anatomia de um método permite que você encontre o 'coração' de uma funcionalidade e entenda como os dados entram, como são processados e como saem através do comando `return`.",
    codes: [
      {
        lang: "smali",
        code: "# 1. Cabeçalho de um método público e estático\n.method public static verificarSenha(Ljava/lang/String;)Z\n    .locals 1\n    # Recebe uma String e retorna um Boolean (Z)."
      },
      {
        lang: "smali",
        code: "# 2. Chamada de método virtual (O mais comum)\ninvoke-virtual {p0, p1}, Lcom/app/User;->check(Ljava/lang/String;)Z\n# Chama 'check' no objeto p0 usando p1 como argumento."
      },
      {
        lang: "smali",
        code: "# 3. Capturando o resultado de uma chamada\nmove-result v0\n# v0 agora contém o que o método acima retornou."
      },
      {
        lang: "smali",
        code: "# 4. Chamada de método estático (Não precisa de objeto)\ninvoke-static {v0}, Landroid/util/Log;->d(Ljava/lang/String;)I"
      },
      {
        lang: "smali",
        code: "# 5. Chamada de construtor ou método privado\ninvoke-direct {p0}, Ljava/lang/Object;-><init>()V"
      },
      {
        lang: "smali",
        code: "# 6. Finalizando o método com retorno vazio\nreturn-void\n.end method"
      }
    ],
    points: [
      "A diretiva '.method' inicia a definição e '.end method' a finaliza.",
      "Modificadores (public, private, protected, static, final) vêm após a diretiva.",
      "A assinatura segue o formato: nomeDoMetodo(Parametros)Retorno.",
      "'.locals N' define o espaço de trabalho para variáveis dentro do método.",
      "'invoke-virtual' é usado para chamar métodos normais que podem ser sobrescritos.",
      "'invoke-super' é usado para chamar métodos da classe pai (ancestral).",
      "'invoke-direct' é obrigatório para construtores (<init>) e métodos privados.",
      "'invoke-static' não requer uma instância de classe para ser executado.",
      "O resultado de uma chamada de método DEVE ser capturado por 'move-result' na linha seguinte.",
      "Métodos podem conter 'anotações' que descrevem comportamentos extras (como @Override)."
    ],
    alerts: [
      {
        type: "danger",
        content: "Esquecer o 'move-result' após uma chamada fará com que o valor retornado seja perdido para sempre."
      },
      {
        type: "info",
        content: "Em métodos estáticos, p0 NÃO é o 'this', é o primeiro argumento passado."
      },
      {
        type: "tip",
        content: "Para desativar uma função, você pode simplesmente inserir um 'return-void' logo no início dela."
      }
    ]
  },
  {
    slug: "instrucoes-basicas",
    section: "smali-basico",
    title: "Instruções Smali Essenciais",
    difficulty: "intermediario",
    subtitle: "Move, Const, Iget, Iput e saltos condicionais",
    intro: "Agora que conhecemos os tipos e os métodos, vamos aprender os verbos: as instruções. No Smali, cada comando faz apenas uma coisa muito simples. Quer colocar um número numa caixa? Use `const`. Quer passar o que está na caixa A para a caixa B? Use `move`. Quer ler uma variável que está dentro de um objeto? Use `iget` (Instance Get). Quer mudar o valor dessa variável? Use `iput` (Instance Put). Mas a verdadeira inteligência de um app está nas decisões, e no Smali elas são feitas através de 'pulos' (jumps). O comando `if-eq v0, v1, :label` diz: 'Se v0 for igual a v1, pule para o lugar marcado como :label'. Se não for igual, o código continua na linha de baixo. É como um livro de 'escolha seu próprio caminho' que você lia quando criança. No Brasil, chamamos isso de 'fluxograma': se tem dinheiro, vai pro shopping; se não tem, fica em casa. Dominar essas instruções básicas é o que permite que você altere o fluxo de um aplicativo, fazendo com que ele pule uma verificação de pagamento ou ignore um erro de conexão, redirecionando o fluxo para onde você desejar.",
    codes: [
      {
        lang: "smali",
        code: "# 1. Definindo constantes\nconst/4 v0, 0x1        # v0 = true (ou 1)\nconst-string v1, \"Ola\" # v1 = \"Ola\""
      },
      {
        lang: "smali",
        code: "# 2. Movendo dados entre registradores\nmove-object v2, v1     # Copia a referência da String para v2"
      },
      {
        lang: "smali",
        code: "# 3. Acessando campos (variáveis) de um objeto\niget-object v0, p0, Lcom/app/User;->nome:Ljava/lang/String;\n# v0 = p0.nome"
      },
      {
        lang: "smali",
        code: "# 4. Comparação simples (IF)\nif-eqz v0, :cond_0    # Se v0 for ZERO (false), pule para :cond_0\n# Se não for zero, continua aqui..."
      },
      {
        lang: "smali",
        code: "# 5. Salto incondicional (GOTO)\ngoto :sempre_pula      # Pula para a etiqueta sem fazer perguntas"
      },
      {
        lang: "smali",
        code: "# 6. Criando uma nova instância (New)\nnew-instance v0, Ljava/lang/StringBuilder;\ninvoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V"
      }
    ],
    points: [
      "Instruções 'const' variam de tamanho (const/4, const/16, const-high16) conforme o valor.",
      "Instruções 'move' devem especificar o tipo (move, move-object, move-wide).",
      "Iget/Iput são para campos de instância; Sget/Sput são para campos estáticos (Static).",
      "O prefixo 'if-' inicia uma condicional; o sufixo 'z' significa 'compare com zero'.",
      "Instruções de comparação comuns: if-eq (equal), if-ne (not equal), if-gt (greater than).",
      "O comando 'check-cast' é usado para garantir que um objeto é do tipo esperado.",
      "Instruções 'array-length' retornam o tamanho de uma lista.",
      "Instruções de retorno devem bater com o tipo do método (return, return-object, return-void).",
      "O mnemônico 'nop' (No Operation) não faz nada, usado para preenchimento.",
      "Labels (etiquetas) começam com ':' e servem de destino para pulos."
    ],
    alerts: [
      {
        type: "warning",
        content: "Mudar um 'if-eqz' para 'if-nez' inverte completamente a lógica de uma decisão (ex: de Negado para Aceito)."
      },
      {
        type: "tip",
        content: "Sempre que usar 'new-instance', você DEVE chamar o construtor '<init>' logo em seguida."
      },
      {
        type: "info",
        content: "Os pulos são locais ao método; você não pode pular de um arquivo Smali para outro diretamente."
      }
    ]
  },
  {
    slug: "lendo-logcat-smali",
    section: "smali-basico",
    title: "Lendo Logcat para Entender o Smali",
    difficulty: "intermediario",
    subtitle: "Adb logcat, filtros e rastreamento de crashes",
    intro: "Imagine que você é um detetive tentando desvendar um crime em uma cidade barulhenta. O Logcat é o sistema de câmeras de segurança e microfones da cidade (o Android). Absolutamente tudo o que o aplicativo faz — desde um simples clique até um erro fatal — deixa um rastro no Logcat. Quando você está editando um Smali, o Logcat é o seu melhor amigo e seu mestre. Se o aplicativo fechar sozinho, não entre em pânico: o Logcat te dará um 'Stack Trace', que é basicamente o mapa do tesouro dizendo: 'O erro aconteceu no arquivo X.smali, dentro do método Y, na linha Z'. No Brasil, temos o hábito de dizer que 'quem não deve não teme'; o app 'deve' explicações ao sistema, e o Logcat as entrega de bandeja. Aprender a filtrar esse mar de informações com o comando `adb logcat` é essencial. Você pode focar apenas nos erros do seu app, ignorando as notificações chatas do sistema, e descobrir exatamente qual instrução Smali você escreveu errado ou qual registrador você esqueceu de declarar. Sem o Logcat, você está voando às cegas; com ele, você tem visão de raio-x sobre a execução do código.",
    codes: [
      {
        lang: "bash",
        code: "# 1. O comando básico para ver tudo em tempo real:\nadb logcat"
      },
      {
        lang: "bash",
        code: "# 2. Filtrando apenas por Erros (Prioridade E):\nadb logcat *:E"
      },
      {
        lang: "bash",
        code: "# 3. Filtrando por uma Tag específica (Ex: AndroidRuntime):\nadb logcat -s AndroidRuntime"
      },
      {
        lang: "bash",
        code: "# 4. Limpando o log antes de testar seu app:\nadb logcat -c"
      },
      {
        lang: "bash",
        code: "# 5. Exemplo de erro no Logcat que aponta para o Smali:\nE/AndroidRuntime: FATAL EXCEPTION: main\nE/AndroidRuntime: Process: com.exemplo.app, PID: 1234\nE/AndroidRuntime: java.lang.VerifyError: Rejecting class com.exemplo.app.Auth"
      },
      {
        lang: "bash",
        code: "# 6. Salvando o log em um arquivo para análise calma:\nadb logcat -d > meu_erro.txt"
      }
    ],
    points: [
      "O Logcat é o sistema centralizado de logs do sistema operacional Android.",
      "A ferramenta 'adb' é o meio principal de acessar esses logs via computador.",
      "Mensagens de log têm níveis: V (Verbose), D (Debug), I (Info), W (Warn), E (Error), F (Fatal).",
      "O 'VerifyError' é o erro mais comum ao editar Smali incorretamente.",
      "O 'Stack Trace' mostra a sequência de chamadas de métodos que levou ao erro.",
      "Cada linha de log contém data, hora, PID (Process ID), Tag e a mensagem.",
      "Filtrar por 'package name' ajuda a isolar as mensagens do seu aplicativo alvo.",
      "É possível ler o Logcat diretamente no dispositivo usando apps como MatLog (requer root).",
      "O Logcat revela valores de variáveis que o desenvolvedor imprimiu para debug.",
      "Monitorar o Logcat durante a inicialização do app ajuda a identificar proteções anti-tamper."
    ],
    alerts: [
      {
        type: "info",
        content: "Sempre limpe o log com 'adb logcat -c' antes de reproduzir um bug para facilitar a leitura."
      },
      {
        type: "tip",
        content: "Procure por 'Caused by:' no log; geralmente é ali que a causa real do problema está escondida."
      },
      {
        type: "warning",
        content: "Muitos logs podem deixar o terminal lento; use filtros para reduzir o fluxo de dados."
      }
    ]
  },
  {
    slug: "depurando-smali",
    section: "smali-basico",
    title: "Adicionando Logs no Smali para Debug",
    difficulty: "intermediario",
    subtitle: "Injeção de código, Log.d e técnica de bisect",
    intro: "Sabe quando você perde a chave de casa no escuro e precisa de uma lanterna para iluminar o caminho? Injetar logs no Smali é exatamente isso: você está colocando 'lanternas' dentro do código para ver o que está acontecendo em tempo real. Como não temos o código original para usar um depurador visual moderno, nós fazemos a 'depuração de guerrilha'. Se você quer saber o que está escrito no registrador `v0` antes dele ser enviado para o servidor, você injeta uma chamada para a classe `android.util.Log`. Isso fará com que o valor de `v0` apareça magicamente no seu Logcat. É uma técnica poderosa: você pode ver senhas, tokens de API, ou simplesmente confirmar se o código passou por um determinado `IF`. No Brasil, somos mestres em improvisação, e a injeção de logs é o ápice disso na engenharia reversa. Outra técnica vital é o 'Bisect': se o app está crashando e você não sabe onde, você coloca um log no meio do método. Se o log aparecer, o erro está depois dele; se não aparecer, o erro está antes. Assim, você vai fechando o cerco até encontrar o vilão. É um trabalho de paciência, mas que entrega resultados que nenhuma ferramenta automática conseguiria.",
    codes: [
      {
        lang: "smali",
        code: "# 1. Preparando os registradores para o Log\n.locals 3 # Aumente o número de locais se necessário\nconst-string v0, \"MEU_MOD\"\nconst-string v1, \"O valor eh: \""
      },
      {
        lang: "smali",
        code: "# 2. Injetando a chamada de Log (String simples)\ninvoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I"
      },
      {
        lang: "smali",
        code: "# 3. Logando o conteúdo de um registrador (v2)\ninvoke-static {v0, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I\n# Assume que v2 é uma String."
      },
      {
        lang: "smali",
        code: "# 4. Convertendo um Inteiro para String antes de logar\ninvoke-static {p1}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;\nmove-result-object v1\ninvoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I"
      },
      {
        lang: "smali",
        code: "# 5. Logando o stack trace (Para saber QUEM chamou este método)\nnew-instance v1, Ljava/lang/Exception;\ninvoke-direct {v1}, Ljava/lang/Exception;-><init>()V\nconst-string v2, \"STACK_TRACE\"\ninvoke-static {v2, v2, v1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I"
      },
      {
        lang: "smali",
        code: "# 6. Verificando o resultado no terminal:\nadb logcat -s MEU_MOD"
      }
    ],
    points: [
      "Injetar logs é a forma mais eficaz de depurar código Smali sem um debugger real.",
      "A classe 'android/util/Log' é a ferramenta padrão para imprimir mensagens.",
      "O método 'Log.d' (Debug) recebe dois parâmetros: a TAG e a MENSAGEM.",
      "Sempre verifique se há registradores locais suficientes (.locals) antes de injetar código.",
      "O comando 'String.valueOf()' é útil para converter tipos primitivos antes de logar.",
      "A técnica de 'Bisect' ajuda a isolar erros em métodos muito longos.",
      "Injetar uma Exception falsa permite ver o caminho que o código percorreu (Stack Trace).",
      "Remova todos os logs de debug antes de finalizar e distribuir sua modificação.",
      "Use TAGs únicas e fáceis de filtrar para não se perder no Logcat.",
      "Logs podem ser injetados em qualquer lugar, inclusive dentro de loops ou condicionais."
    ],
    alerts: [
      {
        type: "success",
        content: "Injetar um log logo antes de um 'return' é a melhor forma de validar se sua alteração funcionou."
      },
      {
        type: "warning",
        content: "Cuidado para não sobrescrever registradores que o código original usará logo abaixo."
      },
      {
        type: "tip",
        content: "Use um editor com 'snippets' para injetar logs rapidamente com apenas um atalho de teclado."
      }
    ]
  }
];
