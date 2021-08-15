var mensagem;

    //terceira fase 
    function george3()
    {
    mensagem = prompt("O que George deve fazer? \n \n 1- Pegar apenas o crachá e sair de fininho.  \n 2 - Roubar a roupa, o crachá e se passar por Samuel Bliss");

    if (mensagem == 1) 
    {
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
        <div class='george-cab'></div>
        <h3>Deu certo!</h3>
    </div>George olhou bem o cartão de Samuel Bliss e sabia que estes cartões eram os que abriam as portas do laboratório secreto. George entrou rapidamente no laboratório e passou o cartão em uma porta que abriu para um elevador secreto que o levava diretamente para a nave. O problema é que havia duas saídas para a saída: T01 e T02. 
        <ul>
        <li>1 - T01, uma saída aberta e com escadas.</li>
<li>2 - T02, uma saída fechada, uma espécie de túnel.</li>

</ul>
<a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/george/george4.html'><button class='botao'>RESPONDER</button></a></div>`;


    }
    else if (mensagem == 2)
    {

        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>George tentou pegar a roupa do astronauta e vestir, porém um amigo seu passou pelo corredor e o pegou no flagra. George foi demitido e preso. 
        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
    }
    else 
    {
        alert(`Digite 1 ou 2`);
        return george3();

    }
}

george3();