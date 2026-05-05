import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "editando-strings-xml",
    section: "editando-recursos",
    title: "Editando Strings e Textos",
    difficulty: "intermediario",
    subtitle: "Localize e modifique qualquer texto da interface",
    intro: `No ecossistema Android, a separação entre código e interface não é apenas uma boa prática, mas uma arquitetura fundamental. O arquivo 'strings.xml', localizado em 'res/values/', atua como o grande dicionário do aplicativo. Imagine que você está em um restaurante brasileiro: o menu (layout) diz que existe um item chamado "Prato da Casa" (ID da string), mas o conteúdo real desse prato pode variar se você estiver em Minas Gerais ou na Bahia. No Android, o código Smali referencia apenas um ID numérico (ex: 0x7f0b0001), que o sistema traduz para o texto final consultando o arquivo XML correspondente ao idioma do usuário.

Essa arquitetura permite que desenvolvedores traduzam apps inteiros sem tocar em uma única linha de código Java/Kotlin. Historicamente, isso facilitou a globalização de aplicativos, permitindo que comunidades locais "abrasileirassem" termos técnicos ou gírias de nicho. Para o modder, o 'strings.xml' é o ponto de entrada mais comum: é aqui que removemos anúncios que se escondem em labels, alteramos mensagens de erro frustrantes para algo mais divertido ou traduzimos aquele app exclusivo que só existe em mandarim ou russo. Ao editar este arquivo, você não está apenas mudando letras; você está alterando a percepção do usuário e a própria identidade do software. É a forma mais segura de modificação, pois o risco de quebrar a lógica binária do app é quase nulo, desde que você respeite a sintaxe XML rigorosa e as referências cruzadas que o sistema utiliza.`,
    codes: [
      {
        lang: "xml",
        code: "<!-- Caminho: res/values/strings.xml -->\n<resources>\n    <!-- Define uma string com nome único 'welcome_msg' -->\n    <string name=\"welcome_msg\">Bem-vindo ao Mod!</string>\n    <!-- Uso de caracteres de escape para símbolos especiais -->\n    <string name=\"terms\">Termos &amp; Condições</string>\n</resources>"
      },
      {
        lang: "xml",
        code: "<!-- Tradução para Português: res/values-pt/strings.xml -->\n<resources>\n    <!-- O Android prioriza esta pasta se o sistema estiver em PT -->\n    <string name=\"login\">Entrar</string>\n    <string name=\"logout\">Sair</string>\n</resources>"
      },
      {
        lang: "smali",
        code: "# Como o Smali referencia a string (exemplo didático)\n# O valor 0x7f100001 aponta para o ID no resources.arsc\nconst-string v0, 0x7f100001\n\n# Chama o método que busca o texto pelo ID\ninvoke-virtual {p0, v0}, Landroid/content/Context;->getString(I)Ljava/lang/String;"
      },
      {
        lang: "xml",
        code: "<!-- Substituindo um link ou URL hardcoded -->\n<string name=\"api_url\">https://api.meumod.com.br</string>\n<string name=\"support_email\">ajuda@exemplo.com</string>"
      },
      {
        lang: "xml",
        code: "<!-- Strings com parâmetros de formatação (%s, %d) -->\n<string name=\"user_score\">Sua pontuação é: %1$d pontos</string>\n<!-- %1 indica a ordem do parâmetro, $d indica que é um número -->"
      },
      {
        lang: "xml",
        code: "<!-- Desativando uma string de anúncio mudando seu valor -->\n<string name=\"ad_unit_id\">unused</string>\n<string name=\"banner_description\"> </string>"
      }
    ],
    points: [
      "O strings.xml é o repositório central de todos os textos estáticos do app.",
      "As referências no código Smali são feitas via IDs hexadecimais mapeados no public.xml.",
      "Pastas como values-pt, values-en-rUS permitem regionalização automática.",
      "Caracteres especiais como '&', '<', '>' e '\"' exigem entidades XML (&amp;, &lt;).",
      "Mudar o atributo 'name' quebrará o app, pois o código não achará mais o ID.",
      "Strings com %1$s indicam variáveis que o app insere dinamicamente em tempo de execução.",
      "O Android usa o 'fallback' para a pasta 'values/' padrão se a tradução não existir.",
      "Emojis podem ser inseridos diretamente ou via códigos Unicode.",
      "Traduções incompletas podem causar interface 'misturada' (metade inglês, metade português).",
      "Muitos apps modernos usam Strings dinâmicas vindas do servidor, que não estão no XML."
    ],
    alerts: [
      {
        type: "warning",
        content: "Nunca apague uma tag <string> inteira se ela for referenciada no Smali; isso causará crash imediato por 'Resource Not Found'."
      },
      {
        type: "tip",
        content: "Use ferramentas de tradução em lote (como o script de tradução do MT Manager) para agilizar o processo em apps grandes."
      },
      {
        type: "danger",
        content: "Cuidado com o caractere de aspas (\"). Se o texto contiver aspas, use a barra invertida (\\\") para escapar ou use aspas simples envolta."
      },
      {
        type: "info",
        content: "Algumas strings críticas de segurança (chaves de API) podem estar aqui. Alterá-las pode impedir o app de se conectar ao servidor."
      }
    ]
  },
  {
    slug: "adicionando-permissoes",
    section: "editando-recursos",
    title: "Adicionando Permissões",
    difficulty: "intermediario",
    subtitle: "Dê novos privilégios ao seu aplicativo no sistema",
    intro: `No Android, a segurança é baseada no princípio do "menor privilégio possível". Cada aplicativo roda em sua própria "caixa de areia" (sandbox) e não pode tocar em nada fora dela a menos que peça permissão explicitamente. O arquivo 'AndroidManifest.xml' funciona como a declaração de direitos do aplicativo. Adicionar uma permissão é como emitir um alvará: você está autorizando o sistema a liberar o acesso a recursos sensíveis como a câmera, o microfone ou o sistema de arquivos.

Historicamente, o sistema de permissões evoluiu drasticamente. No Android antigo, você aceitava tudo na instalação. Hoje, temos as "Runtime Permissions" (permissões em tempo de execução), onde o usuário confirma o acesso quando o app realmente vai usar o recurso. Para um modder, adicionar permissões é vital quando inserimos novos códigos Smali que realizam tarefas extras, como salvar um log de depuração no cartão SD ou enviar dados para um servidor de monitoramento. Sem a tag correspondente no manifesto, o sistema operacional negará o acesso sumariamente, resultando em uma 'SecurityException'. É o equivalente a tentar entrar em um prédio do governo sem o crachá correto: o segurança (Kernel do Android) vai te barrar antes mesmo de você chegar na porta.`,
    codes: [
      {
        lang: "xml",
        code: "<!-- Localização: AndroidManifest.xml antes da tag <application> -->\n<uses-permission android:name=\"android.permission.INTERNET\" />\n<!-- Essencial para qualquer comunicação de rede -->"
      },
      {
        lang: "xml",
        code: "<!-- Permissão para ler o armazenamento (Android 10 e inferior) -->\n<uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\" />\n<!-- Para Android 13+, usamos permissões granulares de mídia -->"
      },
      {
        lang: "xml",
        code: "<!-- Adicionando acesso à câmera para novos módulos de mod -->\n<uses-permission android:name=\"android.permission.CAMERA\" />\n<uses-feature android:name=\"android.hardware.camera\" android:required=\"false\" />"
      },
      {
        lang: "xml",
        code: "<!-- Permissão de instalação de outros pacotes (perigosa!) -->\n<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\" />"
      },
      {
        lang: "xml",
        code: "<!-- Acesso à localização fina (GPS) -->\n<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />"
      },
      {
        lang: "xml",
        code: "<!-- Permissões de 'Assinatura' ou Sistema (só funcionam se o app for do sistema) -->\n<uses-permission android:name=\"android.permission.BATTERY_STATS\" />"
      }
    ],
    points: [
      "Permissões devem ser declaradas fora da tag <application> no manifesto.",
      "A tag correta é <uses-permission>, com o atributo 'android:name'.",
      "Permissões normais (INTERNET, BLUETOOTH) são concedidas automaticamente.",
      "Permissões perigosas (CAMERA, STORAGE, LOCATION) exigem popup para o usuário.",
      "Adicionar no manifesto é necessário, mas em versões novas do Android, o código Smali também deve solicitar o popup.",
      "O Android usa nomes de pacotes específicos para permissões (ex: android.permission.X).",
      "Apps de sistema têm acesso a permissões privilegiadas que apps de usuário não têm.",
      "Se você adicionar um novo serviço ou receptor no manifesto, ele pode precisar de permissões próprias.",
      "Algumas permissões exigem a declaração de <uses-feature> para indicar requisitos de hardware.",
      "O Google Play rejeita apps com permissões excessivas ou desnecessárias."
    ],
    alerts: [
      {
        type: "info",
        content: "A partir do Android 6.0, apenas declarar no manifesto não basta para permissões sensíveis; o usuário precisa autorizar em tempo de execução."
      },
      {
        type: "warning",
        content: "Adicionar permissões demais pode assustar o usuário ou fazer com que o antivírus do Android (Play Protect) marque seu mod como suspeito."
      },
      {
        type: "danger",
        content: "Erro de 'SecurityException' no Logcat é o sinal claro de que você esqueceu de adicionar uma permissão necessária."
      },
      {
        type: "tip",
        content: "Se estiver em dúvida sobre qual permissão adicionar, consulte a documentação oficial da API Android que você está tentando chamar no Smali."
      }
    ]
  },
  {
    slug: "removendo-permissoes",
    section: "editando-recursos",
    title: "Removendo Permissões",
    difficulty: "intermediario",
    subtitle: "Aumente sua privacidade cortando acessos desnecessários",
    intro: `Se adicionar permissões é dar poder, removê-las é exercer o controle. Vivemos em uma era onde aplicativos de lanterna pedem acesso aos seus contatos e aplicativos de calculadora querem saber sua localização GPS precisa. Por que isso acontece? Dados são o novo petróleo, e muitos desenvolvedores (especialmente de apps gratuitos ou 'adware') inserem SDKs de rastreamento que exigem essas permissões para coletar e vender informações. 

Remover permissões no ApkTool é um ato de soberania digital. É como dizer: "Eu quero usar sua funcionalidade, mas não aceito seus termos de espionagem". No entanto, essa tarefa exige precisão cirúrgica. Ao contrário de adicionar, onde o pior caso é o recurso não funcionar, remover uma permissão que o app considera vital pode causar o temido 'Force Close' (FC). O app tenta inicializar um módulo (como o Google Maps interno) e, ao descobrir que não tem permissão de localização, entra em pânico e fecha. O segredo do modder experiente é identificar quais permissões são "cosméticas" ou puramente para rastreamento (como 'READ_PHONE_STATE' para pegar o IMEI) e quais são funcionais.`,
    codes: [
      {
        lang: "xml",
        code: "<!-- Removendo permissão de contatos (comum em apps xeretas) -->\n<!-- <uses-permission android:name=\"android.permission.READ_CONTACTS\" /> -->\n<!-- Comentar é melhor que apagar para testes rápidos -->"
      },
      {
        lang: "xml",
        code: "<!-- Removendo acesso ao ID único do hardware (IMEI/Serial) -->\n<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" tools:node=\"remove\" />\n<!-- O atributo tools:node='remove' ajuda em merges complexos -->"
      },
      {
        lang: "xml",
        code: "<!-- Cortando a internet de um app que deveria ser offline -->\n<!-- <uses-permission android:name=\"android.permission.INTERNET\" /> -->"
      },
      {
        lang: "xml",
        code: "<!-- Removendo permissões de boot (impede app de iniciar sozinho) -->\n<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />"
      },
      {
        lang: "xml",
        code: "<!-- Removendo permissão de gravação de áudio -->\n<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />"
      },
      {
        lang: "xml",
        code: "<!-- Removendo acesso a contas do Google (Identity) -->\n<uses-permission android:name=\"android.permission.GET_ACCOUNTS\" />"
      }
    ],
    points: [
      "A remoção de permissões é a forma mais eficaz de bloquear rastreadores (trackers).",
      "Sempre comece comentando a linha em vez de apagá-la definitivamente.",
      "Permissões de 'Localização' e 'Contatos' são as mais abusadas por redes de anúncios.",
      "Remover a permissão de INTERNET transforma um app em puramente offline.",
      "Alguns apps fazem 'checks' no código para ver se a permissão ainda existe no manifesto.",
      "Apps que dependem de anúncios podem travar se a permissão de rede for removida.",
      "O erro 'Permission Denied' no Logcat ajuda a identificar o que quebrou.",
      "Para manter a funcionalidade e a privacidade, às vezes é melhor manter a permissão mas 'mockar' (fingir) os dados no Smali.",
      "Remover permissões de faturamento (BILLING) pode desativar compras in-app.",
      "Sempre teste as funções principais do app após cada remoção."
    ],
    alerts: [
      {
        type: "danger",
        content: "Remover a permissão de INTERNET em um app que carrega dados da nuvem fará com que ele mostre apenas uma tela em branco ou crash."
      },
      {
        type: "tip",
        content: "Se o app fechar ao remover uma permissão, procure no Smali por 'checkSelfPermission' e force o resultado para '0' (PERMISSION_GRANTED)."
      },
      {
        type: "warning",
        content: "Algumas permissões são implícitas em versões muito antigas do Android; removê-las pode não ter efeito se o 'targetSdkVersion' for baixo."
      },
      {
        type: "info",
        content: "Apps modernos muitas vezes lidam graciosamente com a falta de permissão, exibindo uma mensagem amigável em vez de crashar."
      }
    ]
  },
  {
    slug: "editando-layouts-xml",
    section: "editando-recursos",
    title: "Editando Layouts XML",
    difficulty: "intermediario",
    subtitle: "Redesenhe a interface e esconda elementos indesejados",
    intro: `Se o Smali é o cérebro e o Manifesto é a alma, os Layouts XML são o corpo do aplicativo Android. Localizados em 'res/layout/', esses arquivos definem a hierarquia visual: onde cada botão senta, qual o tamanho de uma imagem e como o texto deve se comportar em diferentes tamanhos de tela. No Android, usamos uma linguagem declarativa para isso. Em vez de dizer "desenhe um pixel aqui", dizemos "coloque um botão que preencha a largura do pai".

Existem diferentes tipos de 'containers' (Layouts). O 'LinearLayout' empilha coisas como peças de dominó, enquanto o 'ConstraintLayout' (mais moderno e complexo) permite amarrar elementos uns aos outros com "elásticos" virtuais. Para um modder, dominar os layouts é o segredo para remover banners de propaganda sem deixar um buraco vazio na tela, ou para habilitar botões que o desenvolvedor deixou "escondidos" na versão gratuita. Ao mudar a propriedade 'visibility' de um elemento para 'gone', você não apenas o torna invisível; você diz ao sistema para não reservar espaço para ele, fazendo com que o restante da interface se ajuste automaticamente, como se aquele anúncio nunca tivesse existido.`,
    codes: [
      {
        lang: "xml",
        code: "<!-- Escondendo um elemento completamente (não ocupa espaço) -->\n<View \n    android:id=\"@id/ad_container\" \n    android:layout_width=\"match_parent\" \n    android:layout_height=\"wrap_content\" \n    android:visibility=\"gone\" /> <!-- O segredo está aqui -->"
      },
      {
        lang: "xml",
        code: "<!-- Tornando invisível mas mantendo o espaço ocupado -->\n<Button \n    android:id=\"@id/secret_button\" \n    android:visibility=\"invisible\" />"
      },
      {
        lang: "xml",
        code: "<!-- Mudando a cor de fundo de um layout -->\n<RelativeLayout \n    android:background=\"#FF000000\" \n    ...> <!-- Fundo Preto Sólido -->"
      },
      {
        lang: "xml",
        code: "<!-- Alterando texto fixo (hardcoded) diretamente no layout -->\n<TextView \n    android:text=\"Modificado por Mim\" \n    android:textSize=\"20sp\" \n    android:textColor=\"#FF00FF00\" />"
      },
      {
        lang: "xml",
        code: "<!-- Mudando a orientação de uma lista de botões -->\n<LinearLayout \n    android:orientation=\"horizontal\" \n    ...>"
      },
      {
        lang: "xml",
        code: "<!-- Ajustando margens para consertar layouts quebrados -->\n<ImageView \n    android:layout_marginTop=\"16dp\" \n    android:layout_marginEnd=\"8dp\" />"
      }
    ],
    points: [
      "Arquivos em res/layout/ definem a estrutura visual (UI) do app.",
      "A propriedade 'android:visibility=\"gone\"' remove o elemento e ajusta o layout.",
      "A propriedade 'invisible' apenas esconde o item, mas mantém o 'buraco' na tela.",
      "ConstraintLayout usa 'constraints' para posicionar elementos em relação a outros.",
      "IDs de visualização (@id/nome) são usados pelo código Smali para manipular a UI via findViewById.",
      "Unidades 'dp' (density-independent pixels) garantem que o tamanho seja o mesmo em telas diferentes.",
      "Unidades 'sp' (scale-independent pixels) devem ser usadas apenas para textos.",
      "Layouts podem ter variações em pastas como layout-land (horizontal) ou layout-v24 (Android 7+).",
      "É possível injetar novos elementos (como um TextView de crédito) diretamente no XML.",
      "Mudar o ID de um elemento no XML sem atualizar o Smali causará crash."
    ],
    alerts: [
      {
        type: "tip",
        content: "Para identificar qual arquivo de layout corresponde a uma tela, procure por 'setContentView(I)V' no código Smali da Activity."
      },
      {
        type: "warning",
        content: "Evite deletar tags XML de elementos que possuem ID (@id/...), pois o código Smali provavelmente tentará acessá-los, gerando um erro de NullPointerException."
      },
      {
        type: "info",
        content: "Alguns apps modernos constroem a interface via código (Jetpack Compose), então você não encontrará arquivos XML na pasta layout."
      },
      {
        type: "success",
        content: "Remover anúncios via 'visibility=gone' nos layouts é muito mais limpo do que tentar quebrar a lógica de carregamento no Smali."
      }
    ]
  },
  {
    slug: "trocando-icones",
    section: "editando-recursos",
    title: "Trocando Ícones e Imagens",
    difficulty: "intermediario",
    subtitle: "Personalize a identidade visual e o 'branding' do aplicativo",
    intro: `O ícone de um aplicativo é seu cartão de visitas, o rosto que ele apresenta ao mundo no meio de uma multidão na gaveta de apps. No Android, gerenciar imagens não é tão simples quanto jogar um arquivo .jpg em uma pasta. O sistema lida com uma diversidade imensa de telas, desde relógios inteligentes até tablets 4K. Para resolver isso, usamos as pastas 'mipmap' e 'drawable', divididas por densidade (hdpi, xhdpi, xxhdpi, xxxhdpi).

Imagine que você está imprimindo um logotipo: para um cartão de visitas (baixa densidade), você precisa de uma imagem pequena; para um outdoor (alta densidade), você precisa de um arquivo gigante com muita definição. O Android faz exatamente isso: ele escolhe a pasta que melhor se adapta à tela do usuário. Para trocar um ícone de forma profissional, você deve substituir as imagens em TODAS essas pastas, mantendo o nome exato. Nos últimos anos, o Google introduziu os "Adaptive Icons", que dividem o ícone em camadas de fundo (background) e frente (foreground), permitindo que o sistema aplique efeitos de máscara (círculo, quadrado, etc). Dominar essa substituição é o que diferencia um mod "gambiarra" de um mod que parece ter sido feito oficialmente pela empresa.`,
    codes: [
      {
        lang: "bash",
        code: "# Estrutura típica de ícones (Launcher)\nres/mipmap-mdpi/ic_launcher.png    # 48x48\nres/mipmap-hdpi/ic_launcher.png    # 72x72\nres/mipmap-xhdpi/ic_launcher.png   # 96x96\nres/mipmap-xxhdpi/ic_launcher.png  # 144x144"
      },
      {
        lang: "xml",
        code: "<!-- Definindo qual ícone o app usa no AndroidManifest.xml -->\n<application\n    android:icon=\"@mipmap/ic_launcher\"\n    android:roundIcon=\"@mipmap/ic_launcher_round\"\n    ...>"
      },
      {
        lang: "xml",
        code: "<!-- Exemplo de Adaptive Icon (res/mipmap-anydpi-v26/ic_launcher.xml) -->\n<adaptive-icon xmlns:android=\"http://schemas.android.com/apk/res/android\">\n    <background android:drawable=\"@color/ic_launcher_background\"/>\n    <foreground android:drawable=\"@mipmap/ic_launcher_foreground\"/>\n</adaptive-icon>"
      },
      {
        lang: "bash",
        code: "# Comando rápido para substituir ícones via terminal\nfor f in res/mipmap-*; do cp meu_novo_icone.png \"$f/ic_launcher.png\"; done"
      },
      {
        lang: "xml",
        code: "<!-- Substituindo uma cor sólida do ícone (res/values/colors.xml) -->\n<color name=\"ic_launcher_background\">#FF00FF</color>"
      },
      {
        lang: "xml",
        code: "<!-- Drawable em formato Vetorial (SVG convertido para XML) -->\n<vector android:height=\"24dp\" android:width=\"24dp\" ...>\n    <path android:fillColor=\"#FF0000\" android:pathData=\"...\" />\n</vector>"
      }
    ],
    points: [
      "As pastas 'mipmap' são otimizadas para o launcher (gaveta de apps).",
      "As pastas 'drawable' guardam imagens usadas dentro da interface.",
      "DPI significa Dots Per Inch; define a resolução baseada na densidade física da tela.",
      "Ícones devem ser PNG transparentes ou WebP para melhor compressão.",
      "O nome do arquivo (ex: ic_launcher) deve ser mantido rigorosamente.",
      "Adaptive Icons exigem duas camadas separadas a partir do Android 8.0.",
      "Imagens vetoriais (XML) são preferíveis pois não perdem qualidade ao aumentar.",
      "Formatos modernos como WebP reduzem drasticamente o tamanho final do APK.",
      "Se você esquecer de trocar em uma pasta (ex: xxxhdpi), o ícone original aparecerá em celulares caros.",
      "O arquivo ic_launcher_round é usado por launchers que preferem ícones circulares."
    ],
    alerts: [
      {
        type: "info",
        content: "Para criar ícones perfeitos, use o 'Android Studio Asset Studio', que gera todos os tamanhos automaticamente a partir de um único arquivo."
      },
      {
        type: "warning",
        content: "Não tente usar arquivos muito grandes (4K) em pastas de baixa densidade, pois isso pode causar lentidão ou erro de memória no celular do usuário."
      },
      {
        type: "tip",
        content: "Se o ícone não mudar após a instalação, tente limpar o cache do Launcher do seu Android."
      },
      {
        type: "danger",
        content: "Nunca apague o arquivo original sem colocar o substituto com o mesmo nome; o build do ApkTool falhará se faltar um recurso referenciado."
      }
    ]
  },
  {
    slug: "modificando-manifest-debuggable",
    section: "editando-recursos",
    title: "Ativando o Modo Debuggable",
    difficulty: "intermediario",
    subtitle: "Habilite a inspeção profunda e o acesso ao ADB",
    intro: `No mundo do desenvolvimento Android, existe uma linha invisível que separa o "Usuário" do "Desenvolvedor". Essa linha é definida pela flag 'android:debuggable' no Manifesto. Por padrão, todos os aplicativos lançados na Google Play têm essa flag como 'false'. Isso desativa uma série de recursos de diagnóstico para proteger o código e os dados do usuário. Quando essa flag é falsa, o ADB (Android Debug Bridge) não consegue olhar dentro da pasta de dados do app e ferramentas de inspeção de layout são bloqueadas.

Ativar o modo debuggable=true é como acender as luzes em um teatro escuro. De repente, você consegue ver os bastidores. Você pode usar o 'Layout Inspector' do Android Studio para ver a hierarquia de visualizações em tempo real, pode extrair o banco de dados SQLite sem precisar de ROOT (através do comando 'run-as') e pode até anexar um depurador de código para seguir a execução linha por linha. Historicamente, essa era a primeira porta que hackers e pesquisadores de segurança tentavam abrir. Para o modder, é uma ferramenta de engenharia reversa dinâmica poderosa: em vez de apenas ler o código estático no ApkTool, você vê o app vivendo e respirando, facilitando a identificação de quais classes Smali são responsáveis por cada ação na tela.`,
    codes: [
      {
        lang: "xml",
        code: "<!-- Localização: AndroidManifest.xml -->\n<application \n    android:debuggable=\"true\" \n    ...>"
      },
      {
        lang: "bash",
        code: "# Após instalar um app debuggable, você pode acessar seus dados privados:\nadb shell\nrun-as com.pacote.do.app\nls -l /data/data/com.pacote.do.app/databases/"
      },
      {
        lang: "bash",
        code: "# Copiando banco de dados privado para o PC sem ROOT\nadb exec-out run-as com.pacote.do.app cat databases/users.db > local.db"
      },
      {
        lang: "xml",
        code: "<!-- O ApkTool também permite ativar isso via flag no build -->\n<!-- apktool b -d pasta_do_app -->"
      },
      {
        lang: "smali",
        code: "# O código pode verificar se está em modo debug:\ninvoke-static {}, Landroid/os/Debug;->isDebuggerConnected()Z\nmove-result v0\nif-nez v0, :cond_debug"
      },
      {
        lang: "bash",
        code: "# Listando apenas processos que permitem depuração\nadb jdwp"
      }
    ],
    points: [
      "A flag 'debuggable=true' permite o uso do comando 'run-as' no ADB.",
      "Facilita o acesso a arquivos em /data/data/ que normalmente são protegidos.",
      "Habilita a inspeção de UI em tempo real via Android Studio.",
      "Permite anexar o depurador JDWP (Java Debug Wire Protocol).",
      "Muitas bibliotecas de segurança (como detecção de ROOT) ficam mais agressivas em modo debug.",
      "É essencial para extrair tokens de autenticação ou preferências (SharedPreferences) para análise.",
      "Não requer ROOT no dispositivo para funcionar (apenas no app).",
      "Pode causar lentidão leve no aplicativo devido à sobrecarga de depuração.",
      "Alguns apps verificam essa flag no Manifesto e se recusam a abrir (Anti-Mod).",
      "A flag deve ser inserida dentro da tag <application>."
    ],
    alerts: [
      {
        type: "danger",
        content: "NUNCA distribua um mod final com debuggable=true. Isso permite que qualquer outro app no celular do usuário roube dados privados do seu mod."
      },
      {
        type: "info",
        content: "O comando 'run-as' só funciona se o APK for assinado com a mesma chave do sistema ou se for debuggable."
      },
      {
        type: "warning",
        content: "Algumas ferramentas de ofuscação removem informações de linha de código, o que limita a utilidade do modo debug mesmo que ativo."
      },
      {
        type: "tip",
        content: "Use o modo debuggable em conjunto com o Logcat para filtrar mensagens de erro que normalmente seriam silenciadas."
      }
    ]
  },
  {
    slug: "network-security-config",
    section: "editando-recursos",
    title: "Burlando SSL com Network Security Config",
    difficulty: "avancado",
    subtitle: "Intercepte tráfego HTTPS e analise APIs privadas",
    intro: `No passado, interceptar o tráfego de um aplicativo era tão simples quanto configurar um proxy no celular. O Android confiava em qualquer certificado que o usuário instalasse. No entanto, com a chegada do Android 7.0 (Nougat), o Google mudou as regras do jogo por segurança: os aplicativos passaram a ignorar, por padrão, certificados instalados pelo usuário (User Certificates), confiando apenas nos certificados de sistema (System CA). Isso matou ferramentas como o Burp Suite ou Charles Proxy para análise de apps modernos, a menos que o dispositivo tivesse ROOT.

A "Network Security Config" (Configuração de Segurança de Rede) é a chave para reabrir essa porta de forma elegante e sem ROOT. Trata-se de um arquivo XML que define as políticas de confiança do app. Ao criar este arquivo e referenciá-lo no Manifesto, podemos instruir o aplicativo a confiar explicitamente nos nossos certificados de proxy. Isso é fundamental para a engenharia reversa de APIs: permite que vejamos exatamente quais dados (JSON, XML, imagens) o app está enviando e recebendo. É o equivalente digital a colocar um grampo telefônico em uma linha criptografada; você está autorizando o app a aceitar sua "escuta" como se fosse uma autoridade de confiança legítima.`,
    codes: [
      {
        lang: "xml",
        code: "<!-- 1. Criar o arquivo: res/xml/network_security_config.xml -->\n<network-security-config>\n    <base-config>\n        <trust-anchors>\n            <certificates src=\"user\" /> <!-- Aqui o app passa a confiar no Burp/Charles -->\n            <certificates src=\"system\" />\n        </trust-anchors>\n    </base-config>\n</network-security-config>"
      },
      {
        lang: "xml",
        code: "<!-- 2. Referenciar no AndroidManifest.xml -->\n<application\n    android:networkSecurityConfig=\"@xml/network_security_config\"\n    ...>"
      },
      {
        lang: "xml",
        code: "<!-- Permitir tráfego HTTP comum (Cleartext) para certos domínios -->\n<domain-config cleartextTrafficPermitted=\"true\">\n    <domain includeSubdomains=\"true\">meu-servidor-teste.com</domain>\n</domain-config>"
      },
      {
        lang: "xml",
        code: "<!-- Exemplo de Pinning (forçar certificado específico) - CUIDADO AO MODIFICAR -->\n<pin-set expiration=\"2025-01-01\">\n    <pin digest=\"SHA-256\">base64_do_hash_aqui</pin>\n</pin-set>"
      },
      {
        lang: "bash",
        code: "# Verificando se o arquivo XML existe após a descompilação\nls app-decompilado/res/xml/network_security_config.xml"
      },
      {
        lang: "xml",
        code: "<!-- Configuração para depuração: confia em certificados apenas em modo debug -->\n<debug-overrides>\n    <trust-anchors>\n        <certificates src=\"user\" />\n    </trust-anchors>\n</debug-overrides>"
      }
    ],
    points: [
      "Android 7.0+ não confia em certificados de usuário por padrão.",
      "Network Security Config permite sobrescrever essa política globalmente no app.",
      "A tag <certificates src=\"user\" /> é a mais importante para modders.",
      "O arquivo deve estar obrigatoriamente na pasta res/xml/.",
      "A flag 'android:networkSecurityConfig' deve estar na tag <application> do Manifesto.",
      "Permite analisar tráfego de apps que usam HTTPS/SSL sem precisar de ROOT.",
      "Útil para descobrir parâmetros de API, chaves de cabeçalho (headers) e URLs ocultas.",
      "Não resolve problemas de 'SSL Pinning' (certificados fixados no código Smali/Nativo).",
      "Você pode permitir tráfego HTTP (sem SSL) para depuração em redes locais.",
      "É a base para usar ferramentas como Burp Suite, Charles Proxy e mitmproxy."
    ],
    alerts: [
      {
        type: "warning",
        content: "Se o app usar 'SSL Pinning' via código (OkHttp, Cronet), apenas o Network Security Config NÃO será suficiente; você precisará de scripts Frida ou patches no Smali."
      },
      {
        type: "danger",
        content: "Habilitar 'cleartextTrafficPermitted=true' torna os dados do usuário vulneráveis a ataques em redes Wi-Fi públicas."
      },
      {
        type: "tip",
        content: "Se o app não possuir a pasta res/xml, você pode criá-la manualmente e adicionar o arquivo, desde que o registre no public.xml para o build não falhar."
      },
      {
        type: "info",
        content: "O Burp Suite exige que você exporte o certificado CA e o instale manualmente no Android nas configurações de segurança (Certificados de Usuário)."
      }
    ]
  }
];
