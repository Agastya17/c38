class Game {
    constructor(){}

    //To read gameState from the database
    getState(){
        var gameStateref = database.ref("GameState");
        gameStateref.on( "value",function(data){
            GameState = data.val();
        });
    }

    //To write gameState into the database
    update(state){
        database.ref("/").update({
            GameState: state
        });

    }

    //Wait - displaying form ---> Player Object creation
    start(){
        if(GameState === 0){
            //New player object 
            player = new Player();
            //Player Count should be read from the database
            player.getCount();
            //New Form Object
            form = new Form();
            //Display the form
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            var positionText = 130;
            for(var i in allPlayers){
                //currently active player
                if(i === "Player" + Player.Index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                
                positionText = positionText + 20;
                textSize(15);
                text(allPlayers[i].Name + ": " + allPlayers[i].Distance, 120, positionText);
            }
            //player1: distance
        }

        if(keyIsDown(UP_ARROW) && player.Index !== null){
            player.Distance = player.Distance + 50;
            player.update();
        }

        
    }
}

/*
To access elements of an array: for loop is necessary
    for(var i = 0; i < array.length; i++){}

    for (var i in array){} ---> for/in statement




.update() - refer directly to the main database inside which gameState is created
*/