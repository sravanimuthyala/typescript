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

function getSearchproducts<T>(products: T[]): T |undefined{
    return products[3];
}

const result = getSearchproducts<number>([10, 20, 30, 40]);

console.log(result); // 40

const getMoreSearchproducts=<T>(products:T[]): T|undefined=>{
    return products[3]
}
