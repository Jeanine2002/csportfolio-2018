var catPic =document.getElementById("cat");
var dogPic =document.getElementById("dog");
var textBlock =document.getElementById("textBlock");

catPic.addEventListener("click",function(){
    textBlock.innerHTML="This picture of a cat is really cute because the first thing i see is his beautiful blue eyes. I chosed this picture because first of all I really love cats and what I also like about them is how they are very playful. What is also bad about the cats is how they start scraching us alot but only when they get really mad like they really mad.";
    
});
dogPic.addEventListener("click",function(){ 
    textBlock.innerHTML="This pictue of a dog is really pretty because he is on top of the log and like he is like posing for the picture and it is really pretty and so cute.";
    
});