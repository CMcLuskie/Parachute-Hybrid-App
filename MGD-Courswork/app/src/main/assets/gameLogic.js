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
  // CollisionDetection();
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
    parachuteMan = new Player(0, 0, "Art/parachuteMan.png", 0 , 0);
    //birds[0] = new Enemy(0, canvas.height - 100, "Art/birdSheet.png", 0, 0);
    birds[0] = new Enemy(0, 700, "Art/birdSheet.png", 0, 0);

}

function CollisionDetection()
{
    //use stroke rect to draw collison box
    if(BoundingBoxCollision(parachuteMan.xPosition, birds[0].xPosition,
        parachuteMan.yPosition, birds[0].yPosition, 
        parachuteMan.width, birds[0].width, 
        parachuteMan.height, birds[0].height))
       alert("collision");
}

function EnemySpawn()
{

}

function MoveEnemies()
{
     birds[0].Move("Right");
     birds[0].Move("Up");
}