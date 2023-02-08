/* 

                        Classes

    Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

    Declarando classes

    Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave class seguida pelo nome da classe (aqui "Retangulo").

    class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    }


*/


/* Classes são funções

Uma classe do JavaScript é um tipo de função. As classes são declaradas com a palavra-chave class. Vamos usar a sintaxe de expressão de função para inicializar uma função e a sintaxe de expressão de classe para inicializar uma classe.*/

// Inicializando uma função com uma expressão de função
const x = function() {}

// Inicializando uma classe com uma expressão de classe
const y = class {}


//Podemos acessar o [[Prototype]] de um objeto usando o método Object.getPrototypeOf(). Vamos usar isso para testar a função vazia que criamos.
console.log( Object.getPrototypeOf(x) ); // Output: ƒ () { [native code] }


//Também podemos usar esse método na classe que acabamos de criar.
console.log( Object.getPrototypeOf(y) ); // Output: ƒ () { [native code] }

console.log('-------------');
//Ambos os código declarados com function e class retornam uma função [[Prototype]]. Com protótipos, qualquer função pode se tornar uma instância de construção usando a palavra-chave new.


// Inicializando um construtor com uma função
const constructorFromFunction = new x();
console.log(constructorFromFunction); // Output: x {}  constructor: ƒ ()


// Isso também se aplica às classes.
// Inicializando um construtor com uma classe
const constructorFromClass = new y();
console.log(constructorFromClass); // Output: y {}     constructor: class


// Estes exemplos de construtores de protótipo estão aparentemente vazios, mas podemos ver que sob a sintaxe, ambos os métodos estão alcançando o mesmo resultado final.


console.log('')
console.log('----------Classe 1-----------')
console.log('')


class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

console.log('')
console.log('----------Classe 2-----------')
console.log('')


class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)



