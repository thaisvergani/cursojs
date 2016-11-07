$(document).ready(function() {

    $('button').click(function() {
        $('.title').toggleClass('red-title');
        $('.title').attr('title', 'lelele');
        
        $('input[type="checkbox"]').prop('checked', true);
        $('input[type="text"]').val('chahhhahahha');
        setTimeout(function() {
            $('.title').removeAttr('title').removeAttr('alt');
        }, 2000)
    })
})