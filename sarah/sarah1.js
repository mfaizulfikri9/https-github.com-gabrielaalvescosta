var mensagem;

//primeira fase 
        function sarah1()
        {
        mensagem = prompt("Sarah deve aceitar? \n \n 1 - Sim, que mal há? \n 2 - Não, deve ser alguma pegadinha.");

    if (mensagem == 1) 
        {
      document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
      <div class='sarah-cab'></div>
      <h3>Sarah se deu bem.</h3>
  </div>Sarah abriu a caixa e há uma ferramenta e uma carta escrito:
"Querida Sarah, sei o tanto que você sofreu até chegar aqui. Aceite esta ferramenta como um presente. Espero que lhe ajude. Anônimo 186."
Era uma chave de fenda. Sarah observa a sua cela e percebe que há um boeiro quadrado, fechado com parafusos, porém ela também percebe que a porta de sua cela também possui parafusos semelhantes. 
O que Sarah deve tentar desparafusar primeiro?
<ul>
<li>1 - O boeiro</li>
<li>2 - A porta</li>
</ul>
<button class='botao' onclick="sarah2()">RESPONDER</button></div>`;

        }
    else if (mensagem == 2)
        {
            document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Sarah tentou falar com o carcereiro e perguntar o que era aquilo na caixa. O carcereiro jogou a caixa fora, apagou as luzes do andar e foi embora. Sarah perdeu o embarque.<a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;
        }
    else 
        {
            alert(`Digite 1 ou 2`);
            return sarah1();
        }
    }



    //segunda fase 
    function sarah2()
    {
    mensagem = prompt("O que Sarah deve tentar desparafusar primeiro? \n \n 1 - O boeiro  \n 2 - A porta");

    if (mensagem == 1) 
    {
 
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Sarah começou a desparafusar o boeiro, porém ela não tinha percebido que próximo havia um fio elétrico partido. Ela encostou a chave de fenda e tomou um choque. 
        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;

    }
    else if (mensagem == 2)
    { 
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
        <div class='sarah-cab'></div>
        <h3>A porta abriu!</h3>
    </div>Depois de muito sacrifício, Sarah conseguiu desparafusar a porta e sair da cela, porém há mais uma porta para que ela possa sair daquele andar. Ela encontra uma porta com uma espécie de cadeado com senha. Depois de muito bisbilhotar o setor, ela encontra 2 sequências de 3 números. Qual ela deve utilizar?
        <ul>
<li>1 - 666</li>
<li>2 - 186</li>
</ul>
        <button class='botao' onclick="sarah3()">RESPONDER</button></div>`;
    }
    else 
    {   
        
        alert(`Digite 1 ou 2`);
        return sarah2();
    }
}


    //terceira fase 
    function sarah3()
    {
    mensagem = prompt("Qual ela deve utilizar? \n \n 1 - 666  \n 2 - 186");

    if (mensagem == 1) 
    {
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
        <div class='sarah-cab'></div>
        <h3>Credo, abriu!</h3>
    </div>Ufa, os cientistas escolheram uma sequência numérica muito estranha, mas acredito que foi proposital, assim ninguém se atreveria a entrar naquela sala. 
        Confiante, entrou em um laboratório secreto o qual dava acesso direto para a nave. Sarah se deparou com dois caminhos diferentes: um aparentemente muito iluminado e mais fácil e o segundo mais curto, porém mais escuro. Qual caminho Sarah deve seguir?
        <ul>
        <li>1 - O caminho mais iluminado, é claro.</li>
        <li>2 - O caminho mais escuro, para ninguém ver.</li> 
        </ul>
        <button class='botao' onclick="sarah4()">RESPONDER</button></div>`;

    }
    else if (mensagem == 2)
    {

        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Sarah escreveu 186, afinal 186 é o nome da missão, certo? Errado! A porta disparou uma sirene a qual chamou atenção de todos os cientistas e seguranças. Ela foi pega.
        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
    }
    else 
    {
        alert(`Digite 1 ou 2`);
        return sarah3();

    }
}

    //quarta fase 
    function sarah4()
    {
    mensagem = prompt("Qual caminho Sarah deve seguir? \n \n 1 - O caminho mais iluminado, é claro!  \n 2 - O caminho mais escuro, para ninguém ver.");

    if (mensagem == 1) 
    {
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>YOU <h2 class='tada'>WIN</h2></h2></div>
        Morrendo de medo, Sarah consegue correr e embarcar na nave. Havia algumas pessoas lá dentro dormindo, então não foi difícil ela se esconder debaixo das poltronas. Uma hora iriam notar ela lá, mas aí seria tarde demais, eles já estarão rumo a Kepler-186f.
        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div></div>`;

    }
    else if (mensagem == 2)
    {

        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Era mais lógico ir pelo caminho mais escuro, afinal ela não queria ser vista por ninguém, porém mal sabia ela que no caminho estavam 2 policiais de escolta. Ela foi pega.

        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
    }
    else 
    {
        alert(`Digite 1 ou 2`);
        return sarah4();

    }
}
