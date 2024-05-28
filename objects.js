//objects two tarah se declare hote hain - constructor and literal

//jab constructor k through banate hain tab wo singleton hota hai---apni tarah ka ek object

//Object.create ----constructor ki tarah banaya gya hai

//Object  literals


const mySym = Symbol("key1")
const JsUser={
    name:"Karishma",
    [mySym]:100,
    "full_name":"Karishma Sinsinwar",
    age:18,
    location:"Jaipur",
    email:"karishma12@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

console.log(JsUser["full_name"]);

JsUser.email="kari@gmail.com"
// Object.freeze(JsUser)
// JsUser.email="carry@gmail.com"

console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello world");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greetingTwo());