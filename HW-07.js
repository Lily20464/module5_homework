// Задание 7.
//
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.

let nums = [1, NaN, 4, 'test', 8, null , 15, 18];
let oddNums = 0;
let evenNums = 0;

for ( i = 0; i < nums.length; i++ ) {
  if (typeof(nums[i]) == "number" && isNaN(nums[i]) !== true) {
     if (nums[i]%2 == 0) evenNums++
     else oddNums++
   }
}
console.log('Чётных чисел: ' + evenNums);
console.log('Нечётных чисел: '+ oddNums);
