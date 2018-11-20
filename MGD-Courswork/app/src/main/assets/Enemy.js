class Enemy extends aSprite
{
    constructor(spriteX, spriteY, spriteSource, spriteVelX, spriteVelY)
    {
        super(spriteX, spriteY, spriteSource, spriteVelX, spriteVelY, 14,  182 , 170, 5);
    }

    // get width(){super.width();}
    // get height(){super.height();}

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
                var newpos = this.xPosition + 25;
                this.xPosition = Lerp(this.xPosition, newpos, .1);
                break;
            case "Left":
                var newpos = this.xPosition - 100;
                this.xPosition = Lerp(this.xPosition, newpos, .1);
                break;
            case "Up":
                var newpos = this.yPosition - 25;
                this.yPosition = Lerp(this.yPosition, newpos, .1);
                break;
        }
    }
}