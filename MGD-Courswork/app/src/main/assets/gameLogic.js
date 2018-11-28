var parachuteMan;
var birds = [];
var background;
var background2;
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
    //CollisionDetection();
    EnemyWorldCheck();
    UpdateScore();
    background.Update();
    background2.Update();
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
    canvasContext.fillText("Score: " + score, canvas.width / 2, canvas.height / 2);
}

function InitialiseObjects()
{
    parachuteMan = new Player(0, 0, "Art/parachuteMan.png", 0 , 0, 0.5, 0.5, 260, 410, 100, 200);
    background = new Background(0, canvas.height ,"Art/skyLoop.png", 0, 0, 1, canvas.width, canvas.height * 2, 1, 1, 1, 1, 1, 1, -10 );
    background2 = new Background(0, canvas.height * 2,"Art/skyLoop.png", 0, 0, 1, canvas.width, canvas.height * 2, 1, 1, 1, 1, 1, 1, -10 );

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
        if((birds[i].xPosition) + birds[i].width > canvas.width / birds[i].scaleX)
        {
            birds[i].xPosition = -1;
            birds[i].Dir = birds[i].Dir;
        }
        else if((birds[i].xPosition) < 0)
        {
            birds[i].Dir = birds[i].Dir;
        }
    }
}

function EnemyBounce()
{

}

function EnemyLoop()
{

}
function MoveEnemies()
{
    for(var i = 0; i < birds.length; i++)
    {
        birds[i].Move(birds[i].Dir, .2);
        birds[i].Move("Up", .2);
    }
}
