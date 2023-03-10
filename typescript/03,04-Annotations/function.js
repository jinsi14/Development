var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
