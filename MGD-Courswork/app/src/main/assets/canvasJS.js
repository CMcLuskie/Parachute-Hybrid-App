var canvas;
var canvasContext;
var canvasX;
var canvasY;

var gameOver = false;

function load()
{
	console.log("load");
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	Initialise();

	canvasX= canvas.width / 2;
	canvasY = canvas.height - 30;

	if(!gameOver)
		GameLoop();
}

function Initialise()
{
	if(canvas.getContext)
	{
		AddListeners();
		CanvasResize();	
		InitiateSprites();
	}
}

function GameLoop()
{
	var timeElapsed = (Date.now() - timeStart) / 1000 ;
	
	GameUpdate(timeElapsed);
	GameRender(timeElapsed);
	
	timeStart = Date.now();
	requestAnimationFrame(GameLoop);
}




function CanvasResize()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function GameRender(delta)
{
	//backgroundImage.render(canvas.width, canvas.height);
	parachuteManSprite.render();
	// cloudSprite.render();
	// birdSprite.render();
}