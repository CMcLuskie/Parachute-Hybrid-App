class Button extends aSprite
{
    constructor(x, y, imageSource, frameAmount, frameWidth, frameHeight, framesPerLayer, cX, cY, cWidth, cHeight, scaleX, scaleY)
    {
        super(x, y, imageSource, frameAmount, frameWidth, frameHeight, framesPerLayer, cX, cY, cWidth, cHeight)
        
        this.xSize = scaleX;
        this.ySize = scaleY;
        this.isPressed = false;
    }

    get scaleX(){ return this.xSize; }
    get scaleY(){ return this.ySize; }

    get isPressed(){ return this.isPressed; }
    set isPressed(newState){return this.isPressed = newState; }


    Render()
    {
        super.render();
    }

    Collider(){ return super.collider; }
    isPressed(){}

    DrawBoxCollider()
    {
        canvasContext.strokeRect(this.Collider().x, this.Collider().y, this.Collider().width, this.Collider().height);
    }
}