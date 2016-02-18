//- draw function -----------------------------------------------------------------------//
function draw(){
    'use strict';
    // draw background
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // draw chara
    chara.draw();
}