/*Написать метод/функцию, который на вход принимает массив городов.
Выводит их через запятую. В Конце ставит точку. Например: «Москва, Санкт-Петербург, Воронеж.»
Потребовалось 10 минуты, так как я недавно видела, как решается похожая задача*/

function City(arr) {
  return arr.join(",") + ".";
}
console.log(City(["Москва", "Санкт-Петербург", "Воронеж"]));

/*Написать метод/функцию, которая на вход принимает число (float),
а на выходе получает число округленное до пятерок. Например, 27 => 25, 27.8 => 30, 41.7 => 40
Потребовалось 40 минут*/

let num0 = 27;
let num1 = 27.8;
let num2 =41.7;


function roundNumb(num) {
  let toFive = num % 5;
   
  if (toFive === 0) {
    return num;
  } else if (toFive >= 2.5) {
    return (num-toFive+5);
  } else {
    if (toFive < 2.5){
      return (num-toFive)
    }
  }
}

console.log(roundNumb(num0));
console.log(roundNumb(num1));
console.log(roundNumb(num2));

/*Написать метод/функцию, который на вход принимает число (int),
а на выходе выдает слово компьютер в падеже соответствующем указанному количеству.
Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».
Потребовалось около 2 часов*/

let num3 = 25;
let num4 = 41;
let num5 = 1048;


function computer(int) {
  let myNum = String(int);
  let myNumArr = [];
  for (let i = 0; i < myNum.length; i++) {
    myNumArr.push(myNum.charAt(i));
  }
    
  let end = myNumArr[myNumArr.length-1];
  let penult = myNumArr[myNumArr.length-2];
    
  if ((end >=5 && end <= 9) ||  
      (end === "0") ||
      (end ==1 && penult == 1) ||
      (end >=2 && end <= 4 && penult == 1)
    ){
    console.log (int +" компьютеров");}
        
  if (end == 1 && penult !=1) {
    console.log (int + " компьютер")}
    
  if (end >=2 && end <= 4 && penult != 1) {
    console.log(int + " компьютера")
  }  
}

computer(num3);
computer(num4);
computer(num5);

/*Написать метод/функцию, которая на вход принимает целое число,
а на выходе возвращает является ли число простым (не имеет делителей кроме 1 и самого себя).
Потребовалось 30 минут*/

let num6 = 15;
let num7 = 8;
let num8 = 1;

function primeNum(num) {
  let consider = 0;
  for (let i=2; i<=num-1; i++){
    let divide = num % i;
    if (divide === 0) {
      consider = consider +1;
    }
  }        
  if  (consider === 0){
    console.log(num + " является простым числом")
  } else {
    console.log(num + " не является простым числом")
  }
}

primeNum(num6);
primeNum(num7);
primeNum(num8);


