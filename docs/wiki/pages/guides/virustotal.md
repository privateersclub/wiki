---
title: Como verificar um arquivo no Virus Total corretamente
---


# 🪶 ➜ Como verificar um arquivo no Virus Total corretamente
Guia útil para ajudá-lo em suas viagens marítimas.

---

Bem, a primeira coisa que se deve verificar numa análise do Virus Total é se a data da última análise é realmente recente. Se não for, execute novamente a análise (podem ser encontradas novas detecções e removidos os falsos positivos antigos).

Em seguida, vá para a guia de detalhes e dê uma olhada na hora de criação, primeira vez que foi visto na internet e a primeira submissão. A hora de criação nem sempre é confiável, pois pode ser falsificada, mas se for obviamente falsa (por exemplo, 2099), isso deve ser motivo de preocupação. Quanto aos outros dois, se forem anteriores à data de lançamento real de um produto (por exemplo, um jogo saiu há 2 semanas, mas foi visto pela primeira vez há 3 anos), então é provavelmente um malware usado e reciclado (assumindo que não é um arquivo genérico).

A seguir, veja os nomes com que foi enviado. Os nomes que se parecem com hashes (970f38c3800c85de75bd3ba253d46069.exe) ou 'sample1.exe' podem ser ignorados, mas se estiver a aparecer como 5 nomes diferentes para 5 programas completamente diferentes, então provavelmente é malware.

No caso de software pirateado, as "signatures" não serão úteis, uma vez que os arquivos passam por "cracks" ou "patched" o tornam inválidos, mas normalmente se houvesse uma assinatura inválida seria suspeito.

Os Execution Progenitor/Resource Parents são instaladores ou arquivos, coisas que continham, descartavam, ou baixavam o arquivo que você está analisando. Se estiver analisando um instalador e não tiver extraído de outro arquivo, então isso pode ser ignorado, pois normalmente isso mostra que são instaladores falsos - eles largam o instalador verdadeiro, executam-no para que o utilizador não perceba que algo está errado e rodam seu script malicioso em segundo plano.

Dropped Files/Bundled Files mostra os arquivos contidos no arquivo verificado, extraídos quando o usuário o executa ou abre. Particularmente ao analisar um arquivo de arquivo, ver estes resultados é mais útil do que os do arquivo. O VT (Virus Total) funciona melhor com arquivos .zip, por isso, se tiver um arquivo .rar ou outro, extraia os arquivos, adicione-os a um .zip e faça upload. Se estiver lidando com qualquer arquivo protegido por senha, .zip ou não, faça o mesmo.

Analizar os endereços de IP/URLs pode ser útil se os resultados forem extremamente maliciosos, mas alguns dos antivírus (AVs) são excessivamente responsivos e marcarão qualquer coisa sobre a qual tenham ouvido. Se o arquivo se destinar a ser apenas um keygen ou patcher e estiver a fazer solicitações, isso é suspeito.

Arquivos e chaves sendo abertos e lidos não é particularmente preocupante, escrever e apagar seus próprios arquivos temporários também não é, e obviamente um instalador vai escrever em alguns lugares diferentes, mas se ele começa a ir onde não precisa estar, isso é suspeito.

As ações destacadas raramente são esclarecedoras, mas se vir algo como "todos os seus arquivos pertencem a nós", queime-o com fogo.

Por último, voltamos ao guia de detecções. Se forem praticamente todas genéricas/gen/susgen (ou essencialmente detecções genéricas como W32.Trojan.Gen), ou AI/ML (algumas detecções AI/ML usarão etiquetas de uma única palavra como 'malicioso', 'suspeito' e 'inseguro'), e se não houver nada específico, então normalmente significa que estão a detectar algo que parece malware, mas não corresponde a nenhum malware conhecido. Isso é comum no caso de software pirateado, uma vez que utilizam métodos semelhantes aos do malware (por exemplo, empacotamento de arquivos, encriptação, ofuscação, injeção de arquivos).

Também são comuns para cracks, patches, keygens, ativadores, etc. as detecções riskware, hacktool e not-a-virus (a última é específica do Kaspersky).

Também é preciso ter em mente a idade do arquivo (use Primeira Vez Visto e o Primeiro Envio para isso), pois algo com apenas algumas horas há alguns dias provavelmente não terá muitas detecções precisas, enquanto qualquer coisa com mais de algumas semanas deverá ter. Lidando com um arquivo de 2 anos como este, se for apenas o acima mencionado, provavelmente está tudo bem.

Se houver várias detecções específicas semelhantes, é nessa altura que deve ficar preocupado.

Espero que isso ajude.

Não é tão simples como "se tiver < 5 detecções, provavelmente está bem".

➜ Esse guia é baseado em um comentário feito no [r/Piracy](https://reddit.com/r/Piracy) pelo usuário: [u/ilike2burn](https://reddit.com/u/ilike2burn) e traduzido por [u/Heus-Sueh](https://tesseract.lemmy.eco.br/u/Heus_Sueh@lemmy.dbzer0.com).

---
