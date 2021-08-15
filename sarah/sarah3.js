var mensagem;

//primeira fase 
        function sarah3() {

        while(mensagem != 1 || mensagem != 2) {

            mensagem = prompt("Qual ela deve utilizar? \n \n 1 - 666  \n 2 - 186");

        if (mensagem == 1) 
        {
            location.replace("https://gabrielaalvescosta.github.io/ProjetoModulo1/sarah/sarah4.html");
            break;
        }
        else if (mensagem == 2)
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Sarah escreveu 186, afinal 186 é o nome da missão, certo? Errado! A porta disparou uma sirene a qual chamou atenção de todos os cientistas e seguranças. Ela foi pega.<a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}