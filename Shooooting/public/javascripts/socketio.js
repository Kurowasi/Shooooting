
var s = io.connect('http://localhost:3000');

// connect socket.io
s.on("connect", function(data){
    console.log("接続完了");
});

// disconnect socket.io
s.on("disconnect", function(){
    console.log("接続解除");
});


// socket background
s.on("Background", function(CANVAS){
    'use strict';
    // draw background
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(CANVAS.x, CANVAS.y, CANVAS.WIDTH, CANVAS.HEIGHT);
});

// socket chara
s.on("Chara", function(Chara){
    // draw chara
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect(Chara.x, Chara.y, Chara.w, Chara.h);
    
    // draw chara shot
    Chara.shots.forEach(function(s, i){
        'use strict';
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    });
});

// socket enemy
s.on("Enemy", function(enemies){
    // draw enemy
    enemies.forEach(function(e, i){
        'use strict';
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.fillRect(e.x, e.y, e.w, e.h);
    });
});


// socket enemyShots
s.on("Shots", function(shots){
    'use strict';
    // draw enemy shots
    shots.forEach(function(s, i){
        'use strict';
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    });
});