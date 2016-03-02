//- global variables --------------------------------------------------------------//
var CANVAS;
var charas;
var enemies;
var shots;
// inisialize s
var s = io.connect('http://localhost:3000');

// connect socket.io
s.on("connect", function(data){
    console.log("接続完了");
});

// disconnect socket.io
s.on("disconnect", function(){
    console.log("接続解除");
    gameFlag = false;
});


// socket background
s.on("Background", function(CANVAS1){
    'use strict';
    CANVAS = CANVAS1;
});

// socket chara
s.on("Chara", function(charas1){
    charas = charas1;
});


// socket enemy
s.on("Enemy", function(enemies1){
    enemies = enemies1;
});


// socket enemyShots
s.on("Shots", function(shots1){
    'use strict';
    shots = shots1;
});