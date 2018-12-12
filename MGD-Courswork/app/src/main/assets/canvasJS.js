var canvas;
var canvasContext;

function CanvasResize()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	// canvas.width = 1080;
	// canvas.height = 2220;
}

function InitialiseCanvas()	
{
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	CanvasResize();
}
