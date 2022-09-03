var cursor=document.querySelector("#cursor");
var h3=document.querySelector("h3");
document.addEventListener("mousemove",function(dets){
    cursor.style.left=`${(dets.x+15)}px`;
    cursor.style.top=`${(dets.y+15)}px`
})
h3.addEventListener("mouseenter",function(){
    cursor.style.transform="scale(2)";
});
h3.addEventListener("mouseleave",function(){
    cursor.style.transform="scale(1)";
})