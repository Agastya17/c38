class Form {
    constructor(){
        this.input = createInput("name");
        
        this.button = createButton("play");

        this.greeting = createElement("h2");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

//form.display()
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        this.input.position(130,160);
        this.button.position(250,100);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.Name = this.input.value();

            PlayerCount = PlayerCount + 1;
            player.Index = PlayerCount;
            //Updating the name into the database
            player.update();
            //Updating the player count into the database
            player.updateCount(PlayerCount);
            
            this.greeting.html("HELLO " + player.Name);
            this.greeting.position(130,160);
        });
    }
}
//Hello Agastya
/*
HTML

- Head - Libraries, styling
- Body - Main content to be displayed

BODY
Elements:
1. h1, h2, h3: headings of different sizes
2. Input - from users
3. Button - Play Button

DOCUMENT OBJECT MODEL - p5 Dom Library

Title - "Car Racing Game"
1. Create a heading element
2. Change html content
3. Position of the element
*/