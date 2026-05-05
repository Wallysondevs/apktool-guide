import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "instalando-java",
    section: "instalacao",
    title: "Instalando o Java (JDK)",
    difficulty: "iniciante",
    subtitle: "O combustível do nosso motor",
    intro: "Imagine que você comprou uma batedeira ultra-moderna, mas percebe que a tomada dela é incompatível com tudo o que você tem em casa. O Java é como a energia elétrica e o padrão de tomadas para o ApkTool. O ApkTool foi escrito em Java, o que significa que ele não 'fala' diretamente com o hardware do seu Windows, Linux ou Mac; ele precisa de uma máquina virtual no meio do caminho para traduzir suas ordens. Mas atenção: não serve apenas o JRE (Java Runtime Environment), que é para quem apenas 'usa' programas. Nós, como analistas, precisamos do JDK (Java Development Kit), que contém as ferramentas de desenvolvimento e diagnóstico. Historicamente, o Java 8 era o padrão ouro para Android, mas hoje versões como 11, 17 e 21 são amplamente suportadas e até exigidas por ferramentas modernas como o Android Studio. No Brasil, onde a infraestrutura de TI varia muito, saber configurar o JAVA_HOME — que é basicamente dizer ao Windows 'o Java mora naquela pasta ali' — é o que separa quem consegue trabalhar de quem fica preso em erros de 'comando não encontrado'. Sem o Java corretamente instalado e configurado, seu laboratório de engenharia reversa nem sequer abrirá as portas. Vamos garantir que esse alicerce esteja firme para que possamos construir todo o resto sobre ele, evitando aquelas mensagens de erro vermelhas frustrantes que aparecem quando o sistema tenta invocar o Java e encontra o vazio.",
    codes: [
      {
        lang: "bash",
        code: "# No Ubuntu/Debian: atualizando e instalando o OpenJDK 17\nsudo apt update # Sincroniza a lista de pacotes dos servidores\nsudo apt install openjdk-17-jdk # Instala o Kit de Desenvolvimento Java completo"
      },
      {
        lang: "bash",
        code: "# No Windows (via PowerShell), verificando se já existe instalação\nGet-Command java # Busca o executável no caminho do sistema\n# Se não retornar nada, você precisa baixar o instalador no site da Oracle ou Adoptium."
      },
      {
        lang: "bash",
        code: "# Definindo o JAVA_HOME no Linux/macOS (temporário para teste)\nexport JAVA_HOME=/usr/lib/jvm/java-17-openjdk # Aponta para a pasta raiz do Java\n# Isso ajuda o sistema a saber onde encontrar as ferramentas extras do JDK."
      },
      {
        lang: "bash",
        code: "# Verificando se o compilador Java (javac) está acessível\njavac -version # O 'javac' é exclusivo do JDK; o JRE comum não o possui\n# Se este comando funcionar, você instalou o kit correto!"
      },
      {
        lang: "bash",
        code: "# Listando versões do Java instaladas no macOS\n/usr/libexec/java_home -V # Comando utilitário do Mac para gerenciar Javas\n# Útil para quem tem várias versões (8, 11, 17) no mesmo computador."
      },
      {
        lang: "bash",
        code: "# Testando se o motor está rodando suavemente\njava -XshowSettings:properties -version # Mostra configurações detalhadas do Java\n# Ajuda a diagnosticar problemas de memória ou caminhos de biblioteca."
      }
    ],
    points: [
      "JDK (Java Development Kit) é obrigatório; o JRE não é suficiente para nós.",
      "JAVA_HOME é a variável de ambiente que aponta para a instalação do Java.",
      "A versão 11 ou 17 é altamente recomendada para compatibilidade moderna.",
      "OpenJDK é a alternativa gratuita e de código aberto ao Java da Oracle.",
      "O instalador de 64 bits deve ser escolhido para sistemas operacionais modernos.",
      "Reiniciar o terminal após a instalação é vital para carregar as novas variáveis.",
      "Múltiplas versões do Java podem coexistir, mas o PATH define a padrão.",
      "O comando 'javac' confirma que você tem as ferramentas de desenvolvimento.",
      "Erros de 'Registry Key' no Windows indicam instalações antigas mal removidas.",
      "No Android, o Java é a base de quase todas as ferramentas de build."
    ],
    alerts: [
      {
        type: "danger",
        content: "Não use versões 'JRE' baixadas de sites de jogos antigos; elas não servem para o ApkTool."
      },
      {
        type: "tip",
        content: "O site 'adoptium.net' oferece instaladores limpos, seguros e gratuitos para todos os sistemas."
      },
      {
        type: "info",
        content: "Se o seu computador é da empresa, você pode precisar de privilégios de Administrador para editar o PATH."
      }
    ]
  },
  {
    slug: "verificando-java",
    section: "instalacao",
    title: "Verificando o Java",
    difficulty: "iniciante",
    subtitle: "Será que está tudo pronto?",
    intro: "Depois de instalar o Java, não basta apenas acreditar que o instalador fez o seu trabalho; precisamos interrogar o sistema. É como testar se a luz da sala acende após você trocar a fiação. O computador possui um lugar especial chamado 'Variáveis de Ambiente', que funciona como uma lista de contatos rápida. Quando você digita 'java' no terminal, o sistema operacional corre nessa lista para descobrir onde o programa está escondido. Se a instalação foi bem-feita, o sistema responderá com orgulho a versão instalada. Se ele responder 'comando não encontrado', significa que ou o Java não está lá, ou o endereço dele não foi anotado na 'agenda' do sistema. Além da versão, entender o que significa o 'build X.X.X' e se a máquina virtual é de 64 bits (x64) é fundamental para garantir que o ApkTool tenha memória suficiente para processar aplicativos gigantes, como o WhatsApp ou o Facebook. No Brasil, muitas vezes lidamos com computadores de configurações variadas, e essa verificação inicial é o que previne erros bizarros no meio de uma decompilação importante. Vamos aprender a ler as entrelinhas do que o Java nos diz, transformando uma simples linha de texto em um diagnóstico completo de saúde do seu ambiente de trabalho.",
    codes: [
      {
        lang: "bash",
        code: "# O comando fundamental de verificação\njava -version # Solicita a identificação da Máquina Virtual Java\n# Procure por '64-Bit Server VM' no final para garantir máximo desempenho."
      },
      {
        lang: "bash",
        code: "# Verificando o caminho exato de onde o Java está sendo chamado\nwhich java # (Linux/Mac) Revela se o Java vem do sistema ou de uma pasta manual\n# Se mostrar algo em '/usr/bin', o PATH está geralmente correto."
      },
      {
        lang: "bash",
        code: "# Verificando o compilador Java (vital para algumas ferramentas de modding)\njavac -version # Checa se o 'brain' do desenvolvedor está ativo\n# Retornar o mesmo número do 'java -version' é o cenário ideal."
      },
      {
        lang: "bash",
        code: "# Testando se a variável JAVA_HOME foi configurada corretamente\necho $JAVA_HOME # (Linux/Mac) ou 'echo %JAVA_HOME%' no Windows CMD\n# Deve imprimir o caminho da pasta onde o Java foi instalado."
      },
      {
        lang: "bash",
        code: "# Listando todas as propriedades do sistema Java\njava -XshowSettings:all -version # Um mergulho profundo nas configurações\n# Útil para ver para onde as 'bibliotecas de extensão' estão apontando."
      },
      {
        lang: "bash",
        code: "# Verificando a arquitetura do Java\njava -d64 -version # Tenta forçar o modo 64 bits (em versões mais antigas)\n# Se der erro, seu Java pode ser de 32 bits, o que limita o ApkTool a 4GB de RAM."
      }
    ],
    points: [
      "O comando 'java -version' deve mostrar a versão, o build e o tipo da VM.",
      "Build: indica a revisão específica do código do Java naquela versão.",
      "64-Bit vs 32-Bit: a versão 64 bits é obrigatória para apps Android modernos e pesados.",
      "Erro 'not recognized': indica que o Java não está no PATH do Windows.",
      "O PATH é uma lista de pastas onde o Windows procura por executáveis.",
      "Sempre verifique o 'javac' além do 'java' para garantir o ambiente de desenvolvedor.",
      "Múltiplas versões: cuidado para não ter o Java 8 no PATH e o 17 no JAVA_HOME.",
      "Reiniciar o CMD/Terminal é necessário para ele ler as alterações nas variáveis.",
      "No macOS, o comando '/usr/libexec/java_home' é seu melhor amigo para debug.",
      "O sucesso aqui garante que o ApkTool conseguirá iniciar sem erros de JVM."
    ],
    alerts: [
      {
        type: "danger",
        content: "Se aparecer 'Java 1.8' e você instalou o 17, o seu PATH está priorizando a versão antiga!"
      },
      {
        type: "warning",
        content: "Cuidado com o 'Java da Oracle' pedindo licença comercial; prefira sempre o OpenJDK (Adoptium)."
      },
      {
        type: "success",
        content: "Viu a versão correta? Parabéns, você acaba de passar pelo filtro que barra 50% dos iniciantes!"
      }
    ]
  },
  {
    slug: "instalando-apktool-linux",
    section: "instalacao",
    title: "ApkTool no Linux",
    difficulty: "iniciante",
    subtitle: "O poder do terminal ao seu alcance",
    intro: "No Linux, a instalação do ApkTool é um rito de passagem para qualquer analista. Diferente do Windows, aqui não usamos instaladores 'mágicos' com botões coloridos; usamos a precisão do terminal para colocar cada peça em seu devido lugar. Existem três formas principais: via gerenciador de pacotes (apt), manual (baixando o .jar) ou usando o script wrapper oficial. O método do gerenciador de pacotes (como 'apt install apktool') é o mais fácil, mas no Brasil, onde nem sempre os repositórios estão atualizados, ele pode te entregar uma versão de dois anos atrás que não entende os APKs de hoje. O método que ensinamos aqui é o 'estilo cirurgião': baixamos o script de lançamento (wrapper) e o arquivo .jar principal, colocamos em uma pasta de sistema (/usr/local/bin) e damos 'poderes de execução' a eles com o comando chmod. É como contratar um segurança: você dá o crachá (o arquivo) e a autorização para ele agir (permissão de execução). Uma vez configurado, o ApkTool se torna uma extensão natural do seu sistema, permitindo que você decodifique aplicativos de qualquer pasta com um simples comando, aproveitando toda a velocidade que o kernel Linux oferece para manipulação de arquivos.",
    codes: [
      {
        lang: "bash",
        code: "# 1. Baixando o script lançador oficial\ncurl -L https://raw.githubusercontent.com/iBotPeaches/Apktool/master/scripts/linux/apktool -o apktool\n# O 'curl' faz o download e o '-o' dá o nome correto ao arquivo."
      },
      {
        lang: "bash",
        code: "# 2. Baixando o arquivo principal (JAR)\n# Acesse o site oficial para o link da última versão\nwget https://bitbucket.org/iBotPeaches/apktool/downloads/apktool_2.9.3.jar -O apktool.jar\n# O 'wget' é outra ferramenta clássica de download via terminal."
      },
      {
        lang: "bash",
        code: "# 3. Movendo os arquivos para a pasta de executáveis globais\nsudo mv apktool apktool.jar /usr/local/bin/\n# O 'sudo' é necessário porque estamos mexendo em pastas protegidas do sistema."
      },
      {
        lang: "bash",
        code: "# 4. Transformando os arquivos em programas executáveis\nsudo chmod +x /usr/local/bin/apktool /usr/local/bin/apktool.jar\n# '+x' significa 'eXecutable'. Sem isso, o Linux negará a execução por segurança."
      },
      {
        lang: "bash",
        code: "# 5. Testando a instalação de qualquer lugar\napktool -version\n# Se funcionar sem precisar de './', parabéns, seu PATH linuxero está perfeito!"
      },
      {
        lang: "bash",
        code: "# Dica: Verificando onde o comando foi instalado\nwhereis apktool # Localiza o binário e a documentação\n# Útil para saber se existe uma versão antiga escondida em '/usr/bin'."
      }
    ],
    points: [
      "/usr/local/bin é o lugar ideal para ferramentas instaladas manualmente no Linux.",
      "O arquivo .jar deve se chamar exatamente 'apktool.jar' para o script encontrá-lo.",
      "chmod +x é o comando que dá 'vida' aos arquivos baixados no Linux.",
      "sudo é obrigatório para mover arquivos para diretórios de sistema.",
      "O script 'wrapper' facilita a execução sem precisar digitar 'java -jar ...'.",
      "Evite instalar via 'apt' se precisar de versões bleeding-edge (mais recentes).",
      "Manter o sistema atualizado com 'apt update' ajuda na estabilidade do Java.",
      "Aliases podem ser usados no seu .bashrc para atalhos personalizados.",
      "O Linux lida muito melhor com nomes de arquivos sensíveis a maiúsculas/minúsculas.",
      "Verifique se o seu usuário tem permissão para ler o arquivo .jar movido."
    ],
    alerts: [
      {
        type: "tip",
        content: "Se o comando falhar, verifique se a pasta '/usr/local/bin' está no seu $PATH digitando 'echo $PATH'."
      },
      {
        type: "info",
        content: "O ApkTool no Linux é significativamente mais rápido para lidar com milhares de pequenos arquivos XML."
      },
      {
        type: "warning",
        content: "Nunca rode o ApkTool como 'root' ou 'sudo' durante a decompilação; isso pode bagunçar as permissões da pasta de saída."
      }
    ]
  },
  {
    slug: "instalando-apktool-windows",
    section: "instalacao",
    title: "Instalando ApkTool no Windows",
    difficulty: "iniciante",
    subtitle: "Configurando seu laboratório no PC",
    intro: "No Windows, o processo é um pouco mais manual porque o sistema, por padrão, não entende que você é um analista que precisa de ferramentas de linha de comando poderosas. Vamos criar a nossa própria 'caixa de ferramentas' no disco C:. A ideia é simples: criamos uma pasta curta e sem espaços (fundamental para evitar bugs!), colocamos o script lançador 'apktool.bat' e o arquivo 'apktool.jar' dentro dela. O grande segredo, o 'pulo do gato', é contar ao Windows onde essa pasta está através das Variáveis de Ambiente. Imagine que o Windows é um motorista de taxi: se você não disser onde é a rua, ele não te leva lá. Adicionar a pasta ao PATH é dar o endereço exato para que, toda vez que você digitar 'apktool' no CMD ou no PowerShell, o sistema saiba exatamente qual arquivo abrir. No Brasil, onde o Windows ainda domina as estações de trabalho, dominar essa configuração de PATH é uma habilidade essencial. Muitas pessoas desistem aqui porque acham difícil editar janelas de configuração do sistema, mas eu prometo que, uma vez feito, o seu Windows se transformará em uma máquina de análise formidável, pronta para abrir qualquer APK com a agilidade de um veterano.",
    codes: [
      {
        lang: "bash",
        code: ":: 1. Criando a pasta do laboratório via CMD\nmkdir C:\\apktool\n:: Usamos o C: raiz para evitar problemas com permissões na pasta 'Arquivos de Programas'."
      },
      {
        lang: "bash",
        code: ":: 2. Navegando até a pasta para conferir os arquivos\ncd C:\\apktool\ndir\n:: Você deve ver o 'apktool.bat' e o 'apktool.jar' listados aqui."
      },
      {
        lang: "bash",
        code: ":: 3. Testando a execução local (dentro da pasta)\n.\\apktool.bat -version\n:: O '.\\' diz ao Windows: 'procure o arquivo aqui nesta pasta atual'."
      },
      {
        lang: "bash",
        code: ":: 4. Abrindo as configurações de PATH via comando (atalho)\nsysdm.cpl\n:: Isso abre as Propriedades do Sistema diretamente; vá em Avançado -> Variáveis de Ambiente."
      },
      {
        lang: "bash",
        code: ":: 5. Verificando o PATH após a configuração (abra um NOVO CMD)\necho %PATH%\n:: Procure por 'C:\\apktool' na lista de pastas que será exibida."
      },
      {
        lang: "bash",
        code: ":: 6. O teste final de glória\napktool\n:: Se aparecer o menu de ajuda, você venceu o Windows!"
      }
    ],
    points: [
      "Evite espaços no nome das pastas (ex: use 'C:\\apktool' em vez de 'C:\\Meus Programas').",
      "O arquivo .jar deve ser renomeado para 'apktool.jar' obrigatoriamente.",
      "O script 'apktool.bat' é quem faz a ponte com o Java no Windows.",
      "Variáveis de Ambiente: a chave para o comando funcionar em qualquer lugar.",
      "PowerShell vs CMD: o ApkTool funciona bem em ambos, mas o PATH deve ser global.",
      "Reiniciar o CMD: as janelas abertas não 'sabem' que o PATH mudou.",
      "Antivírus: alguns podem bloquear a execução de arquivos .jar por precaução.",
      "Bloqueio de Download: clique com o botão direito no .jar e marque 'Desbloquear' se necessário.",
      "Permissões de Escrita: garanta que seu usuário pode criar pastas em C:\\apktool.",
      "O Windows 10/11 permite pesquisar por 'Variáveis de Ambiente' no menu Iniciar."
    ],
    alerts: [
      {
        type: "tip",
        content: "Se o comando 'apktool' abrir uma janela do bloco de notas, seu Windows está tentando 'editar' o .bat em vez de 'executar'. Verifique as extensões!"
      },
      {
        type: "warning",
        content: "Cuidado ao editar o PATH para não apagar o que já estava lá. Sempre ADICIONE um novo item."
      },
      {
        type: "info",
        content: "Colocar o ApkTool na pasta C:\\Windows funciona, mas não é recomendado por questões de organização e segurança."
      }
    ]
  },
  {
    slug: "instalando-apktool-macos",
    section: "instalacao",
    title: "ApkTool no macOS",
    difficulty: "iniciante",
    subtitle: "Elegância e eficiência no Mac",
    intro: "Usuários de Mac vivem em um mundo híbrido: a elegância da Apple por cima e a robustez do Unix por baixo. Instalar o ApkTool no macOS pode ser feito de forma manual (seguindo os passos do Linux) ou através do Homebrew, que é o 'gerenciador de pacotes que a Apple esqueceu de incluir'. O Homebrew é, de longe, a melhor opção para analistas de segurança no Mac; ele cuida de baixar, verificar assinaturas, colocar no PATH e até de atualizar a ferramenta com um simples 'brew upgrade'. Uma atenção especial deve ser dada aos novos processadores Apple Silicon (M1, M2, M3). Embora o Java rode via Rosetta 2 ou nativamente, garantir que você tem um JDK nativo para ARM64 fará o ApkTool voar, decompilando apps complexos em segundos. Além disso, o sistema de segurança do macOS (Gatekeeper) pode tentar impedir a execução do ApkTool por ele não vir da App Store. Aprender a dar as permissões corretas e a conviver com as restrições de segurança do Mac sem comprometer sua produtividade é essencial para quem escolheu o ecossistema da maçã como sua base de operações Android.",
    codes: [
      {
        lang: "bash",
        code: "# O jeito profissional: instalando via Homebrew\nbrew install apktool\n# O 'brew' já configura o PATH e as permissões automaticamente."
      },
      {
        lang: "bash",
        code: "# Verificando se o Java é nativo Apple Silicon (ARM64)\njava -XshowSettings:properties -version | grep os.arch\n# Se aparecer 'aarch64', você está tirando o máximo proveito do seu M1/M2/M3."
      },
      {
        lang: "bash",
        code: "# Caso instale manual, movendo o script wrapper\nsudo cp apktool /usr/local/bin/\nsudo chmod +x /usr/local/bin/apktool\n# Permissões são levadas muito a sério no macOS."
      },
      {
        lang: "bash",
        code: "# Removendo o atributo de 'quarentena' do macOS (Gatekeeper)\nxattr -d com.apple.quarantine /usr/local/bin/apktool\n# Isso evita aquele aviso chato de 'Desenvolvedor não identificado'."
      },
      {
        lang: "bash",
        code: "# Verificando a versão instalada pelo Brew\nbrew info apktool\n# Mostra o caminho da instalação e se há atualizações disponíveis."
      },
      {
        lang: "bash",
        code: "# O comando para atualizar tudo no futuro\nbrew update && brew upgrade apktool\n# Mantenha suas ferramentas sempre afiadas com esforço zero."
      }
    ],
    points: [
      "Homebrew é o padrão de fato para instalação de ferramentas no Mac.",
      "Processadores M1/M2/M3 (ARM64) pedem um JDK nativo para melhor performance.",
      "O Gatekeeper pode bloquear ferramentas de linha de comando não assinadas.",
      "A pasta /usr/local/bin pode precisar ser criada manualmente em versões novas do macOS.",
      "Zsh é o shell padrão do Mac; as configurações de PATH ficam no .zshrc.",
      "O comando 'xattr' é útil para liberar arquivos baixados da internet.",
      "Instalar o Xcode Command Line Tools é um pré-requisito silencioso para o Brew.",
      "O macOS lida muito bem com processos paralelos durante a decompilação.",
      "Mantenha o Java atualizado para evitar incompatibilidade com o sistema APFS.",
      "Verifique sempre se o comando 'apktool' não está conflitando com aliases do sistema."
    ],
    alerts: [
      {
        type: "tip",
        content: "Se o Brew demorar muito, use 'brew install apktool --display-times' para ver onde está o gargalo."
      },
      {
        type: "info",
        content: "No Mac, o ApkTool integrado com o VS Code oferece uma experiência de análise muito fluida."
      },
      {
        type: "warning",
        content: "Evite instalar o Java através do site oficial da Oracle no Mac; use 'brew install --cask adoptium'."
      }
    ]
  },
  {
    slug: "apktool-no-kali",
    section: "instalacao",
    title: "ApkTool no Kali Linux",
    difficulty: "iniciante",
    subtitle: "Jogando em casa",
    intro: "O Kali Linux é a 'Disneylândia' dos analistas de segurança. Se você escolheu o Kali, já está em um ambiente onde quase todas as ferramentas de engenharia reversa Android vêm pré-instaladas. O ApkTool está lá, morando na pasta /usr/bin/, pronto para ser invocado a qualquer momento. No entanto, existe uma armadilha: o Kali foca em estabilidade, o que significa que o ApkTool instalado pelo 'apt' pode ser uma versão ligeiramente mais antiga que a última disponível no site oficial do iBotPeaches. No mundo frenético do Android, seis meses de atraso podem significar que o ApkTool não conseguirá abrir um app que usa as últimas APIs do Android 14 ou 15. Por isso, ser um usuário de Kali não significa ser preguiçoso; você precisa saber como 'forçar' uma atualização manual se o repositório oficial falhar. Vamos entender como o Kali organiza suas ferramentas e como garantir que o seu sistema de 'hacking' esteja com as armas mais modernas e afiadas para enfrentar as novas proteções que os desenvolvedores colocam em seus APKs.",
    codes: [
      {
        lang: "bash",
        code: "# Verificando se o ApkTool 'de fábrica' está presente\nwhich apktool\n# Geralmente retorna '/usr/bin/apktool'."
      },
      {
        lang: "bash",
        code: "# Atualizando todos os pacotes do Kali, incluindo o ApkTool\nsudo apt update && sudo apt full-upgrade -y\n# O 'full-upgrade' resolve dependências de forma mais inteligente."
      },
      {
        lang: "bash",
        code: "# Verificando a versão instalada pelo sistema\napktool -version\n# Compare este número com o do site 'ibotpeaches.github.io/Apktool/'."
      },
      {
        lang: "bash",
        code: "# Sobrescrevendo a versão do Kali pela mais nova (Manual)\nsudo wget https://bitbucket.org/iBotPeaches/apktool/downloads/apktool_2.9.3.jar -O /usr/share/apktool/apktool.jar\n# O Kali guarda o arquivo .jar real em '/usr/share/apktool/'."
      },
      {
        lang: "bash",
        code: "# Chamando outras ferramentas companheiras no Kali\njadx-gui # Abre o decompilador visual Java\n# No Kali, essas ferramentas conversam muito bem entre si."
      },
      {
        lang: "bash",
        code: "# Verificando logs do sistema em caso de falha no ApkTool\ndmesg | tail # Mostra as últimas mensagens do kernel\n# Útil se o Java estiver 'crashando' por falta de memória."
      }
    ],
    points: [
      "O Kali Linux já traz o ApkTool configurado no PATH por padrão.",
      "A versão do repositório pode estar desatualizada em relação ao upstream.",
      "O gerenciador de pacotes 'apt' é a forma primária de atualização no Kali.",
      "O Kali já inclui um JDK configurado e pronto para uso intenso.",
      "Muitas ferramentas de apoio (dex2jar, jadx) também já vêm instaladas.",
      "A pasta /usr/share/apktool/ contém os arquivos base da ferramenta no Kali.",
      "Usar o Kali economiza horas de configuração inicial de ambiente.",
      "Sempre verifique se há novas versões após grandes atualizações do Android.",
      "O modo 'forense' do Kali ajuda a analisar APKs suspeitos sem infectar o host.",
      "O suporte a USB no Kali facilita o uso do ADB com dispositivos reais."
    ],
    alerts: [
      {
        type: "success",
        content: "No Kali, você raramente terá que se preocupar com permissões de execução (chmod), pois o pacote 'apt' já cuida disso."
      },
      {
        type: "warning",
        content: "Fique atento: se você atualizar o .jar manualmente, o 'apt upgrade' pode sobrescrevê-lo com uma versão mais antiga depois."
      },
      {
        type: "info",
        content: "O menu do Kali tem uma seção dedicada a 'Reverse Engineering' onde o ApkTool fica escondido."
      }
    ]
  }
];
