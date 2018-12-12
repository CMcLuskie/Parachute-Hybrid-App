var parachuteMan;
var birds = [];
var background;
var background2;
var coins = [];
var gameOver;
var score = 0;
var lives = 3;
var startScreen;

var gameValuesInitialised;

var fallSpeed = -10;
function LogicStart()
{
    InitialiseObjects();
    ChangeGameState("Start");
    
}

function LogicUpdate()
{   
    if(currentGameState == "Start")
        StartState();
    else if(currentGameState == "Play")
        PlayState();
    else if(currentGameState == "GameOver")
        GameOverState();
}

function StartState()
{
    if(!gameValuesInitialised)
        InitialiseGameValues();

    if(clicking)
        if( BoundingBoxCollision(ClickRect(clickX / playButton.scaleX , clickY / playButton.scaleY), playButton.Collider()))
    {
        console.log("here");
        if(canChangeState)  
            ChangeGameState("Play");
    }
        

    canChangeState= true;
}

function InitialiseGameValues()
{
    lives = 3;
    score = 0;
    
    background.Background = "Art/skyLoop.png";
    background2.Background = "Art/skyLoop.png";

    for(var i = 0; i < birds.length; i++)
    {
        birds[i].xPosition = 0;
        birds[i].yPosition = getRandomY();
    }

    for(var i = 0; i < coins.length; i++)
    {
        coins[i].xPosition = getRandomX();
        coins[i].yPosition = getRandomY();
    }

    gameValuesInitialised = true;
}

function PlayState()
{
    gameValuesInitialised = false;
    //Player movement
    ProcessInput();
    //non player movement
    MoveEnemies();
    MoveCoins();
    //World edge checks
    EnemyWorldCheck();
    CoinWorldCheck();
    //Update backgroud
    background.Update();
    background2.Update();
    //p self explanatory tbh
    CollisionDetection();
}

function GameOverState()
{
    background.Background = "Art/deathScreen.png";
    background2.Background = "Art/deathScreen.png";

    background.Update();
    background2.Update();

    if(clicking && canChangeState)
        ChangeGameState("Start");

        canChangeState= true;
}

function ProcessInput()
{
    if(rightPressed && (parachuteMan.Collider().x 
        + parachuteMan.Collider().
            width  < canvas.width / parachuteMan.scaleX))
        parachuteMan.Move("Right");
    else if (leftPressed && (parachuteMan.Collider().x > 0))
        parachuteMan.Move("Left");    
}

function UpdateScore(amount)
{
    score += amount;
    if(soundManager != null)
	soundManager.playSound(0);
    
}


function BackgroundScroll()
{
    background.Update();
    background2.Update();
}


function InitialiseObjects()
{
    //start
    startScreen = new Background(0,0, "Art/startScreen.png", 1, 1080, 2220, 1, 1, 0,0,0,0,0);
    //startScreen = new Background(-100,0, "Art/startScreen.png", 1, canvas.width, canvas.height, 1, 1, 0,0,0,0,0);

    //gamea
    parachuteMan = new Player(0, 0, "Art/parachuteMan.png", 0.5, 0.5, 260, 410, 100, 200);

    background = new Background(0, 0 ,"Art/skyLoop.png", 1, 1080, 2220, 1, 1, 0, 0, 0, 0, -10 );
    background2 = new Background(0, canvas.height / .35 ,"Art/skyLoop.png", 1, 1080, 2220, 1, 1, 0, 0, 0, 0, -10);

    for(var i = 0; i < 4; i++)
        coins[i] = new Coin(getRandomX(),getRandomY() ,"Art/dogeCoin.png", .5, .5);

    for(var i = 0; i < 1; i++)
        birds[i] = new Enemy(0, getRandomY(), "Art/birdSheet.png", .5, .5);  
}

function CollisionDetection()
{
    for(var i = 0; i < birds.length; i++)
        if(BoundingBoxCollision(parachuteMan.Collider(), birds[i].Collider()))
            TakeDamage(1);

    for(var i = 0; i < coins.length; i++)
        if(BoundingBoxCollision(parachuteMan.Collider(), coins[i].Collider()))
            CollectCoin(i);
}

function CollectCoin(index)
{
    console.log("cCollected COin");
    coins[index].xPos = getRandomX() / coins[index].scaleX;
  
    coins[index].yPos = canvas.height / coins[index].scaleY;
    UpdateScore(100); 
}

function EnemySpawn()
{

}

function CoinWorldCheck()
{
    for(var i=0; i<coins.length;i++)
    {
        if((coins[i].yPosition + coins[i].height) < 0)
            coins[i].yPosition = canvas.height / coins[i].scaleY;
    }
}

function EnemyWorldCheck()
{
    for(var i = 0; i < birds.length; i++)
    {
        if((birds[i].xPosition) + birds[i].width > canvas.width / birds[i].scaleX)
        {
            //birds[i].xPosition = -1;
            birds[i].Dir = birds[i].Dir;
        }
        else if((birds[i].xPosition) < 0)
        {
            birds[i].Dir = birds[i].Dir;
        }

        if((birds[i].yPosition + birds[i].height) < 0)
            birds[i].yPosition = canvas.height / birds[i].scaleY;
        
    }
}

function EnemyBounce()
{

}

function EnemyLoop()
{

}

function MoveCoins()
{
    for(var i = 0; i < coins.length; i++)
    {
        coins[i].Move("Up", fallSpeed);
    }
}

function MoveEnemies()
{
    for(var i = 0; i < birds.length; i++)
    {
        birds[i].Move(birds[i].Dir, .3);
        birds[i].Move("Up", fallSpeed);
    }
}

function TakeDamage(damage)
{
    lives -= damage;

    if(soundManager != null)
    soundManager.playSound(1);
    if(lives <= 0)
        ChangeGameState("GameOver")
}
