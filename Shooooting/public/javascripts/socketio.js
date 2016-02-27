
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
    ctx1.fillStyle = "rgb(0, 0, 0)";
    ctx1.fillRect(CANVAS.x, CANVAS.y, CANVAS.WIDTH, CANVAS.HEIGHT);
    ctx2.fillStyle = "rgb(0, 0, 0)";
    ctx2.fillRect(CANVAS.x, CANVAS.y, CANVAS.WIDTH, CANVAS.HEIGHT);
});

// socket chara
s.on("Chara", function(charas){
    // draw chara
    charas.forEach(function(c, i){
        'use strict';
        ctx1.fillStyle = "rgb(255, 0, 0)";
        ctx1.fillRect(c.x, c.y, c.w, c.h);
        ctx2.fillStyle = "rgb(255, 0, 0)";
        ctx2.fillRect(c.x, c.y, c.w, c.h);
        
        // draw chara shot
        c.shots.forEach(function(s, i){
            'use strict';
            ctx1.fillStyle = "rgb(255, 0, 0)";
            ctx1.beginPath();
            ctx1.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx1.fill();
            ctx1.closePath();
            ctx2.fillStyle = "rgb(255, 0, 0)";
            ctx2.beginPath();
            ctx2.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx2.fill();
            ctx2.closePath();
        });
    });
});


// socket enemy
s.on("Enemy", function(enemies){
    // draw enemy
    enemies.forEach(function(e, i){
        'use strict';
        ctx1.fillStyle = "rgb(0, 0, 255)";
        ctx1.fillRect(e.x, e.y, e.w, e.h);
        ctx2.fillStyle = "rgb(0, 0, 255)";
        ctx2.fillRect(e.x, e.y, e.w, e.h);
    });
});


// socket enemyShots
s.on("Shots", function(shots){
    'use strict';
    // draw enemy shots
    shots.forEach(function(s, i){
        'use strict';
        ctx1.fillStyle = "rgb(0, 0, 255)";
        ctx1.beginPath();
        ctx1.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx1.fill();
        ctx1.closePath();
        ctx2.fillStyle = "rgb(0, 0, 255)";
        ctx2.beginPath();
        ctx2.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx2.fill();
        ctx2.closePath();
    });
});