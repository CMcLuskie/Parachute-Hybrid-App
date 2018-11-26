
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
	parachuteMan.DrawBoxCollider();
	canvasContext.restore();

	canvasContext.save();
	canvasContext.scale(birds[0].scaleX, birds[0].scaleY);
	birds[0].Render();
	birds[0].DrawBoxCollider();
	birds[0].Animate();
	canvasContext.restore()

	canvasContext.save();
	canvasContext.scale(birds[0].scaleX, birds[0].scaleY);
	birds[1].Render();
	birds[1].DrawBoxCollider();
	birds[1].Animate();
	canvasContext.restore()

	canvasContext.save();
	canvasContext.scale(birds[0].scaleX, birds[0].scaleY);
	birds[2].Render();
	birds[2].DrawBoxCollider();
	birds[2].Animate();
	canvasContext.restore()
}