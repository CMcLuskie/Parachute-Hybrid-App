var playButton;

function InitialiseButtons()
{
    playButton = new Button((canvas.width / 2) * 4 , (canvas.height / 2) * 4, "Art/Buttons/playButton.png",
     1, 1084, 288, 1, 
     0, 0, 1084, 288, .25, .25);
}

function MenuUpdate()
{
    if(currentGameState == "Start")
        StartMenu();
    else if(currentGameState == "Play")
        PlayMenu();
    else if(currentGameState == "GameOver")
        GameOverMenu();
}

function StartMenu()
{
    MenuInput();
    if(clicking && CollisionDetection(ClickRect(clickX / playButton.scaleX, clickY / playButton.scaleY), playButton.Collider()))
        ChangeGameState("Play");
        
}

function PlayMenu()
{

}

function GameOverMenu()
{

}

function MenuInput()
{

}
