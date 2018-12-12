class Player extends aSprite
{
    constructor(spriteX, spriteY, spriteSource, scaleX, scaleY, cX, cY, cWidth, cHeight)
    {
        super(spriteX, spriteY, spriteSource, 1, 625, 625, 1, cX, cY, cWidth, cHeight);
        this.xSize = scaleX;
        this.ySize = scaleY;

        // this.colliderX = cX;
        // this.colliderY = cY;
        // this.colliderWidth = cWidth;
        // this.colliderHeight = cHeight;
    }

	get scaleX(){ return this.xSize; }
    get scaleY(){ return this.ySize; }
   
    // get collX(){ return this.colliderX; }
    // get collY(){ return this.colliderY; }
    // get collWidth(){ return this.colliderWidth; }
    // get collHeight(){ return this.colliderHeight; }

    Collider(){ return super.collider; }
    Render()
    {
        return super.render();
    }

    Animate()
    {
        return super.animateSprite();
    }
    Move(direction)
    {
        switch(direction)
        {
            case "Right":
                var newpos = this.xPosition + 100;
                this.xPosition = Lerp(this.xPosition, newpos, .1);
                break;
            case "Left":
                var newpos = this.xPosition - 100;
                this.xPosition = Lerp(this.xPosition, newpos, .1);
                break;
            case "Up":
                var newpos = this.yPosition - 100;
                this.yPosition = Lerp(this.yPosition, newpos, .1);
                break;
            case "Down":
                var newpos = this.yPosition + 100;
                this.yPosition = Lerp(this.yPosition, newpos, .1);
                break;
        }
    }

    DrawBoxCollider()
    {
        canvasContext.strokeRect(this.Collider().x, this.Collider().y, this.Collider().width, this.Collider().height);
    }
}