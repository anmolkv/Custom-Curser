var a = document.querySelector(".main")
var b = document.querySelector("#curser")
var c = document.querySelector("h1")
var click = 0
a.addEventListener("mousemove",function(dets){
    b.style.left= dets.x+"px";
    b.style.top= dets.y+"px";
    
})

       
