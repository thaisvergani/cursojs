var pessoa = {};

Object.defineProperties(pessoa, {
    _nome: {
        value: "Thaís", 
        enumerable: true,
        configurable: false,
        writeble: true,
    },
    _sexo: {
        value: 'F', 
        enumerable: true,
        configurable: true,
        writeble: true,
    },
    _idade: {
        value: 20, 
        enumerable: true,
        configurable: true,
        writeble: true,
    },
    nome: {
        get: function(){
            return this.nome
        },
        set: function(value){
            this._nome = value
        }
    }
});

pessoa.nome = 'lelelel';
console.log(pessoa._nome);

var attrs = Object.getOwnPropertyDescriptor(pessoa, '_nome');
console.log(attrs);


console.log('------para prevenir de add ou remover propriedades ------');

Object.preventExtensions(pessoa);
pessoa.altura = '1.59m';
delete pessoa._nome;
console.log(pessoa);
console.log(Object.isExtensible(pessoa));

console.log('-----ou-------');

Object.seal(pessoa);
console.log(Object.isSealed(pessoa));

console.log('-----ou-------');

Object.freeze(pessoa); // freeze faz com que nao consiga alterar nem propriedades nem valores
console.log(Object.isFrozen(pessoa));

console.log('-----------');

