window.addEventListener('load', init);

//- global variables ----------------------------------------------------------------------//
var ctx;
var loop;
var timer = 0;
var canvas = [];
var gameFlag = true;
var result;
var text;
//- constant ------------------------------------------------------------------------------//
var CANVAS_WIDTH = 900, CANVAS_HEIGHT = 600;
//- init function -------------------------------------------------------------------------//
function init(){
    'use strict';
    
    // inisialize canvas
    canvas = [
        document.getElementById('canvas1'),
        document.getElementById('canvas2')
    ];
    for(var i = 0; i < 2; i++){
        canvas[i].width = CANVAS_WIDTH;
        canvas[i].height = CANVAS_HEIGHT;
        // inisialize evet listener
        canvas[i].addEventListener('mousemove', mouseMove);
        canvas[i].addEventListener('mousedown', mouseDown);
    }
    
    // inisialize ctx
    ctx = canvas[0].getContext('2d');
    
    // inisialize loop
    loop = setInterval(mainLoop, 16);
}
//- mainLoop function --------------------------------------------------------------------//
function mainLoop(){
    'use strict';
    timer++;
    if(timer % 2 == 0){
        ctx = canvas[1].getContext("2d");
        canvas[0].style.visibility = "visible";
        canvas[1].style.visibility = "hidden";
    }else{
        ctx = canvas[0].getContext("2d");
        canvas[0].style.visibility = "hidden";
        canvas[1].style.visibility = "visible";
    }

    draw();
}
