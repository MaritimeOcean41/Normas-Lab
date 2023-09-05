const NORMAS = [
	"jaleco",
	"epi",
	"roupas improprias",
	"lentes de contato",
	"joias",
	"cabelo",
	"fumar",
	"sentar",
	"piercings",
	"saida de emergencia",
	"autorizaçao",
	"brincadeiras",
	"capela",
	"ingerir",
	"luvas",
	"manipular materiais",
	"quebra",
	"limpar",
];
var num = Math.floor(Math.random() * NORMAS.length) + 1;

document.addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        check()
    }
});
$('.nor').text("Assunto da Norma: " + num);
function check() {
    var inputed = $('.answer').val();
    if(inputed.toLowerCase() == NORMAS[num - 1]) {
        $('.submit').css("background-color", "green");
    } else {
        $('.submit').css("background-color", "red");
        $('.submit').text("X");
    }
    console.log(num);
}
var gab = true;
function gab_s() {
    if(gab == true) {
        $('.gab').css('display', 'block');
        gab = false;
    }
}