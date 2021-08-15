var mensagem;

//primeira fase 
        function sarah2() {

        while(mensagem != 1 || mensagem != 2) {

            mensagem = prompt("O que Sarah deve tentar desparafusar primeiro? \n \n 1 - O boeiro  \n 2 - A porta");

        if (mensagem == 1) 
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Sarah começou a desparafusar o boeiro, porém ela não tinha percebido que próximo havia um fio elétrico partido. Ela encostou a chave de fenda e tomou um choque. 
            <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
            break;
        }
        else if (mensagem == 2)
        {
            location.replace("https://gabrielaalvescosta.github.io/ProjetoModulo1/sarah/sarah3.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}