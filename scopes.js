let a=30
const b=40
var c=90

if(true){
    let a=10
    const b=20
    var c=30
    console.log("INNER:" ,a,b,c) ///can you see the problem here --whatever is inside the block shouldn't have the outside one...
                                   //sab kuch sahi hai par var ko dekho..andar ki wajah se bahar wala change ho gaya...isliye hum let use karte hain
}

console.log("OUTER:", a,b,c)


function one(){
    const username="Kairshma"
    function two(){
        const website="Offsoar"
        console.log(username);
    }
   // console.log(website)    //yeh two function se bahar declare ni ho skta
   //agar bade function k andar chota function h....tab bade function k andar wale varialbe ko
   //chota wala access kar skta h ...but bada wala chote wale ko nahi
    two()
}
one()


if(true){
    const username="Kairshma"
    if(username==="Kairshma"){
        const website="Offsoar"
        console.log(username);
    }
    //console.log(website)  //yeh execute nahi hoga
}
//console.log(username);         /yeh execute nahi hoga



//++++++++++++++++++++++++++++++interesting -----Hoisting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(9))                  //yahan pr hoisting kam kregi...qki function ki tarah declare hua hai/.......hoisting meaning--function declare hone se pehle call hona
function addone(num){
    return num+1
}


//console.log(addTwo(8));          //yahan nahi hoga qki yahan variable ki tarah call hua h
const addTwo=function(num){
    return num+2
}