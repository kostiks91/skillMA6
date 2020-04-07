var percent = 0;

$(document).ready(init);
var	proc = 0

function init() {
	$("#button1").click(button1);
	$("#button3").click(button3);
	$("#button7").click(button7);
	$("#my-progress-bar")[0].setAttribute('style','width:'+proc+'%');
}

function button1() {
	console.log('1');
	proc = proc+1;
	$("#my-progress-bar")[0].setAttribute('style','width:'+proc+'%');
}

function button3() {
	console.log('3');
	proc = proc+3;
	$("#my-progress-bar")[0].setAttribute('style','width:'+proc+'%');
}

function button7() {
	console.log('7');
	proc = proc +7;
	$("#my-progress-bar")[0].setAttribute('style','width:'+proc+'%');
}
