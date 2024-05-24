let value=33

//console.log(typeof value)

value=String(value)

//console.log(typeof value)

//let name="Karishma"
let name=""
name=Boolean(name)
console.log(name)

let bool=true
bool=Number(bool)
//console.table([bool, typeof bool])

console.log(1+"2")
console.log("1"+2)
console.log(1+2+"2") 
console.log("1"+2+2) //phele string, to baad wale ko bhi string ki tarah treat kiya jayega
console.log(+true)
console.log(+"") //pehle number , to baki bhi number

let gameCounter=100
console.table([gameCounter,++gameCounter])
console.table([gameCounter,gameCounter++])