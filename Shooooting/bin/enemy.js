//- global variables ------------------------------------------------------------------------//
var enemies = [];
//- Enemy constructor ----------------------------------------------------------------------//
function Enemy(){
    'use strict';
    this.x = Math.floor(Math.random() * 870);
    this.y = 0;
    this.w = 30;
    this.h = 30;
}
//- Enemy01 constructor --------------------------------------------------------------------//
function Enemy01(){
    'use strict';
    this.x = Math.floor(Math.random() * 870);
    this.w = 60;
    this.h = 60
}
Enemy01.prototype = new Enemy();
//- Enemy02 constructor --------------------------------------------------------------------//
function Enemy02(){
    'use strict';
    this.x = Math.floor(Math.random() * 870);
    this.w = 30;
    this.h = 60;
}
Enemy02.prototype = new Enemy();
//- Enemy03 constructor --------------------------------------------------------------------//
function Enemy03(){
    'use strict';
    this.x = Math.floor(Math.random() * 870);
    this.w = 60;
    this.h = 30;
}
Enemy03.prototype = new Enemy();
//- module.exports --------------------------------------------------------------------------//
module.exports = {
    returnEnemies: function(){
        'use strict';
        return enemies;
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
        //console.log(enemies.length);
        enemies.forEach(function(e, i){
            'use strict';
            //console.log(e.w);
            e.y += 1;
            if(e.y >= 600){
                enemies.splice(i, 1);
            }
        });
    }
}