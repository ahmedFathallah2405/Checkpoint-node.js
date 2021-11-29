var tableau=0
for (let i=2; i<process.argv.length; i++){
    tableau+= Number (process.argv[i]);
}
console.log(tableau);
