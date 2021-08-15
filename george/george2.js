var mensagem;

    //segunda fase 
    function george2()
    {
    mensagem = prompt("O que George deve fazer? \n \n 1 - Roubar a roupa, o crachá e se passar por Samuel Bliss  \n 2 - Pegar apenas o crachá e sair de fininho.");

    if (mensagem == 1) 
    {
 
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>George tentou pegar a roupa do astronauta e vestir, porém um amigo seu passou pelo corredor e o pegou no flagra. George foi demitido.  
        <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;

    }
    else if (mensagem == 2)
    { 
        document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'>        <div class='cabecalho'>
        <div class='george-cab'></div>
        <h3>Deu certo!</h3>
    </div>George olhou bem o cartão de Samuel Bliss e sabia que estes cartões eram os que abriam as portas do laboratório secreto. George entrou rapidamente no laboratório e passou o cartão em uma porta que abriu para um elevador secreto que o levava diretamente para a nave. O problema é que havia duas saídas: T01 e T02. T01 era uma saída aberta e com escadas.
    T02 era uma saída fechada, uma espécie de túnel.
    
        <ul>
        <li>1- T01.</li>
<li>2 - T02 </li>

</ul>
<a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/george/george3.html'><button class='botao'>RESPONDER</button></a></div>`;
    }
    else 
    {   
        
        alert(`Digite 1 ou 2`);
        return george2();
    }
}

george2();