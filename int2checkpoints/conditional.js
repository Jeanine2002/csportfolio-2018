/* global draw ellipse rect p processing width height size */

var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var xPos = 0;
        var yPos = 0;
        var weight = 2;
        draw = function() {



            //changes the shapes look based on x position
            if (mouseX > 200) {
                fill(0, 210, 247);
                strokeWeight(3);
                stroke(57, 20, 14)
            }
            else {
                fill(100, 110, 47);
                strokeWeight(2);
                stroke(57, 20, 14);
            }
            
            ellipse(mouseX, mouseY, 30,30)


        }
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
