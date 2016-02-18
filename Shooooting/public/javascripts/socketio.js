
var s = io.connect('http://localhost:3000');

// connect socket.io
s.on("connect", function(data){
    console.log("接続完了");
});

// disconnect socket.io
s.on("disconnect", function(){
    console.log("接続解除");
});


// draw background
s.on("Background", function(CANVAS){
    'use strict';
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(CANVAS.x, CANVAS.y, CANVAS.WIDTH, CANVAS.HEIGHT);
});

// draw chara
s.on("Chara", function(Chara){
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect(Chara.x, Chara.y, Chara.w, Chara.h);
});