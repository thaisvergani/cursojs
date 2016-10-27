//convenção de usar a primeira maiuscula
function Pessoa(nome, idade, sexo) {
    this._nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    
    Object.defineProperties(this, {
        _nome: {
            enumerable:true, 
            configurable:true,
            writable:false
        },
        nome: {
            get function(){
                return this._nome;
            },
            set function(value){
                this._nome = value;
            }
        }
    });
    
    Object.preventExtensions(this);
}

var eu = new Pessoa('thais', 20, 'F');
console.log(eu);
console.log(eu instanceof Pessoa);
console.log(eu.constructor === Pessoa); 

eu.nome = 'lais'

for (prop in eu){
    console.log(prop, '>>>', eu[prop]);
}