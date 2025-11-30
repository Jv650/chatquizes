const nums = [2, 7, 10, 3, 8];

const newNumsArray = nums.filter(num => num > 5);
const mappedNumsArray = newNumsArray.map(num => "Value: " + num);


const newNumsArray = nums.filter(num => num > 5).map(num => "Value: " + num);
