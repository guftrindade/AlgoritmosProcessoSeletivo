/*
Verifica se um triângulo é isóceles, escaleno ou equilátero
 */

function verificaTriangulo (a, b, c){
    if ((a < (b + c)) && (b < (a + c)) && (c < (a + b))){
        if ((a == b) && (b == c)){
            console.log("Triângulo Equilátero");
        }else{
            if ((a == b) || (b == c) || (a == c)){
                console.log("Triângulo Isóceles");
            }else{
                console.log("Triângulo Escaleno");
            }
        }
    }else{
        console.log("Não é possível formar um triângulo");
    }
}

verificaTriangulo(1,2,3);
verificaTriangulo(3,4,5);
verificaTriangulo(2,2,4);
verificaTriangulo(4,4,4);
verificaTriangulo(5,3,3);