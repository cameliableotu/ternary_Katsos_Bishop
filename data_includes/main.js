PennController.ResetPrefix(null);

PennController(
    newText("test sentence", "A is colder than B, though A is not cold yet.")
        .print()
    ,
    newText("instruction", "Press F if this is a coherent statement, press J otherwise.")
        .print()
    ,
    newKey("answer", "FJ")
        .wait() // This waits for a key press before validation
);

