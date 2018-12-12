var playButton;

function InitialiseButtons()
{
    playButton = new Button(((canvas.width / 2) / 0.25) - 500, ((canvas.height / 2 ) / .25), "Art/Buttons/playButton.png",
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
