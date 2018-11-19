var parachuteMan;

function InitialiseSprites()
{
	parachuteMan = new aSprite(0,0, "Art/man.png", 0, 0);
}

function GameRender()
{
	parachuteMan.render();
}