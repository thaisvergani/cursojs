/*
addClass
removeClass
hasClass
*/

$(document).ready(function() {
    var classe = 'red-title';
    
    setInterval(function() {
        //executa a cada 1 segundos
        console.log('interval')        
        
        $('.title').addClass(classe);
        
        setTimeout(function() {
            //espera 1 segundos para executar
            $('.title').removeClass(classe);
            console.log('set timeout');
        }, 500);    
        
        console.log('oi');
        
        
    }, 500);

})