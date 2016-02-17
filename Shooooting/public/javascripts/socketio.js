
var s = io.connect('http://localhost:3000');

s.on("connect", function(data){
    console.log("接続完了");
});

s.on("test", function(i){
    console.log(i);
});

s.on("disconnect", function(){
    console.log("接続解除");
});


