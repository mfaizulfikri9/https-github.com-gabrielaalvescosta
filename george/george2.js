var mensagem;

    //segunda fase 
    function george2()
    {
    mensagem = prompt("O que George deve fazer? \n \n 1 - Ser gentil e falar que a chave está embaixo da roupa espacial. \n 2 - Enrolar e dizer que não achou a chave");

    if (mensagem == 1) 
    {
 
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Os cientistas agradeceram a gentileza de George de avisar que o crachá estava embaixo da roupa espacial. Eles pegaram a chave e foram embora com ela, fechando o laboratório. George sabe que só é possível entrar na nave pelo laboratório. 
        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;

    }
    else if (mensagem == 2)
    { 
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
        <div class='george-cab'></div>
        <h3>Deu certo!</h3>
    </div>Assim que os cientistas desceram, George pegou a tal chave em suas mãos. Era uma espécie de crachá de identificação de um dos astronautas da tripulação chamado Samuel Bliss. A roupa do astronauta estava em cima da mesa. O que George deve fazer?

        <ul>
        <li>1- Pegar apenas o crachá e sair de fininho.</li>
<li>2 - Roubar a roupa, o crachá e se passar por Samuel Bliss </li>

</ul>
<a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/george/george3.html'><button class='botao'>RESPONDER</button></a></div>`;
    }
    else 
    {   
        
        alert(`Digite 1 ou 2`);
        return george2();
    }
}

george2();