import { sayHelloProps } from "./types";

export function sayHello({ firstName,lastName,age}:sayHelloProps){
    console.log('Hello');
    console.log(`First name is ${firstName}`);

    if(lastName){
        console.log(`Last name is ${lastName}`);
    }
    if(age){
        console.log(`Age is ${age}`);
    }
}