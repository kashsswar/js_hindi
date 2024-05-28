// const tinderUser= new Object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="karishma"
tinderUser.isLoggedIn=false

// console.table(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"karishma",
            lastname:"sinsinwar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a", 4:"b"}

const obj3=Object.assign({}, obj1, obj2)    //assign copies properties from source to target....you can remove {} here

// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"));