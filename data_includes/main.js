
PennController.ResetPrefix(null); // Initiates PennController
// Start typing your code here
var items = [

    ["consent", "PennController", PennController(
        newHtml("consent form", "consent.html")
            .print()
        ,
        newButton("consent button", "By clicking this button I indicate my consent")
            .print()
            .wait()
    )]
    ,
    ["description", "PennController", PennController(
        newHtml("description form", "description.html")
            .print()
        ,
        newButton("start", "Start the experiment")
            .print()
            .wait()
    )]

];


