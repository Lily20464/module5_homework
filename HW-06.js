// Задание 6

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.
// Проверить, все ли элементы в массиве одинаковые.

let numbers = [1, 1, 1, 0, 1, 1, 2];
let result = 0;
for ( i = 0; i < numbers.length - 1; i++ ) {
      if (numbers[i] == numbers[i+1]){
         result++;
  }
}

if (result == numbers.length  - 1) {
   console.log(true);
}
else{
   console.log(false);
  }
