// // // // 


// // // const loggedInGoogle=false
// // // const loggedInEmail=true

// // // if(loggedInEmail || loggedInGoogle){
// // //     console.log("Welcome back")
// // // }


// // const month=4

// // switch(month){
// //     case 1:
// //         console.log("January")
// //         break
// //     case 2:
// //         console.log("February")
// //         break
// //     case 3:
// //         console.log("March")
// //         break
// //     case 4:
// //         console.log("April")
// //         break
// //     case 5:
// //         console.log("May")
// //         break
// //     default:
// //         console.log("Invalid month")
// // }

// const userEmail="k@karishma.ml"
// if(userEmail){
//     console.log("Email sent")
// }
// else{
//     console.log("Email not sent")
// }


//falsy values

//false, 0, -0, BigInt 0n. "", null, undefined, NaN

//Truthy values

//false, "0" , " ", {}, []

let userEmail=[]

// if(userEmail){
//     console.log("Email present")
// }
// else{
//     console.log("Email not present")
// }
// //even if the array is empty, it is working as truthy, so for this , we will use this-

// if(userEmail.length){
//     console.log("Email present")
// }
// else{
//     console.log("Email not present")
// }

const emptyObj={}

if(Object.keys(emptyObj).length==0){
    console.log("Empty object")
}
else{
    console.log("Object not empty")
}

//false ==0    //true
//false==''    //true
//0==''        //true


//Nullish Coalescing Operator (??) : null undefined

//only works for null and undefined....agar null ya undefined hai to same but agar koi value hai to that value
//aur agar two value hai to pehli value

let val1
// val1 = 5??10
// val1 = null ??10
// val1 = undefined ??15
val1 = null ?? 10 ?? 15

console.log(val1);

//Ternary Operator

//condition ? value1 : value2

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80")