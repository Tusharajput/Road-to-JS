//singleton - made by constructor

//object literals

const mySym  = Symbol("Key1")

const JsUser = {
    name : "tushr",
    age : 18,
    [mySym] : "mykey1",
    email : "mtushr@google.com",
    isLoggedIn : false , 
    lastLoginDays : ["monday" , "sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log (JsUser[mySym]);

JsUser.email = "m.tushr@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "m.tushr@chatgpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());