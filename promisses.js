function sum(a, b, callback) {
    setTimeout(function () {
        callback(a + b);
    }, 1000);
}

sum(2, 2, function (a) { //soma primeiro aqui e vai para a proxima etapa
    sum(4, 4, function (b) {
        sum(a, b, function (result) {
            console.log(result);
        });
    });
});


