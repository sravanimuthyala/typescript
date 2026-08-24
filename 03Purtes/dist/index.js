"use strict";
// class User{
//     public email:string
//     name:string
//     private readonly city:string="hyderabad"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const sravani=new User("srav@s.com","sravani");
class User {
    email;
    name;
    _coursecount = 1;
    city = "hyderabad";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get coursecount() {
        return this._coursecount;
    }
    set coursecount(num) {
        if (num <= 1) {
            throw new Error("course count more than 1");
        }
        this._coursecount = num;
    }
}
const sravani = new User("srav@s.com", "sravani");
//# sourceMappingURL=index.js.map