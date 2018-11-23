class Player extends aSprite
{
    constructor(spriteX, spriteY, spriteSource, spriteVelX, spriteVelY, scaleX, scaleY)
    {
        super(spriteX, spriteY, spriteSource, spriteVelX, spriteVelY, 1, 625, 625, 1);
        this.xSize = scaleX;
        this.ySize = scaleY;
    }

	get scaleX(){ return this.xSize; }
    get scaleY(){ return this.ySize; }
   
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