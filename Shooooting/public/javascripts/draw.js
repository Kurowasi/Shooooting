//- function draw -----------------------------------------------------------------------//
function draw(){
    'use strict';
    if(gameFlag == true){
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
    }else if(gameFlag == false){
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.font = "64px 'Comic Sans MS'";
        ctx.fillText("GAME OVER", (CANVAS_WIDTH / 2) - 200, (CANVAS_HEIGHT / 2));
    }
}