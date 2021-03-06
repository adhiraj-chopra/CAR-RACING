class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        
    }
    update(){
        var playerIndex = "players/player" +playerCount;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val()
        });
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val()
        });
    }
}