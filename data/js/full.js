var nor = [];
var inp = [];
var CHAREL;

$('.nor').text("Norma: " + num);
document.addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        check(1)
    }
});
function compare(inputed, NORMA) {
    $('.container').css('display', 'none');
    $('.compare').css('display', 'block');

    nor = NORMA.split(" ");
    inp = inputed.split(" ");
    for(i = 0; i < nor.length; i++) {
        if(inp[i] == nor[i]) {
            CHAREL = `<a class="char_txt" style="background-color: green;">${nor[i]}</a>`
        } else {
            CHAREL = `<a class="char_txt" style="background-color: red;">${nor[i]}</a>`
        }
        $('.original_txt').append(CHAREL);
    }
    $('.char_txt').fittext(1.2);
    $('.inputes_txt').text(inputed);
}