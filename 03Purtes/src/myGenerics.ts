const score:Array<number>=[]
const names:Array<string>=[]
function identityone(val:boolean|number):boolean|number{
return val
}
function identitytwo(val:any):any{
    return val;
}
function identitythree<Type>(val:Type):Type{
    return val;
}
function identityfour<T>(val:T):T{
    return val;
}
interface Bottle{
    brand:string,
    type:number
}
identityfour<Bottle>({
    brand: "milton",
    type: 8
})