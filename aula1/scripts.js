// tipos primitivos
var idade = 18;
var sexo = 'f'; 
var nome = 'Thaís';
var existe = true;
var endereco = null;

var nome_method = nome.search('hal');
//console.log(nome_method);

//tipos de referencia
var pessoa = new Object();
var pessoa2 = {
    'nome':'thaizete',
    'idade':18
};

var mostranome = new Function("console.log('Thaís');");
mostranome();
console.log(typeof pessoa);
console.log(mostranome instanceof Function);


var carros = ['gol', 'uno', 'corsa'];
var auto = new Object();

//utilizar este teste para testar array
console.log('Array.isArray(carros):', Array.isArray(carros))

