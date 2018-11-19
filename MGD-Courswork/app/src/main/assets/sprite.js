class aSprite
{
	constructor(x, y, imageSource, velX, velY)
	{
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

	renderF(width, height)
	{
		canvasContext.drawImage(this.x, this.y, width, height);
	}

	render()
	{
		canvasContext.drawImage(this.sImage, this.x, this.y,);
	}

	update(deltaTime)
	{
	this.x = deltaTime * this.vx;
	this.y = deltaTime * this.vy;
	}
	
}

