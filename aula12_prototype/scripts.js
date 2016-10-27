//convenção de usar a primeira maiuscula
function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

// Pessoa.prototype.getNome = function(){
//    return this.nome;
//}
//Pessoa.prototype.getIdade = function(){
//    return this.idade;
//}

//var eu = new Pessoa('Thaís', 20, 'f');
//var vini = new Pessoa('Vini', 27, 'm');

//console.log(eu.getNome(), eu.getIdade());
//console.log(vini.getNome(), vini.getIdade());

console.log('----------ou --------');

Pessoa.prototype = {
    constructor: Pessoa,
    getNome2: function(){
        return this.nome
    }
}

var eu = new Pessoa('Thaís', 20, 'f');
var vini = new Pessoa('Vini', 27, 'm');

console.log(eu.getNome2());
console.log(eu instanceof Pessoa);
console.log(eu.constructor === Pessoa);