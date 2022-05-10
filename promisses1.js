function sum(a, b) {
    setTimeout(function () {
        return new Promise(function (resolve) {
            resolve(a + b);
        }, 1000);
    });
}

sum(2, 2).then(function (a) { //soma primeiro aqui e vai para a proxima etapa
    sum(4, 4).then(function (b) {
        sum(a, b).then(function(result) {
            console.log(result);
        });
    });
});


