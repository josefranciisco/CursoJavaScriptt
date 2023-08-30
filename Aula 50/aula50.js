// Argumentos que sustentam todos os argumentos enviados
// function funcao(){
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento; 
//    }

//    console.log(total);
// }
// funcao(1,2,3,4,5,6,7, 8);

//########################################################//

// function funcao ([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Luiz Otávio', 'Miranda', 30]);

//*******************************************************//

const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
    
};
conta('+', 1, 20, 30, 40, 50);