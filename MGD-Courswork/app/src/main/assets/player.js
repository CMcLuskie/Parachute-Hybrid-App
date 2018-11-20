class Player extends aSprite
{
    constructor(spriteX, spriteY, spriteSource, spriteVelX, spriteVelY)
    {
        super(spriteX, spriteY, spriteSource, spriteVelX, spriteVelY);
    }

    Render()
    {
        return super.render();
    }

    Move(direction)
    {
        switch(direction)
        {
            case "Right":
                var newpos = parachuteMan.xPosition + 100;
                this.xPosition = Lerp(parachuteMan.xPosition, newpos, .1);
                break;
            case "Left":
                var newpos = parachuteMan.xPosition - 100;
                this.xPosition = Lerp(parachuteMan.xPosition, newpos, .1);
                break;
        }
    }
}