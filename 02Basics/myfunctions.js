function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(str) {
    return str.toUpperCase();
}
function signupuser(name, email, ispaid) {
}
let loginUser = (name, email, ispaid = false) => { };
addTwo(5);
getUpper("sravani");
signupuser("sravani", "sravani@gmail.com", false);
loginUser("sravani", "sravani@gmail.com");
// function getvalue(myval:number):boolean{
//     if(myval>5){
//         return true;
//     }
//     return "200 Ok"
// }
const gethello = (s) => {
    return "";
};
// const heros=["spiderman","ironman","hulk"];
const heros = [1, 2, 3];
heros.map(hero => {
    return `hero is ${hero}`;
});
export {};
