var pessoa = {};

Object.defineProperties(pessoa, {
    _nome: {
        value: "Thaís", 
        enumerable: true,
        configurable: false,
        writeble: ,
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
    name: {
        get: function(){
            return this.nome
        },
        set: function(value){
            this._name = value
        }
    }
});

pessoa.nome = 'José'    