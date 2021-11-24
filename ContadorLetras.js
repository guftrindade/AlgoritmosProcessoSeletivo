/*
Escreva um programa que leia todos os caracteres de um arquivo texto e imprima em ordem crescente as percentagens 
das ocorrências das letras encontradas. Os caracteres que não são letras devem ser ignorados.
Exemplo de texto contido em arquivo txt:

"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. 
Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis 
egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."

*/

let texto = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.";
var totalPalavras = texto.length;

for (var i = 0; i < texto.length; i++) {
    if (texto[i] == " " || texto[i] == "." || texto[i] == ","){
        totalPalavras--;
    }
}

function contadorCaracteres(texto, letra) {
    var totalLetra = 0;

    for (var i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() == letra.toLowerCase()) {
            totalLetra++;
        }
    }
    return totalLetra;
}

a = ((contadorCaracteres(texto, "a")/totalPalavras)*100).toFixed(2);
b = ((contadorCaracteres(texto, "b")/totalPalavras)*100).toFixed(2);
c = ((contadorCaracteres(texto, "c")/totalPalavras)*100).toFixed(2);
d = ((contadorCaracteres(texto, "d")/totalPalavras)*100).toFixed(2);
e = ((contadorCaracteres(texto, "e")/totalPalavras)*100).toFixed(2);
f = ((contadorCaracteres(texto, "f")/totalPalavras)*100).toFixed(2);
g = ((contadorCaracteres(texto, "g")/totalPalavras)*100).toFixed(2);
h = ((contadorCaracteres(texto, "h")/totalPalavras)*100).toFixed(2);
i = ((contadorCaracteres(texto, "i")/totalPalavras)*100).toFixed(2);
j = ((contadorCaracteres(texto, "j")/totalPalavras)*100).toFixed(2);
k = ((contadorCaracteres(texto, "k")/totalPalavras)*100).toFixed(2);
l = ((contadorCaracteres(texto, "l")/totalPalavras)*100).toFixed(2);
m = ((contadorCaracteres(texto, "m")/totalPalavras)*100).toFixed(2);
n = ((contadorCaracteres(texto, "n")/totalPalavras)*100).toFixed(2);
o = ((contadorCaracteres(texto, "o")/totalPalavras)*100).toFixed(2);
p = ((contadorCaracteres(texto, "p")/totalPalavras)*100).toFixed(2);
q = ((contadorCaracteres(texto, "q")/totalPalavras)*100).toFixed(2);
r = ((contadorCaracteres(texto, "r")/totalPalavras)*100).toFixed(2);
s = ((contadorCaracteres(texto, "s")/totalPalavras)*100).toFixed(2);
t = ((contadorCaracteres(texto, "t")/totalPalavras)*100).toFixed(2);
u = ((contadorCaracteres(texto, "u")/totalPalavras)*100).toFixed(2);
v = ((contadorCaracteres(texto, "v")/totalPalavras)*100).toFixed(2);
w = ((contadorCaracteres(texto, "w")/totalPalavras)*100).toFixed(2);
x = ((contadorCaracteres(texto, "x")/totalPalavras)*100).toFixed(2);
y = ((contadorCaracteres(texto, "y")/totalPalavras)*100).toFixed(2);
z = ((contadorCaracteres(texto, "z")/totalPalavras)*100).toFixed(2);

console.log("Resultado");
console.log("Total de Letras: " + totalPalavras);
console.log("Percentuais:");

console.log('"a" = ' + a + "%");
console.log('"b" = ' + b + "%");
console.log('"c" = ' + c + "%");
console.log('"d" = ' + d + "%");
console.log('"e" = ' + e + "%");
console.log('"f" = ' + f + "%");
console.log('"g" = ' + g + "%");
console.log('"h" = ' + h + "%");
console.log('"i" = ' + i + "%");
console.log('"j" = ' + j + "%");
console.log('"k" = ' + k + "%");
console.log('"l" = ' + l + "%");
console.log('"m" = ' + m + "%");
console.log('"n" = ' + n + "%");
console.log('"o" = ' + o + "%");
console.log('"p" = ' + p + "%");
console.log('"q" = ' + q + "%");
console.log('"r" = ' + r + "%");
console.log('"s" = ' + s + "%");
console.log('"t" = ' + t + "%");
console.log('"u" = ' + u + "%");
console.log('"v" = ' + v + "%");
console.log('"w" = ' + w + "%");
console.log('"x" = ' + x + "%");
console.log('"y" = ' + y + "%");
console.log('"z" = ' + z + "%");