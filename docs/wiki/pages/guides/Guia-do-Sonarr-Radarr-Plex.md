---
title: Sonarr, Radarr e Plex
---


# Guia do Streaming Doméstico Automatizado (Sonarr, Radarr e Plex)

Desde o início da pandemia, eu venho montando e aperfeiçoando constantemente um servidor de mídias automatizado que é a minha fonte principal de quase todos os filmes e séries que eu assisto atualmente. Todos os programas necessários para montar esse serviço são de certa forma bastante conhecidos no meio, mas notei que o sub carece de um guia direcionado ao streaming doméstico, então vou ajudar a popularizá-los ainda mais. O computador que eu utilizo é um Dell de mais de 10 anos atrás que já era lento para aquela época, então imagino que esse tutorial vai ser acessível para a maioria.

Antes de iniciar, vou fazer um breve resumo e explicação de como funciona cada um dos softwares que vamos utilizar.

**qBitTorrent** - Um dos mais famosos clients de torrents do mundo, ele vai ser o meio para baixarmos as nossas mídias. Os programas Radarr e Sonarr vão entrar em contato com ele e enviar o magnet link do filme que você deseja automaticamente. Após a conclusão, o torrent também será apagado automaticamente.

**Radarr** - Gerenciador dos filmes desejados. Após adicionados pelo usuário ao radarr, os filmes serão constantemente procurados nos mais diversos sites e terão o melhor release possível enviado ao client de torrent, nesse caso, o qbittorrent.

**Sonarr** - Mesma coisa que o Radarr, mas para séries.

**Prowlarr** - Indexador das fontes de torrent. É através dele que o radarr e o sonarr entrarão em contato com os sites e grupos de lançamentos que disponibilizam torrents. Através do Prowlarr, também é possível baixar outros arquivos disponíveis nos indexadores além de filmes e séries.

**Bazarr** - Software que acompanha o Radarr e o Sonarr para o download de legendas. Da mesma forma que eles, procura constantemente a melhor legenda disponível nos sites que você cadastrou.

**Plex** - A ponta, onde você vai assistir seus filmes e séries. Ele lê o nome do arquivo do vídeo e rapidamente cataloga o filme/série em uma biblioteca com todas as suas mídias. Assim, você pode acessá-la facilmente domesticamente ou remotamente através dos diversos dispositivos que o Plex tem aplicativo. O Plex tem versão paga, mas acho desnecessário, nunca paguei e nunca fez falta. Existem alternativas código aberto ao Plex (Jellyfin), mas que, na minha opinião, estão muito aquém em termos de perfomance.

**Letterboxd** - Site e aplicativo no qual você pode logar, fazer review de filmes, listas, comentar, ver review de amigos, etc. Hoje, estaremos utilizando a função de listas do Letterboxd para integrá-lo ao Radarr e automatizá-lo ainda mais.

**Opensubtitles** - Site que disponibiliza legendas nos mais diversos idiomas.

**Estarei pulando o tutorial de instalação desses programas, mas todos eles são facilmente obtidos pesquisando "Nome do programa + download" no Google**

**Sumário**

1. Requisitos Recomendados

2. qBitTorrent - Configurações

3. Radarr - Configurações

4. Sonarr - Configurações

5. Prowlarr - Configurações

6. Bazarr - Configurações

7. Plex - Configurações


## 1. REQUISITOS RECOMENDADOS

* Qualquer PC de batata vai rodar isso

* 1TB de armazenamento mínimo (vai de acordo com a biblioteca que você deseja montar)

* Internet cabeada

## 2. QBITTORRENT - CONFIGURAÇÕES

(A maioria dos clients de torrent funciona no Radarr e no Sonarr, mas o qbittorrent foi o que mais se adequou ao meu uso e nunca deu problema).

Primeiramente, crie três pastas em seu computador

1. qBitTorrent - onde seus filmes serão baixados

2. Filmes - para onde o Radarr moverá os arquivos de filmes após a conclusão do download

3. Séries - para onde o Sonarr moverá os arquivos de séries após a conclusão do download

![Pastas](https://telegra.ph/file/fa6f193bf2a0ce30a71b8.png)

> Agora, no programa qbittorrentt, copie as seguintes configurações:

### Preferências -> Download

![Preferencias de download](https://telegra.ph/file/da864f1571e7b3e9ef65a.png)

Pré-aloque o espaço em disco para evitar que seja baixado um filme sem que haja espaço no armazenamento. Lembre-se que tudo isso será automático e que a ideia é que você não fique monitorando.

É **MUITO** importante que o modo de gerenciamento padrão dos torrents esteja em automático. Nada vai funcionar se não estiver.

![](https://telegra.ph/file/b439955f3559c54557161.png)

Agora, no camino padrão do salvamento, seleciona a pasta **qbittorrent**, que você criou agora há pouco.

### Preferências -> Interface de Usuário

Habilite a interface de usuário web e coloque um usuário e senha de sua preferência. Para acessar a interface, o endereço padrão é http://localhost:8080 ou http://(seu_ip):8080

**As demais configurações do qBitTorrent vão da sua preferência**

## 3. RADARR - CONFIGURAÇÕES

Após instalar o radarr, acesse-o através de http://localhost:7878 ou http://(seu_ip):7878


![Interface do radarr](https://telegra.ph/file/ec36ca31723fd193414ef.png)

Clique no **Settings -> IU** e desça toda a página para trocá-la para Portuguese (Brazil). Salve e recarregue a página

Clique em **Configurações -> Gerenciamento de Mídia**

### **NOMENCLATURA DE FILME**

![Nomeclatura do filme](https://telegra.ph/file/ddc5ceaf5ab3dbc1d20d8.png)

**Marque** renomear filmes e substituir caracteres ilegais

Substituto para dois pontos: Excluir

**Formato de filme padrão:** Copie e cole:

```
{Movie CleanTitle} {(Release Year)} {imdb-{ImdbId}} {edition-{Edition Tags}} {[Custom Formats]}{[Quality Full]}{[MediaInfo 3D]}{[MediaInfo VideoDynamicRangeType]}{[Mediainfo AudioCodec}{ Mediainfo AudioChannels]}[{Mediainfo VideoCodec}]{-Release Group}
```
Assim, o Radarr renomeará o arquivo do filme para um no qual o Plex saberá todas as informações sobre ele logo de cara e o catalogará corretamente, não sendo necessário nenhum trabalho manual.

**Formato de pasta de filme padrão:**

```
{Movie CleanTitle} ({Release Year}) {imdb-{ImdbId}}
```

**Pastas**

![pastas](https://telegra.ph/file/29e3152cea792513c4306.png)

> **Importando**

**Marque** Ignorar verificação de espaço livre

Isso permitirá que o Radarr importe (processo de mover o arquivo da pasta qBitTorrent para a pasta Filmes) sem que haja espaço livre disponível.

**Marque** Usar links rigidos ao invés de copiar

![](https://telegra.ph/file/be2ae7caff1c214715f57.png)


### **Gerenciamento de Arquivo**

Propers e Repacks **Não Preferir**

Isso evitará que o Radarr dê preferência a releases PROPER ou REPACK acima das prioridades que você vai estabelecer nas demas configurações.

Deixe o restante como está e informe o local da lixeira do seu computador. Isso é importante porque os torrents de filmes às vezes vêm com arquivos adicionais que, acumulando, podem consumir muito espaço do armazenamento. O radarr importa o filme para a pasta Filmes e envia esses arquivos adicionais para a lixeira. O próprio radarr esvaziará a lixeira no tempo que você definir.

* **Permissões**

Deixe como está

Agora, adicione a pasta Filmes que você criou anteriormente.

**Salve.**

### **CONFIGURAÇÕES -> QUALIDADE**

![](https://telegra.ph/file/5e5191a08993c0694ba6f.png)

Basicamente, aqui você vai definir o tamanho mínimo e máximo de arquivo que você deseja que seja baixado, de acordo com o perfil de qualidade. O Radarr não baixará os tamanhos que não se enquadrarem na sua escolha. Vai de preferência pessoal.

### CONFIGURAÇÕES - FORMATOS PERSONALIZADOS

Nativamente, as configurações do Radarr dão preferência à qualidade acima de tudo. Entretanto, há uma forma de evitar que o Radarr baixe qualquer coisa que vai ser muito pesada pra rodar no Plex ou simplesmente não é de seu interesse pessoal. Essa forma são os formatos personalizados.

Você vai clicar no + e em **Importar**, no canto inferior esquerdo

Vou informar aqui os formatos personalizados básicos pra você evitar releases indesejados, cada um desses você repete o processo de importar:

**BR-DISK**

Evita que o Radarr obtenha releases de qualidade BR-DISK. São muito pesados e vêm em arquivo ISO. O Plex nem roda.

```
{
  "trash_id": "ed38b889b31be83fda192888e2286d83",
  "trash_scores": {
    "default": -10000
  },
  "trash_regex": "https://regex101.com/r/UpA3I7/2",
  "name": "BR-DISK",
  "includeCustomFormatWhenRenaming": false,
  "specifications": [
    {
      "name": "BR-DISK",
      "implementation": "ReleaseTitleSpecification",
      "negate": false,
      "required": true,
      "fields": {
        "value": "^(?!.*\\b((?<!HD[._ -]|HD)DVD|BDRip|720p|MKV|XviD|WMV|d3g|(BD)?REMUX|^(?=.*1080p)(?=.*HEVC)|[xh][-_. ]?26[45]|German.*[DM]L|((?<=\\d{4}).*German.*([DM]L)?)(?=.*\\b(AVC|HEVC|VC[-_. ]?1|MVC|MPEG[-_. ]?2)\\b))\\b)(((?=.*\\b(Blu[-_. ]?ray|BD|HD[-_. ]?DVD)\\b)(?=.*\\b(AVC|HEVC|VC[-_. ]?1|MVC|MPEG[-_. ]?2|BDMV|ISO)\\b))|^((?=.*\\b(((?=.*\\b((.*_)?COMPLETE.*|Dis[ck])\\b)(?=.*(Blu[-_. ]?ray|HD[-_. ]?DVD)))|3D[-_. ]?BD|BR[-_. ]?DISK|Full[-_. ]?Blu[-_. ]?ray|^((?=.*((BD|UHD)[-_. ]?(25|50|66|100|ISO)))))))).*"
      }
    }
  ]
}
```

> **3D**

Evita que o Radarr obtenha releases em 3D

```
{
  "trash_id": "b8cd450cbfa689c0259a01d9e29ba3d6",
  "trash_scores": {
    "default": -10000
  },
  "name": "3D",
  "includeCustomFormatWhenRenaming": false,
  "specifications": [
    {
      "name": "3D",
      "implementation": "ReleaseTitleSpecification",
      "negate": false,
      "required": false,
      "fields": {
        "value": "\\b(3d|sbs|half[ .-]ou|half[ .-]sbs)\\b"
      }
    },
    {
      "name": "BluRay3D",
      "implementation": "ReleaseTitleSpecification",
      "negate": false,
      "required": false,
      "fields": {
        "value": "\\b(BluRay3D)\\b"
      }
    }
  ]
}
```

Existe a possibilidade de você adicionar, também, um fomato personalizado para um tipo de release que você tem preferência, exemplo:


### **Open Matte**

O Radarr vai obter, sempre que disponível, um release Open Matte com preferência maior que os outros.

```
{
  "trash_id": "09d9dd29a0fc958f9796e65c2a8864b4",
  "trash_scores": {
    "default": 25
  },
  "name": "Open Matte",
  "includeCustomFormatWhenRenaming": false,
  "specifications": [
    {
      "name": "Open Matte",
      "implementation": "ReleaseTitleSpecification",
      "negate": false,
      "required": false,
      "fields": {
        "value": "\\b(Open[ ._-]?Matte)\\b"
      }
    }
  ]
}
```

Note que, para os formatos personalizados que você tem preferência, o Radarr irá dar prioridade a eles, mas não quer dizer que, se não houver um Open Matte disponível, ele não irá baixar os outros que tem.

Existem entusiastas na Internet que disponibilizam fomatos personalizados para importar de basicamente todo formato de filme possível, procurem por trash guides

Fonte dos formatos personalizados: Trash-Guides

### **Ordem de preferência do Radarr para pegar um release:**

1.Qualidade

2.Pontuação do Formato Personalizado

3.Protocolo

4.Prioridade do Indexador

5.Bandeiras do Indexador

6.Seeds/Peers

7.Tamanho

**Salve.**

### **CONFIGURAÇÕES -> PERFIS**

Aqui, você definirá as qualidades dos releases que o Radarr irá selecionar para você baixar. Eu **recomendo** você escolher o **Any, marcar tudo, permitir atualizações** e selecionar até qual qualidade que você quer que o Radarr atualize seu filme.

Por exemplo: você botou o Radarr para baixar Taylor Swift The Eras Tour (2023). Atualmente, não há nenhum release em HD desse filme, apenas gravações do cinema. Não tem problema, se você permitir, o Radarr baixará a gravação de cinema e **continuará** procurando um release melhor. Quando sair, ele baixará a versão em HD e excluirá automaticamente a versão anterior. Esse proceso continuará até chegar no limite que estabeleci, nesse caso, Bluray-1080p.

* Idioma: Original

* Pontuação Mínima de Formato Personalizado: 0

* Atualizar até pontuação de formato personalizado: 0

### **Formato Personalizado**

Agora, estabeleça pontuações para os formatos Personalizados que adicionou anteriormente. Para os indesejados, abaixo de 0. O Radarr não baixará nenhum arquivo com pontuação abaixo de 0. Para os mais desejados, 10.

```
Open Matte 10
3D -10000
BR-DISK -10000
```

**Salve.**

### **CONFIGURAÇÕES -> INDEXADORES**

Retornaremos aqui depois de configurarmos o Prowlarr

#### **CONFIGURAÇÕES -> CLIENTES DE DOWNLOAD**

Clique no + e adicione o qBitTorrent ou o client da sua preferência. Normalmente, as configurações padrão vão servir. Lá embaixo, marque remover downloads importados do histórico do cliente de **download**.

Marque tudo e deixe 1 minuto

**Salve.**

 #### **CONFIGURAÇÕES -> LISTAS (OPCIONAL)**

Aqui, **caso queira**, é onde vai acontecer a adição e remoção de filmes. Tem forma de fazer isso com inúmeros sites. Nesse guia, vou ensinar a fazer com o **Letterboxd**.

Após criar a conta no Letterboxd, você vai procurar uma lista qualquer ou criar a sua própria. Como exemplo, vou utilizar a lista abaixo:

![](https://telegra.ph/file/43f6a86795236a10efd35.png)

Você vai copiar o url da lista e substituir o **letterboxd.com** por

```
letterboxd-list-radarr.onrender.com
```

Isso irá gerar uma lista RSS que será lida pelo Radarr. Resultado:

![](https://telegra.ph/file/6ebfc7e736c02f83506a5.png)

Funciona com filmografias, listas, watchlists etc.

**Recomendo** a criação de uma lista própria para que você tenha controle do que é adicionado ou retirado.

Clique em +, desça tudo até Advanced Lists e clique em Custom Lists

![](https://telegra.ph/file/aa60938827a9f8d127682.png)

* Marque Habilitar, Habilitar adição automática, Monitorar - Somente Filme, Pesquisar ao Adicionar, Disponibilidado Mínima - Anunciado

* Pasta Raiz - Filmes

* List URL - O que você acabou de criar

Teste, e, se der certo, salve.

> **OPÇÕES**

**Limpar Nível da Biblioteca - Remover Filme e Excluir Arquivos**

Toda vez que você tirar um filme da lista, esse filme será apagado do sistema. Útil para quem tem menos espaço no armazamento. Desabilite se não for do seu desejo.

O Radarr atualizará a lista a cada 12 horas.

**Salve.**

* **CONFIGURAÇÕES -> GERAL**

Deixe tudo como está e desça até atualizações se desejar atualizações automáticas

* Ramificação - master

* Automático - Marque

* Mecanismo - Embutido

**Salve.**

> **QUERO ADICIONAR UM FILME**

![](https://telegra.ph/file/ea74e1f30a17074c11620.png)


Clique em **Filmes -> Adicionar Novo** e digite o nome do filme. Selecione Monitorar - **Somente Filme**, Disponibilidade Mínima **Anunciado**, o Perfil de Qualidade da sua preferência e marque **Iniciar a pesquisa pelo filme ausente.**

> **QUERO IMPORTAR FILMES QUE JÁ TENHO BAIXADO**

Mova-os para a pasta **Filmes** recentemente criada e clique em **Importar Biblioteca**

## **4. SONARR - CONFIGURAÇÕES**

Após instalar o Sonarr, acesse-o via http://localhost:8989 ou http:/(seu_ip):8989

Você se deparará com a seguinte tela:

![](https://telegra.ph/file/16d9f21d1b2b05b90ad30.png)

O Sonarr tem configurações mais simples que o Radarr, então vamos lá.

> **SETTINGS -> MEDIA MANAGEMENT**

![](https://telegra.ph/file/137e0cd1976153ed4a87b.png)

* **EPISODE NAMING**

Marque de forma similar ao Radarr e copie os seguinte formato de renomeação de arquivo:

### Standard Episode Format

> {Series TitleYear} - S{season:00}E{episode:00} - {Episode CleanTitle} [{Preferred Words }{Quality Full}]{[MediaInfo VideoDynamicRangeType]}{[Mediainfo AudioCodec}{ Mediainfo AudioChannels]}{[MediaInfo VideoCodec]}{-Release Group}

### Daily Episode Format

> {Series TitleYear} - {Air-Date} - {Episode CleanTitle} [{Preferred Words }{Quality Full}]{[MediaInfo VideoDynamicRangeType]}{[Mediainfo AudioCodec}{ Mediainfo AudioChannels]}{[MediaInfo VideoCodec]}{-Release Group}

### Anime Episode Format

> {Series TitleYear} - S{season:00}E{episode:00} - {absolute:000} - {Episode CleanTitle} [{Preferred Words }{Quality Full}]{[MediaInfo VideoDynamicRangeType]}[{MediaInfo VideoBitDepth}bit]{[MediaInfo VideoCodec]}[{Mediainfo AudioCodec} { Mediainfo AudioChannels}]{MediaInfo AudioLanguages}{-Release Group}


### Series Folder Format

> {Series TitleYear} {imdb-{ImdbId}}

Deixe o restante como está e desça até Root Folders

Adicione a pasta Séries, que você criou anteriormente.

**Salve.**

>  **SETTINGS -> PROFILES**

De forma similar ao Radarr, selecione um perfil de qualidade e marque as qualidades de seu desejo.

> **Language Profiles**

Forma similar de lidar com as qualidades só que agora com idiomas. Marque os idiomas que deseja e até quais quer que o Sonarr atualize.

Salve.

> **SETTINGS -> QUALITY**

Mesma coisa do Radarr

> **SETTINGS -> INDEXERS**

Voltaremos aqui quando configurarmos o Prowlarr

> **SETTINGS -> DOWNLOAD CLIENTS**

Faça literalmente a mesma coisa que fez no Radarr

**Salve.**

> **SETTINGS -> GENERAL**

* Deixe tudo como está e desça até Updates caso deseje que o programa atualize automaticamente

* Branch main

* Automatic marque

**Salve.**

### QUERO ADICIONAR UMA SÉRIE

![](https://telegra.ph/file/2aa296c83a11423f92116.png)

Para adicionar uma série, clique em **Series -> Add New** e digite a serie. Selecione os episódios que deseja baixar, o perfil de qualidade, o tipo da série e marque embaixo **Start sarching for missing episodes**

### QUERO IMPORTAR SÉRIES QUE JÁ TENHO BAIXADAS

Mova-os para a pasta Séries recentemente criada e clique em **Library Import.**

## 5. PROWLARR - CONFIGURAÇÕES

Após instalar o Prowlarr, o acesse através de http://localhost:9696 ou http://(seu_ip):9696.

Esse é bemmmm mais simples. Aqui você vai adicionar os indexadores para finalmente botar o Radarr e o Sonarr para funcionar

Vá para **Settings -> IU** e desça tudo para trocar o idioma para **Portuguese (Brazil)**. Salve e recarregue a página.


### CONFIGURAÇÕES -> APLICATIVOS

![](https://telegra.ph/file/62ebefb962753bd53e1d3.png)

Clique no +, selecione Radarr, deixe tudo como está e, na caixa **API Key**, você deverá retornar ao [Radarr](http://localhost:7878/settings/general), ir para **Configurações -> Geral**, descer um pouco até **Chave da API**, copiar a chave, retornar ao **Prowlarr** e colá-la na caixa **API Key**. Teste e Salve.

Clique no + novamente, selecione Sonarr, deixe tudo como está e, na caixa **API Key**, você deverá retornar ao [Sonarr](http://localhost:8989/settings/general), ir para **Settings -> General**, descer um pouco até **API Key**, copiar a chave, retornar ao Prowlarr e colá-la na caixa **API Key**. Teste e Salve.

### INDEXADORES

![](https://telegra.ph/file/da0c18b9b170bd7daaa8e.png)

Clique em **Adicionar Indexador**, filtre por idioma, categoria e privacidade e vá adicionando tudo que for do seu interesse. Observe que esses indexadores serão as **fontes** de tudo que será baixado no Radarr e Sonarr. O que EU fiz foi filtrar por Privacidade **Público** e Categorias **Movies** e **TV** e adicionei literalmente todos os indexadores da lista, mas vocês fazem o que for da preferêcia de vocês.

Quando terminarem de adicionar todos os indexadores desejados, salvem e apertem em Sincronizar **indexadores do aplcativo**. Isso adicionará os indexadores ao Radarr e ao Sonarr automaticamente.

Agora, se lembram das configurações de Indexadores do Radarr e do Sonarr que deixamos pra depois? Essa é a hora de finalizar. Apenas retornem para aquela página de configuração em ambos os programas e observem se os indexadores foram sincronizados, se não foram, aguarde um tempinho ou observe se a API Key estava correta. Se foram sincronizados, pode fechar.

## 6. BAZARR - CONFIGURAÇÕES

Agora que o download automático de filmes e séries já está concluído, é hora de configurar o download automático das legendas! Para iniciar, crie uma conta no site opensubtitles ponto com

Após instalar o bazarr, acesse-o em http://localhost:6767 ou http://(seu_ip):6767

### SETTINGS -> SONARR

**Use Sonarr => Enabled**

Deixe tudo como está, cole a **API Key** do **Sonarr** que você copiou antes (está em **Settings -> General do Sonarr**) e teste. Se der certo, salve.

### SETTINGS -> RADARR

**Use Radarr => Enabled**

Deixe tudo como está, cole a **API Key** do **Radarr** que você copiou antes (está em **Configurações -> Geral do Radarr**) e teste. Se der certo, salve.

### SETTINGS -> LANGUAGE

![](https://telegra.ph/file/b557d234186f8bcbbf692.png)

qui, você vai adicionar o idioma que vocẽ deseja que sejam baixadas as legendas. Vou dar exemplo pra PT-BR mas vocês podem fazer em qualquer idioma.

Em **Languages Filter**, coloquem **Brazilian portuguese**

* Cliquem em **Add New Profile** e em **Name** escrevam **Português**

* Cliquem em **Add Language** e **Salvem**.

* **Default Settings**

* **Habilitem Series**

* Em **Profile** selecionem Português

* **Habilitem Movies**

* Em **Profile** selecionem **Português**

### SETTINGS => SUBTITLES

Aqui, você vai selecionar as configurações da legenda.

**Alongside Media File** - Arquivo da legenda vai ficar na pasta do arquivo

**Upgrade Previously Downloaded Subtitles** - O Bazarr vai fazer upgrade da legenda se surgir outra melhor.

Deixe o restante como estáou altere de acordo com sua preferência e desça tudo para marcar **Automatic Subtitle Synchronization**. Isso irá sincronizar a legenda automaticamente com o filme. E funciona em 99% das legendas. Isso é mágica.

**Salve.**

### SETTINGS => PROVIDERS

Clique no + e selecione opensubtitles ponto com (o ponto org morreu) e coloque os dados da sua conta. **Salve**

## 7. PLEX - CONFIGURAÇÕES

Chegamos no últimooo!! Nesse ponto, todo o seu sistema já está pronto pra baixar filmes automaticamente legendados em português. Agora, só falta o principal: assistir. Essa é a função do Plex.

Após instalar o Plex, acesse-o através de http://localhost:32400 ou http://(seu_ip):32400 ou app ponto plex ponto tv.

**Adicione o Server**

![](https://telegra.ph/file/a96d91d4442aba216eeb0.png)

**Marque** permita-me acessar minha mídia remotamente

**Adicione as bibliotecas**

Você vai abrir uma biblioteca para Filmes, adicionando a pasta Filmes.

Depois, você vai abrir outra biblioteca para Séries, adicionando a pasta **Séries.**

**Pronto.**

![](https://telegra.ph/file/1a19ead3f9a859b1bcfaa.png)

Agora, algumas configurações adicionais ao Plex. Clique na **Chave de Fenda** no canto superior direito.
 
**Configurações => Biblioteca**

* **Habilite** Digitalizar minha biblioteca automaticamente

* **Habilite** Execute uma varredura parcial quando forem detectadas alterações

* **Desabilite** Escaneie minha biblioteca periodicamente

* **Habilite** Esvaziar lixeira automaticamente após cada varredura

* **Desabilite** Permitir exclusão de mídia

* **Habilite** Executar tarefas de varredura em uma prioridade mais baixa

### Gerenciar => Bibliotecas de mídia

>  Clique em **Editar Biblioteca** da pasta **Filmes**, depois, **Avançado**

* **Varredura** - Plex Movie

* **Agente - Plex Movie**

* **Habilitar** Usar recursos locais

* **Desabilitar** Metadados Locais preferidos

* Tamanho mínimo da coleção automática - 2

* **Coleções - Hide collections but show their ite**

> Clique em **Editar Biblioteca** da pasta **Séries**, depois, **Avançado**

* **Varredura - Plex TV Series**

* **Agente - Plex TV Series**

* **Ordem dos Episodios - The Movie Database**

* **Habilitar** Usar títulos da temporada

* **Habilitar** Usar recursos locais

* **Desabilitar** Metadados Locais preferidos

* **Coleções - Hide Collections but show their items**

## CONCLUSÃO

Guia finalizado, espero que, se seguiram direitinho, tenham conseguido automatizar e tornar a vida de pirataria de vocês muito mais fácil. Eu aprendi muito disso aqui testando por conta própria, mas também muito do que está aqui veio do site [trash guides](https://trash-guides.info), onde eles ensinam bastante sobre os programas Arr, podem ir conferir lá caso tenha surgido alguma dúvida, ou me perguntar também. Muito obrigado a quem leu tudo, deu muito trabalho.
