var interval = function(callback, time){
    setTimeout(function (){
        callback();
        interval(callback, time); //invocando a função recursivamente
    }, time);                     //msm que a setInterval
};

interval(function (){
    console.log('R ' + new Date());
}, 1000);