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
    MoveEnemies();
    //CollisionDetection();
    EnemyWorldCheck();
    if(parachuteMan.xPosition >= WorldBounds()) alert("WORKS");

  
}

function ProcessInput()
{
    if(rightPressed && (parachuteMan.xPosition + parachuteMan.width / 2  < canvas.width))
        parachuteMan.Move("Right");
    else if (leftPressed && (parachuteMan.xPosition - parachuteMan.width / 2  > 0))
        parachuteMan.Move("Left");
    else if(upPressed)
        parachuteMan.Move("Up");
    else if (downPressed)
        parachuteMan.Move("Down");
    
}

function InitialiseObjects()
{
    parachuteMan = new Player(0, 0, "Art/parachuteMan.png", 0 , 0, 0.5, 0.5, 260, 410, 100, 200);
    //birds[0] = new Enemy(0, canvas.height - 100, "Art/birdSheet.png", 0, 0);
    birds[0] = new Enemy(getRandomX(), getRandomY(), "Art/birdSheet.png", 0, 0, .5, .5);
    birds[1] = new Enemy(getRandomX(), getRandomY(), "Art/birdSheet.png", 0, 0, .5, .5);
    birds[2] = new Enemy(getRandomX(), getRandomY(), "Art/birdSheet.png", 0, 0, .5, .5);

}

function CollisionDetection()
{
    if(BoundingBoxCollision(parachuteMan.Collider(), birds[0].Collider()))
       alert("collision");
}

function EnemySpawn()
{

}

function EnemyWorldCheck()
{
    if((birds[0].xPosition - birds[0].width / 2) > canvas.width)
    {
        birds[0].xPosition = 0;
        birds[0].yPosition = getRandomY();
    }
           

}
function MoveEnemies()
{
    birds[0].Move("Right", .2);
    birds[0].Move("Up", .1);

    birds[1].Move("Right", .2);
    birds[1].Move("Up", .1);

    birds[2].Move("Right", .2);
    birds[2].Move("Up", .1);
}
