const user = {
    username:  "tushr",
    price: 999,

    welcome: function(){

        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }

}
// user.welcome()
// user.username = "hitesh"
// user.welcome()

// console.log(this);

// function chai(){
//     let username = "tushr"
//     console.log(this.username);
// }

// const chai = function(){

//     let username = "tushr"
//         console.log(this.username);
// }
const chai = () =>{
        let username = "tushr"
        console.log(this);
}

// chai() 


// const arr = (num1 , num2) =>{
//     return num1 + num2           //explicit
// }


// const arr = (num1 , num2) => num1 + num2  implicit

// const arr = (num1 , num2) => (num1 + num2)  
const arr = (num1 , num2) => ({username : "tushr"})

console.log(arr(555 , 30000));

