
var canvasContext;

var parachuteMan;
var cloudSprite;
var birdSprite;

var timeStart;

var deviceAccelerationX;

var gameOver;

 document.write("<script src='canvasJS.js' type='text/javascript'></script>");
 document.write("<script src='sprite.js' type='text/javascript'></script>");
 document.write("<script src='rendering.js' type='text/javascript'></script>");
 document.write("<script src='gameLogic.js' type='text/javascript'></script>");



function load()
{
	console.log("load");
	InitialiseCanvas();
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
		InitialiseSprites();
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

function AddListeners()
{
	window.addEventListener('resize', CanvasResize, false);
	window.addEventListener('orientationchange', CanvasResize, false);
	window.addEventListener('devicemotion', DeviceMotion)

	canvas.addEventListener("touchstart", DownTouch, false);
	canvas.addEventListener("touchmove", XYTouch, true);
	canvas.addEventListener("touchend", UpTouch, false);
	
	document.addEventListener('keydown', function(){KeyDown(event);});

	document.body.addEventListener("touchcancel", UpTouch, false);
}


function KeyDown(event)
{
	switch(event.which)
	{
		case 37://left arrow
			parachuteMan.xPosition -= 100;
		break;
		case 39://right arrow
			var newpos = parachuteMan.xPosition + 100;
			parachuteMan.xPosition = Lerp(parachuteMan.xPosition, newpos, .1);
		break;
	}
	
}

function DownTouch()
{
	
}

function UpTouch()
{
	
}

function XYTouch()
{
	
}

function DeviceMotion(evt)
{
	if(evt.acceleration.x > 1)
		UpdateSprite("parachuteMan", parachuteManSprite.x, parachuteManSprite.y, 1, 0);
}

function Lerp(start, end, time)
{
	return (1- time) * start + time * end;
}


