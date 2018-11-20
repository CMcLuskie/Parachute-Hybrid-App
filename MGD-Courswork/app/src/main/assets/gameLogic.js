var parachuteMan;
var birds = ['bird1', 'bird2', 'bird3'];
var gameOver;

function LogicStart()
{
    InitialiseObjects();
}

function LogicUpdate()
{
   ProcessInput();
}

function ProcessInput()
{
    if(rightPressed)
        parachuteMan.Move("Right");
    else if (leftPressed)
        parachuteMan.Move("Left");
    
}

function InitialiseObjects()
{
    parachuteMan = new Player(0, 0, "Art/man.png", 0 , 0);
    birds[0] = new Player(100, 100, "Art/birdSheet.png", 0, 0);
}

function EnemySpawn()
{

}