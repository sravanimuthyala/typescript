// class User{
//     public email:string
//     name:string
//     private readonly city:string="hyderabad"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }

// const sravani=new User("srav@s.com","sravani");

class User{
   protected _coursecount=1
    readonly city:string="hyderabad"
    constructor(
        public email:string,
        public name:string,
        // private userId:string
    ){

    }
    private deleteToken(){
        console.log("token deleted")
    }
    get getAppleEmail():string{
      return `apple${this.email}`
    }
    get coursecount():number{
        return this._coursecount
    }
    set coursecount(num){
     if(num<=1){
        throw new Error("course count more than 1")
     }
     this._coursecount=num
    }
}


class SubUser extends User{
    isFamily:boolean=true
    changecoursecount(){
        this._coursecount=4
    }
}
const sravani=new User("srav@s.com","sravani");


