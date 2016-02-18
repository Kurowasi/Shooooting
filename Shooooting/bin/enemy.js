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
    update: function(){
        'use strict';
        console.log(enemies.length);
        enemies.forEach(function(e, i){
            'use strict';
            e.y += 1;
            if(e.y >= 600){
                enemies.splice(i, 1);
            }
        });
    }
}