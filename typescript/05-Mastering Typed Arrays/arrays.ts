const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

console.log(carMakers);
console.log(dates);

const car = carMakers[0];
console.log(car);
//console.log(carMakers.pop());
//console.log(carMakers.push('100'));



// help with 'map'

carMakers.map((car:string): string => {
    return car.toUpperCase();
})



//Flexible types 
const importantDates :(Date | String)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
console.log(importantDates);