//primitives : number, string, boolean
//more complex types: arrays, objrcts
//FUnction types, perameters

//Primitives

let age: number;
age = 34;

let userName : string;
userName= 'jinsi'

let isInstructor : boolean;
isInstructor = true;

//More complex types

let hobbies: string[];

hobbies =['sports', 'cooking']

type Person = {
    name: string;
    age: number;
};

let person : Person = {
    name: 'Max',
    age: 32
}

let people: Person[];

// Type inference

let course : string | number = 'React - The Complete Guide';

course = 12341;


//Functions & types

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

//updatedArray[0].split('');