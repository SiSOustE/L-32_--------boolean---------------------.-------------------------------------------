/* Task 4
Функция для демонстрации работы со строками */

function stringOperations(greeting) {

  // Вывод длины строки
  let strLength = greeting.length;
  console.log(`Длина строки: ${strLength} символов`);

  // Получение символа строки по индексу
  let smb = greeting[7];
  console.log(`Символ по индексу 7: ${smb}`);
  smb = greeting.charAt(1);
  console.log(`Символ по индексу 1: ${smb}`);

  // Преобразование строки в верхний регистр
  let UpperC = greeting.toUpperCase();
  console.log(`Строка в верхнем регистре: ${UpperC}`);

  // Поиск подстроки в строке
  let searchTerm = "world";
  let res = greeting.indexOf(searchTerm);
  console.log(`позиция первого совпадения: ${res}`);

  /* напишите код, который будет выводить "Строка содержит подстроку <searchTerm>"
  если searchTerm есть в greeting */

  if (res != -1)
    console.log(`Строка содержит подстроку <searchTerm>`);

  let sbString = greeting.substring(7, 12);
  console.log(sbString);

}
stringOperations("Hello, world!");

let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`
console.log(`Полное имя: ${fullName}`)

//Подстрока
function xp2(nm) {
  console.log(nm.substring(4, 9));
}
xp2('Don Pedro');