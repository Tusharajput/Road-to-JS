const Coding = ["js", "rb", "java", "Cpp"]

// Coding.forEach( function (item) {
    // console.log(item);
// } )

// Coding.forEach( (item) => {
//     console.log(item);

// function Prntme(item){
//     console.log(item);
// }

// Coding.forEach(Prntme)

Coding.forEach(  (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding= [
    {
        languagename : "javascript",
        filename : "js"
    },
    {
        languagename : "C++",
        filename : "cpp"

    },
    {
        languagename : "python",
        filename : "py"

    }
]
myCoding.forEach( (item) => {
    console.log(item.languagename);
})
