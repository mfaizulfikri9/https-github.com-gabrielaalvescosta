var mensagem;

//primeira fase 
        function george1()
        {
        mensagem = prompt("O que George deve fazer? \n \n 1 - Esperar eles irem embora para começar procurar a tal chave.  \n 2 - Perguntar aos cientistas se precisam de ajuda.");

    if (mensagem == 1) 
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Os cientistas ficaram um bom tempo conversando e George aguardando ansiosamente o momento de entrar na sala. Assim que deu o horário do almoço, os cientistas organizaram a mesa e acharam a bendita chave. Levaram a chave embora. George perdeu a chance de entrar na nave.
            
            <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;

        }
    else if (mensagem == 2)
        {

            window.location.replace("./george/george2.html");

        }
    else 
        {
            alert(`Digite 1 ou 2`);
            return george1();
        }
    }



