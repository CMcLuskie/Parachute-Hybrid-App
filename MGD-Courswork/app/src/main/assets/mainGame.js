var canvas;
var canvasContext;
var canvasX;
var canvasY;

var gameOver = false;

var backgroundImage;
var parachuteManSprite;
var cloudSprite;
var birdSprite;

var timeStart;

var deviceAccelerationX;


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

function InitiateSprites()
{
	UpdateSprite("background", 0,0, 0,0);
	UpdateSprite("parachuteMan", 0, 0, 0, 0)
			//	backgroundImage = new aSprite(0, 0, "Art/sky.png", 0, 0);//sets position, file location, and velocity of the sprite

}

function UpdateSprite(sprite, x, y, velocX, velocY)
{
	switch (sprite)
	{
		case "background":
			backgroundImage = new aSprite(x, y, "Art/sky.png", velocX, velocY);//sets position, file location, and velocity of the sprite
			break;
		case "parachuteMan":
			parachuteManSprite = new aSprite(x, y, "Art/man.png", velocX, velocY);
			break;
		case "cloud":
			cloudSprite = new aSprite(x, y, "Art/man.png", velocX, velocY);
			break;
		case "bird":
			birdSprite  = new aSprite(x, y, "Art/man.png", velocX, velocY);
			break;
	}
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

function aSprite(x, y, imageSource, velX, velY)
{
	this.zindex = 0;
    this.x = x;
    this.y = y;
    this.vx = velX;
    this.vy = velY;
    this.sImage = new Image();
    this.sImage.src = imageSource;
}

aSprite.prototype.renderF = function(width, height)
{
	canvasContext.drawImage(this.x, this.y, width, height);
}

aSprite.prototype.render = function()
{
	canvasContext.drawImage(this.sImage, this.x, this.y,);
}

aSprite.prototype.update = function(deltaTime)
{
	this.x = deltaTime * this.vx;
	this.y = deltaTime * this.vy;
}