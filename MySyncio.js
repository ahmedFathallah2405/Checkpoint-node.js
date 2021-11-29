var fs = require('fs');
var file= process.argv[2];
var n = fs.readFileSync(file).toString().split('\n').length-1;
console.log(n);
