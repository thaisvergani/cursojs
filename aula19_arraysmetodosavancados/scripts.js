var carros = ['vectra', 'gol', 'sentra'];

//filter - devolve array
var resultado = carros.filter(function (value){
    return value == 'gol'
})
console.log(resultado);

    //seria  a mesma coisa que isso:
    carros.forEach(function (item) {
        if (item == 'gol'){
            var carro = Array(item);
            console.log(carro);
        }
    })


//some - percorre o array procurando algum 'gol' - devolve true or false
var some_teste = carros.some(function (value){
    return value == 'gol';
})
console.log(some_teste);

//find - compara - devolve string
var find_teste = carros.find(function (value){
    return value == 'gol';
})
console.log(find_teste);

//reduce
var numeros = [10, 20, 1];
var reduce_teste = numeros.reduce(function (total, nro){
    return total + nro;
})
console.log(reduce_teste);



