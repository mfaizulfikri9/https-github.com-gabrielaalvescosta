    //quarta fase 
    function martha4() {
    
        while(mensagem != 1 || mensagem != 2) {
    mensagem = prompt("Qual  é a resposta da equação 2² - 5 x 2 +6 = 0  \n \n 1 - 1  \n 2 - 0");

    if (mensagem == 1) 
    {
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Xii, a conta estava errada! Martha não só conseguiu não abrir a porta como ativou uma sirene altíssima que fez todos os cientistas correrem para a sala onde ela estava. Flagaram ela de pé, muito saudável, mexendo nas senhas da porta. Martha foi enviada para a delegacia.

        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
        break;
    }
    else if (mensagem == 2)
    {

        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>YOU <h2 class='tada'>WIN</h2></h2></div>
        Martha utilizou com sucesso suas habilidades matemáticas e conseguiu abrir a porta com sucesso! O mais curioso: ela abriu um túnel que dava acesso direto para a nave. Martha conseguiu embarcar com sucesso, agora ela será feliz em Kepler-186f!

        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;
        break;
    }
    else 
    {
        alert(`Digite 1 ou 2`);
      break;

    }
}
    }