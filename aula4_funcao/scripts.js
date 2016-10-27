/* 
function mostranome(){
    console.log('thais declaração');
}

mostranome(); 
 na leitura do js, a função em declaração mostranome vai pro início do arquivo.

se a função estiver como expressão como na mostranome2, isso nao acontece, e só vai ser possível chamar a função se ja estiver sido criada antes

*/

var mostranome2 = function(nome, sobrenome){
    var qtd = arguments.length;
    console.log(arguments.length);
    var nomecompleto = '';
    
    while(qtd > 0){
        nomecompleto += ' ' + arguments[qtd-1];
        -- qtd ;
    }
    console.log(nomecompleto);
}

mostranome2('thais', 'vergani', 'lelele');
