
var s_r = prompt("What do you want to find: SQUARE || SQUARE-ROOT")
var val =+ prompt("Enter Number to Find "+s_r)
if(s_r == "square"){
    var func = "square"
}
else if(s_r == "square-root"){
    var func = "square-root"
}
else{
    alert("You can only enter SQUARE and SQUARE-ROOT in this prompt")
}
if(func == "square"){
    alert("Square of "+val+" is equal to "+val*val)
}
else if(func == "square-root"){
    alert("The Square Root of "+val+" is Equal To "+Math.sqrt(val))
}
