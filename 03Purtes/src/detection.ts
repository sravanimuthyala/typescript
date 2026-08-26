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