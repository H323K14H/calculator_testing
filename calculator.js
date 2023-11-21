const sum = function (a, b) {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const modulus = (a, b) => {
    return a % b;
};

const isEven = (number) => {
    return number % 2 === 0;
};


module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    modulus,
    isEven
};
