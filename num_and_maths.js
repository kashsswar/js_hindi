const score=400

// console.log(score)

const balance= new Number(123534327563)
// console.log(balance)

// console.log(balance.toString().length)

// console.log(balance.toFixed(3))

// console.log(balance.toPrecision(4))

// console.log(balance.toLocaleString())
// console.log(balance.toLocaleString('en-In'))

// ++++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-4))

// console.log(Math.abs(4))

// console.log(Math.round(4.8))

// console.log(Math.ceil(5.3))

// console.log(Math.floor(6.9))

// console.log(Math.min(5,88,2,13,1))

// console.log(Math.max(5,88,2,13,1))

console.log(Math.random()) //yeh values 0-1 k beech mein dega

//agar humein values 0 se jyada hi chahiye

console.log((Math.random()*10)+1) //kynki value 0.04 types bhi aa skti h

console.log(Math.floor(Math.random()*10)+1) //agar decimal nahi chahiye to

//agar ek range mein chahiya to

min=10
max=20

console.log(Math.floor(Math.random()*(max-min+1)) + min )