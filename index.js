// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function () { return 0.5 - Math.random() });;

// console.time("concatenation");

// (async function loadData() {
//     const res = await fetch(`https://watch-me-server-gamma.vercel.app/api/watch-me/v1/user/me/joybose976@gmail.com`);
//     let data = await res.json();
//     data = data.data.imagePost;
//     console.log(data);
//     await data.sort(function () { return 0.5 - Math.random() });
//     console.log(data);
// })()

// // Remember when we finished
// console.timeEnd("concatenation");




/* function myMap(array, cb) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const value = cb(element, i, array);
        newArray.push(value);
    };
    return newArray;
};
let x = myMap(points, function (value, index, array) {

});
console.log(x);

const y = points.map(function (value, index, array) {

});
console.log(y); */

/* let sum = array.reduce(function (prev, curr) {
    return prev + curr;
}, 10);
// console.log(sum);
let max = array.reduce(function (acc, curr) {
    return Math.max(acc, curr);
}, 0);
console.log(max); */

/* function myReduce(array, cb, acc) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        acc = cb(acc, element);
    }
    return acc;
};
let sum = myReduce(array, function (prev, curr) {
    return prev + curr;
}, 0);
let max = myReduce(array, function (prev, curr) {
    return Math.max(prev, curr);
}, 00)
console.log(sum);
console.log(max); */

/* let a = array.reduceRight(function (acc, curr) {
    return acc + curr;
}, 0);
console.log(a); */
