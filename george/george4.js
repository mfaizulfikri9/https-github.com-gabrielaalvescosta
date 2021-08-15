var mensagem;



    //quarta fase 
    function george4()
    {
    mensagem = prompt("Qual caminho George deve seguir? \n \n 1 - T01, uma saída aberta e com escadas.  \n 2 - T02, uma saída fechada, uma espécie de túnel.");

    if (mensagem == 1) 
    {
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>YOU <h2 class='tada'>WIN</h2></h2></div>
        George conseguiu subir as escadas e foi parar dentro da nave. Ele entrou de fininho, mas percebeu que não tinha ninguém lá dentro. Agora George vai para a missão espacial!
s
        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;

    }
    else if (mensagem == 2)
    {

        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Parecia uma boa ideia ir pela T02, mas ele infelizmente encontrou um dos tripulantes conversando no meio do caminho. Ele foi descoberto. 

        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
    }
    else 
    {
        alert(`Digite 1 ou 2`);
        return george4();

    }
}
