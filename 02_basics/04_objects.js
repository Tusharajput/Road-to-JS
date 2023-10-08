// const spotifyUser = new Object()

const spotifyUser = {}

spotifyUser.id = "1234"
spotifyUser.name = "tushr"
spotifyUser.isLoggedIn = false

// console.log(spotifyUser);

const regularUser ={

    email : "tushr@windows.com",
    fullName : {
        userFullName : {
            FirstName : "tushar",
            LastName : "rajput"
        }
    }
}

// console.log(regularUser.fullName.userFullName.FirstName);

const obj1 = {1: "A",2 :"B", }
const obj2 = {3: "A",4 :"D", }
const obj3 = { ...obj1,...obj2}
// console.log(obj3);

const user =[
    {
        id : 1,
        email : "t@google.com"
    },
    {
        id : 1,
        email : "t@google.com"
    },
    {
        id : 1,
        email : "t@google.com"
    },
    {
        id : 1,
        email : "t@google.com"
    }
]

user[1].email
// console.log(spotifyUser);

// console.log(Object.keys(spotifyUser));
// console.log(Object.values(spotifyUser));
// console.log(Object.entries(spotifyUser));

// console.log(spotifyUser.hasOwnProperty('isLogged'));

const course = {
    coursename : "js in hindi",
    price : "999",
    instructor : "Hitesh_sir"
}

// course.instructor

const {instructor: sir} = course //obj re-structure
// console.log(instructor);
console.log(sir);


const navbar =() =>{

}

// {
//     name : "tushr"
//     padhai : "js"
//     price : 'free'
// }