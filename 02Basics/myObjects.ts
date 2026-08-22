// // const User={
// //     name:"sravani",
// //     email:"sravani@gamil.com",
// //     isActive:true
// // }
// // function createUser({ name, isPaid }) { }
// // let newuser = { name: "sravani", isPaid: true, email: "srav@gmail.com" };//we can see odd behaviour typescript allows extra parameters
// // createUser(newuser);
// // function createCourse() {
// //     return { name: "reactJS", price: 399 };
// // }


// //type alias
// // type User={
// //     name:String,
// //     email:String,
// //     isactive:boolean
// // }
// // function createrUser(user:User):User{
// //     return {name:'',email:'',isactive:true}
// // }

// // createrUser({name:'',email:'',isactive:true})



//  type User={
//     readonly _id:string
//     name:String,
//     email:String,
//     isactive:boolean,
//     creditcardDetails?:number //optional
// }
// let myUser: User={
//     _id:"12345",
//     name:"s",
//     email:"s@gmail.com",
//     isactive:false,
// }

// type cardNumber={
//     cardnumber:string,
// }
// type cardDetails=cardNumber & cardDate & {cvv:number}
// type cardDate={
//     cardDate:string
// }


// // myUser._id="34567" //readonly e can't update
// export{}