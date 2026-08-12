function addTwo(num:number):number{
    return num + 2
    // return "hello"
}
function getUpper(str:string){
    return str.toUpperCase()
}
function signupuser(name:string,email:string,ispaid:boolean){

}
let loginUser=(name:string,email:string,ispaid:boolean=false)=>{}
addTwo(5)
getUpper("sravani");
signupuser("sravani","sravani@gmail.com",false);
loginUser("sravani","sravani@gmail.com")

// function getvalue(myval:number):boolean{
//     if(myval>5){
//         return true;
//     }
//     return "200 Ok"
// }

const gethello=(s:string):string=>{
    return ""
}
const heros=["spiderman","ironman","hulk"];
// const heros=[1,2,3];

heros.map((hero):string=>{
    return `hero is ${hero}`
})


function consoleError(err:string):never{
    throw new Error(err);
}
//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

// never also appears when TypeScript determines there’s nothing left in a union.



export{}