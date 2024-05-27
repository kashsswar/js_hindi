let myDate= new Date()
// console.log(myDate)

// console.log(myDate.getDate())

// console.log(myDate.toString())

// console.log(myDate.toDateString())

// console.log(myDate.toLocaleDateString())

// console.log(myDate.toISOString())

// console.log(typeof myDate)

// let myCreatedDate= new Date(2023, 0, 23,5,3)
// console.log(myCreatedDate.toLocaleDateString())

// let myDatenow=new Date("01-14-2023")
// console.log(myDatenow.toLocaleDateString())

// let myDatenow=new Date("2023-01-14")
// console.log(myDatenow.toLocaleDateString())


const newDate=new Date()

// console.log(newDate)

// console.log(newDate.getMonth()+1)

// console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:'long'
})

console.log(newDate)