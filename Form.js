 class Form{
     constructor(){
        this.input = createInput("NAME");
        this.button = createButton("JOIN GAME")
        this.greeting = createElement("h3")
     }
     display(){
     var title = createElement("h2");
     title.html("Car Racing")
     title.position(120,10);

     this.input.position(500,240);
     this.button.position(300,240);
     this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
         player.name = this.input.value();   
         playerCount = playerCount+1;
         player.update(name);
         player.updateCount(playerCount);
         this.greeting.html("WELCOME "+player.name);
         this.greeting.position(200,240);
     });
     }
     hide(){
         this.greeting.hide();
         this.input.hide();
         this.button.hide();
     }
 }

