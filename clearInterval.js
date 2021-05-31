var i = setInterval(function () {
    console.log('I ' + new Date());
}, 1000);

setTimeout(function () {
    clearTimeout(i);
}, 6000);