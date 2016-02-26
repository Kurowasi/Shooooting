//- global variables -------------------------------------------------------------------------//
var charas = [];
//- Chara constructor ------------------------------------------------------------------------//
function Chara(id){
    'use strict';
    this.x = 300;
    this.y = 570;
    this.w = 30;
    this.h = 30;
    this.hp = 1000;
    this.shots = [];
    this.id = id;
}
Chara.prototype = {
    makeShot: function(){
        'use strict';
        this.shots.push(new CharaShot());        
    },
    updateShots: function(){
        'use strict';
        /*
        this.shots.forEach(function(s, i){
            'use strict';
            s.y -= 5;
            if(s.y <= 0){
                console.log(s);
                //this.shots.splice(i, 1);
            }
        });
        */
        for (var i = 0; i < this.shots.length ; i++) {
            (function(i){
                'use strict';
                var s = this.shots[i];
                s.y -= 5;
                if(s.y <= 0){
                    this.shots.splice(i, 1);
                }
            }).call(this, i);            
        }
    }
}
//- CharaShot constructor ----------------------------------------------------------------//
function CharaShot(){
    this.x = 100;
    this.y = 100;
    this.r = 10;
    this.offensivePower = 100;
}

//- module.exports --------------------------------------------------------------------------//
module.exports = {
    makeChara: function(id){
        charas.push(new Chara(id));
    },
    returnCharas: function(){
        'use strict';
        return charas;
    }
};