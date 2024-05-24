//Avoid these types of comparisons

console.table([null>0, null>=0, null==0])
console.table([undefined==0, undefined>=0, undefined<0])

console.log("22"===22)
console.log("22"==22)