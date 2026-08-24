abstract class TakePhoto{
    constructor(
        public camermode:string,
        public filter:string
    ){

    }
   abstract getsepia():void
   getReelTime():number{
    //some complex caculation 
    return 8
   }
}
class instagram extends TakePhoto{
    constructor(cameraMode:string,
        filter:string,
        burst:number
    ){
super(cameraMode,filter)
    }
getsepia(): void {
    console.log("Sepia");
    
}
}
const Sravani=new instagram("test","test",3)
Sravani.getReelTime()
