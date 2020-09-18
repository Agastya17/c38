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

        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1, car2, car3, car4]; //0-3
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            //var positionText = 130;
            var carIndex = 0;
            var y;
            var x = 0;
            
            for(var i in allPlayers){ //1-4
                carIndex = carIndex + 1; //ci = 1, Player1
                /*
                //currently active player
                if(i === "Player" + player.Index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                
                positionText = positionText + 20;
                textSize(15);
                text(allPlayers[i].Name + ": " + allPlayers[i].Distance, 120, positionText);
                */

                x = x + 200;
                y = displayHeight - allPlayers[i].Distance;
                cars[carIndex - 1].x = x;
                cars[carIndex - 1].y = y;

                //Currently active car
                if(carIndex === player.Index){
                    cars[carIndex - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[carIndex - 1].y;
                }
            }
            //player1: distance
        }

        if(keyIsDown(UP_ARROW) && player.Index !== null){
            player.Distance = player.Distance + 50;
            player.update();
        }

        drawSprites();
    }
}

/*
To access elements of an array: for loop is necessary
    for(var i = 0; i < array.length; i++){}

    for (var i in array){} ---> for/in statement




.update() - refer directly to the main database inside which gameState is created
*/