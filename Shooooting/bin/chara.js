var Chara = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    hp: 100,
    shots: []
};

function charaShot(){
    this.x = Chara.x + (Chara.w / 2);
    this.y = Chara.y;
    this.r = 10;
    this.offensivePower = 100;
}

charaShot.prototype = {
    update: function(){
        'use strict';
        this.y += 20;
    }
}


module.exports = {
    returnChara: function(){
        'use strict';
        return Chara;
    },
    setCharaX: function(x){
        'use strict';
        Chara.x = Math.min(x, 900 - Chara.w);
    },
    setCharaY: function(y){
        'use strict';
        Chara.y = Math.min(y, 600 - Chara.h);
    },
    makeShot: function(){
        'use strict';
        Chara.shots.push(new charaShot());
    },
    updateCharaShots: function(){
        'use strict';
        Chara.shots.forEach(function(s, i){
            'use strict';
            s.y -= 5;
            if(s.y <= 0){
                Chara.shots.splice(i, 1);
            }
        });
    }
}