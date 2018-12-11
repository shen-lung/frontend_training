console.log('\n*** Remove EVEN numbers ***');

const removeEven = (numbers) => {
    if(numbers.length === 0) {
        return [];
    }
    let res = numbers.filter((num) => num % 2);
    res = res.filter((num, pos) => res.indexOf(num) == pos);

    return res.map((num) => parseInt(num));
};

console.log(removeEven([3, 45, 67, 5, 6, 3, 67]));

console.log('\n*** Remove ***');

const remove = (numbers, condition, transformation) => {
    if(numbers.length === 0) {
        return [];
    }
    let res = numbers.filter((num) => num % transformation === condition);
    res = res.filter((num, pos) => res.indexOf(num) == pos);

    return res.map((num) => parseInt(num));
};

console.log(remove([3, 4, 56, 5, 1, 1], 1, 2));
