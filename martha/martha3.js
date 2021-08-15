  //terceira fase 
  function martha3() {
  
  while(mensagem != 1 || mensagem != 2) {
        
  mensagem = prompt("O que Martha deve fazer? \n \n 1 - Dizer que estava já melhorando  \n 2 - Dizer que precisa deitar");

  if (mensagem == 1) 
  {

    location.replace("https://gabrielaalvescosta.github.io/ProjetoModulo1/martha/martha4.html");
    break;
    


  }
  else if (mensagem == 2)
  {

      document.getElementsByClassName('content')[0].innerHTML=`<div class='popup'><div class='gameover-texto'><div class='gameover'><h2 class='tada'>GAME <h2 class='tada'>OVER</h2></h2></div>Os soldados ao verem a "situação" de Martha chamam a ambulância e a levam para o hospital. Lá descobrem que ela estava mentindo. Martha foi presa!

      <a href='https://gabrielaalvescosta.github.io/ProjetoModulo1/index.html'><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a></div></div>`;
      break;
  }
  else 
  {
      alert(`Digite 1 ou 2`);
      break;

  }
}
  }