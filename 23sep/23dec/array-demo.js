const arr =[2,3,4,5,6,7,8];
const oddElement = arr.filter(element => {
    return element % 2 != 0
})
console.log(oddElement);
const numbers = [1,2,3,4,5,6,7];
const numberOfString = numbers.toString();
console.log(`number of string => ${numberOfString}`);