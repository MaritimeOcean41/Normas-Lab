// Normas 'abreviadas' [s/ acento ç - E em minúsculo]
const ABBR_NORMAS = [
	'jaleco',
	'epi',
	'roupas improprias',
	'lentes de contato',
	'joias',
    'cabelo',
	'fumar',
	'sentar',
	'piercings',
	'saida de emergencia',
	'autorizacao',
	'brincadeiras',
	'capela',
	'ingerir',
	'luvas',
	'manipular materiais',
	'quebra',
	'limpar',
];
// Normas inteiras [s/ acento ç - E em minúsculo]
const NORMAS = [
	'e obrigatorio o uso de avental de manga comprida, limpo e em condicoes de trabalho',
	'utilizar os epi (equipamento de protecao individual) sempre',
	'nao e permitido o uso de sandalias, chinelos ou sapatos abertos, bem como shorts, saias e blusinhas tipo "top" ou de alca',
	'e expressamentemente proibido o uso de lentes de contato durante os trabalhos de laboratorio',
	'e proibido usar joias (braceletes, aneis, colares, correntes, etc) e outros adornos',
	'manter o cabelo preso, as unhas cortadas e as maos limpas',
	'e proibido fumar, comer, beber ou mascar chiclete no laboratorio',
	'e proibido sentar nas bancadas ou no chao',
	'piercings e similares devem ser mantidos cobertos com esparadrapo ou micropore durante a presenca em laboratorio',
	'esteja sempre certo da saida de emergencia, da localizacao do chuveiro de emergencia e dos extintores de incendio',
	'durante as aulas praticas, os alunos nao poderao entrar no laboratorio ou sair dele sem a autorizacao do professor',
	'e proibido correr ou fazer brincadeiras de qualquer especie dentro do laboratorio, em especial com reagentes ou vidrarias',
	'utilize a capela para manipular reagentes que liberem vapores ou solventes volateis',
	'nenhum material do laboratorio ou que tenha sido produzido nele deve ser ingerido, cheirado ou espalhado pela pele',
	'descartar as luvas no lixo do laboratorio e lavar bem as maos',
	'tenha cuidado ao manipular material aquecido ou bico de gas',
	'em qualquer acidente ou quebra de material comunicar o professor imediatamente',
	'ao termino do trabalho, encha as pissetas vazias limpe a bancada e todo o material utilizado ao sair guarde os bancos sob as bancadas',
];

// Sortear uma norma
var num = Math.floor(Math.random() * NORMAS.length) + 1;

// Checar se escreveu certo
function check(opt) {
    var inputed = $('.answer').val().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split('.').join(""); // Passar para a formatação correta
    switch(opt) {
        case 0:
            if(inputed == ABBR_NORMAS[num - 1]) {
                $('.submit').css("background-color", "green");
            } else {
                $('.submit').css("background-color", "red");
                $('.submit').text("X");
            }
            location.reload();
        case 1:
            if(inputed == NORMAS[num - 1]) {
                $('.submit').css("background-color", "green");
            } else {
                $('.submit').css("background-color", "red");
                $('.submit').text("X");
            }
			location.reload();
    }
}