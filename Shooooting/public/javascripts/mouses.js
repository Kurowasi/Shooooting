//- mouseMove function -------------------------------------------------------------//
function mouseMove(e){
    'use strict';
    s.emit("mouseX", e.clientX);
    s.emit("mouseY", e.clientY);
}

//- mouseDown function -----------------------------------------------------------//
function mouseDown(){
    'use strict';
    s.emit("mouseDown");
    audio[0].play();
}