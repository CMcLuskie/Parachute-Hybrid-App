var parachuteMan;
var birds = ['bird1', 'bird2', 'bird3'];
var gameOver;
var score = 0;
function LogicStart()
{
    InitialiseObjects();
}

function LogicUpdate()
{
    ProcessInput();
    MoveEnemies();
    CollisionDetection();
    EnemyWorldCheck();
    UpdateScore();
}

function ProcessInput()
{
    if(rightPressed && (parachuteMan.Collider().x + parachuteMan.Collider().width  < canvas.width / parachuteMan.scaleX))
        parachuteMan.Move("Right");
    else if (leftPressed && (parachuteMan.Collider().x > 0))
        parachuteMan.Move("Left");
    else if(upPressed && (parachuteMan.Collider().y > 0))
        parachuteMan.Move("Up");
    else if (downPressed && (parachuteMan.Collider().y + parachuteMan.Collider().height < canvas.height / parachuteMan.scaleY))
        parachuteMan.Move("Down");
    
}

function UpdateScore()
{
    score++;
    canvasContext.font = "30px Arial";
    canvasContext.fillText("Score: " + score, 0, 0);
}

function InitialiseObjects()
{
    parachuteMan = new Player(0, 0, "Art/parachuteMan.png", 0 , 0, 0.5, 0.5, 260, 410, 100, 200);
    //birds[0] = new Enemy(0, canvas.height - 100, "Art/birdSheet.png", 0, 0);
    for(var i = 0; i < 4; i++)
        birds[i] = new Enemy(0, getRandomY(), "Art/birdSheet.png", 0, 0, .5, .5);
    

}

function CollisionDetection()
{
    for(var i = 0; i < birds.length; i++)
        if(BoundingBoxCollision(parachuteMan.Collider(), birds[i].Collider()))
         alert("collision");
}

function EnemySpawn()
{

}

function EnemyWorldCheck()
{
    for(var i = 0; i < birds.length; i++)
    {
        if((birds[i].xPosition) > canvas.width / birds[i].scaleX)
        {
            birds[i].xPosition = -1;
        }
        // else if((birds[i].xPosition) < 0)
        // {
        //     birds[i].Dir = birds[i].Dir;
        // }
    }
}
function MoveEnemies()
{
    for(var i = 0; i < birds.length; i++)
    {
        birds[i].Move(birds[i].Dir, .2);
        birds[i].Move("Up", .2);
    }
}
