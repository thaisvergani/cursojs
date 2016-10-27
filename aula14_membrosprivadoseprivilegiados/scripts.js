
//revealing module pattern
var pessoa = (function (nome, idade, sexo) {
    //encapsulamento
    //proteção maxima
    var nome = nome;
    var idade = idade;
    var sexo = sexo;
    
    console.log('sou uma iife (autamente invocavel) e uma função anônima');
    
    var getNome = function(){
        return nome;
    }
    
    var setNome = function(value){
        nome = value
    }
    
    var access = { 
        getNome: getNome,
        setNome: setNome
        
    }
    
    Object.freeze(access);
    
    return access;
    
    
})('thais', 20, 'f');

console.log(pessoa);
pessoa.setNome = 't';
console.log(pessoa.setNome);
