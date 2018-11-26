class Enemy extends aSprite
{
    constructor(spriteX, spriteY, spriteSource, spriteVelX, spriteVelY, scaleX, scaleY)
    {
        super(spriteX, spriteY, spriteSource, spriteVelX, spriteVelY, 14,  182 , 170, 5, 0, 60, 50, 90, 90);
        this.xSize = scaleX;
        this.ySize = scaleY;
    }

    get scaleX(){ return this.xSize; }
    get scaleY(){ return this.ySize; }
    // get width(){super.width();}
    // get height(){super.height();}

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
                var newpos = this.xPosition - 100;
                this.xPosition = Lerp(this.xPosition, newpos, speed);
                break;
            case "Up":
                var newpos = this.yPosition - 25;
                this.yPosition = Lerp(this.yPosition, newpos, speed);
                break;
        }
    }

    
    DrawBoxCollider()
    {
        canvasContext.strokeRect(this.Collider().x, this.Collider().y, this.Collider().width, this.Collider().height);
        // alert("coll x: " + this.Collider().x +"coll y: " + this.Collider().y +
        // "coll width: " +this.Collider().width + "coll height: " + this.Collider().height);
    }
}