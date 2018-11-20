class Player extends aSprite
{
    constructor(spriteX, spriteY, spriteSource, spriteVelX, spriteVelY)
    {
        super(spriteX, spriteY, spriteSource, spriteVelX, spriteVelY, 1, 625, 625, 1);
    }

    
    get bodyWidth(){ return 125; }
    get bodyHeight(){return 208; }

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
                this.xPosition = Lerp(parachuteMan.xPosition, newpos, .1);
                break;
            case "Left":
                var newpos = this.xPosition - 100;
                this.xPosition = Lerp(parachuteMan.xPosition, newpos, .1);
                break;
            case "Up":
                var newpos = this.xPosition - 100;
                this.xPosition = Lerp(parachuteMan.xPosition, newpos, .1);
                break;
        }
    }
}