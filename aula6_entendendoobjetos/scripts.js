var pessoa = {};
pessoa.nome = 'thais';
pessoa.linda = true;
pessoa.idade = 20;
pessoa.casada = false;


if ("casada" in pessoa){
    delete pessoa.casada;
}

console.log(pessoa.hasOwnProperty('casada'));
delete pessoa.idade;
console.log(pessoa);


var propriedades = Object.keys(pessoa);
console.log(propriedades);

console.propertyIsEnumerable('casada');
console.propertyIsEnumerable('lenght');