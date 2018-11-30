class aSprite
{
	constructor(x, y, imageSource, frameAmount, frameWidth, frameHeight, framesPerLayer, cX, cY, cWidth, cHeight)
	{
		this.zindex = 0;
		this.x = x;
		this.y = y;
	
		
		this.sImage = new Image();
		this.sImage.src = imageSource;

		this.frameAmount = frameAmount;
		this.frameWidth = frameWidth;
		this.frameHeight = frameHeight;
		this.framesPerLayer = framesPerLayer;
		this.layerIndex = 0;
		this.layerCounter = 0;
		this.frameIndex = 0;
		this.frameCounter= 0;
		
		this.tickCount = 0;
		this.ticksPerFrame = 4;

		this.colliderX = cX;
        this.colliderY = cY;
        this.colliderWidth = cWidth;
        this.colliderHeight = cHeight;
	}
	
	get xPosition(){ return this.x;}
	get yPosition(){ return this.y;}
	get width(){return this.frameWidth; }
	get height(){return this.frameHeight; }

	get collider()
	{ 
		var rect = {x: this.xPosition + this.colliderX , y: this.yPosition + this.colliderY,
			 width: this.colliderWidth, height: this.colliderHeight}; 
		return rect;
	}

	set xPosition(newPosition){ this.x = newPosition;}
	set yPosition(newPosition){ this.y = newPosition;}

	set Background(filePath){return this.sImage.src = filePath; }

	renderF(width, height)
	{
		canvasContext.drawImage(this.x, this.y, width, height);
	}

	render()
	{
		canvasContext.drawImage(this.sImage, 
			this.frameIndex * this.frameWidth, 	
			this.layerIndex * this.frameHeight, 													
			this.frameWidth, 					
			this.frameHeight, 
			this.x, this.y, 
			this.frameWidth ,
			this.frameHeight);
	}

	update(deltaTime)
	{
	this.x = deltaTime * this.vx;
	this.y = deltaTime * this.vy;
	}

	PositionRect()
	{
		canvasContext.strokeRect(this.x, this.y, this.sImage.width, this.sImage.height);
	}

	animateSprite()
	{
		this.tickCount +=1;
		if(this.tickCount > this.ticksPerFrame)
		{
			this.tickCount = 0;
			this.frameIndex++; 				//advances the animation onto the next frame
			this.frameCounter++;			//keeps track of how many frames have taken place
			this.layerCounter++; 			//keeps track of how many frames have been rendered on one line


			//advances the animation to the next layer of the spritesheet
			if(this.layerCounter >= this.framesPerLayer)
			{
				this.layerIndex++;
				this.layerCounter = 0;
				this.frameIndex = 0;
			}
			
			//Resets the Loop
			if(this.frameCounter >= this.frameAmount)
			{
				this.frameIndex = 0;
				this.frameCounter = 0;
				this.layerIndex = 0;
				this.layerCounter = 0;
			}

				//this is used to debug animation
				// alert("Frame Number: " + this.frameCounter 
				// 	+ ", Layer Number: " + this.layerIndex);
		}
	}
	
	SwapLayer()
	{
		switch(this.frameIndex)
		{

		}
	}
}



