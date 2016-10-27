function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  
}

eu = new Pessoa('thais', 20, 'f');
// sem o new, o this da funcao passa a referenciar o escopo global
eu2 = Pessoa('thais', 20, 'f');

console.log('eu', eu);
console.log('eu2', eu2);


function Pessoa2(nome, idade, sexo) {
    //pra prevenir esquecer de usar o new

    if (this instanceof Pessoa2){
        
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    } else {
        return new Pessoa(nome, idade, sexo);
    }
  
}

eu3 = Pessoa2('thais', 20, 'f');
console.log('eu3', eu3);
