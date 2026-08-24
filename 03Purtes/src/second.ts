// interface TakePhoto{
//     cameraMode:string
//     filter:string
//     burst:number
// }
// interface Story{
//     createstory():void
// }
// class instagram implements TakePhoto{
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//         public burst:number 
//     ){

//     }
// }
// class youtube implements TakePhoto,Story{
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//         public burst:number,
//         public short:string
//     ){

//     }
//     createstory(): void {
//         console.log("Story was created");
        
//     }
// }