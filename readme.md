*Atribuição de um valor string a uma var const e exibição{
  const mensagem = "Abraços!!"
  alert((10*100) + mensagem)
}

*Variaveis{
  let -> possivel alterar o valor da var em momentos posteriores;
  const-> literalmente uma constante;
}

*output no console{
  console.log(mensagem)
}

*tipos de var{
  integer -> inteiros;
  float ->  numeros reais;
  boulean -> verdadeiro ou falso;
}

*Condicional 'if'{

  const maiorQueDezoito = 17

  if (maiorQueDezoito>= 18){
    alert("Pode tirar carteira de motorista")
    alert("Bloco true para o retorno bouleano")
  }else{
    alert("Vai ter que esperar mais uns anos")
    alert("Bloco false para o retorno bouleano")
  }

}

*Array/vetor/lista{
  const temp = [21, 23, 24, 25]
  alert("A posição dos valores é iniciada em 0 e
  progride de um em um")
}

*objeto{
  const pessoa = {
    nome: "vinicius",
    idade: 19,
    filhos: ["nenhum", "nenhum", "nenhum"]
  }
  console.log(pessoa.propriedadeDesejada)
}

*função{
  function nomeFunc(){
    console.log("Função em operação...")
  }
  nomeFunc() -> returna o log de dentro da função. 
  Ideal para otimizar codigo.
}

*parâmetros{
  function soma(a, b){
    console.log(a+b)
    *return a+b
  }

  soma(35, 37) -> atribuindo valores às variáveis A e B,
   respectivamente; (meus argumentos)

  return -> retorna o valor que foi calculado la dentro
   da minha function
}

*Extensões da linguagem(Math, date...){
  Math.random() ->  random entre 0 e 1
  Math.floor(1.2)-> arredonda para baixo = 1
  Math.ceil(1.2)-> arredonda para cima = 2
  Math.PI -> 3.14...

}

*DOM - document object model {
  *window[
    window.alert("alert")
  ]
  *document[
    document.write("my text")
  ]
  *manipular elementos[
    document.documentElement.style.background= "grey" (cor q eu quiser)
  ]
}