
function InitialiseSprites()
{
	//parachuteMan = new aSprite(0,0, "Art/man.png", 0, 0);
}

function GameRender()
{
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	parachuteMan.Render();
	parachuteMan.Animate();
	birds[0].Render();
	birds[0].Animate();

}