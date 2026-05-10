import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "o-que-e-smali",
    section: "smali-basico",
    title: "O Que é Smali?",
    difficulty: "intermediario",
    subtitle: "O assembler da Máquina Virtual Dalvik",
    intro: "Você já ouviu aquela história de que computadores só entendem zeros e uns? Pois é, mas entre esses zeros e o código Java elegante que os programadores escrevem, existe um 'meio de campo' fascinante que poucos conhecem. No mundo Android, esse meio de campo é o Smali. Imagine que o código Java é como uma partitura de música erudita: linda e fácil de ler para um músico treinado, com notas, compassos e dinâmicas bem definidas. O Bytecode Dalvik (o arquivo .dex) é a gravação digital dessa música em um CD: perfeita para o player (o celular) tocar, mas impossível de ler apenas olhando para os sulcos do disco. O Smali é como se alguém pegasse aquela gravação e escrevesse, nota por nota, exatamente o que o player está fazendo: 'Abaixe a agulha aqui', 'Aumente o volume ali', 'Repita este trecho três vezes'. Ele é um 'Assembler', uma linguagem de baixíssimo nível que traduz as instruções binárias complexas em mnemônicos que nós, humanos, conseguimos entender com um pouco de treino e dedicação. No Brasil, temos a analogia do 'mecânico de confiança' daqueles que ficam na esquina do bairro: ele não precisa do manual da fábrica importado em inglês para saber o que há de errado com o motor; ele ouve o barulho, sente a vibração e entende o que cada peça está fazendo. Aprender Smali é se tornar esse mecânico. Você não olha para o código fonte idealizado que o programador escreveu no conforto do Android Studio; você olha para a realidade crua do que está sendo executado no processador ARM do celular. Internamente, o Smali é a representação textual do que o 'Baksmali' (o desmontador) extrai dos arquivos DEX, permitindo que você altere a lógica do aplicativo sem nunca ter visto uma única linha do código original em Java ou Kotlin. É a ferramenta definitiva para quem quer entender como os apps realmente funcionam por dentro, além da superfície bonita que o usuário vê.",
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
      },
      {
        lang: "smali",
        code: "# 7. Chamando um método e capturando o resultado\ninvoke-virtual {p0}, Lcom/exemplo/Calculadora;->getValor()I\nmove-result v0\n# v0 agora contém o inteiro retornado pelo método"
      },
      {
        lang: "smali",
        code: "# 8. Imprimindo um log para debug\nconst-string v0, \"MEU_TAG\"\nconst-string v1, \"App iniciado!\"\ninvoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I"
      },
      {
        lang: "smali",
        code: "# 9. Comparação condicional simples\nif-eqz v0, :cond_false\n# Se v0 == 0, pula para :cond_false\n# Se v0 != 0, continua executando a próxima linha"
      },
      {
        lang: "smali",
        code: "# 10. Acessando um campo estático (como uma constante)\nsget-object v0, Lcom/app/Config;->API_URL:Ljava/lang/String;\n# v0 agora contém a URL da API definida na classe Config"
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
      "O nome 'Smali' significa 'Assembler' em Islandês (homenagem à herança do autor).",
      "O Smali é case-sensitive para nomes de classes e campos, mas não para instruções.",
      "Cada arquivo .smali começa com .class e .super obrigatoriamente.",
      "Interfaces implementadas são declaradas com .implements após o .super.",
      "Anotações (@Override, @Nullable) aparecem como blocos .annotation no Smali.",
      "O nome 'Smali' significa 'Assembler' em Islandês — homenagem do autor Ben Gruver."
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
      },
      {
        type: "success",
        content: "Se você consegue ler .class, .super e .method em um arquivo .smali, já está no caminho certo!"
      },
      {
        type: "danger",
        content: "Qualquer erro de sintaxe no Smali (mesmo um espaço a mais) impedirá a recompilação."
      }
    ]
  },
  {
    slug: "dalvik-vs-art",
    section: "smali-basico",
    title: "Dalvik vs ART",
    difficulty: "intermediario",
    subtitle: "JIT, AOT e o impacto na engenharia reversa",
    intro: "A história do Android é marcada por uma grande transição sob o capô que mudou completamente a forma como os aplicativos são executados: a mudança do Dalvik para o ART (Android Runtime). Imagine que você tem um tradutor de livros trabalhando para uma editora brasileira. No tempo do Dalvik (Android 4.4 e anteriores), o tradutor esperava você abrir a página para traduzir o texto ali na hora, ao vivo (isso é o JIT - Just-In-Time). Era rápido para instalar o app — como comprar um livro em inglês e ir traduzindo conforme lê — mas ele rodava um pouco mais 'pesado' porque o celular estava sempre trabalhando na tradução simultânea, gastando bateria e processamento. Já o ART (Android 5.0 em diante) é como um tradutor que traduz o livro inteiro na hora que você o compra e já o deixa pronto na prateleira em português (isso é o AOT - Ahead-Of-Time). O app abre mais rápido e gasta menos bateria no dia a dia, mas a instalação demora um pouco mais porque o sistema precisa fazer toda a tradução de uma vez. Para nós que trabalhamos com ApkTool, isso é fascinante porque, embora o Android moderno use arquivos '.odex' e '.vdex' otimizados especificamente para o hardware do aparelho (como um livro traduzido especificamente para o dialeto local), a 'matéria-prima' original que extraímos do APK continua sendo o Bytecode Dalvik (arquivos '.dex'). O Smali continua sendo o nosso idioma universal de trabalho. No Brasil, é como se tivéssemos mudado o motor do carro de carburado para injeção eletrônica: a tecnologia mudou completamente por baixo do capô, mas o combustível (o Smali/DEX) continua sendo o mesmo que faz tudo funcionar. Entender essa diferença ajuda a explicar por que certos apps modificados demoram a 'otimizar' na primeira inicialização após um update de sistema — o ART precisa recompilar tudo do zero.",
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
      },
      {
        lang: "bash",
        code: "# 7. Verificando qual runtime o dispositivo usa\nadb shell getprop persist.sys.dalvik.vm.lib.2\n# Retorna 'libart.so' para ART ou 'libdvm.so' para Dalvik"
      },
      {
        lang: "bash",
        code: "# 8. Forçando recompilação AOT de um app específico\nadb shell cmd package compile -m speed -f com.exemplo.app\n# Útil após instalar um mod para otimizar performance"
      },
      {
        lang: "bash",
        code: "# 9. Verificando o status de otimização de um app\nadb shell dumpsys package com.exemplo.app | grep -i \"code\\|dex\"\n# Mostra se o app está otimizado ou rodando em modo interpretado"
      },
      {
        lang: "bash",
        code: "# 10. Limpando cache de otimização para forçar re-otimização\nadb shell cmd package compile --reset com.exemplo.app\n# Força o ART a recompilar na próxima execução"
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
      "Modificar o Smali obriga o ART a re-otimizar o aplicativo na próxima execução.",
      "O ART moderno usa um mix de JIT + AOT + Profile-Guided Compilation.",
      "Arquivos .vdex contêm o DEX original para facilitar atualizações sem recompilação.",
      "O Dalvik foi oficialmente descontinuado no Android 5.0 (Lollipop).",
      "Apps modificados forçam o ART a re-otimizar na primeira execução após instalação.",
      "O comando 'cmd package compile' permite controlar manualmente a otimização."
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
      },
      {
        type: "success",
        content: "Se adb shell getprop retorna 'libart.so', seu dispositivo usa ART (todos os modernos usam)."
      },
      {
        type: "danger",
        content: "Não tente usar arquivos .odex de um dispositivo em outro — são específicos para o hardware."
      }
    ]
  },
  {
    slug: "registradores-smali",
    section: "smali-basico",
    title: "Registradores: As Variáveis do Smali",
    difficulty: "intermediario",
    subtitle: "p0, v0 e a gestão de memória interna",
    intro: "No Java, você cria variáveis com nomes lindos como `int contador` ou `String nomeDoUsuario`. No Smali, esqueça o luxo dos nomes descritivos. Aqui trabalhamos com 'Registradores', que são como caixas numeradas onde você pode colocar qualquer coisa temporariamente — números, textos, objetos, referências. Imagine que você está em uma cozinha industrial (o processador ARM do celular) e tem apenas um número limitado de tigelas (registradores) na bancada. Para fazer um bolo, você coloca a farinha na tigela `v0`, o açúcar na `v1`, mistura e coloca o resultado de volta na `v0`. Se você tentar usar uma tigela que não existe na bancada, a cozinha explode (o app crasha com um VerifyError). Existem duas nomenclaturas fundamentais que você precisa gravar: os registradores `v` (locais, suas variáveis de trabalho) e os `p` (parâmetros, os ingredientes que alguém te entregou). O registrador `p0` é a tigela mais importante de todas: em métodos de instância (não-estáticos), ela contém o 'this' — a própria instância da classe, como se fosse o crachá de identidade do objeto. Se o método recebe dois números como argumento, eles estarão em `p1` e `p2`. No Brasil, gostamos de usar analogias de futebol: o `p0` é o capitão do time que sempre está em campo e nunca sai, enquanto os `v0, v1, v2...` são os jogadores reservas que entram para realizar uma tarefa específica (uma jogada ensaiada) e depois saem. A diretiva `.locals N` no topo do método é como o técnico dizendo quantos reservas ele vai precisar naquela partida. Aprender a gerenciar esses registradores sem 'sobrescrever' um dado importante por acidente é a habilidade mais crítica para qualquer editor de Smali — é a diferença entre um mod que funciona perfeitamente e um que crasha misteriosamente em momentos aleatórios. Quando você precisar adicionar código novo, lembre-se sempre de aumentar o valor de `.locals` para ter tigelas extras disponíveis na sua bancada de trabalho.",
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
      },
      {
        lang: "smali",
        code: "# 7. Exemplo completo de método com registradores\n.method public static somar(II)I\n    .locals 1\n    # p0 = primeiro int, p1 = segundo int (método estático!)\n    add-int v0, p0, p1\n    return v0\n.end method"
      },
      {
        lang: "smali",
        code: "# 8. Registradores wide (Long/Double ocupam 2)\n.locals 4\nconst-wide v0, 0x174876E800L  # v0-v1 = 100000000000\nconst-wide v2, 0x2L            # v2-v3 = 2\nadd-long v0, v0, v2            # v0-v1 = resultado"
      },
      {
        lang: "smali",
        code: "# 9. Movendo objeto entre registradores\nmove-object v1, p0  # Copia referência do 'this' para v1\n# Útil quando p0 será sobrescrito mas você ainda precisa do this"
      },
      {
        lang: "smali",
        code: "# 10. Verificando o número de registradores necessários\n# .locals 3 = v0, v1, v2 disponíveis\n# Se método tem 2 params: p0=this, p1=arg1, p2=arg2\n# Total de registradores = .locals + params + 1"
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
      "Registradores não têm tipo fixo; você pode colocar um int em v0 e depois um objeto.",
      "Registradores são espaços de 32 bits — tipos wide (long/double) usam 2 consecutivos.",
      "A diretiva .registers N define o total absoluto (alternativa ao .locals).",
      "Em métodos estáticos, p0 é o primeiro argumento (não existe 'this').",
      "Sobrescrever p0 em método de instância causa VerifyError fatal.",
      "O ApkTool usa .locals por padrão; .registers é mais comum em código gerado."
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
      },
      {
        type: "success",
        content: "Se seu método compila sem VerifyError, os registradores estão corretos."
      },
      {
        type: "danger",
        content: "Usar um registrador além do limite de .locals causa crash imediato sem mensagem clara."
      }
    ]
  },
  {
    slug: "tipos-em-smali",
    section: "smali-basico",
    title: "Sistema de Tipos em Smali",
    difficulty: "intermediario",
    subtitle: "V, Z, I, L e a sopa de letras dos tipos Dalvik",
    intro: "No Smali, economizar espaço é a regra de ouro — cada byte conta quando você está lidando com milhões de instruções dentro de um arquivo DEX. Em vez de escrever nomes completos de tipos como `Boolean`, `Integer` ou `Void`, a Máquina Virtual Dalvik usa uma taquigrafia de uma única letra que pode parecer uma sopa de letrinhas confusa no começo, mas que tem uma lógica interna consistente e elegante. Por que o Booleano é `Z`? Porque o `B` já estava ocupado pelo `Byte`. Por que o `Long` é `J`? Porque o `L` é o prefixo universal para objetos (Classes) e não podia ser reutilizado. Imagine que você está mandando um telegrama antigamente e cada letra custa caro; você abrevia tudo ao máximo para economizar. Um Inteiro é `I`, um Float é `F`, um Char é `C`, um Short é `S`. Quando chegamos aos objetos (classes completas), a coisa muda de figura: usamos um `L` no começo, o caminho completo do pacote separado por barras (não por pontos como no Java!), e um `;` no final para dizer que o nome acabou. Por exemplo, uma String em Java é `Ljava/lang/String;` em Smali. E se for uma lista (array)? Basta colocar um colchete `[` na frente! Um array de inteiros vira `[I`, um array de Strings vira `[Ljava/lang/String;`. No Brasil, essa lógica é parecida com as siglas de estados ou códigos de aeroportos: `SP`, `RJ`, `GRU`, `GIG` — parecem aleatórios para quem não conhece, mas uma vez que você decora os principais, a leitura se torna automática. Dominar o sistema de tipos é o pré-requisito para conseguir ler assinaturas de métodos no Smali, que é onde a maioria dos iniciantes trava. Sem entender que `(IZLjava/lang/String;)V` significa 'recebe um int, um boolean e uma String, retorna void', você ficará perdido em qualquer arquivo .smali que abrir.",
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
      },
      {
        lang: "smali",
        code: "# 7. Assinatura complexa de método real\n# (Landroid/content/Context;Ljava/lang/String;I)Ljava/util/List;\n# Recebe: Context, String, int\n# Retorna: List"
      },
      {
        lang: "smali",
        code: "# 8. Array multidimensional\n# [[I = int[][]\n# [[[Ljava/lang/String; = String[][][]\n# Cada [ adiciona uma dimensão ao array"
      },
      {
        lang: "smali",
        code: "# 9. Tipo void em retorno de método\n# ()V = método sem parâmetros que retorna void\n# (I)V = recebe um int, retorna void\n# ()Ljava/lang/String; = sem params, retorna String"
      },
      {
        lang: "smali",
        code: "# 10. Identificando tipos em uma chamada real\ninvoke-virtual {p0, v0, v1}, Lcom/app/DB;->save(Ljava/lang/String;I)Z\n# save(String, int) retorna boolean"
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
      "Entender os tipos é crucial para localizar as assinaturas corretas dos métodos.",
      "A tabela completa de tipos: V=void, Z=bool, B=byte, S=short, C=char, I=int, J=long, F=float, D=double.",
      "Objetos sempre seguem o padrão Lpackage/Class; (com L no início e ; no final).",
      "Arrays usam [ como prefixo: [I = int[], [[I = int[][], [Ljava/lang/String; = String[].",
      "Assinaturas de método não usam separadores entre parâmetros: (IZLjava/lang/String;)V.",
      "O tipo de retorno vem sempre após o ) de fechamento dos parâmetros."
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
      },
      {
        type: "success",
        content: "Se você identifica (IZ)V como 'recebe int e boolean, retorna void', dominou os tipos!"
      },
      {
        type: "danger",
        content: "Confundir J (long, 64-bit) com I (int, 32-bit) causa corrupção silenciosa de dados."
      }
    ]
  },
  {
    slug: "metodos-smali",
    section: "smali-basico",
    title: "Estrutura de um Método Smali",
    difficulty: "intermediario",
    subtitle: "Method, End Method, Modificadores e Invokes",
    intro: "Um método no Smali é como uma receita de bolo contida dentro de um envelope lacrado. Ele começa com a diretiva `.method` e termina com `.end method` — tudo que está entre essas duas linhas é o corpo da receita, as instruções que o processador vai executar. No topo do envelope (a assinatura), temos informações vitais: quem pode ler (modificadores como `public`, `private`, `static`), o nome da receita e quais ingredientes ela precisa (parâmetros com seus tipos). É como a capa de um livro de receitas: antes de abrir, você já sabe se é um bolo de chocolate (método que retorna algo) ou apenas uma decoração (void). Mas a parte mais importante para quem faz engenharia reversa são as 'invocações' (`invokes`). Como o Smali é uma linguagem de baixo nível, ele não simplesmente 'chama' uma função como no Java com um simples `objeto.metodo()`; ele precisa dizer explicitamente como essa chamada deve ser feita, qual o protocolo de comunicação. Se for uma função privada da mesma classe ou um construtor, usamos `invoke-direct` — é uma ligação direta, sem intermediários. Se for uma função comum de um objeto que pode ser sobrescrita por herança, usamos `invoke-virtual` — o sistema precisa verificar se existe uma versão mais específica na classe filha. Se for uma função estática (que não precisa de um objeto criado), usamos `invoke-static` — é como ligar para um número 0800, não precisa saber quem vai atender. É como se, no Brasil, tivéssemos formas diferentes de chamar alguém dependendo do contexto: 'Ô fulano!' no bar (direto), 'Senhor Doutor' no tribunal (virtual, com cerimônia) ou gritar 'Próximo!' na fila do banco (estático, qualquer um serve). Dominar a anatomia de um método permite que você encontre o 'coração' de uma funcionalidade e entenda como os dados entram, como são processados e como saem através do comando `return`.",
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
      },
      {
        lang: "smali",
        code: "# 7. Método com try-catch (tratamento de exceção)\n.method public getData()V\n    .locals 2\n    :try_start\n    invoke-virtual {p0}, Lcom/app/Net;->fetch()V\n    :try_end\n    .catch Ljava/lang/Exception; {:try_start .. :try_end} :catch_0\n    return-void\n    :catch_0\n    move-exception v0\n    return-void\n.end method"
      },
      {
        lang: "smali",
        code: "# 8. Invoke-interface (para interfaces Java)\ninvoke-interface {v0}, Ljava/util/List;->size()I\nmove-result v1\n# Usado quando o tipo declarado é uma interface"
      },
      {
        lang: "smali",
        code: "# 9. Invoke com range (mais de 5 argumentos)\ninvoke-virtual/range {v0 .. v6}, Lcom/app/X;->metodo(IIIIIII)V\n# Quando há mais de 5 registradores como argumento"
      },
      {
        lang: "smali",
        code: "# 10. Desativando um método inteiro (patch comum)\n.method public isPremium()Z\n    .locals 1\n    const/4 v0, 0x1  # Sempre retorna true\n    return v0\n.end method"
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
      "Métodos podem conter 'anotações' que descrevem comportamentos extras (como @Override).",
      "invoke-virtual: métodos de instância que podem ser sobrescritos (polimorfismo).",
      "invoke-direct: construtores (<init>) e métodos private (sem polimorfismo).",
      "invoke-static: métodos de classe que não precisam de instância.",
      "invoke-interface: quando o tipo declarado é uma interface (List, Map, etc.).",
      "invoke-super: chama a implementação da classe pai (usado em @Override)."
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
      },
      {
        type: "success",
        content: "Se você sabe quando usar invoke-virtual vs invoke-direct, pode modificar qualquer chamada."
      },
      {
        type: "danger",
        content: "Usar invoke-virtual em método private causa VerifyError. Private sempre usa invoke-direct."
      }
    ]
  },
  {
    slug: "instrucoes-basicas",
    section: "smali-basico",
    title: "Instruções Smali Essenciais",
    difficulty: "intermediario",
    subtitle: "Move, Const, Iget, Iput e saltos condicionais",
    intro: "Agora que conhecemos os tipos e os métodos, vamos aprender os verbos da linguagem: as instruções. No Smali, cada comando faz apenas uma coisa muito simples — não existe instrução que faça duas operações ao mesmo tempo. É como uma linha de montagem de fábrica onde cada operário faz um único movimento repetitivo. Quer colocar um número numa caixa? Use `const`. Quer passar o que está na caixa A para a caixa B? Use `move`. Quer ler uma variável que está dentro de um objeto? Use `iget` (Instance Get). Quer mudar o valor dessa variável? Use `iput` (Instance Put). Quer ler um campo estático da classe? Use `sget`. Cada instrução tem variantes para diferentes tipos de dados: `iget` para inteiros, `iget-object` para objetos, `iget-wide` para longs e doubles. Mas a verdadeira inteligência de um app está nas decisões — os momentos onde o código escolhe um caminho ou outro — e no Smali elas são feitas através de 'pulos' (jumps/branches). O comando `if-eq v0, v1, :label` diz: 'Se v0 for igual a v1, pule para o lugar marcado como :label'. Se não for igual, o código continua na linha de baixo como se nada tivesse acontecido. É como um livro de 'escolha seu próprio caminho' que você lia quando criança: 'Se quiser abrir a porta, vá para a página 42; se quiser fugir, continue lendo'. No Brasil, chamamos isso de 'fluxograma' ou 'encruzilhada': se tem dinheiro no Pix, vai pro shopping; se não tem, fica em casa assistindo Netflix. Dominar essas instruções básicas é o que permite que você altere o fluxo de um aplicativo de forma cirúrgica, fazendo com que ele pule uma verificação de pagamento, ignore um erro de conexão, ou aceite qualquer senha como válida — tudo mudando apenas uma ou duas linhas de código. É o poder absoluto sobre o comportamento do aplicativo, concentrado em instruções simples que qualquer pessoa pode aprender com prática e dedicação.",
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
      },
      {
        lang: "smali",
        code: "# 7. Switch/case em Smali (packed-switch)\npacked-switch v0, :pswitch_data\n:pswitch_0\nconst-string v1, \"caso 0\"\ngoto :end\n:pswitch_1\nconst-string v1, \"caso 1\"\n:end"
      },
      {
        lang: "smali",
        code: "# 8. Operações com arrays\nnew-array v0, v1, [I          # Cria array de int com tamanho v1\naput v2, v0, v3               # array[v3] = v2\naget v4, v0, v3               # v4 = array[v3]"
      },
      {
        lang: "smali",
        code: "# 9. Casting de tipos (check-cast)\ncheck-cast v0, Landroid/widget/TextView;\n# Garante que v0 é um TextView antes de usar\n# Se não for, lança ClassCastException"
      },
      {
        lang: "smali",
        code: "# 10. Operação de negação (inverter boolean)\nif-eqz v0, :was_false\nconst/4 v0, 0x0\ngoto :done\n:was_false\nconst/4 v0, 0x1\n:done\n# Inverte: se era true vira false e vice-versa"
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
      "Labels (etiquetas) começam com ':' e servem de destino para pulos.",
      "const/4 suporta valores de -8 a 7; const/16 suporta -32768 a 32767.",
      "iget/iput são para campos de instância; sget/sput para campos estáticos.",
      "if-eqz/if-nez comparam com zero; if-eq/if-ne comparam dois registradores.",
      "goto faz salto incondicional; é usado para implementar loops e else.",
      "Labels (:nome) são locais ao método — não podem ser referenciadas de fora."
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
      },
      {
        type: "success",
        content: "Se você consegue inverter um if-eqz para if-nez e o app muda de comportamento, está dominando!"
      },
      {
        type: "danger",
        content: "Loops infinitos (goto sem condição de saída) congelam o app e podem exigir force-stop."
      }
    ]
  },
  {
    slug: "lendo-logcat-smali",
    section: "smali-basico",
    title: "Lendo Logcat para Entender o Smali",
    difficulty: "intermediario",
    subtitle: "Adb logcat, filtros e rastreamento de crashes",
    intro: "Imagine que você é um detetive tentando desvendar um crime em uma cidade barulhenta com milhões de habitantes. O Logcat é o sistema de câmeras de segurança e microfones da cidade (o Android) — ele grava absolutamente tudo que acontece, 24 horas por dia, sem parar. Absolutamente tudo o que o aplicativo faz — desde um simples clique em um botão até um erro fatal que derruba o app — deixa um rastro no Logcat. Quando você está editando um Smali e algo dá errado, o Logcat é o seu melhor amigo, seu mestre e seu oráculo. Se o aplicativo fechar sozinho (o famoso 'Force Close'), não entre em pânico e não saia mudando código aleatoriamente: o Logcat te dará um 'Stack Trace', que é basicamente o mapa do tesouro dizendo: 'O erro aconteceu no arquivo X.smali, dentro do método Y, na linha Z, porque você tentou fazer W com um registrador nulo'. No Brasil, temos o hábito de dizer que 'quem não deve não teme'; o app 'deve' explicações ao sistema operacional, e o Logcat as entrega de bandeja para quem souber ler. Aprender a filtrar esse mar de informações com o comando `adb logcat` é essencial para não se afogar em milhares de linhas irrelevantes. Você pode focar apenas nos erros do seu app específico (filtrando pelo package name), ignorando as notificações chatas do sistema, os logs do Wi-Fi, do Bluetooth e de outros 200 processos que rodam em paralelo. Com os filtros certos, você descobre exatamente qual instrução Smali você escreveu errado, qual registrador você esqueceu de declarar no `.locals`, ou qual método você chamou com os parâmetros na ordem trocada. Sem o Logcat, você está voando às cegas num avião sem instrumentos; com ele, você tem visão de raio-X sobre cada milissegundo da execução do código.",
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
      },
      {
        lang: "bash",
        code: "# 7. Filtrando log por PID do app específico\nPID=$(adb shell pidof com.exemplo.app)\nadb logcat --pid=$PID\n# Mostra apenas logs do processo do seu app"
      },
      {
        lang: "bash",
        code: "# 8. Buscando crashes recentes no logcat\nadb logcat -d | grep -A 20 'FATAL EXCEPTION'\n# Mostra o stack trace completo do último crash"
      },
      {
        lang: "bash",
        code: "# 9. Monitorando em tempo real com cores\nadb logcat -v color *:W\n# Mostra apenas Warnings e Errors com destaque colorido"
      },
      {
        lang: "bash",
        code: "# 10. Exportando log formatado para análise\nadb logcat -d -v threadtime > crash_$(date +%Y%m%d_%H%M%S).log\n# Salva com timestamp no nome para organização"
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
      "Monitorar o Logcat durante a inicialização do app ajuda a identificar proteções anti-tamper.",
      "O nível E (Error) no Logcat indica crashes e exceções não tratadas.",
      "VerifyError significa que o Smali tem erro de sintaxe ou tipos incompatíveis.",
      "NullPointerException indica que você usou um registrador que contém null.",
      "ClassNotFoundException significa que uma classe referenciada não existe no APK.",
      "O filtro -s TAG mostra apenas logs com a tag específica, ignorando todo o resto."
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
      },
      {
        type: "success",
        content: "Se você encontra 'Caused by:' no logcat e identifica a classe/método, está debugando como profissional."
      },
      {
        type: "danger",
        content: "Logs excessivos em loops podem gerar gigabytes de dados e travar o dispositivo."
      }
    ]
  },
  {
    slug: "depurando-smali",
    section: "smali-basico",
    title: "Adicionando Logs no Smali para Debug",
    difficulty: "intermediario",
    subtitle: "Injeção de código, Log.d e técnica de bisect",
    intro: "Sabe quando você perde a chave de casa no escuro e precisa de uma lanterna para iluminar o caminho? Injetar logs no Smali é exatamente isso: você está colocando 'lanternas' estratégicas dentro do código para ver o que está acontecendo em tempo real, iluminando os cantos escuros que nenhuma ferramenta automática consegue alcançar. Como não temos o código fonte original para usar um depurador visual moderno com breakpoints bonitinhos, nós fazemos a 'depuração de guerrilha' — o método artesanal que funciona em qualquer situação. Se você quer saber o que está escrito no registrador `v0` antes dele ser enviado para o servidor, você injeta uma chamada para a classe `android.util.Log`. Isso fará com que o valor de `v0` apareça magicamente no seu Logcat, como se o app estivesse confessando seus segredos para você. É uma técnica poderosa e versátil: você pode ver senhas em texto plano, tokens de API, URLs ocultas, ou simplesmente confirmar se o código passou por um determinado `IF` ou tomou o caminho alternativo. No Brasil, somos mestres em improvisação e gambiarra criativa, e a injeção de logs é o ápice disso na engenharia reversa — é simples, é eficaz e não precisa de nenhuma ferramenta cara ou setup complicado. Outra técnica vital que todo modder precisa dominar é o 'Bisect' (busca binária de bugs): se o app está crashando e você não sabe onde exatamente o problema está num método com 200 linhas, você coloca um log no meio. Se o log aparecer no Logcat, o erro está depois dele; se não aparecer, o erro está antes. Assim, você vai fechando o cerco pela metade a cada teste até encontrar o vilão em poucas tentativas. É um trabalho de paciência e método científico, mas que entrega resultados precisos que nenhuma ferramenta automática de análise estática conseguiria.",
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
      },
      {
        lang: "smali",
        code: "# 7. Logando um boolean (convertendo para String)\ninvoke-static {v0}, Ljava/lang/Boolean;->toString(Z)Ljava/lang/String;\nmove-result-object v1\ninvoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I"
      },
      {
        lang: "smali",
        code: "# 8. Logando o nome da classe atual\ninvoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;\nmove-result-object v1\ninvoke-virtual {v1}, Ljava/lang/Class;->getName()Ljava/lang/String;\nmove-result-object v1\ninvoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I"
      },
      {
        lang: "smali",
        code: "# 9. Marcando pontos de passagem com logs numerados\nconst-string v0, \"DEBUG\"\nconst-string v1, \">>> CHECKPOINT 1 <<<\"\ninvoke-static {v0, v1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I"
      },
      {
        lang: "smali",
        code: "# 10. Logando o conteúdo de um Bundle (Intent extras)\ninvoke-virtual {p1}, Landroid/os/Bundle;->toString()Ljava/lang/String;\nmove-result-object v1\ninvoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I"
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
      "Logs podem ser injetados em qualquer lugar, inclusive dentro de loops ou condicionais.",
      "Sempre aumente .locals antes de adicionar registradores para seus logs.",
      "Use tags únicas (MEU_MOD_v2) para filtrar facilmente no logcat.",
      "Log.e() aparece em vermelho no logcat — mais fácil de encontrar visualmente.",
      "Remova TODOS os logs antes de distribuir o mod final (performance + segurança).",
      "A técnica de bisect reduz o espaço de busca pela metade a cada iteração."
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
      },
      {
        type: "success",
        content: "Se seu log aparece no logcat com a tag correta, a injeção de código está funcionando!"
      },
      {
        type: "danger",
        content: "Deixar logs com Log.d em produção pode vazar senhas e tokens para qualquer app que leia o logcat."
      }
    ]
  }
];
