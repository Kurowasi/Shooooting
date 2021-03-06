//- global variables ------------------------------------------------------------------------//
var enemies = [];
var shots = [];
var Chara = require("./chara.js");
var charas = [];
//- Enemy constructor ----------------------------------------------------------------------//
function Enemy(){
    'use strict';
    this.x = Math.floor(Math.random() * 870);
    this.y = 0;
    this.w = 30;
    this.h = 30;
    this.timer = 0;
    this.hp = 100;
    this.point = 100;
    this.type = 0;
    
    this.shot = {
        r: 10,
        offensivePower: 30,
        interval: 300
    };
}
Enemy.prototype.makeShot = function(){
    'use strict';
    shots.push(new EnemyShot(this.x + (this.w / 2), this.y + this.h - this.shot.r, this.shot));
};
//- Enemy01 constructor --------------------------------------------------------------------//
function Enemy01(){
    'use strict';
    this.x = Math.floor(Math.random() * 870);
    this.w = 60;
    this.h = 60;
    this.hp = 200;
    this.point = 200;
    this.type = 1;
    
    this.shot = {
        r: 20,
        offensivePower: 100,
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
    this.hp = 100;
    this.point = 100;
    this.type = 2;
    
    this.shot = {
        r: 10,
        offensivePower: 30,
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
    this.hp = 150;
    this.point = 150;
    this.type = 3;
    
    this.shot = {
        r: 20,
        offensivePower: 100,
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
    this.offensivePower = s.offensivePower;
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
    deleteEnemy: function(){
        'use strict';
        enemies.splice(0, enemies.length);
    },
    deleteShot: function(){
        'use strict';
        shots.splice(0, shots.length);
    },
    update: function(){
        'use strict';
        // update chara
        charas = Chara.returnCharas();
        
        // enemy
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
            
            // collision detection enemy and chara
            charas.forEach(function(c, j){
                'use strict';
                if((c.y < e.y) && (e.y < (c.y + c.h)) || ((c.y < (e.y + e.h)) && (e.y + e.h) < (c.y + c.h))){
                    if((c.x < e.x) && (e.x < (c.x + c.w)) || ((c.x < (e.x + e.w)) && ((e.x + e.w) < (c.x + c.w)))){
                        enemies.splice(i, 1);
                        c.hp -= e.hp;
                    }
                }
            });
            
            // Collision Detection Chara shots
            charas.forEach(function(c){
                c.shots.forEach(function(s, j){
                    'use strict';
                    if((e.y < s.y - s.r) && (s.y - s.r < e.y + e.h)){
                        if((e.x < s.x - s.r) && (e.x + e.w > s.x - s.r) || (e.x < s.x + s.r) && (e.x + e.w > s.x + s.r)){
                            c.shots.splice(j, 1);
                            e.hp -= s.offensivePower;
                            if(e.hp <= 0){
                                c.point += e.point;
                                enemies.splice(i, 1);
                            }
                        }
                    }
                });
            });
        });
        
        // enemy shots
        shots.forEach(function(s, i){
            'use strict';
            
            // move enemy shots
            s.y += 2;
            if(s.y >= 600){
                shots.splice(i, 1);
            }
            
            // collision detection chara
            charas.forEach(function(c, j){
                'use strict';
                if((c.y < (s.y + s.r)) && ((s.y + s.r) < (c.y + c.h))){
                    if((c.x < (s.x - s.r)) && ((s.x - s.r) < (c.x + c.w)) || ((c.x < (s.x + s.r)) && ((s.x + s.r) < (c.x + c.w)))){
                        shots.splice(i, 1);
                        c.hp -= s.offensivePower;
                    }
                }
            });
        });
    }
};

