class Player{
    constructor(){
        this.Index = null;
        this.Distance = 0;
        this.Name = null;
    }

    
    getCount(){//to read from the database
        var playercount = database.ref("PlayerCount");
        playercount.on("value", function(data){
            PlayerCount = data.val();
        });
    }


    updateCount(count){//write the player count at the database
        database.ref("/").update({PlayerCount: count});
    }


    update(){//to write the name in the database
        var Index = "Players/Player" + this.Index;
        database.ref(Index).set({Name: this.Name, Distance: this.Distance});
    }

    static getPlayerInfo(){
        var PlayerInfo = database.ref("Players");
        PlayerInfo.on("value",(data)=>{
            allPlayers = data.val();
        });
    }
}




/*
Static functions
- not attached to any particular object
- Common functions
- Called by the class & not by the objects


Arrow function
()=>
    - Arrow functions bind the function to the original object which calls it


hello = world();


function world(){
    return "Hello World";
}


hello = ()=> {
    return "Hello World";
}

hello = ()=> "Hello World";
 - returns value by default
*/