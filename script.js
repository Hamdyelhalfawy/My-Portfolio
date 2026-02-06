/*

let price = Number(prompt("Phone Price ....... ?"))  ;
let discount;
if (price >= 2000) {
    discount= 500;
    console.log (` the final price is " ${price - discount} " `);
    alert(`Congratulations.! you have ${discount} `)
}

else if (price > 1000) {
    discount= 200;
    console.log (`the final price is " ${price - discount} " `);
    alert(`Congratulations.! you have ${discount} `)
}

else {
    console.log (` Sorry.! you not have discount , the price is " ${price} " `)
    alert(`Sorry.! you not have discount`)
}

*/

// 1. بنجيب الساعة دلوقتي من جهاز الزائر
let hour = new Date().getHours(); 
let greeting = "";

// 2. الـ Logic (بنشوف الساعة كام)
if (hour < 12) {
    greeting = " ^ ... صباح الخير يا صديقي ^  ";
} 
else if (hour < 18) {
    greeting = "^ مساء الخير ... أتمنى يكون يومك سعيد ^ ";
} 
else {
    greeting = " ^ ... ليلة سعيدة  ^ ";
}

// 3. عرض الرسالة في الموقع
document.getElementById("welcome-msg").innerText = greeting;