var mensagem;

//primeira fase 
        function george1()
        {
        mensagem = prompt("O que George deve fazer? \n \n 1 - Esperar eles irem embora para começar procurar a tal chave.  \n 2 - Perguntar aos cientistas se precisam de ajuda.");

    if (mensagem == 1) 
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Os cientistas ficaram um bom tempo conversando e George aguardando ansiosamente o momento de entrar na sala. Assim que deu o horário do almoço, os cientistas organizaram a mesa e acharam a bendita chave. Levaram a chave embora. George perdeu a chance de entrar na nave.<a href='index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;

        }
    else if (mensagem == 2)
        {


            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
      <div class='george-cab'></div>
      <h3>George se deu bem.</h3>
  </div>Assim que os cientistas desceram, George pegou a tal chave em suas mãos. Era uma espécie de crachá de identificação de um dos astronautas da tripulação chamado Samuel Bliss. A roupa do astronauta estava em cima da mesa. O que George deve fazer?

 
  
<ul>
<li>1 - Roubar a roupa, o crachá e se passar por Samuel Bliss </li>
<li> 2 - Pegar apenas o crachá e sair de fininho.</li>
</ul>
<button class='botao' onclick="george2()">RESPONDER</button></div>`;

        }
    else 
        {
            alert(`Digite 1 ou 2`);
            return george1();
        }
    }



    //segunda fase 
    function george2()
    {
    mensagem = prompt("O que George deve fazer? \n \n 1 - Ser gentil e falar que a chave está embaixo da roupa espacial. \n 2 - Enrolar e dizer que não achou a chave");

    if (mensagem == 1) 
    {
 
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Os cientistas agradeceram a gentileza de George de avisar que o crachá estava embaixo da roupa espacial. Eles pegaram a chave e foram embora com ela, fechando o laboratório. George sabe que só é possível entrar na nave pelo laboratório. 
        <a href='index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;

    }
    else if (mensagem == 2)
    { 
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
        <div class='sarah-cab'></div>
        <h3>Deu certo!</h3>
    </div>Assim que os cientistas desceram, George pegou a tal chave em suas mãos. Era uma espécie de crachá de identificação de um dos astronautas da tripulação chamado Samuel Bliss. A roupa do astronauta estava em cima da mesa. O que George deve fazer?

        <ul>
        <li>1- Pegar apenas o crachá e sair de fininho.</li>
<li>2 - Roubar a roupa, o crachá e se passar por Samuel Bliss </li>

</ul>
        <button class='botao' onclick="george3()">RESPONDER</button></div>`;
    }
    else 
    {   
        
        alert(`Digite 1 ou 2`);
        return george2();
    }
}


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
        <button class='botao' onclick="george4()">RESPONDER</button></div>`;


    }
    else if (mensagem == 2)
    {

        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>George tentou pegar a roupa do astronauta e vestir, porém um amigo seu passou pelo corredor e o pegou no flagra. George foi demitido e preso. 
        <a href='index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
    }
    else 
    {
        alert(`Digite 1 ou 2`);
        return george3();

    }
}

    //quarta fase 
    function george4()
    {
    mensagem = prompt("Qual caminho George deve seguir? \n \n 1 - T01, uma saída aberta e com escadas.  \n 2 - T02, uma saída fechada, uma espécie de túnel.");

    if (mensagem == 1) 
    {
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>YOU <h2 class='tada'>WIN</h2></h2></div>
        George conseguiu subir as escadas e foi parar dentro da nave. Ele entrou de fininho, mas percebeu que não tinha ninguém lá dentro. Agora George vai para a missão espacial!

        <a href='index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;

    }
    else if (mensagem == 2)
    {

        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Parecia uma boa ideia ir pela T02, mas ele infelizmente encontrou um dos tripulantes conversando no meio do caminho. Ele foi descoberto. 

        <a href='index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
    }
    else 
    {
        alert(`Digite 1 ou 2`);
        return george4();

    }
}
