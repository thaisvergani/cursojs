var pessoa = {
    //pripriedades de dados
    nome: 'thais',
    linda: true,
    _idade: 20,
    _sexo: 'feminino',
    casada: false,
    cor: 'rosa',
    
    //propriedades de acesso
    get idade(){
        this.cor = 'branco';
        return this._idade;
    },
    set idade(value){
        this._idade = 21;
    }
};


Object.defineProperty(pessoa, 'idade', {
    enumerable: false,
    configurable: false,
})
pessoa.propertyIsEnumerable('idade');

Object.defineProperty(pessoa, 'nome', {
    enumerable: false, // nao vai aparecer nos loops
    configurable: false, // nao pode ser removida
    value: 'vini', // define valor atravez do atributo value
    writable: false // nao pode mais ser alterado o valor
})


for (prop in pessoa){
    console.log(prop);

}

console.log('-----------------------');

Object.defineProperty(pessoa, 'sexo', {
    get: function(){
        return this._sexo;
    },
    set: function(value){
        this._sexo = value;
    }
});

pessoa.sexo = 'masculino';
var sexo = pessoa.sexo;

console.log(sexo);