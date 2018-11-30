var currentGameState;
var previousGameState;

var canChangeState

function ChangeGameState(newState)
{
    canChangeState= false;
    console.log(newState);
    previousGameState = currentGameState;
    currentGameState = newState;
}