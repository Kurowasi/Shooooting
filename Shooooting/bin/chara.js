var Chara = {
    x: 0,
    y: 0,
    w: 30,
    h: 60
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
    }
}