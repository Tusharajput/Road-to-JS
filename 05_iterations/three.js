// for of
const greeting =" Hello World !"

for (greet of greeting) {
    // console.log(`every words of ob is ${greet}`);
}

// Maps 

const map = new Map()
map.set('IN', "INDIA")
map.set('US', "UNITED STATES OF AMERICA")
map.set('UAE', "UNITED ARAB EMIRATES")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const MyObj = {
    'game1' : "gta",
    'game2' : "makdaman"
}

for (const [key, value] of MyObj) {
    console.log(key, ':-', value);

}