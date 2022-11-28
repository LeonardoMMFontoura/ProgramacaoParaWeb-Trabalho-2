# ProgramacaoParaWeb-Trabalho-2
Repositorio para entrega do segundo trabalho de [INF-1407] Programação Para Web - Trabalho 2
Alunos: Leonardo Monteiro Mastra Fontoura e Ian Geraldi Cordeiro

Funcionalidades:
O piano-man é um aplicativo para tocar piano e gravar suas composições. O fluxo do usuário é o seguinte:
- Primeiro você começa na página de login. Lá, deve providenciar seu usuário e senha. Se já for membro será logado com eles, se não uma nova conta será criada para você.
- Ao entrar no aplicativo pela primeira vez, você ainda não terá nenhuma composição gravada. Nesse caso, para começar, pode brincar com o piano, usando os mouses ou o teclado, conforme o informado abaixo:
'z' -> dó
's' -> ré bemol
'x' -> ré
'd' -> mi bemol
'c' -> mi
'v' -> fá
'g' -> sol bemol
'b' -> sol
'h' -> lá bemol
'n' -> lá
'j' -> si bemol
'm' -> si
',' -> dó uma oitava a cima
- Quando estiver pronto, o usuário pode gravar uma composição. Para isso, deve prover um tempo(digitar um número entre 30 e 240 na caixa) e clicar "Start Recording"
- Ao fazer isso, um metrônomo começará a contar com o tempo selecionado, e o aplicativo estará gravando o que será feito no piano. Agora cabe ao usuário tocar sua composição, e depois clicar no botão "Stop Recording".
- Assim, sua primeira composição estará gravada. Para reproduzí-la, basta clica no botão "recording 1", ou o botão correspondente. Ao reproduzir uma gravação, o usuário pode pará-la a qualquer momento, apertando o botão "Stop Playback".
- Ao gravar uma nova composição, ela ficará guardada no primeiro "slot" disponível. Se, por exemplo, o usuário já tiver uma composição no "slot" 1, 2 e 4, a composição nova será gravada no 3.
- Ao chegar em 5 composições gravadas, o usuário já não pode mais gravar novas. Se tentar fazer isso, um alerta será disparado, o informando que chegou no limite, e que deve deletar uma composição antes de continuar.
- Para tal, o usuário deve clicar nos botões "Delete Recording{número que deseja deletar}"



O que poderia ser implementado em iterações futuras:
- No momento o ritmo é constante, ou seja, ao ouvir o playback o usuário vai ouvir uma nota atrás da outra, sem nenhuma diferença de tempo entre elas, no ritmo do bpm selecionado ao começar a gravação. Em futuras iterações seria desejável que o usuário possa ouvir as notas tocadas no mesmo ritmo que ele tocou.

Observações finais:
- O piano em si foi altamente baseado no deste repositório público:
https://github.com/WebDevSimplified/JavaScript-Piano
Em termos de referências, essa foi a única usada no projeto.
