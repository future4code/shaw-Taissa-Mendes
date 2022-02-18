// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = 3
  const largura = 5
  console.log(3 * 5)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Digite o ano atual")
  const anoDeNascimento = prompt("Digite seu ano de nascimento")
  console.log(anoAtual - anoDeNacimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const peso = 85
  const altura =1.8
  const imc = peso / (altura * altura)
  console.log(imc)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
 const nome = prompt("Digite seu nome")
 const idade = prompt("Digite sua idade")
 const email = prompt("Digite seu e-mail")
 const frase =`Meu nome é ${nome}, tenho ${idade} e o meu e-mail é ${email}`
 console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Escreva sua primeira cor favorita")
  const cor2 = prompt("Escreva sua segunda cor favorita")
  const cor3 = prompt("Escreva sua terceira cor favorita")
  const array = [cor1, cor2, cor3]
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const frase = "eu amo macarrão"
  const fraseMaiuscula = frase.toUpperCase()
  console.log(fraseMaiuscula)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const valorDoEspetaculo = 3000
  const valorDeCadaIngresso = 100
  const ingressosParaVender = (valorDoEspetaculo / valorDeCadaIngresso)
  console.log(ingressosParaVender)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}