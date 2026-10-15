const random = (min, max) => {
if (max === undefined) {
    max = min;
    min = 0;
}

return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(5, 10));
console.log(random(10));
console.log(random(7, 7));
console.log(random(10, 5));
console.log (random (-10, 5))