 document.write("<script src='canvasJS.js' type='text/javascript'></script>");
 document.write("<script src='sprite.js' type='text/javascript'></script>");
 document.write("<script src='rendering.js' type='text/javascript'></script>");
 document.write("<script src='gameLogic.js' type='text/javascript'></script>");
 document.write("<script src='player.js' type='text/javascript'></script>");

 var deviceAccelerationX;

 var rightPressed;
 var leftPressed;
 
 var timeStart;

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
		LogicStart();
		timeStart = Date.now();
	}
}

function GameLoop()
{
	var timeElapsed = (Date.now() - timeStart) / 1000 ;
	
	LogicUpdate(timeElapsed);
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
	document.addEventListener('keyup', function(){KeyUp(event);});


	document.body.addEventListener("touchcancel", UpTouch, false);
}


function KeyDown(event)
{
	switch(event.which)
	{
		case 37://left arrow
		leftPressed = true;
	break;
	case 39://right arrow
		rightPressed = true;			
	break;
	}
	
}

function KeyUp(event)
{
	switch(event.which)
	{
		case 37://left arrow
			leftPressed = false;
		break;
		case 39://right arrow
			rightPressed = false;			
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
		parachuteMan.Move("Left");
}

function Lerp(start, end, time)
{
	return (1- time) * start + time * end;
}


