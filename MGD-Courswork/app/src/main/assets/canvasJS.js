var canvas;
var canvasContext;

function CanvasResize()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function InitialiseCanvas()	
{
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	CanvasResize();
}

function updateCanvas()
{

}



