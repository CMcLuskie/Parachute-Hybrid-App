var currentGameState;
var previousGameState;


function ChangeGameState(newState)
{
    console.log(newState);
    previousGameState = currentGameState;
    currentGameState = newState;
}