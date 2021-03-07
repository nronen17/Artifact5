var carousel = document.querySelector(".carousel");
var slide = 0;
var skip = 0;
var items = carousel.querySelectorAll(".carousel-item");
function update(){
    for( var i = 0; i< items.length; i++){
        if(slide% items.length === i){
            items[i].hidden = false;
        } else
        items[i].hidden = true;
    }
}


setInterval(function(){
    if(skip > 0){
        skip--;
    }
    else if(skip == 0){
        slide++;
        update();
    }
    
}, 2000)

var prev = carousel.querySelector(".carousel-prev");
var next = carousel.querySelector(".carousel-next");
next.addEventListener("click", function(){
    slide ++;
    skip = 2;
    update();
})
prev.addEventListener("click", function(){
    slide --;
    skip = 2;
    update();
})





/*
n%10 
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
0 1 2 3 4 5 6 7 8 9 0  1  2






*/