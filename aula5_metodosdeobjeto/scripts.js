nome = 'nome do objeto global';

var getname_default = function (name, sobrenome) {
    //isso é um método de objeto
    console.log('antes:',this);
    this.nome = name;
    this.sobrenome = sobrenome;
    console.log('depois:',this);
}

//getname_default();

var pessoa =  {
    nome: 'thais (dentro do escopo)',
    sobrenome: 'vergani',
    idade: '20',
    getnome: getname_default
};

var carro = {
    nome: 'gol (dentro do escopo)',
    marca: 'vw',
    getnome: getname_default
}

pessoa.getnome();
carro.getnome();


// call: primeiro parametro é o objeto  e o segundo sao os parametros de dados que vai passar para  a função

getname_default.call(pessoa, 'vini', 'braga');
getname_default.apply(pessoa, ['vini', 'braga']);
// o bind gera uma nova função
var peganome = getname_default.bind(pessoa, 'vini', 'braga');
peganome();