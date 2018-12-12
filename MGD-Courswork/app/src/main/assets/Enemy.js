class Enemy extends aSprite
{
    constructor(spriteX, spriteY, spriteSource, scaleX, scaleY)
    {
        super(spriteX, spriteY, spriteSource,  14,  182 , 170, 5, 60, 50, 90, 90);
        this.xSize = scaleX;
        this.ySize = scaleY;
        this.dir = "Right";
        this.rotationAmount = 180;
    }

    get scaleX(){ return this.xSize; }
    get scaleY(){ return this.ySize; }
    // get width(){super.width();}
    // get height(){super.height();}

    get Dir(){ return this.dir; }

    set Dir(direction)
    {
        if(direction == "Right")
            return this.dir = "Left";
        else
            return this.dir = "Right";
    }

    get rotation()
    {
        
        if(this.dir == "Right")
            return 0;
        else
            return (this.rotationAmount * (Math.PI / 180));
    }

    Collider(){ return super.collider; }

    Render()
    {
        return super.render();
    }

    
    Animate()
    {
        return super.animateSprite();        
    }

    Move(direction, speed)
    {
        switch(direction)
        {
            case "Right":
                var newpos = this.xPosition + 25;
                this.xPosition = Lerp(this.xPosition, newpos, speed);
                break;
            case "Left":
                var newpos = this.xPosition - 25;
                this.xPosition = Lerp(this.xPosition, newpos, speed);
                break;
            case "Up":
                var newpos = this.yPosition + 1;
                this.yPosition = Lerp(this.yPosition, newpos, speed);
                break;
        }

    
    }

    PositionRect()
    {
        super.PositionRect();
    }
    
    DrawBoxCollider()
    {
        canvasContext.strokeRect(this.Collider().x, this.Collider().y, this.Collider().width, this.Collider().height);
        // alert("coll x: " + this.Collider().x +"coll y: " + this.Collider().y +
        // "coll width: " +this.Collider().width + "coll height: " + this.Collider().height);
    }
}