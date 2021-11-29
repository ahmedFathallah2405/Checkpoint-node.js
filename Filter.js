var fs = require("fs");
var path = require("path");
var file = process.argv[2];

fs.readdir(file,function(err,files){
    if(err){
        console.log(err);
    }else{
        files.forEach(function(Name){
            if(path.extname(Name) === "."+process.argv[3]){
                console.log(Name);
            }
        })
    }
})