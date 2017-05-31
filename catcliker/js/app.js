var cats = [{
	id: 1,
	name : 'Ruano',
	photo : 'img/cats/1.jpg',
	voteup:0,
	votedown:0
},
{
	id: 2,
	name : 'Michi2',
	photo : 'img/cats/2.jpg',
	voteup:0,
	votedown:0
},
{
	id: 3,
	name : 'Michi3',
	photo : 'img/cats/3.jpg',
	voteup:0,
	votedown:0
},
{
	id: 4,
	name : 'Michi4',
	photo : 'img/cats/4.jpg',
	voteup:0,
	votedown:0
},
{
	id: 5,
	name : 'Michi5',
	photo : 'img/cats/5.jpg',
	voteup:0,
	votedown:0
},
{
	id: 6,
	name : 'Michi6',
	photo : 'img/cats/6.png',
	voteup:0,
	votedown:0
},
{
	id: 7,
	name : 'Michi7',
	photo : 'img/cats/7.jpg',
	voteup:0,
	votedown:0
},
{
	id: 8,
	name : 'Michi8',
	photo : 'img/cats/8.jpg',
	voteup:0,
	votedown:0
},
{
	id: 9,
	name : 'Michi9',
	photo : 'img/cats/9.jpg',
	voteup:0,
	votedown:0
}
]
/*$('#cats-list').ready(init());*/
init();
function init(){
	showCats(cats);
	bindEvent();
}
/*function showData(cat){

	$('h1').text(cat.name);
	$('img').attr('src',cat.photo);
	$('#up span').text(cat.voteup);
	$('#down span').text(cat.votedown);
}*/
function clickUp(){
	var cont = parseInt($(this).find('.up').text());
	cont++;
	$(this).find('.up').text(cont);
}
function clickDown(){
	var cont = parseInt($(this).find('.down').text());
	cont++;
	$(this).find('.down').text(cont);
}
function bindEvent(){
	$('.clikerup').click(clickUp);
	$('.clikerdown').click(clickDown);
}
function showCats(cats){
		var template = $('#template')
		var catsTpl;
		for (var i = 0; i < cats.length; i++) {
			var c = cats[i];
			catsTpl = $(template).clone();
			catsTpl.find('h1').text(c.name);
			catsTpl.find('img').attr('src',c.photo);
			catsTpl.find('.clikerup span').text(c.voteup);
			catsTpl.find('.clikerdown span').text(c.votedown);
			$('#cats-list').append(catsTpl);
		}
}