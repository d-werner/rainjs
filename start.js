var fs = require('fs');
var motd = fs.readFileSync('motd.txt', 'utf8');
console.log("\n\n\n" + motd + "\n\n\n");

var server = require('./lib/server');

