//- function draw -----------------------------------------------------------------------//
function draw(){
    'use strict';
    // draw background
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(CANVAS.x, CANVAS.y, CANVAS.WIDTH, CANVAS.HEIGHT);
    // draw chara
    charas.forEach(function(c, i){
        'use strict';
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.fillRect(c.x, c.y, c.w, c.h);
        
        // draw chara shot
        c.shots.forEach(function(s, i){
            'use strict';
            ctx.fillStyle = "rgb(255, 0, 0)";
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        });
    });
    // draw enemy
    enemies.forEach(function(e, i){
        'use strict';
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.fillRect(e.x, e.y, e.w, e.h);
    });
    // draw enemy shots
    shots.forEach(function(s, i){
        'use strict';
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    });
}