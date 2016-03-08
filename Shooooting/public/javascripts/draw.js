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
            ctx.drawImage(img[0], 0, 0, 64, 64, c.x, c.y, c.w, c.h);
            
            // draw chara shot
            c.shots.forEach(function(s, i){
                'use strict';
                ctx.drawImage(img[2], 60, 0, 30, 30, s.x - s.r * 2, s.y - s.r * 2, s.r * 3, s.r * 3);
            });
        });
        // draw enemy
        enemies.forEach(function(e, i){
            'use strict';
            ctx.drawImage(img[1], 0, 0 + 64 * e.type, 64, 64, e.x, e.y, e.w, e.h);
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
        // draw result
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.font = "64px 'Comic Sans MS'";
        ctx.fillText("GAME OVER", (CANVAS_WIDTH / 2) - 100, (CANVAS_HEIGHT / 2));
        ctx.fillText("スコア：" + result + "点", (CANVAS_WIDTH / 2) - 50, (CANVAS_HEIGHT / 2) + 100);
        
        // draw Ranking
        ctx.fillStyle = "rgb(0, 0, 255)"
        ctx.font ="32px 'Comic Sans MS'";
        ctx.fillText("-Ranking-", 40, 70);
        for(var i = 0; i < 10; i++){
            ctx.fillText( i + 1 + "位" + text[i] + "点", 50, 130 + 50 * i)
        }
    }
}