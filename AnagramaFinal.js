/*
Uma classe de anagramas é um conjunto de palavras com as mesmas letras, mas por outra ordem.
Exemplo: caras, casar e sacar são anagramas, fio e foi formam outra classe.

Escreva um programa que exiba todas as classes de anagramas e suas palavras a partir da leitura de um arquivo texto.
*/ 

let palavras = "O rato roeu a roupa do rei de roma";

palavras.split(" ").forEach((palavra) => {
    let totalFatorial = calculaFatorial(palavra.length);

  let palavraComLetrasSemRepeticao = removendoElementosDuplicados(palavra);
  let agrupamentoRepeticaoLetra = recuperaAgrupamentoLetrasRepetidas(
    palavraComLetrasSemRepeticao, palavra
  );

  let totalFatorialRepetidos = recuperaTotalFatorialValorRepetido(
    agrupamentoRepeticaoLetra
  );

  let valorMaximoRepeticao = totalFatorial / totalFatorialRepetidos;

  let anagramas = recuperaAnagramas(palavra,valorMaximoRepeticao)
  
  console.log(anagramas.length + " Anagramas da palavra [" + palavra + "] - " + anagramas);
  console.log(""); 
  
});

function recuperaAnagramas(palavra, valorMaximoRepeticao){
    let  anagramas= [];
    let verificando = true;
    while(verificando){
        let novoAnagrama = recuperaAnagrama(palavra);
        if(anagramas.indexOf(novoAnagrama) == -1){
            anagramas.push(novoAnagrama);
        }
        verificando = !(anagramas.length == valorMaximoRepeticao);
    } 

    return anagramas
}

function recuperaAnagrama(text){
        let array = Array.from(text);
      
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;     
        }

        return array.join("");
}

function recuperaAgrupamentoLetrasRepetidas(palavraComLetrasSemRepeticao, palavra) {
  let agrupamentoRepeticaoLetra = [];

  palavraComLetrasSemRepeticao.split("").forEach((letraSemRepeticao) => {
    agrupamentoRepeticaoLetra.push(
      recuperaQuantidadeRepeticaoPorLetra(palavra, letraSemRepeticao)
    );
  });

  return agrupamentoRepeticaoLetra;
}

function recuperaTotalFatorialValorRepetido(agrupamento) {
  let totalFatorialRepetidos = 1;
  agrupamento.forEach((valor) => {
    totalFatorialRepetidos *= calculaFatorial(valor);
  });

  return totalFatorialRepetidos;
}

function recuperaQuantidadeRepeticaoPorLetra(palavra, letra) {
  let total = palavra.split("").filter((x) => {
    return letra == x;
  }).length;
  return total;
}

function calculaFatorial(valor) {
  if (valor < 0) return false;
  
  return valor == 0 ? 1 : valor * calculaFatorial(valor - 1);
}

function removendoElementosDuplicados(value) {
  //O objeto Set permite armazenar valores exclusivos
  return String.prototype.concat(...new Set(value));
}
