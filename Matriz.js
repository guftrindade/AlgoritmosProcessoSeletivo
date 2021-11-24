/*
Uma matriz quadrada inteira é um “quadrado mágico” se a soma dos elementos de cada linha, 
a soma dos elementos de cada coluna e a soma dos elementos das diagonais principal e secundária são todas iguais.
Por exemplo, a matriz abaixo é um quadrado mágico:

Faça um algorítmo que recebe uma dimensão N de uma Matriz A(nxn), seguido dos respectivos valores da Matriz.
Verifique se a Matriz A é um "Quadrado mágico", escrevendo é um "Quadrado mágico", caso seja e "Quadrado Não mágico", 
caso não seja.
*/

let n = 3;
let matriz = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];


function verificaMatrizQuadradoMagico(matriz){

    a = matriz[0][0] + matriz[0][1] + matriz[0][2];
    b = matriz[1][0] + matriz[1][1] + matriz[1][2];
    c = matriz[2][0] + matriz[2][1] + matriz[2][2];
    d = matriz[0][0] + matriz[1][0] + matriz[2][0];
    e = matriz[0][1] + matriz[1][1] + matriz[2][1];
    f = matriz[0][2] + matriz[1][2] + matriz[2][2];
    g = matriz[0][0] + matriz[1][1] + matriz[2][2];

    if (a == b && b == c && c == d && d == e && e == f && f == g){
        console.log("Quadrado Mágico");
    }else{
        console.log("Quadrado não Mágico");
    }
}

verificaMatrizQuadradoMagico(matriz);
