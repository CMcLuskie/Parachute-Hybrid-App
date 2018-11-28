//https://www.reddit.com/r/dogecoin/comments/7rw8e4/spinning_coin_png_from_my_video/

class Coin extends aSprite
{
    constructor(spriteX, spriteY, spriteSource, scaleX, scaleY)
    {
        super(spriteX, spriteY, spriteSource,
             48, 125.67, 125.75, 6, 0, 0, 125.67, 125.75);

        this.sizeX = scaleX;
        this.sizeY = scaleY;
    }

    get scaleX(){ return this.sizeX;}
    get scaleY(){ return this.sizeY;}
   
    set xPos(newPos){ return super.xPosition = newPos;}
    set yPos(newPos){ return super.yPosition = newPos;}


    Collider(){ return super.collider;}

    Render()
    {
        super.render();
    }

    Animate()
    {
        super.animateSprite();
    }

    DrawBoxCollider()
    {
        canvasContext.strokeRect(this.Collider().x, this.Collider().y, this.Collider().width, this.Collider().height);
    }

    Move(direction, speed)
    {
        switch(direction)
        {
            case "Right":
                var newpos = this.xPosition + 25;
                this.xPos = Lerp(this.xPosition, newpos, speed);
                break;
            case "Left":
                var newpos = this.xPosition - 25;
                this.xPos = Lerp(this.xPosition, newpos, speed);
                break;
            case "Up":
                var newpos = this.yPosition + 1;
                this.yPos = Lerp(this.yPosition, newpos, speed);
                break;
        }

    }   
}