(function (nome, idade, sexo) {
    //queremos garantir a integridade da função que cria pessoa
    var nome = nome;
    var idade = idade;
    var sexo = sexo;
    
    var getNome = function(){
        return nome;
    }
    var getIdade = function(){
        return idade;
    }
    var getSexo = function(){
        return sexo;
    }
    var setNome = function(value){
        nome = value;
    }
    var setetIdade = function(value){
        idade = value;
    }
    var setSexo = function(value){
        sexo = value;
    }
    
    var metodos = {
        getNome: getNome,
        getIdade: getIdade,
        getSexo: getSexo,
    }
    
    Object.defineProperties(metodos, {
        getNome: {
            enumerable:false
        },
        getIdade: {
            enumerable:false
        },
        getSexo: {
            enumerable:false
        },     
        setNome: {
            enumerable:false
        },
        setIdade: {
            enumerable:false
        },
        setSexo: {
            enumerable:false
        },
    })
    
    Object.freeze(metodos);
    
    return metodos;
})('thais', 20, 'f');

for (prop in pessoa){
    console.log(prop);
}

