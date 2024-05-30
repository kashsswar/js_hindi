// const arr=[1,2,2,3,5,6,8,9]

// for (const index of arr) {
//     console.log(index);
// }

// const greeting = "Hello world!"
// for (const greet of greeting) {
//     if(greet==" "){
//         continue
//     }
//     console.log(greet);
// }

// const map = new Map()

// map.set("IN", "India")
// map.set("US", "United States")
// map.set("UK", "United Kingdom")

// for (const [key,value] of map) {
//     console.log(`${key} ~ ${value}`);
// }

// // for (const key of map) {
// //     console.log(key);
// // }


// for map we use forof but if there is object , we will use forin

const myObject={
    name:"Karishma",
    age:22,
    residence:"Rajasthan"
}

for (const key in myObject) {
    // console.log(`${key} : ${myObject[key]}`);
}

//sirf object hi nahi array mein bhi forin kam karega

const programming = ["js","python", "java", "cpp", "c#"]

for (const index in programming) {
    // console.log(programming[index]);
}

//forin map mein kam nahi karega
//map lagbhag object jaisa hi dikhta hai

//and chatgpt now itself to find difference

const coding = ["js","python", "java", "cpp", "c#"]

coding.forEach(element => {
    // console.log(element);
});

//we can put function as a parameter too 

function printme(item){
    // console.log(item);
}

// coding.forEach(printme)

//forEach takes three parameters -- items, index, array

coding.forEach((item, index, arr)=>{
    // console.table([item, index, arr])
})

const  code =[
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"python",
        languageFile:"py"
    },

    {
        languageName:"c plus plus",
        languageFile:"c++"
    },
    {
        languageName:"c sharp",
        languageFile:"c#"
    },

    {
        languageName:"java",
        languageFile:"java"
    }
]

code.forEach(items =>{
//    console.log(items.languageFile)
})

//forEach , callback leta hai

//callback function - jis function ka koi naam na ho

//forEach never returns the value whereas map and filter does


//+++++++++++++++++++++++filter++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const arr=[1,43,33,56,88,98]

const newarr=arr.filter((item)=> item>50)
// console.log(newarr);

//++++++++++++using forEach+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

arr.forEach((item)=>{
    if(item>50){
        // console.log(item);
    }
})


const books=[
    {
        title:"Harry Potter",
        author:"JK Rowling",
        year:1999
    },
    {
        title:"Lord of the rings",
        author:"Tolkein",
        year:2000
    },
    {
        title:"The Alchemist",
        author:"Paulo Coelho",
        year:1988
    },
    {
        title:"The Hobbit",
        author:"JRR Tolkien",
        year:1937
    }
]

const newbooks=books.filter((bk)=>{return bk.year>=1940 && bk.author==="JK Rowling"})

// console.log(newbooks)


const Arr= [54,232,75,343,867,87]

const myArr = Arr.map((items)=> items + 10)
// console.log(myArr);

const nayaArr =  Arr.map((item)=>item+10).map((item)=>item*10).filter((item)=>item>4000)
// console.log(nayaArr);


//++++++++++++++++++++++++++++reduce++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//yeh do parameters leta hai - accumulator and current value aur baad mein } , k baad initial value accumulator ki hoti ha

const currVal=[34,67,1,3,567,98]

const myTotal = currVal.reduce ((acc,item)=>{
    // console.log(`${acc} is accumulator and ${item} is current value`);
    return acc + item

}, 0)
// console.log(myTotal);

const shoppingCart =[
    {
        name:"laptop",
        price:45000
    },
    {
        name:"mobile",
        price:20000
    },
    {
        name:"watch",
        price:3000
    },
    {
        name:"tablet",
        price:10000
    }
]

const totalPrice = shoppingCart.reduce((acc, item)=>{
    console.log(`Initial value : ${acc} and after adding price one by one ${item.price}`);
    return acc + item.price
},0)
console.log(`Total Price :${totalPrice}`);