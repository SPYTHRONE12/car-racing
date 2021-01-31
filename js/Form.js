class Form{
constructor(){
    
this.input = createInput('name')
this.button=createButton('play')
this.greeting=createElement('h4')
}

hide(){
this.greeting.hide()
this.button.hide()
this.input.hide()

}

display(){
 var title=createElement('h3')
title.html("roadRush")
title.position(400,150)


this.input.position(400,200)
this.button.position(400,250)

this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
player.name=this.input.value()
playerCount+=1
player.update()
player.updateCount(playerCount)

this.greeting.html("welcome"+player.name)
this.greeting.position(400,260) 

})



}
}