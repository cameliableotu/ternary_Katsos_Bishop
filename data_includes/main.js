PennController.ResetPrefix(null)
PennController.Sequence( "welcome" , randomize("experiment") , "send" , "final" )
PennController( "welcome" ,
defaultText
.print()
,
newText("<p>Welcome!</p>")
,
newText("<p> Hey, everyone, we are going to play a really fun and nice game together with a wizard and baby dragon and some really cool shadows belonging to some animals Let's do this!.</p>"),
newText("<p>Please say what your name is and your age and then click the button below to start the game.</p>")
,	newTextInput("ID")
.print(),
	newButton("Start")
	.print()
	.wait()
	,
	newVar("ID")
	.settings.global()
	.set( getTextInput("ID") )
     )
	.log( "ID" , getVar("ID") )
