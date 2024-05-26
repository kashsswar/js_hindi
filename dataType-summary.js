//Primitive

//1. number
//2. string
//3. boolean
//4. null
//5. undefined
//6. symbol
//7. bigint


//Reference (Not Primitive)

//1. array
//2. object
//3. function


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.table([id,anotherId])
console.log(id===anotherId)

const bigNumber=46565622n


const arr=["banana","apple","grapes"]

const myObject={
    name:"karishma",
    age:22
}

const myFunction=function(){
    console.log("Hello world")
}