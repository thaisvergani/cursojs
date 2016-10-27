var pessoa = {
    nome: 'thais',
    linda: true,
    _idade: 20,
    casada: false,
    cor: 'rosa',
    //getter
    get idade(){
        this.cor = 'branco';
        return this._idade;
    },
    //setter 
    set idade(value){
        this._idade = 21;
    }
};

console.log(pessoa.cor);
console.log(pessoa.idade);
console.log(pessoa.cor);

