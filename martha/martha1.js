var mensagem;

//primeira fase 
        function martha1()
        {
        mensagem = prompt("O que Martha deve fazer? \n \n 1 - Usar o carisma e ser gentil.  \n 2 - Gritar 'socorro'!");

    if (mensagem == 1) 
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Martha chegou nos soldados e disse "está um belo dia hoje, não?". Ficou puxando papo com os soldados até que um percebeu que ela estava mesmo era tentando tirar atenção deles. Eles a expulsaram da região e chamaram a polícia.<a href='index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;

        }
    else if (mensagem == 2)
        {


            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
      <div class='martha-cab'></div>
      <h3>Martha se deu bem!</h3>
  </div>SOCORRO! Socorrooooo! Martha é uma ótima atriz e diz que precisa de ajuda. Disse a eles que está passando muito mal, está grávida e precisa comer alguma coisa. Rapidamente, os soldados se solidarizam e levam Martha para dentro do refeitório do prédio da NASA. 
  Chegando no refeitório, Martha se depara com um dos cientistas e o reconhece. Era Samuel, um de seus colegas de sala na escola. O que Martha deve fazer?
  
<ul>
<li>1 - Ser gentil com Samuel, dizer que o conhece e puxar papo com ele. </li>
<li>2 - Fingir que não o conhece. </li>
</ul>
<button class='botao' onclick="martha2()">RESPONDER</button></div>`;

        }
    else 
        {
            alert(`Digite 1 ou 2`);
            return martha1();
        }
    }



    //segunda fase 
    function martha2()
    {
    mensagem = prompt("O que Martha deve fazer? \n \n 1 - Ser gentil com Samuel, dizer que o conhece e puxar papo com ele. \n 2 - Fingir que não o conhece.");

    if (mensagem == 1) 
    {
 
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Martha tentou puxar assunto, porém Samuel não se lembrava de Martha. Ela estava muito diferente e ele era apenas um nerd na sala o qual ninguém dava bola. Ele não entendeu nada e foi embora. Os soldados entenderam que aquilo era apenas uma trapaça de Martha e a expulsaram da NASA.
        <a href='index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;

    }
    else if (mensagem == 2)
    { 
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
        <div class='martha-cab'></div>
        <h3>Deu certo!</h3>
    </div>Martha continuou seguindo o plano até que Samuel e alguns cientistas viram a confusão e vieram entender o que estava acontecendo. Samuel perguntou o que estava havendo com ela. O que Martha deve fazer?
        <ul>
        <li>1 - Dizer que estava já melhorando</li>
<li>2 - Dizer que precisa deitar </li>

</ul>
        <button class='botao' onclick="martha3()">RESPONDER</button></div>`;
    }
    else 
    {   
        
        alert(`Digite 1 ou 2`);
        return martha2();
    }
}


    //terceira fase 
    function martha3()
    {
    mensagem = prompt("O que Martha deve fazer? \n \n 1 - Dizer que estava já melhorando  \n 2 - Dizer que precisa deitar");

    if (mensagem == 1) 
    {
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
        <div class='martha-cab'></div>
        <h3>Deu certo!</h3>
    </div>A equipe de cientistas levaram Martha para um dos laboratórios e pediu para que ela se sentasse lá e pudesse descansar o período da noite ali. Os cientistas apagam as luzes, fecham as portas e deixam Martha sozinha. 
    "Agora é a hora!" Disse ansiosa, porém decidida! Martha começa a procurar por um cartão magnético que dá acesso a saída para a nave espacial, mas tudo que ela encontra é uma porta secreta que fica ao final do corredor.
    A porta só abre caso seja solucionada uma expressão matemática 2² - 5 x 2 +6 = 0. Qual é a resposta desta equação?
    
        <ul>
        <li>1 - 1</li>
<li>2 - 0</li>

</ul>
        <button class='botao' onclick="martha4()">RESPONDER</button></div>`;


    }
    else if (mensagem == 2)
    {

        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Os soldados ao verem a "situação" de Martha chamam a ambulância e a levam para o hospital. Lá descobrem que ela estava mentindo. Martha foi presa!

        <a href='index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
    }
    else 
    {
        alert(`Digite 1 ou 2`);
        return martha3();

    }
}

    //quarta fase 
    function martha4()
    {
    mensagem = prompt("Qual  é a resposta da equação 2² - 5 x 2 +6 = 0  \n \n 1 - 1  \n 2 - 0");

    if (mensagem == 1) 
    {
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Xii, a conta estava errada! Martha não só conseguiu não abrir a porta como ativou uma sirene altíssima que fez todos os cientistas correrem para a sala onde ela estava. Flagaram ela de pé, muito saudável, mexendo nas senhas da porta. Martha foi enviada para a delegacia.

        <a href='index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;

    }
    else if (mensagem == 2)
    {

        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>YOU <h2 class='tada'>WIN</h2></h2></div>
        Martha utilizou com sucesso suas habilidades matemáticas e conseguiu abrir a porta com sucesso! O mais curioso: ela abriu um túnel que dava acesso direto para a nave. Martha conseguiu embarcar com sucesso, agora ela será feliz em Kepler-186f!

        <a href='index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;

    }
    else 
    {
        alert(`Digite 1 ou 2`);
        return martha4();

    }
}
