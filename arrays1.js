const marvel_heroes=["thor","Ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);           //array ko bhi ek element ki tarah liya --- array as a whole

//concat mein jodta to hai but ek naye array mein...so hum pehle naye variable ko define karenge

// const newHeroes=marvel_heroes.concat(dc_heroes)
// console.log(newHeroes);

//glass ko toda aur wo spread ho gya....array ko toda aur wo spread ho gya

// console.log([...marvel_heroes, ...dc_heroes]);

const newArray= [1,2,3,[4,5,6],[7,8,[9,10,11]],12]

// console.log(newArray.flat(3));       //depth =3 tak sbko main array mein mila do
//console.log(newArray.flat(Infinity); //depth =Infiinity ....apne ap depth dekh lega

score1=100
score2=200
score3=300

// console.log(Array.of(score1, score2, score3));    //in sab variable se ek array banaya jaye


console.log(Array.isArray("KArishma"))

console.log(Array.from("Karishma Sinsinwar"));    //is string ya aur koi variable se array banaya jaye

console.log(Array.from(75656453));
console.log(Array.from((53432356).toString()));
console.log(Array.from((53432356).toString()).map(Number));