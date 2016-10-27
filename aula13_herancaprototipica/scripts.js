//convenção de usar a primeira maiuscula
function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

var makePessoa = function(nome, idade, sexo){
    //isso é um factory funcion
    return {
        nome: nome, 
        idade: idade, 
        sexo: sexo,
        getIdade: function(){
            return this.idade;
        }
    }
}

var thais1 = new Pessoa("thais1", 20, 'f');
var thais_factory = makePessoa("thais_factory", 22, 'f');
console.log(thais1, thais_factory);

console.log(Object.getPrototypeOf(thais1));
console.log(Object.getPrototypeOf(thais_factory));

var thais_copia = Object.create(thais_factory, {
    enderece: {
        value: 'antonio broilo',
        writable: true,
        configurable: true,
        enumerable: true
    }
})

console.log(thais_factory.getIdade())
console.log(thais_copia.getIdade())