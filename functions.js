// 

// function loginUserName(username){
//     if(!username){
//         console.log("Please provide username")
//         return                                               //return k baad ab dusra wala return nahi execute hoga
//     }
//     return `${username}  just logged in`
// }

// console.log(loginUserName())

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function addCartItems(...num){
//     return num
// }

// console.log(addCartItems(1,2,3,4,5))

// function addCartItems(val1, val2,...num){
//     return num
// }

// console.log(addCartItems(1,2,3,4,5))

// const user={
//     username:"Karishma",
//     price:293
// }
// function  handleObject(anyobject){
//     console.log(`User is ${user.username} and price is ${user.price}`)
// }
// handleObject(user)

const myNewArray=[1000,400,220,432]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))