//- mouseMove function -------------------------------------------------------------//
function mouseMove(e){
    'use strict';
    s.emit("mouseX", e.clientX);
    s.emit("mouseY", e.clientY);
}