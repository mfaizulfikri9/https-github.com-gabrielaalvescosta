var mensagem;

//terceira fase 
        function martha4() {

        while(mensagem != 1 || mensagem != 2) {

            mensagem = prompt("Qual  é a resposta da equação 2² - 5 x 2 +6 = 0  \n \n 1 - 1  \n 2 - 0");

        if (mensagem == 1) 
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Os soldados ao verem a "situação" de Martha chamam a ambulância e a levam para o hospital. Lá descobrem que ela estava mentindo. Martha foi presa!
            <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
            break;
        }
        else if (mensagem == 2)
        {
          location.replace("https://gabrielaalvescosta.github.io/ProjetoModulo1/martha/martha4.html");
          break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}