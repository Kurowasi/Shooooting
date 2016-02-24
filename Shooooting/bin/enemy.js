//- global variables ------------------------------------------------------------------------//
var enemies = [];
var shots = [];
var Chara = require("./chara.js");
var chara;
//- Enemy constructor ----------------------------------------------------------------------//
function Enemy(){
    'use strict';
    this.x = Math.floor(Math.random() * 870);
    this.y = 0;
    this.w = 30;
    this.h = 30;
    this.timer = 0;
    
    this.shot = {
        r: 10,
        interval: 300
    };
}
Enemy.prototype.makeShot = function(){
    'use strict';
    //shots.push(new EnemyShot((this.x + this.w) / 2, this.y + this.h - this.shot.r, this.shot));
    shots.push(new EnemyShot(this.x + (this.w / 2), this.y + this.h - this.shot.r, this.shot));
};
//- Enemy01 constructor --------------------------------------------------------------------//
function Enemy01(){
    'use strict';
    this.x = Math.floor(Math.random() * 870);
    this.w = 60;
    this.h = 60;
    
    this.shot = {
        r: 20,
        interval: 100
    };
}
Enemy01.prototype = new Enemy();
//- Enemy02 constructor --------------------------------------------------------------------//
function Enemy02(){
    'use strict';
    this.x = Math.floor(Math.random() * 870);
    this.w = 30;
    this.h = 60;
    
    this.shot = {
        r: 10,
        interval: 100
    };
}
Enemy02.prototype = new Enemy();
//- Enemy03 constructor --------------------------------------------------------------------//
function Enemy03(){
    'use strict';
    this.x = Math.floor(Math.random() * 870);
    this.w = 60;
    this.h = 30;
    
    this.shot = {
        r: 20,
        interval: 100
    };
}
Enemy03.prototype = new Enemy();
//- enemyShots constructor ------------------------------------------------------------------//
function EnemyShot(x, y, s){
    'use strict';
    this.x = x;
    this.y = y;
    this.r = s.r; 
}
//- module.exports --------------------------------------------------------------------------//
module.exports = {
    returnEnemies: function(){
        'use strict';
        return enemies;
    },
    returnShots: function(){
        'use strict';
        return shots;
    },
    makeEnemy: function(){
        'use strict';
        enemies.push(new Enemy());
    },
    makeEnemy01: function(){
        'use strict';
        enemies.push(new Enemy01());
    },
    makeEnemy02: function(){
        'use strict';
        enemies.push(new Enemy02());
    },
    makeEnemy03: function(){
        'use strict';
        enemies.push(new Enemy03());
    },
    update: function(){
        'use strict';
        chara = Chara.returnChara();
        enemies.forEach(function(e, i){
            'use strict';
                        
            // enemy timer++
            e.timer++;
            
            // move enemy
            e.y += 1;
            if(e.y >= 600){
                enemies.splice(i, 1);
            }
            
            // make enemy shots
            if(e.timer % e.shot.interval == 0){
                e.makeShot();
            }
            
            // Collision Detection Chara shots
            chara.shots.forEach(function(s, j){
                'use strict';
                if((e.y < s.y - s.r) && (s.y - s.r < e.y + e.h)){
                    if((e.x < s.x - s.r) && (e.x + e.w > s.x - s.r) || (e.x < s.x + s.r) && (e.x + e.w > s.x + s.r)){
                        console.log("衝突");
                        //console.log(i);
                        chara.shots.splice(j, 1);
                        enemies.splice(i, 1);
                    }
                }
            });
        });
        
        // enemy shots
        shots.forEach(function(s, i){
            'use strict';
            s.y += 2;
            if(s.y >= 600){
                shots.splice(i, 1);
            }
        });
    }
};

