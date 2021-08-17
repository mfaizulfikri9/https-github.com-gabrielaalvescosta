var mensagem;

//primeira fase 
        function sarah1() {

        while(mensagem != 1 || mensagem != 2) {

            mensagem = prompt("Sarah deve aceitar? \n \n 1 - Sim, que mal há? \n 2 - Não, deve ser alguma pegadinha.");

        if (mensagem == 1) 
        {
            location.replace("https://gabrielaalvescosta.github.io/ProjetoModulo1/sarah/sarah2.html");
            break;
        }
        else if (mensagem == 2)
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Sarah tentou falar com o carcereiro e perguntar o que era aquilo na caixa. O carcereiro jogou a caixa fora, apagou as luzes do andar e foi embora. Sarah perdeu o embarque.<a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}
