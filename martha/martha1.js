var mensagem;

//primeira fase 
        function martha1() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("O que Martha deve fazer? \n \n 1 - Usar o carisma e ser gentil.  \n 2 - Gritar 'socorro'!");

        if (mensagem == 1) 
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Martha chegou nos soldados e disse "está um belo dia hoje, não?". Ficou puxando papo com os soldados até que um percebeu que ela estava mesmo era tentando tirar atenção deles. Eles a expulsaram da região e chamaram a polícia.<a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;
            break;
        }
        else if (mensagem == 2)
        {


            location.replace("https://gabrielaalvescosta.github.io/ProjetoModulo1/martha/martha2.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}
