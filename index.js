function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return (function foo() {});
}

function returnsAnAnonymousFunction() {
    return (function () {});
}