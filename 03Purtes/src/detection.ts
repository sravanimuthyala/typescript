//typeguards
function detecttype(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id:string |null){
if(!id) console.log("pls provide id");
id?.toLowerCase();
}

//in operator in type narrowing
interface User{
  name:string,
  email:string
}
interface IsAdimn{
  name:string,
  email:string,
  isAdmin:boolean
}

function isadminac(ac:User|IsAdimn):boolean | void{
  if("isAdmin" in ac){
return ac.isAdmin
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish={swim:()=>void};
type bird={fly:()=>void};


function isFish(pet:Fish|bird):pet is Fish{
  return (pet as Fish).swim!==undefined

}
function getFood(pet:Fish|bird){
  if(isFish(pet)){
    pet
    return "fishfood"
  }else{
    return "birdfood"
  }
}