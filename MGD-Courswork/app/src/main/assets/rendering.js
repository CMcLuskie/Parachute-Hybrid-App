
function InitialiseSprites()
{
	//parachuteMan = new aSprite(0,0, "Art/man.png", 0, 0);
}

function GameRender()
{
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);

	if(currentGameState == "Start")
        StartMenuRender();
    else if(currentGameState == "Play")
        GamePlayRender();
    else if(currentGameState == "GameOver")
        GameOverRender();
}

function StartMenuRender()
{
	canvasContext.save();
	canvasContext.scale(startScreen.scaleX, startScreen.scaleY);
	startScreen.Render();
	canvasContext.restore();	 

	canvasContext.save();
	canvasContext.scale(playButton.scaleX, playButton.scaleY);
	playButton.Render();
	playButton.DrawBoxCollider();
	canvasContext.restore();	 
}

function GamePlayRender()
{
	
	canvasContext.save();
	canvasContext.scale(background.scaleX, background.scaleY);
	background.Render();
	canvasContext.restore();

	canvasContext.save();
	canvasContext.scale(background2.scaleX, background2.scaleY);
	background2.Render();
	canvasContext.restore();

	canvasContext.save();
	canvasContext.scale(parachuteMan.scaleX, parachuteMan.scaleY);
	parachuteMan.Render();
	parachuteMan.Animate();
	//parachuteMan.DrawBoxCollider();
	canvasContext.restore();

	for(var i = 0; i < coins.length; i++)
	{
		canvasContext.save();
		canvasContext.scale(coins[i].scaleX, coins[i].scaleY);
		//canvasContext.rotate(birds[i].rotation);
		coins[i].Render();
		//coins[i].DrawBoxCollider();
		coins[i].Animate();
		canvasContext.restore()
	}

	for(var i = 0; i < birds.length; i++)
	{
		canvasContext.save();
		canvasContext.scale(birds[i].scaleX, birds[i].scaleY);
		//canvasContext.rotate(birds[i].rotation);
		birds[i].Render();
		//birds[i].DrawBoxCollider();
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

function GameOverRender()
{
	canvasContext.save();
	canvasContext.scale(background.scaleX, background.scaleY);
	background.Render();
	canvasContext.restore();

	canvasContext.save();
	canvasContext.scale(background2.scaleX, background2.scaleY);
	background2.Render();
	canvasContext.restore();

	canvasContext.save();
	canvasContext.font = "25px Chiller";
	canvasContext.fillText("You Died with a score of: " + score, 0, canvas.height / 2);
	canvasContext.fillText("Tap anywhere to retry", 0, (canvas.height / 2) + 75);

	canvasContext.restore();
}