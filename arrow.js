//yaad rkhna this sirf object mein use hota hai....function mein nahi

// const user={
//     username:"Karishma",
//     price:9490,

//     welcomeMessage: function(){
//         console.log(`Hello ${this.username}`)
//     }
// }

// // user.welcomeMessage()
// // user.username="Aditya"

// // user.welcomeMessage()

console.log(this)  //abhi to yeh empty object dega but browser console mein yeh windows dega


//lekin agar hum function k andar print karenge to alag value dega

// function chai(){
//     let username="Karishma"
//     console.log(this);
//     console.log(username);
// }
// chai()

//par agar hum function const ki tarah declare karenge ya arrow wala krenge tab this kam nahi krega

// const chai= function(){
//     let username="Karishma"
//     console.log(this.username);
// }
// chai()

const chai= () =>{
    let username="Karishma"
    console.log(this.username);
}
chai()


//function declare karne k tarike

const addTwo(num1,num2){
    return num1 + num2
}

const addTwo = (num1,num2) => {
    return num1 + num2
}
//return hai to braces {} lagana padega nahi to parentheses lagega
const addTwo = (num1,num2) => (num1 + num2)

//jab object declare karenge tab

const addTwo = (num1,num2) => {username:"KArishma"})
