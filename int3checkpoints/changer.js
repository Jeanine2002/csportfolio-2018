//Creates Variable and saves DOM Elements to each 
//this thing below me is a button, it does...things. 

var newBGColor = document.getElementById("newBGColor"); //this get's the background color from the text box I made or whatever
var colorChangeButton = document.getElementById("colorChangeButton"); // this saves 

colorChangeButton.addEventListener("click", colorChanger);// this help me do like it saves but like it sends a message to click,colorChanges so it can work.
    
function colorChanger(){  // this is like 
    document.body.style.backgroundColor = newBGColor.value;
    
    } 

