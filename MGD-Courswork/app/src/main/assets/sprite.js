	class aSprite
{
	constructor(x, y, imageSource, velX, velY){
	this.zindex = 0;
    this.x = x;
    this.y = y;
    this.vx = velX;
    this.vy = velY;
    this.sImage = new Image();
    this.sImage.src = imageSource;
}
get xPosition(){ return this.x;}
get yPosition(){ return this.y;}

set xPosition(newPosition){ this.x = newPosition;}

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