var database;
var PlayerCount;
var GameState = 0;
var form, player, game;
var allPlayers;

function setup(){
    database = firebase.database();
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");


}


/*
Multiplayer Car Racing Game
-Form ---> Player ----> Game


OBJECT ORIENTED PROGRAMMING (OOP)
- We look at the components of our game as real world objects
- Creating a design before creating an object (CLASS before OBJECT)

1. Form
    - Input box (name)
    - Play Button
    - Name ---> Database
    - New Player Object
2. Player
    - Storing info
    - Name
    - Rank
    - Distance
    - Read & write this info to the database
    - Player Count
3. Game
    - Game States
    - WAIT (0)
        - Displaying the form
    - PLAY (1)
        - playing the game
    - END (2)
        - Ranking
*/