/* Task 3
Функция для проверки значения на false
Измените функцию таким образом,
чтобы только переменная boolean типа со значением false
давала результат "Значение равно false"*/

function checkIfValIsFalse(value) {
  if (value === false) // Strict equality
  {
    console.log("Значение равно false");
} else {
    console.log("Значение не равно false");
}
}
checkIfValIsFalse(false); // "Значение равно false"
checkIfValIsFalse(0); // "Значение не равно false"
checkIfValIsFalse(''); // "Значение не равно false"
checkIfValIsFalse(null); // "Значение не равно false"