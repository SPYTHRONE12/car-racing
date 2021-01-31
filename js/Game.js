class Game {
constructor(){

}

getState(){
  var gameStateRef=database.ref('gameState')  
  gameStateRef.on("value",function(data){
      gameState=data.val()
  })
}

update(state){
database.ref('/').update({
    gameState:state
})

}

async start(){
if(gameState===0){
    player = new Player()
    var playerCountRef = await database.ref('playerCount').once("value")
    
    if(playerCountRef.exists()){
    playerCount=playerCountRef.val()
    player.getCount()

    }

    form=new Form()
    form.display()
}

}

play(){
form.hide()
text("game start",250,300)
Player.getPlayerInfo()

if(allPlayers !== undefined){
    var display_position=350
    for(var plr in allPlayers){
        display_position += 30
        text(allPlayers[plr].name + ":" + allPlayers[plr].distance,300,display_position)}


}

}

















}