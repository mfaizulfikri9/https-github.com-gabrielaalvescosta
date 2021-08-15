var mensagem;

//segunda fase 

        function martha2() {

        while(mensagem != 1 || mensagem != 2) {

            mensagem = prompt("O que Martha deve fazer? \n \n 1 - Ser gentil com Samuel, dizer que o conhece e puxar papo com ele. \n 2 - Fingir que não o conhece.");

        if (mensagem == 1) 
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Martha tentou puxar assunto, porém Samuel não se lembrava de Martha. Ela estava muito diferente e ele era apenas um nerd na sala o qual ninguém dava bola. Ele não entendeu nada e foi embora. Os soldados entenderam que aquilo era apenas uma trapaça de Martha e a expulsaram da NASA.
            <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
           break;
        }
        else if (mensagem == 2)
        {
            location.replace("https://gabrielaalvescosta.github.io/ProjetoModulo1/martha/martha3.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}