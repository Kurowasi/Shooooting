//- Chara constructor --------------------------------------------------------------------//
function Chara(){
    'use strict';
    this.x = 0;
    this.y = 0;
    this.w = 30;
    this.h = 60;
}

Chara.prototype = {
    draw: function(){
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}