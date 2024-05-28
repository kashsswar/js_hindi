//global scope ke pollution se bachane k liye or function ko jaldi execute karne ki liye hum iife function use karte hain

(function(){                                       //function define
    console.log("DB Connected")
})();             //yahan humein explicitly semi-colon lagana hoga                                        //function execute

( (name)=>{
    console.log(`DB Connected for ${name}`)
})("Karishma")