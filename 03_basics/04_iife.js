// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //  named IIFE
    console.log("DB connected");
})();

((name) => {
    console.log(`${name}`);
})('tushr')


