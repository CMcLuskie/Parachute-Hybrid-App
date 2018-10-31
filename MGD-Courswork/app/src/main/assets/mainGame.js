


var parachuteManSprite
{
	
}
var cloudSprite;
var birdSprite;

var timeStart;

var deviceAccelerationX;

 document.write("<script src='canvasJS.js' type='text/javascript'></script>");




function GameUpdate()
{
	
}

function AddListeners()
{
	window.addEventListener('resize', CanvasResize, false);
	window.addEventListener('orientationchange', CanvasResize, false);
	window.addEventListener('devicemotion', DeviceMotion)

	canvas.addEventListener("touchstart", DownTouch, false);
	canvas.addEventListener("touchmove", XYTouch, true);
	canvas.addEventListener("touchend", UpTouch, false);

	document.body.addEventListener("touchcancel", UpTouch, false);
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

