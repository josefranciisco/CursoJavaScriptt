// Constructor Function ( Função Construtora )
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome}  ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split('');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        fala(assunto = 'falando sobre NADA') {
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
const p2 = criaPessoa('Jojo', 'Toddynho', 1.5, 150);
const p3 = criaPessoa('Luiza', 'Sonza', 1.78, 95);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);



// const p2 = criaPessoa('Camila', 'Abreu', 1.67, 76);
// console.log(p2.fala('falando sobre JS'));
// console.log(p2.imc());