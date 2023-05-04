let masyv = [1,2,3,4,5,6,7,8,9,10]
console.log(masyv[0])
console.log(masyv[1])
console.log(masyv[2])
console.log(masyv[3])
console.log(masyv[4])
console.log(masyv[5])
console.log(masyv[6])
console.log(masyv[7])
console.log(masyv[8])
console.log(masyv[9])
let book1 ={
  title: 'Do Androids Dream of Electric Sheep?',
  pageCount: 288,
  gentre: 'dystopian science fiction',
}
let book2 ={
  title: 'Philosophy in the Boudoir',
  pageCount: 272,
  gentre: 'dramatic dialogue',
}
let book3 ={
  title: 'The Colour of Magic',
  pageCount: 320,
  gentre: 'fantasy comedy',
}
let book4 ={
  title: 'Do Androids Dream of Electric Sheep?',
  pageCount: 288,
  gentre: 'dystopian science fiction',
  authors:[
    {name:'Philip K. Dick', age: 53}
    ]
}
let book5 = {
  title: 'Philosophy in the Boudoir',
  pageCount: 272,
  gentre: 'dramatic dialogue',
  authors: [
    {name: 'Marquis de Sade', age: 74}
  ]
}
let book6 ={
  title: 'The Colour of Magic',
  pageCount: 320,
  gentre: 'fantasy comedy',
  authors:[
    {name:'Terry Pratchett', age:66}]
}
let users = [
  {
  name:'Ivan',
  username:'Vanya',
  password:12345,
  },
  {
  name:'Mykola',
  username:'Kolya',
  password:23456,
  },
  {
  name:'Taras',
  username:'Tarik',
  password:34567,
  },
  {
  name:'Pavlo',
  username:'Paul',
  password:45678,
  },
  {
  name:'Roman',
  username:'Rom',
  password:56789,
  },
  {
  name:'Volodymyr',
  username:'Vovk',
  password:67890,
  },
  {
  name:'Serhiy',
  username:'Sergio',
  password:78901,
  },
  {
  name:'Eduard',
  username:'Edichka',
  password:89012,
  },
  {
  name:'Andriy',
  username:'Andy',
  password:90123,
  },
  {
  name:'Myhaylo',
  username:'Kapitan',
  password: 11234,
  },
  ]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
let x = 5
if (x !== 0) {console.log('Вірно');
} else {console.log('Невірно')}
let a = 1
if (a !== 0) {console.log('Вірно');
} else {console.log('Невірно')}
a = 0
if (a !== 0) {console.log('Вірно');
} else {console.log('Невірно')}
a = -3
if (a !== 0) {console.log('Вірно');
} else {console.log('Невірно')}
let time = 54
if (time >= 0 && time <=14){
  console.log('Fisrt')
}
if (time >= 15 && time <=29){
  console.log('Second')
}
if (time >= 30 && time <=44){
  console.log('Third')
}
if (time >= 45 && time <=59){
  console.log('May the 4th be with you')
}
else {
  console.log('Sumerians?')
}
let day = 22
if (day >= 1 && day <=10){
  console.log('First Decade')
}
if (day >= 11 && day <=20){
  console.log('Second Decade')
}
if (day >= 21 && day <=31){
  console.log('Third Decade')
}
else {
  console.log('Hijri?')
}
let weekday= 3
switch (weekday) {
  case 1:
    console.log('monday');
    break;
  case 2:
    console.log('tuesday');
    break;
  case 3:
    console.log('it is wednesday my dudes');
    break;
  case 4:
    console.log('thursday');
    break;
  case 5:
    console.log('friday');
    break;
  case 6:
    console.log('saturday');
    break;
  case 7:
    console.log('sunday');
    break;
  default:
    console.log('God?');
}
let number1 = 42
let number2 = 69
if (number1 < number2){
  console.log(number2);
}
if (number1 > number2){
    console.log(number1);
  }
if (number2 === number1){
  console.log('Equal');
}
let X = 'string'
if (X === 5 || X === false){
  X = 'default'
  console.log(X)
}
else {console.log(X)}

let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >5){
  console.log("Супер")
}
if (coursesAndDurationArray[1].monthDuration >5){
  console.log("Супер")
}
if (coursesAndDurationArray[2].monthDuration >5){
  console.log("Супер")
}
if (coursesAndDurationArray[3].monthDuration >5){
  console.log("Супер")
}
if (coursesAndDurationArray[4].monthDuration >5){
  console.log("Супер")
}
if (coursesAndDurationArray[5].monthDuration >5){
  console.log("Супер")
}
