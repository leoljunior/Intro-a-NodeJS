console.log('A ' + new Date());

setTimeout(function () {
    console.log('I ' + new Date());
}, 0); // setTimeout foi usado como um modo de executar essa função depois
//comportamento parecido com o setImmediate
console.log('B ' + new Date());