//
var fortuneTeller1 = document.getElementById("fortuneTeller1");
var fortuneTeller2 = document.getElementById("fortuneTeller2");
var fortuneTeller3 = document.getElementById("fortuneTeller3");
var fortuneTeller4 = document.getElementById("fortuneTeller4");
var fortuneTeller5 = document.getElementById("fortuneTeller5");
var fortuneTeller6 = document.getElementById("fortuneTeller6");


var boole1 = true;
var boole2 = true;
var boole3 = true;
var boole4 = true;
var boole5 = true; 
var boole6 = true; 

//
fortuneTeller1.addEventListener("click", function() {
    //
    if (boole1) {
        fortuneTeller1.innerHTML = "You will be a curious person in life. ";
        fortuneTeller1.style.backgroundColor = "red";
        boole1 = !boole1;
    }
    else {
        fortuneTeller1.style.backgroundColor = "pink";
        fortuneTeller1.innerHTML = "";
        boole1 = !boole1;
    }

});

//    
fortuneTeller2.addEventListener("click", function() {
    // 
    if (boole2) {
        fortuneTeller2.style.backgroundColor = "blue";
        fortuneTeller2.innerHTML = "You will get somthing that you don't like.";
        boole2 = !boole2;
    }
    else {
        fortuneTeller2.innerHTML = "";
          fortuneTeller2.style.backgroundColor = "teal";
        boole2 = !boole2;
    }




});
fortuneTeller3.addEventListener("click", function() {
    if (boole3) {
          fortuneTeller3.style.backgroundColor = "green";
        fortuneTeller3.innerHTML = " There will be great oppurtunity in your life.";
        boole3 = !boole3;
    }
    else {
        fortuneTeller3.innerHTML = ""
          fortuneTeller3.style.backgroundColor = "purple";
            boole3 = !boole3;
    }
    
});    



fortuneTeller4.addEventListener("click", function() {
    //
    if (boole4) {
        fortuneTeller4.innerHTML = " You will have a trustful friend";
        fortuneTeller4.style.backgroundColor = "orange";
        boole4 = !boole4;
    }
    else {
        fortuneTeller4.style.backgroundColor = "yellow";
        fortuneTeller4.innerHTML = "";
        boole4 = !boole4;
    }

});

fortuneTeller5.addEventListener("click", function() {
    //
    if (boole5) {
        fortuneTeller5.innerHTML = "You will be happy a lot will your close ones.";
        fortuneTeller5.style.backgroundColor = "grey";
        boole5 = !boole5;
    }
    else {
        fortuneTeller5.style.backgroundColor = "red";
        fortuneTeller5.innerHTML = "";
        boole5 = !boole5;
    }

});

//   


fortuneTeller6.addEventListener("click", function() {
    //
    if (boole6) {
        fortuneTeller6.innerHTML = "  You will get help on what u will need. ";
        fortuneTeller6.style.backgroundColor = "violet";
        boole6 = !boole6;
    }
    else {
        fortuneTeller6.style.backgroundColor = "green";
        fortuneTeller6.innerHTML = "";
        boole6 = !boole6;
    
    }
});

