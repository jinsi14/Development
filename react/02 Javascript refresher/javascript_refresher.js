/*

//FUNCTIONS

const multiply = (number) => {
  return number * 2;
}

console.log(multiply(2));
*/



/*
//CLASSES

class Human {
  constructor() {
    this.gender = 'male';
  }
  
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name= 'Max';
  }
  
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();

person.printGender();
*/



/*
//SPREAD

const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);
*/



/*

//REST 

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3));

*/



/*
//DESTRUCTURING

const numbers = [1,2,3];
[num1, , num3] = numbers;;
console.log(num1, num3);
*/



//ARRAYS

const numbers = [1,2,3];
const doubleNumArray = numbers.map((num) => {
  return num *2;
});

console.log(numbers);
console.log(doubleNumArray);