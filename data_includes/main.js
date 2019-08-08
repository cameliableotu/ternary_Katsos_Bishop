PennController.ResetPrefix(null); // Initiates PennController
PennController.Sequence( "welcome" , randomize("experiment") , "send" , "final" )
PennController( "welcome" , 	defaultText.print()	, newText("<p>Welcome!</p>"), newText("<p> Hey, everyone, we are going to play a really fun and nice game together with a wizard and baby dragon and some really cool shadows belonging to some animals Let's do this!</p>")
,
newText("<p>Please enter your name and age  and then click the button below to start the game.</p>")
,
	newTextInput("ID").print()
,
newButton("Start")	.print()	.wait()
,	newVar("ID")
.settings.global()
.set( getTextInput("ID") )
)
.log( "ID" , getVar("ID") )
PennController(	defaultText.print()	, newText("<p> Once upon a time in a far away land there lived a very gifted wizard called Merlin who liked to play with shadows and make others guess what they are. Now Merlin is playing the shadow game with a really cute baby dragon, who has to guess whose animal the shadow belongs to.</p>")
,
newImage("wizardandragon.png")
.print()
) 
