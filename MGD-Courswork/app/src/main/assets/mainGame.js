 document.write("<script src='canvasJS.js' type='text/javascript'></script>");
 document.write("<script src='sprite.js' type='text/javascript'></script>");
 document.write("<script src='rendering.js' type='text/javascript'></script>");
 document.write("<script src='gameLogic.js' type='text/javascript'></script>");
 document.write("<script src='player.js' type='text/javascript'></script>");
 document.write("<script src='enemy.js' type='text/javascript'></script>");

 var deviceAccelerationX;

 var rightPressed;
 var leftPressed;
 var upPressed;
 var downPressed;
 
 var timeStart;

 var soundManager;

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

		if (soundManager != null) {soundManager.playMusic(0); //Play main music
			alert("here");
	}
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
		case 13://enter key (used for testing)

			break;
		case 37://left arrow
		leftPressed = true;
			break;
		case 38://up arrow
			upPressed = true;
			break;
		case 39://right arrow
			rightPressed = true;			
			break;
		case 40://down arrow
			downPressed = true;
			break;
		case 65://a
			leftPressed = true;
			break;
		case 68://d
			rightPressed = true;
			break;
		case 83://s
			downPressed = true;
			break;
		case 87://w
			upPressed = true;
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
		case 38://up arrow
			upPressed = false;
			break;
		case 39://right arrow
			rightPressed = false;			
			break;
		case 40://down arrow
			downPressed = false;
			break;
		case 65://a
			leftPressed = false;
			break;
		case 68://d
			rightPressed = false;
			break;
		case 83://s
			downPressed = false;
			break;
		case 87://w
			upPressed = false;
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

function BoundingBoxCollision(rect1, rect2)
{
	if((rect1.x < rect2.x + rect2.width) && (rect1.x + rect1.width > rect2.x)
		&& (rect1.y < rect2.y + rect2.height) && (rect1.y + rect1.height > rect2.y))
		{
			return true;
		}
		else return false;
}

function CircleCollision()
{

}

function getRandomX()
{
	return Math.floor((Math.random() * canvas.width) + canvas.width);
}

function getRandomY()
{
	return Math.floor((Math.random() * canvas.height) + canvas.height);
}

