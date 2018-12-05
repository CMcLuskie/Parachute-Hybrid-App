var canvas;
var canvasContext;

function CanvasResize()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	// canvas.width = 770;
	// canvas.height = 1480;
}

function InitialiseCanvas()	
{
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	CanvasResize();
}
