---
title: Portas CGNAT
---

# Como abrir portas no roteador em rede CGNAT

Dependendo do tipo de alocação de portas e com a colaboração do provedor, é possível abrir porta do cliente torrent em rede CGNAT. Primeiro verifique alguns itens abaixo para descobrir se há bloqueios em seu sistema.

## Verificando configurações no próprio sistema

<figure markdown>
  ![](https://i.ibb.co/R9CKgVW/imagem-2023-11-25-112740599.png)
  <figcaption>Habilitar UPnP ou UPnP/NAT no cliente torrent e no roteador</figcaption>
</figure>

<figure markdown>
  ![](https://i.ibb.co/VttpCsJ/imagem-2023-11-25-112933273.png)
  <figcaption>UPnP roteador</figcaption>
</figure>

> As opções acima podem ser diferentes em seu cliente torrent e/ou roteador.

## Verificando o Firewall
Verifique no firewall do sistema operacional se o cliente torrent tem permissão... Caso use soft de terceiros com firewall, verifique também e cuidado com esses anti-vírus cheio de frescuras, com vários módulos inúteis que bloqueiam tudo... menos os vírus.

<figure markdown>
  ![](https://i.ibb.co/LZWhY1q/imagem-2023-11-25-113711486.png)
  <figcaption>Firewall do Windows (1)</figcaption>
</figure>

<figure markdown>
  ![](https://i.ibb.co/1GfS7h4/imagem-2023-11-25-113906218.png)
  <figcaption>Firewall do Windows (2)</figcaption>
</figure>

Com o cliente torrent aberto acesse o site https://portchecker.co ou outro de sua preferência, digite a porta usada no cliente e clique para verificar (o ideal é aparecer aberta). Se o resultado for fechada ou inacessível, precisará abrir essa porta.

Deixe o cliente torrent configurado para usar porta única e não portas aleatórias a cada reinicialização. Configure o pc com IP interno fixo (seja pela placa de rede ou reserva de IP por MAC no roteador).

Acesse o roteador e abra a porta do cliente torrent para o IP interno fixo que definiu no PC... faça o teste de portas novamente. Se continuar fechada pelo menos sabe que o bloqueio não está em seu sistema.

## Quando o bloqueio está no provedor
Alguns provedores fornecem acesso limitado ao roteador... consegue alterar coisas básicas como nome e senha de Wi-Fi, etc, mas Port Forwarding, Servidores Virtuais (dependendo da marca do roteador tem nomes diferentes) não está disponível para acesso limitado... verifique se tem acesso completo ao roteador, caso não tenha solicite com o provedor.

<figure markdown>
  ![](https://i.ibb.co/0Qj1vy5/imagem-2023-11-25-114413369.png)
  <figcaption>Acesso limitado</figcaption>
</figure>

<figure markdown>
  ![](https://i.ibb.co/7K6NQWs/imagem-2023-11-25-114515509.png)
  <figcaption>Acesso completo</figcaption>
</figure>

É o mesmo equipamento, no caso um Fiberhome... só mudou o login e senha de acesso. Notem a opção Port Forwanding (nesse modelo Fiberhome é onde abre a porta do cliente torrent).

## Verificando se está em rede CGNAT

Acesse seu roteador e veja se o IP na WAN é o mesmo que aparece no site [MeuIP](http://www.meuip.com.br/).

- Se for o mesmo IP não está em CGNAT.
- Se for IP diferente está em CGNAT. 

Abaixo exemplo de CGNAT. Os IPs são diferentes:

<figure markdown>
  ![](https://i.ibb.co/549NfVc/imagem-2023-11-25-114632015.png)
  <figcaption>IP na WAN</figcaption>
</figure>

<figure markdown>
  ![](https://i.ibb.co/19MVgGk/imagem-2023-11-25-114719747.png)
  <figcaption>Site Meu IP</figcaption>
</figure>

Em uma rede CGNAT o alocação de portas para os clientes pode ocorrer de duas formas: dinâmica ou estática. Normalmente o provedor que define.

## Dinâmica:
Provedor indica no equipamento de saída da empresa que cada cliente tem direito a uma quantidade específica de portas, o sistema escolhe quais portas ele vai usar. Até o momento não sei como abrir portas nesse modo de alocação dinâmica.

## Estática:
Por questões de registro de log é o mais usado e o provedor define quais portas o cliente irá usar, exemplo:

- Cliente 1 pode usar portas 30401 a 30600;
- Cliente 2 pode suar portas 30601 a 30800;
- E assim por diante.

Se estiver em CGNAT ligue em seu provedor e peça sua faixa de portas. Diga que tentou abrir a porta de todas as formas e não conseguiu. Se pegar um atendente que manja, dirá pra vc se as portas são dinâmicas ou estáticas (a maioria não entende porcaria nenhuma).

Talvez tenha que ligar umas 10x vezes ou mais... não desista! No geral eles não passam essas informações assim que solicitam.
Se passarem sua faixa de porta, ex, 30401 a 30600, escolha uma porta dentro da faixa indicada pelo provedor, configure o cliente torrent para usar essa porta e abra no roteador.

## CGNAT com porta aberta

<figure markdown>
  ![](https://i.ibb.co/pzH7ryV/imagem-2023-11-25-115122462.png)
  <figcaption>IP na WAN</figcaption>
</figure>

## Site Meu IP

<figure markdown>
![](https://i.ibb.co/ZWXQMsk/imagem-2023-11-25-115238935.png)
</figure>

## Site Teste de Portas

<figure markdown>
![](https://i.ibb.co/26BgDc0/imagem-2023-11-25-115347899.png)
</figure>

Pronto! Rede CGNAT com a porta aberta. Sua conexão está perfeita.

Alguns provedores forçam a contratação de IP fixo (IP externo, não interno), alegando ser impossível abrir porta no CGNAT. Analise a opção e escolha o que for melhor para você.

Outros optam por migrar para IPv6! Não tenho informação sobre isso, se é melhor ou pior, como faz para abrir porta, quais as dificuldades de quem está em IPv6.

Toda informação nesse tutorial foram adquiridas com muita pesquisa em fóruns de Hardwares, cliente torrent, YouTube, e um agradecimento especial ao amigo que disponibilizou as imagens que fazem parte desse tuto, pois o mesmo está em rede CGNAT.

Boa sorte!

> Guia feito por Smeagol e [u/Wandrey](https://lemmy.eco.br/u/wandrey)
