window.addEventListener('load', init);

//- global variables ----------------------------------------------------------------------//
var ctx;
var loop;
var chara;
//- constant ------------------------------------------------------------------------------//
var CANVAS_WIDTH = 900, CANVAS_HEIGHT = 600;
//- init function -------------------------------------------------------------------------//
function init(){
    'use strict';
    
    // inisialize canvas
    var canvas = document.getElementById('canvas');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    
    // inisialize ctx
    ctx = canvas.getContext('2d');
    
    // inisialize evet listener
    canvas.addEventListener('mousemove', mouseMove);
    
    // inisialize chara
    chara = new Chara();
    
    // inisialize loop
    loop = setInterval(mainLoop, 16);
}

//- mainLoop function --------------------------------------------------------------------//
function mainLoop(){
    'use strict';
    draw();
}
