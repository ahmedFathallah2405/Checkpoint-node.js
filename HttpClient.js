var http = require('http');
var file= process.argv[2];
http.get(file, function(r){
    r.setEncoding("utf-8");
    r.on("data",(d)=>{
        console.log (d);
    })
})