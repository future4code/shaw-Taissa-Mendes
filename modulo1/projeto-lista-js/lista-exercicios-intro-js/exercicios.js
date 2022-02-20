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
  const condicao = "a b c" === "a b c d"
  console.log(condicao)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const racasDeCachorros = ['Poodle', 'Caramelo', 'Bulldog', 'Pitbul', 'Lhasa']
  const numero = prompt("Didite um numero de 0 a 5")
  console.log(numero) /*Número escolhido foi zero */
  const racaEscolhida = racasDeCachorros[0]
  console.log(racaEscolhida) /*O resultado foi Poodle */

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const numeros = [1, 2, 3, 4, 5]
  const ultimoNumero = numeros[4]
  console.log(ultimoNumero) /*Resposta do console = 5 */

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let numeros = array [0]
  let qElem = array.length()
  let ultimoElem = array [-1]
  array [0] = ultimoElem
  array [qElem -1] = numeros
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("Digite o ano atual") /*2020 */
  const anoDeNascimento = prompt("Digite seu ano de nascimento") /* 2000 */
  const anoDeEmissaoDoRG = prompt("Digite o ano de emissão do seu RG") /*2015 */
  const idade = anoAtual-anoDenascimento
  console.log(idade) /*Resultado = a 20 no console */
  const anoDoRG = anoAtual-anoDeEmissaoDoRG
  console.log(anoDoRG) /* Resultado = a 5 no console */
  const renova = (idade <= 20 && anoDoRG >=5) || ((idade > 20 && idade <= 50) && anoDoRG >= 10) || (idade > 50 && anoDoRG >= 15)
  console.log(renova) /* Resultado = a true no console */

  /* GOSTARIA DE DIVIDIR COM VOCÊS QUE A QUESTÃO 13 FOI A ÚNICA QUESTÃO QUE O CÓDIGO NÃO FOI FEITO POR MIM E SIM
  POR UMA COLEGA DE TURMA. EU NÃO SOUBE FAZER A QUESTÃO E ACHEI O CÓDIGO DELA O MÁXIMO, SEM FALAR QUE VAI SERVIR PARA EU ESTUDAR
  E APRENDER A USAR OS COMPARADORES  */

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem 18 anos?") /* Não */
  const escolaridade = prompt("Voce concluiu o ensino médio?") /*Sim */
  const disponibilidade = prompt("Você possui disponibilidade total de horário?") /* Sim */
  const idade = false
  const escolaridade = true
  const disponibilidade = true
  console.log(idade && escolaridade && disponibilidade) /* Resposta do console = a false */

}
