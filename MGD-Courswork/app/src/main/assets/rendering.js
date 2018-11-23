
function InitialiseSprites()
{
	//parachuteMan = new aSprite(0,0, "Art/man.png", 0, 0);
}

function GameRender()
{
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	
	canvasContext.save();
	canvasContext.scale(parachuteMan.scaleX, parachuteMan.scaleY);
	parachuteMan.Render();
	parachuteMan.Animate();
	canvasContext.restore();

	canvasContext.save();
	canvasContext.scale(birds[0].scaleX, birds[0].scaleY);
	birds[0].Render();
	birds[0].Animate();
	canvasContext.restore()
}