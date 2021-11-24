/*
 Escreva um programa que seja capaz de identificar se uma palavra é palíndromo ou não. 
 Uma palavra palíndromo é a palavra que é possível se ler da esquerda para a direita e da direita para esquerda e tem o mesmo significado.
 Exemplo: ovo, reviver.
 */

true_palindromo("sabao");

function true_palindromo(palavra){
    for (let i = 0, j = palavra.length -1; i < j; i++, j--){
        if(palavra.charAt(i) != palavra.charAt(j)){
            console.log(palavra + " - NÃO É PALINDROMO");
            return;
        }
    }
    console.log(palavra + " - PALINDROMO");
}

