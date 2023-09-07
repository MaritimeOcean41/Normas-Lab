$('.nor').text("Assunto da Norma: " + num);
document.addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        check(0)
    }
});