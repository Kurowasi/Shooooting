window.addEventListener('load', init);

//- global variables ----------------------------------------------------------------------//
var ctx;
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
}