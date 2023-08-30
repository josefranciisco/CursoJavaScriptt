// Constructor Function ( Função Construtora )
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);





// const p2 = criaPessoa('Camila', 'Abreu', 1.67, 76);
// console.log(p2.fala('falando sobre JS'));
// console.log(p2.imc());