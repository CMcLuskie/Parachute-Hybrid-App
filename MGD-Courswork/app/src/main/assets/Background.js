class Background extends aSprite
{
    constructor(x, y, imageSource, velX, velY, frameAmount, frameWidth, frameHeight, framesPerLayer, layerIndex, cX, cY, cWidth, cHeight, scrollSpeed)
    {
        super(x, y, imageSource, velX, velY, frameAmount, frameWidth, frameHeight, framesPerLayer, layerIndex, cX, cY, cWidth, cHeight);
    
        this.speed = scrollSpeed;        
    }

    get yPosition(){ return super.yPosition; }
    set yPosition(newPos){ return super.yPosition = newPos; }

    Render()
    {
        super.render();
    }

    Update()
    {
        var newPos = this.yPosition + 1;
        this.yPosition = Lerp(this.yPosition, newPos, this.speed);
        
        if(this.yPosition < 0)
            this.yPosition = canvas.height * 2;
    }
}