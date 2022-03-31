# Conventional Commits

## Formato dos commits

A estrutura de um commit semântico é claro e de fácil identificação, pois utiliza um formato definido na sua sintaxe, possuído partes obrigatórias e outras opcionais. Abaixo, descreve-se uma estrutura básica de um commit semântico, contendo as partes obrigatórias: tipo e descrição; e as partes opcionais: escopo, corpo e rodapé. Entenda que, quanto mais completo seja o formato do commit maior será o tempo em seu processamento.

Portanto, recomenda-se seu uso simplificado, não utilizando suas partes opcionais. Não obstante, há casos específicos que necessitam um maior descritivo do processo executado.

<tipo>[escopo opcional]: <descrição>

<corpo opcional>

<rodapé opcional>


## Tipo de Commits

A primeira e principal descrição de um commit semântico, refere-se a seu tipo, os quais possuem a finalidade de comunicar a intenção de processamento que o utilizador teve em sua execução. Abaixo será enumerado os principais types descritos na documentação do Angular Commit Message Guidelines:

* **build**: Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm),
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs);
* **docs**: referem-se a inclusão ou alteração somente de arquivos de documentação;
* **feat**: Tratam adições de novas funcionalidades ou de quaisquer outras novas implantações ao código;
* **fix**: Essencialmente definem o tratamento de correções de bugs;
* **perf**: Uma alteração de código que melhora o desempenho;
* **refactor**: Tipo utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada;
* **style**: Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por * **exemplo**: espaço em branco, formatação, ponto e vírgula ausente etc.);
* **test**: Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD);
* **chore**: Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas que realmente não entram em produção;
* **env**: basicamente utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.

