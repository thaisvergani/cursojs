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
    
    var metodos = {
        getNome: getNome,
        getIdade: getIdade,
        getSexo: getSexo,
    }
    
    Object.freeze(metodos);
    
    return metodos;
})('thais', 20, 'f');