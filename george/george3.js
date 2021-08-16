var mensagem;

//primeira fase 
        function george3() {

            while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("O que George deve fazer? \n \n 1 - Roubar a roupa, o crachá e se passar por Samuel Bliss.   \n 2 - Pegar apenas o crachá e sair de fininho.");

        if (mensagem == 1) 
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Rapidamente, George vestiu as roupas de Samuel Bliss, mas mal sabia ele que o próprio iria entrar na sala logo depois. George foi pego no flagra e demitido.<a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;
            break;
        }
        else if (mensagem == 2)
        {

            location.replace("https://gabrielaalvescosta.github.io/ProjetoModulo1/george/george4.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }
}

