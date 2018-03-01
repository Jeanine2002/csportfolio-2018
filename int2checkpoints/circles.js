/* global  ellipse   width size */
 
var sketch = function processing (processing){size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var weight = 2;
draw = function() {

       // Draws blue circles from upper left to lower right 
      strokeWeight(weight);
      stroke(57,0,214);
      fill(0,210,247);
      ellipse(mouseX,mouseY,30,30);
      
      //changes the shapes look based on x position
      if (mouseX > 200) {
      fill (0,210,247);
      strokeWeight(3);
      stroke(57,20,14);
}
else{
    fill(100,110,47);
    strokeWeight(2);
    stroke(57,20,14);
}
      xPos = xPos + 20;
      yPos = yPos + 20;
            
    
      // Draws blue circles from upper left to lower right 
      strokeWeight (weight);
      stroke (57,0,214);
      fill(0,210,247);
      ellipse(width - xPos,yPos,30,30);
      xPos = xPos + 20;
      yPos = yPos + 20;
      weight++;
      
      strokeWeight(3)  
    
      // rect(random(400), random(400), 30,30)
      
};
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
};
var p = new proccesing(document.getElementById ("output-canvas"), sketch);
