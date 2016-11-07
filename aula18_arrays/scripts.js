var carros = ['vectra', 'gol', 'sentra'];
// pop - remove o ultimo
carros.pop();
console.log(carros);

//length
console.log(carros.length);

//push - adiciona no final
carros.push('celta');
console.log(carros);

//shift - remove o primeiro
carros.shift();
console.log(carros);

//unshift - acrescenta no inicio 
carros.unshift('fusca');
console.log(carros);

//splice - retorna qtd de itens a partir da posicao 
carro = carros.splice(1, 1);
console.log(carros);

var getcarro = function(posicao, qtd){
    var carros = ['vectra', 'gol', 'sentra'];
    return carros.splice(posicao, qtd);
}

var novoscarros = getcarro(1, 2);
console.log(novoscarros);

// slice - copia o array
var novalista = carros.slice();
console.log(novalista);
