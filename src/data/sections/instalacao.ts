import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "instalando-java",
    section: "instalacao",
    title: "Instalando o Java (JDK)",
    difficulty: "iniciante",
    subtitle: "O combustível do nosso motor",
    intro: "Imagine que você comprou uma batedeira ultra-moderna, mas percebe que a tomada dela é incompatível com tudo o que você tem em casa. O Java é como a energia elétrica e o padrão de tomadas para o ApkTool. O ApkTool foi escrito em Java, o que significa que ele não 'fala' diretamente com o hardware do seu Windows, Linux ou Mac; ele precisa de uma máquina virtual no meio do caminho para traduzir suas ordens. Pense no Java como o tradutor simultâneo de uma reunião internacional: sem ele, as duas partes — o ApkTool e o seu sistema operacional — simplesmente não se entendem. No Brasil, onde a diversidade de máquinas é enorme, desde aquele notebook básico comprado em promoção de Black Friday até workstations robustas de empresas de tecnologia, ter o Java corretamente instalado é o divisor de águas entre um ambiente funcional e horas perdidas com erros incompreensíveis. Mas atenção: não serve apenas o JRE (Java Runtime Environment), que é para quem apenas 'usa' programas. Nós, como analistas, precisamos do JDK (Java Development Kit), que contém as ferramentas de desenvolvimento e diagnóstico. A diferença entre JRE e JDK é como a diferença entre ter uma carteira de motorista e ter uma oficina mecânica completa: com a carteira você dirige, mas com a oficina você desmonta, analisa e reconstrói o carro inteiro. Historicamente, o Java 8 era o padrão ouro para Android, mas hoje versões como 11, 17 e 21 são amplamente suportadas e até exigidas por ferramentas modernas como o Android Studio. No cenário brasileiro de TI, onde a infraestrutura varia muito entre regiões e empresas, saber configurar o JAVA_HOME — que é basicamente dizer ao Windows 'o Java mora naquela pasta ali' — é o que separa quem consegue trabalhar de quem fica preso em erros de 'comando não encontrado'. É como dar o endereço correto para o motoboy do iFood: se o endereço estiver errado, a entrega nunca chega. Além disso, muitos profissionais brasileiros trabalham em máquinas compartilhadas ou com restrições de administrador, o que torna ainda mais importante entender exatamente onde o Java precisa estar e quais permissões são necessárias. Sem o Java corretamente instalado e configurado, seu laboratório de engenharia reversa nem sequer abrirá as portas. Vamos garantir que esse alicerce esteja firme para que possamos construir todo o resto sobre ele, evitando aquelas mensagens de erro vermelhas frustrantes que aparecem quando o sistema tenta invocar o Java e encontra o vazio. Considere este passo como a fundação de uma casa: ninguém vê o concreto depois que a casa está pronta, mas sem ele, tudo desmorona ao primeiro vento forte.",
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
      },
      {
        lang: "bash",
        code: "# Verificando se já existe alguma versão do Java instalada\nupdate-alternatives --list java 2>/dev/null\n# No Ubuntu/Debian, lista todas as versões disponíveis no sistema"
      },
      {
        lang: "bash",
        code: "# Instalando o OpenJDK 17 (recomendado para ApkTool moderno)\nsudo apt install openjdk-17-jdk -y\n# O JDK inclui o JRE + ferramentas como keytool e jarsigner"
      },
      {
        lang: "bash",
        code: "# Configurando a variável JAVA_HOME no ~/.bashrc\nexport JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64\nexport PATH=\"$JAVA_HOME/bin:$PATH\"\n# Necessário para que outras ferramentas encontrem o Java"
      },
      {
        lang: "bash",
        code: "# Alternativa: instalando via SDKMAN (gerenciador de versões)\ncurl -s \"https://get.sdkman.io\" | bash\nsdk install java 17.0.9-tem\n# Permite ter múltiplas versões do Java lado a lado"
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
      "No Android, o Java é a base de quase todas as ferramentas de build.",
      "O OpenJDK é gratuito e funciona perfeitamente com o ApkTool (não precisa do Oracle JDK).",
      "Versões LTS (Long Term Support) como Java 11 e 17 são as mais estáveis para uso diário.",
      "O SDKMAN permite alternar entre versões do Java com um único comando.",
      "No Windows, o instalador .msi do Oracle JDK configura o PATH automaticamente.",
      "Se você usa Android Studio, o Java já está embutido na instalação."
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
      },
      {
        type: "success",
        content: "Se java -version retorna \"openjdk version 17.x.x\", seu ambiente está perfeito para o ApkTool."
      },
      {
        type: "danger",
        content: "Não instale o Java de sites aleatórios. Use apenas adoptium.net, sdkman.io ou o repositório oficial da sua distro."
      }
    ]
  },
  {
    slug: "verificando-java",
    section: "instalacao",
    title: "Verificando o Java",
    difficulty: "iniciante",
    subtitle: "Será que está tudo pronto?",
    intro: "Depois de instalar o Java, não basta apenas acreditar que o instalador fez o seu trabalho; precisamos interrogar o sistema. É como testar se a luz da sala acende após você trocar a fiação. No Brasil, temos um ditado popular que se aplica perfeitamente aqui: 'confiar, mas verificar'. O computador possui um lugar especial chamado 'Variáveis de Ambiente', que funciona como uma lista de contatos rápida — pense nela como a agenda do seu celular, onde cada nome está associado a um número. Quando você digita 'java' no terminal, o sistema operacional corre nessa lista para descobrir onde o programa está escondido. Se a instalação foi bem-feita, o sistema responderá com orgulho a versão instalada. Se ele responder 'comando não encontrado', significa que ou o Java não está lá, ou o endereço dele não foi anotado na 'agenda' do sistema. É como ligar para alguém que mudou de número sem te avisar: a ligação simplesmente não completa. Além da versão, entender o que significa o 'build X.X.X' e se a máquina virtual é de 64 bits (x64) é fundamental para garantir que o ApkTool tenha memória suficiente para processar aplicativos gigantes, como o WhatsApp ou o Facebook. No Brasil, muitas vezes lidamos com computadores de configurações variadas — desde máquinas antigas com 4GB de RAM em lan houses até notebooks gamer com 32GB — e essa verificação inicial é o que previne erros bizarros no meio de uma decompilação importante. Imagine estar no meio da análise de um aplicativo suspeito para um cliente e, de repente, o processo falhar porque o Java de 32 bits não consegue alocar memória suficiente. Esse tipo de situação é evitável com uma verificação cuidadosa agora. Pense neste passo como o check-up médico antes de uma maratona: você pode até correr sem ele, mas o risco de ter um problema no meio do caminho é muito maior. Cada informação que o comando 'java -version' nos dá é uma pista sobre a saúde do nosso ambiente. Vamos aprender a ler as entrelinhas do que o Java nos diz, transformando uma simples linha de texto em um diagnóstico completo de saúde do seu ambiente de trabalho, garantindo que nenhuma surpresa desagradável apareça quando estivermos no meio de um projeto crítico.",
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
      },
      {
        lang: "bash",
        code: "# Verificando a arquitetura do Java (32 ou 64 bits)\njava -XshowSettings:vm 2>&1 | grep \"VM\"\n# O ApkTool funciona melhor com Java 64-bit"
      },
      {
        lang: "bash",
        code: "# Testando se o javac (compilador) também está disponível\njavac -version\n# Se não estiver, você instalou apenas o JRE, não o JDK completo"
      },
      {
        lang: "bash",
        code: "# Verificando o caminho completo do executável Java\nreadlink -f $(which java)\n# Útil para debugar problemas de PATH e versões conflitantes"
      },
      {
        lang: "bash",
        code: "# Testando se o Java consegue executar um JAR (como o ApkTool)\njava -jar /dev/null 2>&1 | head -1\n# Se aparecer \"Invalid or corrupt jarfile\", o Java está funcionando"
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
      "O sucesso aqui garante que o ApkTool conseguirá iniciar sem erros de JVM.",
      "O comando java -version mostra a versão; javac -version confirma que o JDK completo está instalado.",
      "Java 64-bit é obrigatório para processar APKs grandes (acima de 100MB).",
      "Se aparecer \"command not found\", o Java não está no PATH do sistema.",
      "O erro \"UnsupportedClassVersionError\" indica que seu Java é muito antigo para o ApkTool.",
      "Mantenha apenas uma versão principal do Java ativa para evitar conflitos."
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
      },
      {
        type: "success",
        content: "Se tanto java -version quanto javac -version retornam sem erro, você tem o JDK completo instalado."
      },
      {
        type: "danger",
        content: "Múltiplas versões do Java instaladas podem causar conflitos. Use update-alternatives para gerenciar."
      }
    ]
  },
  {
    slug: "instalando-apktool-linux",
    section: "instalacao",
    title: "ApkTool no Linux",
    difficulty: "iniciante",
    subtitle: "O poder do terminal ao seu alcance",
    intro: "No Linux, a instalação do ApkTool é um rito de passagem para qualquer analista. Diferente do Windows, aqui não usamos instaladores 'mágicos' com botões coloridos; usamos a precisão do terminal para colocar cada peça em seu devido lugar. É como a diferença entre comprar um móvel montado na loja e montar um você mesmo com as ferramentas certas: o resultado final é o mesmo, mas no segundo caso você entende cada parafuso e sabe exatamente o que fazer se algo soltar no futuro. Existem três formas principais: via gerenciador de pacotes (apt), manual (baixando o .jar) ou usando o script wrapper oficial. O método do gerenciador de pacotes (como 'apt install apktool') é o mais fácil, mas no Brasil, onde nem sempre os repositórios estão atualizados — especialmente em servidores de universidades públicas que servem como mirrors — ele pode te entregar uma versão de dois anos atrás que não entende os APKs de hoje. É como ir ao mercadinho da esquina e encontrar apenas leite perto do vencimento: funciona, mas não é o ideal. O método que ensinamos aqui é o 'estilo cirurgião': baixamos o script de lançamento (wrapper) e o arquivo .jar principal, colocamos em uma pasta de sistema (/usr/local/bin) e damos 'poderes de execução' a eles com o comando chmod. É como contratar um segurança: você dá o crachá (o arquivo) e a autorização para ele agir (permissão de execução). No ecossistema Linux brasileiro, onde muitos profissionais de segurança trabalham com distribuições como Ubuntu, Mint ou Fedora em seus notebooks pessoais, dominar esse processo manual garante independência total dos repositórios oficiais. Você não fica refém de ninguém para ter a versão mais recente. Além disso, entender como o Linux organiza seus executáveis em /usr/local/bin versus /usr/bin é um conhecimento fundamental que vai te servir para instalar dezenas de outras ferramentas no futuro. Uma vez configurado, o ApkTool se torna uma extensão natural do seu sistema, permitindo que você decodifique aplicativos de qualquer pasta com um simples comando, aproveitando toda a velocidade que o kernel Linux oferece para manipulação de arquivos. E no Brasil, onde muitos analistas trabalham com hardware modesto, essa eficiência do Linux faz toda a diferença na produtividade diária.",
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
      },
      {
        lang: "bash",
        code: "# Baixando a versão mais recente do ApkTool diretamente do GitHub\nwget https://github.com/iBotPeaches/Apktool/releases/latest/download/apktool_2.9.3.jar\n# Sempre use a versão oficial do repositório iBotPeaches"
      },
      {
        lang: "bash",
        code: "# Criando o wrapper script que facilita a execução\necho \"#!/bin/bash\\njava -jar /usr/local/bin/apktool.jar \\\"\\$@\\\"\" | sudo tee /usr/local/bin/apktool\nsudo chmod +x /usr/local/bin/apktool\n# Agora basta digitar \"apktool\" em qualquer pasta"
      },
      {
        lang: "bash",
        code: "# Verificando se a instalação foi bem-sucedida\napktool --version && echo \"OK!\" || echo \"FALHOU\"\n# Deve retornar o número da versão sem erros"
      },
      {
        lang: "bash",
        code: "# Alternativa: instalando via gerenciador de pacotes (pode estar desatualizado)\nsudo apt install apktool\napt-cache policy apktool # Verifica qual versão está no repositório\n# A versão do apt pode ser antiga; prefira o download manual"
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
      "Verifique se o seu usuário tem permissão para ler o arquivo .jar movido.",
      "O wrapper script permite chamar \"apktool\" diretamente sem digitar \"java -jar\" toda vez.",
      "Coloque o .jar em /usr/local/bin/ para que todos os usuários do sistema tenham acesso.",
      "Use chmod +x para tornar o script executável (permissão de execução).",
      "O ApkTool cria uma pasta ~/.local/share/apktool/ para cache de frameworks.",
      "Atualize regularmente: versões novas corrigem bugs e suportam APKs mais recentes."
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
      },
      {
        type: "success",
        content: "Se apktool --version retorna um número (ex: 2.9.3), a instalação foi concluída com sucesso!"
      },
      {
        type: "danger",
        content: "Nunca baixe o ApkTool de sites que não sejam o GitHub oficial (github.com/iBotPeaches/Apktool)."
      }
    ]
  },
  {
    slug: "instalando-apktool-windows",
    section: "instalacao",
    title: "Instalando ApkTool no Windows",
    difficulty: "iniciante",
    subtitle: "Configurando seu laboratório no PC",
    intro: "No Windows, o processo é um pouco mais manual porque o sistema, por padrão, não entende que você é um analista que precisa de ferramentas de linha de comando poderosas. O Windows foi projetado para o usuário comum que clica em ícones, e nós precisamos ir além disso. Vamos criar a nossa própria 'caixa de ferramentas' no disco C:. A ideia é simples: criamos uma pasta curta e sem espaços (fundamental para evitar bugs!), colocamos o script lançador 'apktool.bat' e o arquivo 'apktool.jar' dentro dela. No Brasil, onde o Windows domina mais de 80% das estações de trabalho corporativas e pessoais, essa habilidade é praticamente obrigatória para qualquer profissional de segurança. O grande segredo, o 'pulo do gato', é contar ao Windows onde essa pasta está através das Variáveis de Ambiente. Imagine que o Windows é um motorista de taxi no centro de São Paulo: se você não disser onde é a rua, ele não te leva lá, mesmo que o destino esteja a dois quarteirões. Adicionar a pasta ao PATH é dar o endereço exato para que, toda vez que você digitar 'apktool' no CMD ou no PowerShell, o sistema saiba exatamente qual arquivo abrir. É como cadastrar um endereço favorito no GPS: depois de salvo, você nunca mais precisa digitar tudo de novo. Muitas pessoas desistem aqui porque acham difícil editar janelas de configuração do sistema — aquela tela de 'Propriedades do Sistema' com abas e botões pequenos pode parecer intimidadora. Mas pense assim: é como preencher um formulário de cadastro online. Você só precisa fazer uma vez, e depois o benefício é permanente. No contexto brasileiro, onde muitos analistas iniciantes vêm de cursos técnicos ou são autodidatas aprendendo por vídeos no YouTube, desmistificar esse processo é essencial. Não é nenhum bicho de sete cabeças. Eu prometo que, uma vez feito, o seu Windows se transformará em uma máquina de análise formidável, pronta para abrir qualquer APK com a agilidade de um veterano. E o melhor: esse conhecimento de configuração de PATH vai te servir para instalar qualquer outra ferramenta de linha de comando no futuro, desde o ADB até o Frida.",
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
      },
      {
        lang: "bash",
        code: "# Verificando se o Java está no PATH do Windows (PowerShell)\n$env:PATH -split \";\" | Where-Object { $_ -like \"*java*\" }\n# Se não aparecer nada, precisa adicionar manualmente"
      },
      {
        lang: "bash",
        code: "# Adicionando o ApkTool ao PATH do Windows permanentemente (PowerShell Admin)\n[Environment]::SetEnvironmentVariable(\"Path\", $env:Path + \";C:\\apktool\", \"Machine\")\n# Reinicie o terminal após essa alteração"
      },
      {
        lang: "bash",
        code: "# Testando a execução no CMD do Windows\napktool.bat d meu_app.apk\n# No Windows, o wrapper é um arquivo .bat em vez de shell script"
      },
      {
        lang: "bash",
        code: "# Resolvendo o erro comum \"java is not recognized\"\nsetx JAVA_HOME \"C:\\Program Files\\Java\\jdk-17\"\nsetx PATH \"%PATH%;%JAVA_HOME%\\bin\"\n# Fecha e reabre o CMD para aplicar"
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
      "O Windows 10/11 permite pesquisar por 'Variáveis de Ambiente' no menu Iniciar.",
      "No Windows, use o PowerShell em vez do CMD antigo para melhor compatibilidade.",
      "O Chocolatey (choco install apktool) é uma alternativa ao download manual.",
      "Caminhos com espaços (\"Program Files\") podem causar problemas; use caminhos curtos.",
      "O Windows Defender pode bloquear o ApkTool na primeira execução; adicione exceção.",
      "WSL2 (Windows Subsystem for Linux) permite usar comandos Linux nativamente no Windows."
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
      },
      {
        type: "success",
        content: "Se o comando apktool.bat funciona no CMD/PowerShell, você está pronto para decompilar no Windows."
      },
      {
        type: "danger",
        content: "Antivírus como Avast e Norton podem marcar o ApkTool como falso positivo. Adicione exceção na pasta."
      }
    ]
  },
  {
    slug: "instalando-apktool-macos",
    section: "instalacao",
    title: "ApkTool no macOS",
    difficulty: "iniciante",
    subtitle: "Elegância e eficiência no Mac",
    intro: "Usuários de Mac vivem em um mundo híbrido: a elegância da Apple por cima e a robustez do Unix por baixo. É como morar em um apartamento de luxo que, por dentro das paredes, tem a mesma estrutura de concreto armado de um prédio industrial — bonito por fora, poderoso por dentro. Instalar o ApkTool no macOS pode ser feito de forma manual (seguindo os passos do Linux) ou através do Homebrew, que é o 'gerenciador de pacotes que a Apple esqueceu de incluir'. No Brasil, onde o Mac tem ganhado cada vez mais espaço entre profissionais de tecnologia e segurança da informação — especialmente em startups e empresas de desenvolvimento — dominar o Homebrew é tão essencial quanto saber usar o Pix: todo mundo precisa, e quem não usa fica para trás. O Homebrew é, de longe, a melhor opção para analistas de segurança no Mac; ele cuida de baixar, verificar assinaturas, colocar no PATH e até de atualizar a ferramenta com um simples 'brew upgrade'. Pense nele como um personal shopper digital que vai até a loja, escolhe o produto certo, traz para casa e ainda organiza na prateleira correta. Uma atenção especial deve ser dada aos novos processadores Apple Silicon (M1, M2, M3). Embora o Java rode via Rosetta 2 ou nativamente, garantir que você tem um JDK nativo para ARM64 fará o ApkTool voar, decompilando apps complexos em segundos — é a diferença entre andar de bicicleta e de moto na Marginal. Além disso, o sistema de segurança do macOS (Gatekeeper) pode tentar impedir a execução do ApkTool por ele não vir da App Store. É como aquele porteiro de condomínio que barra todo mundo que não está na lista, mesmo que seja o encanador que você chamou. Aprender a dar as permissões corretas e a conviver com as restrições de segurança do Mac sem comprometer sua produtividade é essencial para quem escolheu o ecossistema da maçã como sua base de operações Android. No cenário brasileiro, onde muitos profissionais investem alto em um MacBook esperando produtividade máxima, saber contornar essas barreiras de segurança de forma legítima é o que transforma o investimento em retorno real de trabalho.",
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
      },
      {
        lang: "bash",
        code: "# Instalando via Homebrew (forma mais fácil no macOS)\nbrew install apktool\n# O Homebrew gerencia versões e dependências automaticamente"
      },
      {
        lang: "bash",
        code: "# Verificando se o Homebrew está atualizado\nbrew update && brew upgrade apktool\n# Mantém o ApkTool sempre na versão mais recente"
      },
      {
        lang: "bash",
        code: "# Instalando o Java no macOS via Homebrew\nbrew install openjdk@17\nsudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk\n# Cria o link simbólico necessário para o sistema encontrar o Java"
      },
      {
        lang: "bash",
        code: "# Resolvendo problemas de permissão no macOS (Gatekeeper)\nxattr -d com.apple.quarantine /usr/local/bin/apktool\n# O macOS pode bloquear executáveis baixados da internet"
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
      "Verifique sempre se o comando 'apktool' não está conflitando com aliases do sistema.",
      "O Homebrew é o gerenciador de pacotes padrão do macOS para desenvolvedores.",
      "No Apple Silicon (M1/M2/M3), o Java ARM64 roda nativamente sem emulação Rosetta.",
      "O macOS Gatekeeper pode impedir a execução; use xattr -d para desbloquear.",
      "iTerm2 + Oh My Zsh é a combinação preferida dos desenvolvedores macOS.",
      "O Xcode Command Line Tools (xcode-select --install) é pré-requisito para o Homebrew."
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
      },
      {
        type: "success",
        content: "Se brew info apktool mostra a versão instalada, o Homebrew gerenciará atualizações automaticamente."
      },
      {
        type: "danger",
        content: "Não use sudo com Homebrew — isso pode quebrar permissões de arquivos no macOS."
      }
    ]
  },
  {
    slug: "apktool-no-kali",
    section: "instalacao",
    title: "ApkTool no Kali Linux",
    difficulty: "iniciante",
    subtitle: "Jogando em casa",
    intro: "O Kali Linux é a 'Disneylândia' dos analistas de segurança. Se você escolheu o Kali, já está em um ambiente onde quase todas as ferramentas de engenharia reversa Android vêm pré-instaladas, como um buffet livre onde os pratos já estão servidos na mesa. O ApkTool está lá, morando na pasta /usr/bin/, pronto para ser invocado a qualquer momento sem nenhuma configuração adicional. No Brasil, o Kali Linux ganhou uma popularidade enorme entre estudantes de segurança da informação, participantes de CTFs (Capture The Flag) e profissionais que trabalham com pentest. É praticamente o 'uniforme' da área — se você está em um evento de segurança como o Roadsec ou o H2HC e abre o notebook, as chances de ter um Kali rodando são altíssimas. No entanto, existe uma armadilha que pega muita gente desprevenida: o Kali foca em estabilidade, o que significa que o ApkTool instalado pelo 'apt' pode ser uma versão ligeiramente mais antiga que a última disponível no site oficial do iBotPeaches. No mundo frenético do Android, onde o Google lança uma nova versão do sistema a cada ano com mudanças significativas na estrutura dos APKs, seis meses de atraso podem significar que o ApkTool não conseguirá abrir um app que usa as últimas APIs do Android 14 ou 15. É como ter um decodificador de TV a cabo que não recebe os canais novos porque o firmware está desatualizado. Por isso, ser um usuário de Kali não significa ser preguiçoso; você precisa saber como 'forçar' uma atualização manual se o repositório oficial falhar. Pense no Kali como uma caixa de ferramentas que vem completa de fábrica, mas que de vez em quando precisa de uma ferramenta mais nova comprada à parte. No contexto brasileiro, onde muitos profissionais usam o Kali em máquinas virtuais com recursos limitados, saber otimizar e manter as ferramentas atualizadas sem quebrar o sistema é uma habilidade valiosa. Vamos entender como o Kali organiza suas ferramentas e como garantir que o seu sistema de análise esteja com as armas mais modernas e afiadas para enfrentar as novas proteções que os desenvolvedores colocam em seus APKs, desde ofuscação de código até verificações de integridade em tempo de execução.",
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
      },
      {
        lang: "bash",
        code: "# No Kali Linux, o ApkTool já vem pré-instalado\nwhich apktool && apktool --version\n# Kali é a distro preferida para pentest e já inclui ferramentas Android"
      },
      {
        lang: "bash",
        code: "# Atualizando o ApkTool no Kali para a versão mais recente\nsudo apt update && sudo apt install --only-upgrade apktool\n# A versão do repositório Kali costuma ser mais atualizada que o Ubuntu"
      },
      {
        lang: "bash",
        code: "# Instalando ferramentas complementares disponíveis no Kali\nsudo apt install jadx dex2jar jd-gui androguard\n# O Kali tem um arsenal completo para análise Android"
      },
      {
        lang: "bash",
        code: "# Configurando o Android SDK no Kali para ter adb e build-tools\nsudo apt install android-sdk android-sdk-build-tools\n# Inclui adb, zipalign e apksigner de uma vez"
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
      "O suporte a USB no Kali facilita o uso do ADB com dispositivos reais.",
      "O Kali Linux já vem com dezenas de ferramentas de análise Android pré-instaladas.",
      "Use o Kali em VM (VirtualBox/VMware) se não quiser instalar como sistema principal.",
      "O repositório do Kali é atualizado semanalmente com as versões mais recentes.",
      "Ferramentas como Frida, Objection e MobSF também estão disponíveis no Kali.",
      "O Kali em modo Live USB permite análise portátil sem instalação permanente."
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
      },
      {
        type: "success",
        content: "O Kali Linux é o ambiente mais completo para análise Android — tudo funciona out-of-the-box."
      },
      {
        type: "danger",
        content: "Não use o Kali como sistema operacional diário. Ele roda como root por padrão, o que é inseguro para uso geral."
      }
    ]
  }
];
