// var addUntil = function addUntil(value) {
//     return function(value2) {
//         if(value2 === undefined) return value;
//         return addUntil(value + value2)
//     }
// }

const addUntil = (...values) => {
    let sum = 0;

    if(values.length === 0) {
        return 0;
    }
    values.forEach((num) => {
        sum = sum + num;
    })

    return sum;
};

result = addUntil(1,2,3);

console.log(result);
