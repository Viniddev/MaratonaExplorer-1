const elementoResposta = document.querySelector("#resposta")
const imputPergunta= document.querySelector("#imputPergunta")
const botaoPerguntar = document.querySelector("#botaoPerguntar")

const respostas = [
  "sim", 
  "claro que sim", 
  "mas é obvio que sim"
]

// fazer pergunta
function fazerPergunta(){

  //input pergunta
  if(imputPergunta.value== ""){
    alert("Digite uma pergunta primeiro.")
    return
  }
  //corrigir bug da resposta != para mesma pergunta  
  botaoPerguntar.setAttribute("disabled", true)
    
  // jogar a pergunta na tela
  const pergunta = "<div>" + imputPergunta.value + "</div>" 
  
  //gerar valores aleatórios
  const totalRespostas = respostas.length
  const numAleatorio = Math.floor(Math.random()* totalRespostas)
  
  //jogar na tela por meio do h3
  elementoResposta.innerHTML= pergunta + respostas[numAleatorio]
  //corrigir bug da resposta != para mesma pergunta 
  elementoResposta.style.opacity= 1;
  //sumir a resposta depois de um tempo 
  setTimeout(function(){
    elementoResposta.style.opacity = 0;
    botaoPerguntar.removeAttribute("disabled")
  }, 3000 )
}