
function InitialiseSprites()
{
	//parachuteMan = new aSprite(0,0, "Art/man.png", 0, 0);
}

function GameRender()
{
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	
	canvasContext.save();
	canvasContext.scale(background.scaleX, background.scaleY);
	background.Render();
	//parachuteMan.DrawBoxCollider();
	canvasContext.restore();

	canvasContext.save();
	canvasContext.scale(background2.scaleX, background2.scaleY);
	background2.Render();
	//parachuteMan.DrawBoxCollider();
	canvasContext.restore();

	canvasContext.save();
	canvasContext.scale(parachuteMan.scaleX, parachuteMan.scaleY);
	parachuteMan.Render();
	parachuteMan.Animate();
	parachuteMan.DrawBoxCollider();
	canvasContext.restore();

	for(var i = 0; i < coins.length; i++)
	{
		canvasContext.save();
		canvasContext.scale(coins[i].scaleX, coins[i].scaleY);
		//canvasContext.rotate(birds[i].rotation);
		coins[i].Render();
		coins[i].DrawBoxCollider();
		coins[i].Animate();
		canvasContext.restore()
	}

	for(var i = 0; i < birds.length; i++)
	{
		canvasContext.save();
		canvasContext.scale(birds[i].scaleX, birds[i].scaleY);
		//canvasContext.rotate(birds[i].rotation);
		birds[i].Render();
		birds[i].DrawBoxCollider();
		birds[i].Animate();
		canvasContext.restore()
	}

	canvasContext.save();
	canvasContext.font = "30px Arial";
	canvasContext.fillText("Score: " + score, 100, 100);
	canvasContext.restore();


	canvasContext.save();
	canvasContext.strokeRect(1,1, canvas.width - 2, canvas.height - 2);
	canvasContext.restore();
}