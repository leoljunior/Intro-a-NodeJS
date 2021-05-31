console.log('Criando o serialGenerator.js')

//var max = 10000;
var config = require('./config.js'); //importando o modulo config.js

var generate = function () {
    return Math.floor(Math.random() * config.max);
};
/*uma forma de exportar o modulo
module.exports.generate = function () {
    return Math.floor(Math.random() * max);
};*/

//outra forma, exportar como objeto
module.exports = {
    generate: generate
}